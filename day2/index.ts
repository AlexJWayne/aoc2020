import { readInput } from "../common"

type Line = [number, number, string, string]

function parseInput(input: string): Line[] {
  return input.split("\n").map(parseLine)
}

export function parseLine(line: string): Line {
  const [numbers, letterWithColon, password] = line.split(" ")
  const [n1, n2] = numbers.split("-").map(str => parseInt(str, 10))
  const letter = letterWithColon.substr(0, 1)
  return [n1, n2, letter, password]
}

export function validateMinMax([min, max, letter, password]: Line): boolean {
  const letterCount = password.split("").filter(chr => chr === letter).length
  return min <= letterCount && letterCount <= max
}

export function validateCharacterLocations([
  n1,
  n2,
  letter,
  password,
]: Line): boolean {
  const check1 = password[n1 - 1] === letter
  const check2 = password[n2 - 1] === letter
  return check1 !== check2
}

export function solve1(input: string): number {
  return parseInput(input)
    .map(validateMinMax)
    .filter(result => result).length
}

export function solve2(input: string): number {
  return parseInput(input)
    .map(validateCharacterLocations)
    .filter(result => result).length
}

if (require.main === module) {
  console.log(solve1(readInput(__dirname)))
  console.log(solve2(readInput(__dirname)))
}
