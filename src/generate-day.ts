import fs from "fs"
import path from "path"
import chalk from "chalk"

function genSpec(day: number): string {
  return `
import { describeDay } from "../spec-helper"
import { solve1, solve2 } from "."

describeDay(
  ${day},
  {
    // solve: solve1,
    // example: 0,
    // puzzle: 0,
  },
  {
    // solve: solve2,
    // example: 0,
    // puzzle: 0,
  },
  () => {
    //...
  },
)
`.trim()
}

function genImpl(): string {
  return `
export function solve1(input: string): number {
  return -1
}

export function solve2(input: string): number {
  return -1
}
`.trim()
}

function getNextDay() {
  const existingDays = fs
    .readdirSync(path.join(__dirname))
    .filter(name => /^day[\d]+$/.test(name))
    .map(name => name.replace("day", ""))
    .map(strNum => parseInt(strNum, 10))

  return Math.max(...existingDays) + 1
}

function write(
  day: number,
  content: string | ((day: number) => string),
  filename: string,
) {
  if (typeof content === "function") content = content(day)
  const filePath = path.join(__dirname, `day${day}`, filename)
  fs.writeFileSync(filePath, content)
  console.log(chalk.green(`    ${filename}`))
}

function logDir(dir: string): void {
  console.log(`${chalk.green(dir)}${chalk.gray("/")}`)
}

// Generate directory structure.
const day = getNextDay()

console.log("Adding Day:", chalk.greenBright(day))
logDir("src")
logDir(`  day${day}`)

fs.mkdirSync(path.join(__dirname, `day${day}`))
write(day, genImpl, "index.ts")
write(day, genSpec, "index.spec.ts")
write(day, "", "input.txt")
write(day, "", "input.example.txt")
