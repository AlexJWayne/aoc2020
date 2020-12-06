import { readInput } from "../common"

export function countTrees(input: string, right: number, down: number): number {
  const grid = input.split("\n")

  let treeCount = 0
  let x = 0
  let y = 0

  while (true) {
    const row = grid[y]
    if (!row) break

    const chr = row[x % row.length]
    if (chr === "#") treeCount++

    x += right
    y += down
  }

  return treeCount
}

export function solve1(input: string): number {
  return countTrees(input, 3, 1)
}

export function solve2(input: string): number {
  return (
    countTrees(input, 1, 1) *
    countTrees(input, 3, 1) *
    countTrees(input, 5, 1) *
    countTrees(input, 7, 1) *
    countTrees(input, 1, 2)
  )
}

if (require.main === module) {
  console.log(solve1(readInput(__dirname)))
  console.log(solve2(readInput(__dirname)))
}
