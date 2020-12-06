import { describeDay } from "../spec-helper"

import { solve1, solve2, toInt } from "."

describeDay(
  5,
  {
    solve: solve1,
    example: 820,
    puzzle: 953,
  },
  {
    solve: solve2,
    puzzle: 615,
  },
  () => {
    describe("toInt", () => {
      it("parses FBLR as binary", () => {
        expect(toInt("FFFBLR")).toEqual(11)
      })
    })
  },
)
