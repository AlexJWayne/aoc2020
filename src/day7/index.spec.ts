import { describeDay } from "../spec-helper"
import { parseCountedBag, parseLine, solve1, solve2 } from "."

describeDay(
  7,
  {
    solve: solve1,
    example: 4,
    puzzle: 229,
  },
  {
    // solve: solve2,
    // example: 0,
    // puzzle: 0,
  },
  () => {
    describe("parseCountedBag", () => {
      it("parses a bag and count description", () => {
        expect(parseCountedBag("1 light pinkish blue bag")).toEqual({
          count: 1,
          color: "light pinkish blue",
        })
        expect(parseCountedBag("4 green bags")).toEqual({
          count: 4,
          color: "green",
        })
      })
    })

    describe("parseLine", () => {
      it("parses a bag that contains no other bags", () => {
        expect(parseLine("faded blue bags contain no other bags.")).toEqual({
          color: "faded blue",
          contents: null,
        })
      })

      it("parses a bag that contains one other bag color", () => {
        expect(
          parseLine("bright white bags contain 1 shiny gold bag."),
        ).toEqual({
          color: "bright white",
          contents: [{ count: 1, color: "shiny gold" }],
        })
      })

      it("parses a bag that contains many other bag color", () => {
        expect(
          parseLine(
            "muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.",
          ),
        ).toEqual({
          color: "muted yellow",
          contents: [
            { count: 2, color: "shiny gold" },
            { count: 9, color: "faded blue" },
          ],
        })
      })
    })
  },
)
