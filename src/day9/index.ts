/** Returns true when a number is the sum of any two items in an array of numbers */
export function isDigitSumOfOtherDigits(
  num: number,
  numbers: number[],
): boolean {
  for (const [i1, n1] of numbers.entries()) {
    for (const [i2, n2] of numbers.entries()) {
      if (i1 !== i2 && n1 + n2 === num) return true
    }
  }

  return false
}

/** Returns the first number in `numbers` that is not a sum of of two of the previous `preambleCount` numbers. */
export function findFishyNumber(
  preambleCount: number,
  numbers: number[],
): number {
  for (let i = preambleCount; i < numbers.length; i++) {
    if (
      !isDigitSumOfOtherDigits(numbers[i], numbers.slice(i - preambleCount, i))
    ) {
      return numbers[i]
    }
  }

  throw new Error("No fishy digits!")
}

/** Finds the set of contiguous `numbers` that sum up to `sum` */
export function findContiguousSum(sum: number, numbers: number[]): number[] {
  let total = 0

  for (let i = 0; i < numbers.length; i++) {
    total = numbers[i]

    for (let j = i + 1; j < numbers.length || total > sum; j++) {
      total += numbers[j]

      if (total === sum) {
        return numbers.slice(i, j + 1)
      }
    }
  }

  throw new Error(`No digits sum up to: ${sum}`)
}

/** Solve puzzle, part 1 */
export function solve1(preambleCount: number, input: string): number {
  const numbers = input.split("\n").map(n => parseInt(n, 10))
  return findFishyNumber(preambleCount, numbers)
}

/** Solve puzzle, part 2 */
export function solve2(preambleCount: number, input: string): number {
  const numbers = input.split("\n").map(n => parseInt(n, 10))
  const weakness = findFishyNumber(preambleCount, numbers)
  const sequence = findContiguousSum(weakness, numbers)
  return Math.min(...sequence) + Math.max(...sequence)
}