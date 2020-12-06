import { readInput } from "../common"

import { countTrees, solve1, solve2 } from "."

const sample = `
..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#
`.trim()

describe("day 3", () => {
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

  describe("part 1", () => {
    it("finds valid sample passwords", () => {
      expect(solve1(sample)).toEqual(7)
    })

    it("finds the puzzle answer", () => {
      expect(solve1(readInput(__dirname))).toEqual(176)
    })
  })

  describe("part 2", () => {
    it("finds valid sample passwords", () => {
      expect(solve2(sample)).toEqual(336)
    })

    it("finds the puzzle answer", () => {
      expect(solve2(readInput(__dirname))).toEqual(5872458240)
    })
  })
})
