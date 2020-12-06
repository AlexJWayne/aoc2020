import { readInput } from "../common"

import { findSumProduct2, findSumProduct3, solve1, solve2 } from "."

const sample = `
1721
979
366
299
675
1456
`.trim()

describe("day1", () => {
  describe("findSumProduct2", () => {
    it("returns the product of two integers that sum up to a number", () => {
      expect(findSumProduct2([1, 2, 3, 4, 5], 9)).toEqual(4 * 5)
    })

    it("throws when no two numbers sum up the number", () => {
      expect(() => findSumProduct2([1, 2, 3, 4, 5], 100)).toThrow()
    })
  })

  describe("findSumProduct3", () => {
    it("returns the product of three integers that sum up to a number", () => {
      expect(findSumProduct3([1, 3, 5, 7, 20], 32)).toEqual(5 * 7 * 20)
    })

    it("throws when no three numbers sum up the number", () => {
      expect(() => findSumProduct3([1, 2, 3, 4, 5], 100)).toThrow()
    })
  })

  describe("part 1", () => {
    it("finds the product of the two numbers that add up to 2020", () => {
      expect(solve1(sample)).toEqual(514579)
    })

    it("finds the puzzle answer", () => {
      expect(solve1(readInput(__dirname))).toEqual(158916)
    })
  })

  describe("part 2", () => {
    it("finds the product of the three numbers that add up to 2020", () => {
      expect(solve1(sample)).toEqual(514579)
    })

    it("finds the puzzle answer", () => {
      expect(solve2(readInput(__dirname))).toEqual(165795564)
    })
  })
})
