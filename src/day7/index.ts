interface Rules {
  // parent bag color
  [color: string]: {
    // contents colors and their counts
    [color: string]: number
  }
}

// "2 muted yellow bags" => { ['muted yellow']: 2 }
export function parseCountedBag(
  bagString: string,
): { [color: string]: number } {
  const color = bagString.replace(/^\d+ /, "").replace(/ bags?$/, "")
  const count = parseInt(bagString, 10)
  return { [color]: count }
}

export function parseLines(lines: string[]): Rules {
  const result: Rules = {}

  for (const line of lines) {
    const [color, contentsString] = line
      .replace(/\.$/, "") // Remove ending period.
      .split(" bags contain ") // Split the parent bag and bag contents.

    let contents: { [color: string]: number } = {}
    if (contentsString !== "no other bags") {
      for (const bagString of contentsString.split(", ")) {
        contents = { ...contents, ...parseCountedBag(bagString) }
      }
    }
    result[color] = contents
  }

  return result
}

export function search(rules: Rules, searchColor: string): Set<string> {
  const colors: Set<string> = new Set()

  for (const [bagColor, contents] of Object.entries(rules)) {
    // Check if this can contain other bags.
    if (contents) {
      // Check if this bag contains the requested bag.
      if (contents[searchColor]) {
        // Add this bag as an allowed container.
        colors.add(bagColor)
        // Add this bags parents as allowed containers.
        search(rules, bagColor).forEach(parent => colors.add(parent))
      }
    }
  }

  return colors
}

export function solve1(input: string): number {
  const lines = parseLines(input.split("\n"))
  return search(lines, "shiny gold").size
}

export function solve2(input: string): number {
  return -1
}
