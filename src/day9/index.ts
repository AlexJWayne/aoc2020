/**
 * Returns true when a number is the sum of any two items in an array of numbers
 * @param sum The sum to search for.
 * @param numbers The array of search in.
 */
export function isDigitSumOfOtherDigits(
  sum: number,
  numbers: number[],
): boolean {
  // For each pair of different numbers...
  for (const [i1, n1] of numbers.entries()) {
    for (const [i2, n2] of numbers.entries()) {
      // Check if this pair has the desired sum.
      if (i1 !== i2 && n1 + n2 === sum) return true
    }
  }

  return false
}

/**
 * Returns the first number in `numbers` that is not a sum of of two of the previous `preambleCount` numbers.
 * @param preambleCount The number of digits before the current digit to search.
 * @param numbers The array of numbers to search.
 */
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

/**
 * Finds the set of contiguous `numbers` that sum up to `sum`
 * @param sum The sum to search for.
 * @param numbers The array of numbers to search.
 */
export function findContiguousSum(sum: number, numbers: number[]): number[] {
  let start = 0 // start of search range
  let end = 0 // end of search range
  let total = 0 // sum of search range

  while (total !== sum || end - start <= 1) {
    if (total < sum) {
      // Add numbers from the end when total is under the sum.
      total += numbers[end]
      end++
    } else {
      // Subtract numbers from the start when total is over the sum.
      total -= numbers[start]
      start++
    }

    // End of input reach, bail out.
    if (end > numbers.length) throw new Error(`No digits sum up to: ${sum}`)
  }

  return numbers.slice(start, end)
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
