import { describeDay } from "../spec-helper"
import { countTrees, solve1, solve2 } from "."

describeDay(
  3,
  {
    solve: solve1,
    example: 7,
    puzzle: 176,
  },
  {
    solve: solve2,
    example: 336,
    puzzle: 5872458240,
  },
  () => {
    describe("countTrees", () => {
      it("counts the trees as you progress down the mountain", () => {
        const simpleMap = `
.#.
#.#
#.#
`.trim()

        expect(countTrees(simpleMap, 1, 1)).toEqual(1)
        expect(countTrees(simpleMap, 0, 1)).toEqual(2)
        expect(countTrees(simpleMap, 1, 2)).toEqual(0)
      })
    })
  },
)
