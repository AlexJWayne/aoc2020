interface Rule {
  color: string
  contents: BagCount[] | null
}

interface BagCount {
  count: number
  color: string
}

// "2 muted yellow bags" => { color: 'muted yellow', count: 2 }
export function parseCountedBag(bagString: string): BagCount {
  return {
    count: parseInt(bagString, 10),
    color: bagString.replace(/^\d+ /, "").replace(/ bags?$/, ""),
  }
}

export function parseLine(line: string): Rule {
  const [color, contentsString] = line
    .replace(/\.$/, "") // Remove ending period.
    .split(" bags contain ") // Split the parent bag and bag contents.

  let contents: BagCount[] | null = null
  if (contentsString !== "no other bags") {
    contents = contentsString.split(", ").map(parseCountedBag)
  }

  return {
    color,
    contents,
  }
}

function search(rules: Rule[], color: string): Set<string> {
  const colors: Set<string> = new Set()

  for (const rule of rules) {
    // Check if this can contain other bags.
    if (rule.contents) {
      // Check if this bag contains the requested bag.
      if (rule.contents.find(bag => bag.color === color)) {
        // Add this bag as a possible container.
        colors.add(rule.color)
        // Add this bag's parents as possible containers
        search(rules, rule.color).forEach(parent => colors.add(parent))
      }
    }
  }

  return colors
}

export function solve1(input: string): number {
  const lines = input.split("\n").map(parseLine)
  return search(lines, "shiny gold").size
}

export function solve2(input: string): number {
  return -1
}
