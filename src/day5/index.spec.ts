import { describeDay, ignore } from "../spec-helper"
import { solve1, solve2, toInt } from "."

describeDay(
  5,
  {
    example: [solve1, 820],
    puzzle: [solve1, 953],
  },
  {
    example: ignore,
    puzzle: [solve2, 615],
  },
  () => {
    describe("toInt", () => {
      it("parses FBLR as binary", () => {
        expect(toInt("FFFBLR")).toEqual(5)
      })
    })
  },
)
