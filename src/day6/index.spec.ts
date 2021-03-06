import { describeDay } from "../spec-helper"
import { countAnd, countOr, solve1, solve2 } from "."

describeDay(
  6,
  {
    example: [solve1, 11],
    puzzle: [solve1, 6532],
  },
  {
    example: [solve2, 6],
    puzzle: [solve2, 3427],
  },
  () => {
    describe("countOr", () => {
      it("counts the number of unique yes answers", () => {
        expect(countOr("abc")).toEqual(3)
        expect(countOr("abc\nbcd")).toEqual(4)
      })
    })

    describe("countAnd", () => {
      it("counts the number of common yes answers", () => {
        expect(countAnd("abc")).toEqual(3)
        expect(countAnd("abc\nbcd")).toEqual(2)
        expect(countAnd("abc\ndef")).toEqual(0)
      })
    })
  },
)
