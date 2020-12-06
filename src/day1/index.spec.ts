import { describeDay } from "../spec-helper"

import { findSumProduct2, findSumProduct3, solve1, solve2 } from "."

describeDay(
  1,
  {
    solve: solve1,
    example: 514579,
    puzzle: 158916,
  },
  {
    solve: solve2,
    example: 241861950,
    puzzle: 165795564,
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
