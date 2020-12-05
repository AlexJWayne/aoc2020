/*
Your flight departs in a few days from the coastal airport; the easiest way down to the coast from here is via toboggan.

The shopkeeper at the North Pole Toboggan Rental Shop is having a bad day. "Something's wrong with our computers; we can't log in!" You ask if you can take a look.

Their password database seems to be a little corrupted: some of the passwords wouldn't have been allowed by the Official Toboggan Corporate Policy that was in effect when they were chosen.

To try to debug the problem, they have created a list (your puzzle input) of passwords (according to the corrupted database) and the corporate policy when that password was set.

For example, suppose you have the following list:

1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc

Each line gives the password policy and then the password. The password policy indicates the lowest and highest number of times a given letter must appear for the password to be valid. For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times.

In the above example, 2 passwords are valid. The middle password, cdefg, is not; it contains no instances of b, but needs at least 1. The first and third passwords are valid: they contain one a or nine c, both within the limits of their respective policies.

How many passwords are valid according to their policies?
*/

import fs from "fs"

type Line = [number, number, string, string]

function getInput(): Line[] {
  return fs
    .readFileSync(__dirname + "/input.txt")
    .toString()
    .split("\n")
    .map(parseLine)
}

function parseLine(line: string): Line {
  const [numbers, letterWithColon, password] = line.split(" ")
  const [n1, n2] = numbers.split("-").map(str => parseInt(str, 10))
  const letter = letterWithColon.substr(0, 1)
  return [n1, n2, letter, password]
}

function validateMinMax([min, max, letter, password]: Line): boolean {
  const letterCount = password.split("").filter(chr => chr === letter).length
  return min <= letterCount && letterCount <= max
}

function validateCharacterLocations([n1, n2, letter, password]: Line): boolean {
  const check1 = password[n1 - 1] === letter
  const check2 = password[n2 - 1] === letter
  return check1 !== check2
}

function solve(): number {
  return getInput()
    .map(validateMinMax)
    .filter(result => result).length
}

function solve2(): number {
  return getInput()
    .map(validateCharacterLocations)
    .filter(result => result).length
}

console.log(solve())
console.log(solve2())
