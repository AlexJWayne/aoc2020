import { describeDay } from "../spec-helper"
import { countCombinations, parseCombinations, solve1, solve2 } from "."

describeDay(
  10,
  {
    example: [solve1, 220],
    puzzle: [solve1, 2240],
  },
  {
    // example: [solve2, 19208],
    // puzzle: [solve2, 1],
  },
  () => {
    // describe("parseCobinations", () => {
    //   it("makes a tree of possibilities", () => {
    //     expect(parseCombinations([1, 5, 9])).toEqual({
    //       0: [1],
    //     })
    //     expect(parseCombinations([1, 4, 5, 8])).toEqual({
    //       0: [1],
    //       1: [4],
    //       4: [5],
    //       5: [8],
    //     })
    //     expect(parseCombinations([1, 2, 4, 7])).toEqual({
    //       0: [1, 2],
    //       1: [2, 4],
    //       2: [4],
    //       4: [7],
    //     })
    //   })
    // })
    // describe("countCombinations", () => {
    //   it("counts no solutuions", () => {
    //     expect(countCombinations({ 0: [1] })).toEqual(0)
    //   })
    //   it("counts a single solutuion", () => {
    //     expect(
    //       countCombinations(
    //         {
    //           0: [1],
    //           1: [4],
    //           4: [5],
    //           5: [8],
    //         },
    //         8,
    //       ),
    //     ).toEqual(1)
    //   })
    //   it("counts multiple solutuions", () => {
    //     expect(countCombinations([0, 4, 5, 6, 7, 10, 13, 14, 15])).toEqual(8)
    //   })
    // })
  },
)
