import { readInput } from "../common"

function parseInput(input: string): number[] {
  return input.split("\n").map(str => parseInt(str, 10))
}

export function findSumProduct2(numbers: number[], sum: number): number {
  for (const a of numbers) {
    for (const b of numbers) {
      if (a + b === sum) return a * b
    }
  }
  throw new Error(`No 2 numbers had a sum of ${sum}`)
}

export function findSumProduct3(numbers: number[], sum: number): number {
  for (const a of numbers) {
    for (const b of numbers) {
      for (const c of numbers) {
        if (a + b + c === sum) {
          return a * b * c
        }
      }
    }
  }
  throw new Error(`No 2 numbers had a sum of ${sum}`)
}

export function solve1(input: string): number {
  const numbers = parseInput(input)
  return findSumProduct2(numbers, 2020)
}

export function solve2(input: string): number {
  const numbers = parseInput(input)
  return findSumProduct3(numbers, 2020)
}

if (require.main === module) {
  const input = readInput(__dirname)
  console.log(solve1(input))
  console.log(solve2(input))
}
