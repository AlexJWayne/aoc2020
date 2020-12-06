import { readInput } from "../common"

function getUniqueAnswers(group: string): Set<string> {
  return new Set(group.replace(/[\W]/g, "").split(""))
}

export function countOr(group: string): number {
  return getUniqueAnswers(group).size
}

export function countAnd(group: string): number {
  const uniqueAnswers = Array.from(getUniqueAnswers(group))
  const people = group.split("\n")

  const sharedAnswers = uniqueAnswers.filter(uniqueAnswer =>
    people.every(answer => answer.includes(uniqueAnswer)),
  )

  return sharedAnswers.length
}

export function solve1(input: string): number {
  const groups = input.split("\n\n")
  return groups.reduce((total, group) => total + countOr(group), 0)
}

export function solve2(input: string): number {
  const groups = input.split("\n\n")
  return groups.reduce((total, group) => total + countAnd(group), 0)
}

if (require.main === module) {
  console.log(solve1(readInput(__dirname)))
  console.log(solve2(readInput(__dirname)))
}
