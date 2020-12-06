import fs from "fs"

interface Passport {
  byr: string // (Birth Year)
  iyr: string // (Issue Year)
  eyr: string // (Expiration Year)
  hgt: string // (Height)
  hcl: string // (Hair Color)
  ecl: string // (Eye Color)
  pid: string // (Passport ID)
  cid?: string // (Country ID)
}

function getInput(): string[] {
  return fs
    .readFileSync(__dirname + "/input.txt")
    .toString()
    .split("\n\n")
}

function parse(passportStr: string): Partial<Passport> {
  const pairs = passportStr.split(/[\n\s]/g).map(pair => pair.split(":"))
  const result: Partial<Passport> = {}
  for (const pair of pairs) {
    const key = pair[0] as keyof Passport
    result[key] = pair[1]
  }
  return result
}

function isCompletePassport(passport: Partial<Passport>): passport is Passport {
  const requiredFields: (keyof Passport)[] = [
    "byr",
    "iyr",
    "eyr",
    "hgt",
    "hcl",
    "ecl",
    "pid",
  ]
  for (const key of requiredFields) {
    if (!passport[key]) return false
  }
  return true
}

function validateNumber(
  value: string,
  min: number,
  max: number,
  length?: number,
): boolean {
  if (length && value.length !== length) return false
  const year = parseInt(value, 10)
  return min <= year && year <= max
}

const validators = {
  byr(value: string): boolean {
    return validateNumber(value, 1920, 2002, 4)
  },

  iyr(value: string): boolean {
    return validateNumber(value, 2010, 2020, 4)
  },

  eyr(value: string): boolean {
    return validateNumber(value, 2020, 2030, 4)
  },

  hgt(value: string): boolean {
    const match = value.match(/^(\d+)(in|cm)$/)
    if (!match) return false

    const amount = match?.[1]
    const units = match?.[2]

    if (units === "cm") return validateNumber(amount, 150, 193)
    if (units === "in") return validateNumber(amount, 59, 76)
    return false
  },

  hcl(value: string): boolean {
    return /^#[0-9a-f]{6}$/.test(value)
  },

  ecl(value: string): boolean {
    return ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(value)
  },

  pid(value: string): boolean {
    return /^[0-9]{9}$/.test(value)
  },

  cid(value: string): boolean {
    return true
  },
}

function isValidPassport(passport: Passport): boolean {
  for (const key of Object.keys(passport) as (keyof Passport)[]) {
    const validator = validators[key]
    if (!validator(passport[key] ?? "")) return false
  }
  return true
}

function solve1(): number {
  const passportStrings = getInput()
  return passportStrings //
    .map(parse)
    .filter(isCompletePassport).length
}

function solve2(): number {
  const passportStrings = getInput()
  return passportStrings
    .map(parse)
    .filter(isCompletePassport)
    .filter(isValidPassport).length
}

console.log(solve1())
console.log(solve2())
