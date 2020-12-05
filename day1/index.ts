// Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

import fs from "fs"

function getInput(): number[] {
  return fs
    .readFileSync(__dirname + "/input.txt")
    .toString()
    .split("\n")
    .map(str => parseInt(str, 10))
}

function solve(): number | undefined {
  const numbers = getInput()
  for (const a of numbers) {
    for (const b of numbers) {
      if (a + b === 2020) return a * b
    }
  }
}

function solve2(): number | undefined {
  const numbers = getInput()

  for (const a of numbers) {
    for (const b of numbers) {
      for (const c of numbers) {
        if (a + b + c === 2020) return a * b * c
      }
    }
  }
}

console.log(solve())
console.log(solve2())
