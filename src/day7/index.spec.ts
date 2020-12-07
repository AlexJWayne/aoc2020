import { describeDay } from "../spec-helper"
import { parseCountedBag, parseLines, search, solve1, solve2 } from "."

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
    describe("search", () => {
      it("finds all bags that contain a bag directly", () => {
        expect(
          search(
            {
              a: { b: 1 },
            },
            "b",
          ),
        ).toEqual(new Set(["a"]))
      })
      it("finds all bags that contain a bag directly and its parents bags", () => {
        expect(
          search(
            {
              a: { b: 1 },
              b: { c: 2 },
              c: { d: 3 },
            },
            "d",
          ),
        ).toEqual(new Set(["a", "b", "c"]))
      })
    })

    describe("parseCountedBag", () => {
      it("parses a bag and count description", () => {
        expect(parseCountedBag("1 light pinkish blue bag")).toEqual({
          "light pinkish blue": 1,
        })
        expect(parseCountedBag("4 green bags")).toEqual({ green: 4 })
      })
    })

    describe("parseLines", () => {
      it("parses a bag that contains no other bags", () => {
        expect(parseLines(["faded blue bags contain no other bags."])).toEqual({
          "faded blue": {},
        })
      })

      it("parses a bag that contains one other bag color", () => {
        expect(
          parseLines(["bright white bags contain 1 shiny gold bag."]),
        ).toEqual({
          "bright white": { "shiny gold": 1 },
        })
      })

      it("parses a bag that contains many other bag color", () => {
        expect(
          parseLines([
            "muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.",
          ]),
        ).toEqual({
          "muted yellow": {
            "shiny gold": 2,
            "faded blue": 9,
          },
        })
      })
    })
  },
)
