interface Rules {
  // parent bag color
  [color: string]: {
    // contents colors and their counts
    [color: string]: number
  }
}

/**
 * Parse a color and quantity of bags into an object with the color as the key,
 * and quantity as the value.
 *
 *     parseCountedBag("2 muted yellow bags") //=> { ['muted yellow']: 2 }
 *
 * @param bagString The raw bag description in `${color}
 */
export function parseCountedBag(
  bagString: string,
): { [color: string]: number } {
  const color = bagString.replace(/^\d+ /, "").replace(/ bags?$/, "")
  const count = parseInt(bagString, 10)
  return { [color]: count }
}

/**
 * Parse the rules of the bag nesting.
 * @param lines A string array of all nesting rules.
 */
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

/**
 * Find all the bags that a bag could potentially be nested inside of.
 * @param rules The list of rules that define bag nesting.
 * @param searchColor The bag color you are searching for.
 */
export function search(rules: Rules, searchColor: string): Set<string> {
  const colors: Set<string> = new Set()

  for (const [bagColor, contents] of Object.entries(rules)) {
    // Check if this bag contains the requested bag.
    if (contents[searchColor]) {
      // Add this bag as an allowed container.
      colors.add(bagColor)
      // Add this bags parents as allowed containers.
      search(rules, bagColor).forEach(parent => colors.add(parent))
    }
  }

  return colors
}

/**
 * Counts the total number of bags you would have if you had a bag of a
 * specific color.
 * @param rules The list of rules that define bag nesting.
 * @param parentColor The bag color to count all bags inside of.
 */
export function count(rules: Rules, parentColor: string): number {
  const bag = rules[parentColor]

  let total = 1
  for (const [bagColor, qty] of Object.entries(bag)) {
    total += qty * count(rules, bagColor)
  }
  return total
}

/** Solve part 1. */
export function solve1(input: string): number {
  const lines = parseLines(input.split("\n"))
  return search(lines, "shiny gold").size
}

/** Solve part 2. */
export function solve2(input: string): number {
  const lines = parseLines(input.split("\n"))
  return count(lines, "shiny gold") - 1
}
