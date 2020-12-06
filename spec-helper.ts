import { readInput, readExample } from "./common"

/** Use this as the value of `example` to completely omit it from the tests. */
export const ignore = Symbol("ignore")

/** A day parts solver, and expected example/puzzle answers to test. */
interface TestPart {
  /** The function that executes this part's algorithm. */
  solve?: (input: string) => number

  /** The expected result from example. */
  example?: number | typeof ignore

  /** The expect result for the puzzle input. */
  puzzle?: number
}

/**
 * Test an advent of code day's examples and inputs.
 * @param dayNumber The day number of the advent of code puzzle.
 * @param part1 The part 1 function, expected example answer, and expected puzzle answer.
 * @param part2 The part 2 function, expected example answer, and expected puzzle answer.
 * @param tests An optional and additional day specific test suite.
 */
export function describeDay(
  dayNumber: number,
  part1: TestPart,
  part2: TestPart,
  tests?: () => void,
) {
  describe(`day ${dayNumber}`, () => {
    tests?.()

    const directory = `./day${dayNumber}`
    testPart(1, directory, part1)
    testPart(2, directory, part2)
  })
}

/** Test a single parts example and puzzle answers. */
function testPart(
  name: number,
  directory: string,
  { solve, example, puzzle }: TestPart,
) {
  describe(`part ${name}`, () => {
    if (example !== ignore) {
      const itExample = solve && example ? it : it.skip
      itExample("finds the example answer", () => {
        const actual = solve!(readExample(directory))
        expect(actual).toEqual(example)
      })
    }

    const itPuzzle = solve && puzzle ? it : it.skip
    itPuzzle("finds the puzzle answer", () => {
      const actual = solve!(readInput(directory))
      expect(actual).toEqual(puzzle)
    })
  })
}
