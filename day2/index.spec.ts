import { readInput } from "../common"
import {
  parseLine,
  solve1,
  solve2,
  validateCharacterLocations,
  validateMinMax,
} from "../day2"

const sample = `
1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc
`.trim()

describe("day2", () => {
  describe("parseLine", () => {
    it("parses a line of pasword requirements and a password into a [number, number, string, string] tuple", () => {
      expect(parseLine("1-3 a: abcde")).toEqual([1, 3, "a", "abcde"])
    })
  })

  describe("validateMinMax", () => {
    it("ensures a character appears a certain number of times", () => {
      expect(validateMinMax([1, 3, "a", "qwerty"])).toBeFalsy()
      expect(validateMinMax([1, 3, "a", "asdf"])).toBeTruthy()
      expect(validateMinMax([1, 3, "a", "aasdf"])).toBeTruthy()
      expect(validateMinMax([1, 3, "a", "aaasdf"])).toBeTruthy()
      expect(validateMinMax([1, 3, "a", "aaaasdf"])).toBeFalsy()
    })
  })

  describe("validateCharacterLocations", () => {
    it("ensures a character appears at one of two indices, but not both", () => {
      expect(validateCharacterLocations([1, 3, "a", "qwerty"])).toBeFalsy()
      expect(validateCharacterLocations([1, 3, "a", "asdf"])).toBeTruthy()
      expect(validateCharacterLocations([1, 3, "a", "aasdf"])).toBeTruthy()
      expect(validateCharacterLocations([1, 3, "a", "aaasdf"])).toBeFalsy()
      expect(validateCharacterLocations([1, 3, "a", "zaasdf"])).toBeTruthy()
      expect(validateCharacterLocations([1, 3, "a", "aaaasdf"])).toBeFalsy()
    })
  })

  describe("part 1", () => {
    it("finds valid sample passwords", () => {
      expect(solve1(sample)).toEqual(2)
    })

    it("finds the puzzle answer", () => {
      expect(solve1(readInput(__dirname))).toEqual(398)
    })
  })

  describe("part 2", () => {
    it("finds valid sample passwords", () => {
      expect(solve2(sample)).toEqual(1)
    })

    it("finds the puzzle answer", () => {
      expect(solve2(readInput(__dirname))).toEqual(562)
    })
  })
})
