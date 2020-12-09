import { describeDay } from "../spec-helper"
import { ExitCode, parseInstruction, run, solve1, solve2 } from "."

describeDay(
  8,
  {
    example: [solve1, 5],
    puzzle: [solve1, 1475],
  },
  {
    example: [solve2, 8],
    puzzle: [solve2, 1270],
  },
  () => {
    describe("parseInstruction", () => {
      it("parses a valid instruction", () => {
        expect(parseInstruction("nop +0")).toEqual(["nop", 0])
        expect(parseInstruction("acc -25")).toEqual(["acc", -25])
        expect(parseInstruction("jmp +5")).toEqual(["jmp", 5])
      })

      it("throws on invalid instructions", () => {
        expect(() => parseInstruction("bad")).toThrow()
        expect(() => parseInstruction("acc omg")).toThrow()
        expect(() => parseInstruction("jmp +-5")).toThrow()
      })
    })

    describe("run", () => {
      it("runs a program to completion", () => {
        const actual = run([
          ["nop", 0], // 0
          ["acc", 10], // 10
          ["jmp", 2], // skip next line
          ["acc", 10_000],
          ["acc", 5], // 15
        ])

        expect(actual).toEqual([ExitCode.Completed, 15])
      })

      it("crashes on an infinite loop", () => {
        const actual = run([
          ["nop", 0], // 0
          ["acc", 10], // 10
          ["jmp", -1], // go to previous line
          ["acc", 10_000],
          ["acc", 5], // 15
        ])

        expect(actual).toEqual([ExitCode.InfiniteLoop, 10])
      })
    })
  },
)
