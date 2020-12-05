import fs from "fs"

function getInput(): string[] {
  return fs
    .readFileSync(__dirname + "/input.txt")
    .toString()
    .split("\n")
}

function toInt(value: string): number {
  return parseInt(value.replace(/[FL]/g, "0").replace(/[BR]/g, "1"), 2)
}

function solve1(): number {
  return Math.max(...getInput().map(toInt))
}

function solve2(): number {
  const seatIds = getInput().map(toInt)
  const min = Math.min(...seatIds)
  const max = Math.max(...seatIds)

  for (let i = min + 1; i < max; i++) {
    if (!seatIds.includes(i)) return i
  }

  throw new Error("No seat available!")
}

console.log(solve1())
console.log(solve2())
