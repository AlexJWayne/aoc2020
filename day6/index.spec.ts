import { readInput } from "../common"

import { countAnd, countOr, solve1, solve2 } from "."

const sample = `
abc

a
b
c

ab
ac

a
a
a
a

b
`.trim()

describe("day 6", () => {
  describe("countOr", () => {
    it("counts the number of unique yes answers", () => {
      expect(countOr("abc")).toEqual(3)
      expect(countOr("abc\nbcd")).toEqual(4)
    })

    it("counts the number of common yes answers", () => {
      expect(countAnd("abc")).toEqual(3)
      expect(countAnd("abc\nbcd")).toEqual(2)
      expect(countAnd("abc\ndef")).toEqual(0)
    })
  })

  describe("part 1", () => {
    it("find the example answer", () => {
      expect(solve1(sample)).toEqual(11)
    })

    it("finds the puzzle answer", () => {
      expect(solve1(readInput(__dirname))).toEqual(6532)
    })
  })

  describe("part 2", () => {
    it("finds the example answer", () => {
      expect(solve2(sample)).toEqual(6)
    })

    it("finds the puzzle answer", () => {
      expect(solve2(readInput(__dirname))).toEqual(3427)
    })
  })
})
