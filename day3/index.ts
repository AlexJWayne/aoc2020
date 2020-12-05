import fs from "fs"

function getInput(): string[] {
  return fs
    .readFileSync(__dirname + "/input.txt")
    .toString()
    .split("\n")
}

function countTrees(right: number, down: number): number {
  let treeCount = 0
  let x = 0
  let y = 0

  const grid = getInput()
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

function solve1(): number {
  return countTrees(3, 1)
}

function solve2(): number {
  return (
    countTrees(1, 1) *
    countTrees(3, 1) *
    countTrees(5, 1) *
    countTrees(7, 1) *
    countTrees(1, 2)
  )
}

console.log(solve1())
console.log(solve2())
