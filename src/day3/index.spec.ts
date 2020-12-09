import { describeDay } from "../spec-helper"
import { countTrees, solve1, solve2 } from "."

describeDay(
  3,
  {
    example: [solve1, 7],
    puzzle: [solve1, 176],
  },
  {
    example: [solve2, 336],
    puzzle: [solve2, 5872458240],
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
