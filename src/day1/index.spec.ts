import { describeDay } from "../spec-helper"

import { findSumProduct2, findSumProduct3, solve1, solve2 } from "."

describeDay(
  1,
  {
    example: [solve1, 514579],
    puzzle: [solve1, 158916],
  },
  {
    example: [solve2, 241861950],
    puzzle: [solve2, 165795564],
  },
  () => {
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
  },
)
