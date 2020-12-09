import { readInput, readExample } from "./read-files"

/** Use this as the value of `example` to completely omit it from the tests. */
export const ignore = Symbol("ignore")

type TestSetup = [runner: (input: string) => number, expected: number]

/** A day parts solver, and expected example/puzzle answers to test. */
interface TestPart {
  /** The expected result from example. */
  example?: TestSetup | typeof ignore

  /** The expect result for the puzzle input. */
  puzzle?: TestSetup
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
  { example, puzzle }: TestPart,
) {
  describe(`part ${name}`, () => {
    if (example !== ignore) {
      testInput("example", example, readExample(directory, name))
    }

    testInput("puzzle", puzzle, readInput(directory))
  })
}

/** Run a single test of a solver, input and expected result. */
function testInput(
  description: string,
  testSetup: TestSetup | undefined,
  input: string,
) {
  const itFn = testSetup ? it : it.skip
  const [solve, expected] = testSetup ?? []
  itFn(`finds the ${description} answer`, () => {
    const actual = solve!(input)
    expect(actual).toEqual(expected)
  })
}
