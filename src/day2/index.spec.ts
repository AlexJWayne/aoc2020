import { describeDay } from "../spec-helper"
import {
  parseLine,
  solve1,
  solve2,
  validateCharacterLocations,
  validateMinMax,
} from "."

describeDay(
  2,
  {
    example: [solve1, 2],
    puzzle: [solve1, 398],
  },
  {
    example: [solve2, 1],
    puzzle: [solve2, 562],
  },
  () => {
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
  },
)
