import { describeDay } from "../spec-helper"
import {
  findContiguousSum,
  findFishyNumber,
  isDigitSumOfOtherDigits,
  solve1,
  solve2,
} from "."

describeDay(
  9,
  {
    example: [input => solve1(5, input), 127],
    puzzle: [input => solve1(25, input), 731031916],
  },
  {
    example: [input => solve2(5, input), 62],
    puzzle: [input => solve2(25, input), 93396727],
  },
  () => {
    describe("isDigitSumOfOtherDigits", () => {
      it("returns true when a number is the sum of any two items in an array of numbers", () => {
        expect(isDigitSumOfOtherDigits(5, [1, 3, 5, 2])).toBeTruthy() // 3 and 2
      })

      it("returns false when a number is not the sum of any two items in an array of numbers", () => {
        expect(isDigitSumOfOtherDigits(5, [1, 3, 5, 8])).toBeFalsy()
      })
    })

    describe("findFishyNumber", () => {
      it("finds the first number that is not of sum of the previous numbers", () => {
        expect(findFishyNumber(3, [1, 2, 3, 3, 6, 6, 9, 2, 11])).toEqual(2)
      })

      it("throws when no fishy number is found", () => {
        expect(() => findFishyNumber(3, [1, 2, 3, 3, 6, 6, 9])).toThrow()
      })
    })

    describe("findContiguousSum", () => {
      it("finds the set of contiguous numbers that sum up to a number", () => {
        expect(findContiguousSum(10, [1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4]) // start
        expect(findContiguousSum(11, [1, 2, 3, 4, 5, 6])).toEqual([5, 6]) // end
        expect(findContiguousSum(12, [1, 2, 3, 4, 5, 6])).toEqual([3, 4, 5]) // middle
      })
    })
  },
)
