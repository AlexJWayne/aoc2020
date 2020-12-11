import { count } from "console"

/** returns a count of the number of time voltage was scaled up, and by how much each time. */
function countJoltageGaps(adapters: number[]): { [joltage: number]: number } {
  const result: { [joltage: number]: number } = {}

  let currentJoltage = 0
  for (const adapter of adapters) {
    const difference = adapter - currentJoltage
    currentJoltage = adapter

    if (!result[difference]) result[difference] = 0
    result[difference]++
  }

  // Jump to my device
  result[3]++

  return result
}

export function countCombinations(adapters: number[]): number {
  adapters = [0, ...adapters]
  for (let i = 0; i < adapters.length; i++) {}

  return count
}

export function parseCombinations(
  adapters: number[],
): { [adapter: number]: number[] } {
  adapters = [0, ...adapters]
  const possibleAdapters: { [adapter: number]: number[] } = {}

  for (let i = 0; i < adapters.length; i++) {
    const current = adapters[i]
    for (let j = i + 1; adapters[j] - current <= 3; j++) {
      if (!possibleAdapters[current]) possibleAdapters[current] = []

      possibleAdapters[current].push(adapters[j])
    }
  }

  return possibleAdapters
}

/** Solve puzzle, part 1 */
export function solve1(input: string): number {
  const adapters = input
    .split("\n")
    .map(n => parseInt(n, 10))
    .sort((a, b) => (a > b ? 1 : -1))

  const gaps = countJoltageGaps(adapters)
  return gaps[1] * gaps[3]
}

/** Solve puzzle, part 2 */
export function solve2(input: string): number {
  const adapters = input
    .split("\n")
    .map(n => parseInt(n, 10))
    .sort((a, b) => (a > b ? 1 : -1))

  // const combinations = parseCombinations(adapters)

  return countCombinations(adapters)
}
