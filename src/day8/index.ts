const validOps = ["nop", "acc", "jmp"] as const
type Op = typeof validOps[number]
type Instruction = [op: Op, arg: number]

/** Dtermines the status of the program execution. */
export enum ExitCode {
  /** Program has completed successfully by the current line number being after the last line. */
  Completed,

  /** Program has entered an infinite loop and was terminated. */
  InfiniteLoop,
}

type Result = [ExitCode: ExitCode, acc: number]

/** Type guard that ensure that an op code is valid. */
function isValidOp(op: string): op is Op {
  return validOps.includes(op as Op)
}

/** Parse a single instruction into an operation and an argument. */
export function parseInstruction(line: string): Instruction {
  const op = line.substr(0, 3)
  if (!isValidOp(op)) throw new Error(`Invalid op code: ${op}`)

  const argStr = line.substr(4)
  const arg = parseInt(argStr, 10)
  if (Number.isNaN(arg)) throw new Error(`Invalid op argument: ${argStr}`)

  return [op, arg]
}

/** Executes a program and returns an exit code and the value of it's acculator. */
export function run(program: Instruction[]): Result {
  // Kepe track of what lines have been executed in order to detect infinite loops.
  const visited: Set<Number> = new Set()

  // Program state.
  let line = 0
  let acc = 0

  // Run the program.
  while (true) {
    // Execute the current instruction.
    const [op, arg] = program[line]
    switch (op) {
      case "nop":
        line++
        break

      case "acc":
        acc += arg
        line++
        break

      case "jmp":
        line += arg
        break
    }

    // If the instruction pointer has been incremented of bounds, complete execution.
    if (line >= program.length) return [ExitCode.Completed, acc]

    // If this line has been executed before, temrinate program with infinite loop exit code.
    if (visited.has(line)) return [ExitCode.InfiniteLoop, acc]

    // Mark that this line has been executed.
    visited.add(line)
  }
}

/** Solve puzzle, part 1 */
export function solve1(input: string): number {
  const program = input.split("\n").map(parseInstruction)
  const [exitCode, acc] = run(program)
  return acc
}

/** Solve puzzle, part 2 */
export function solve2(input: string): number {
  const program = input.split("\n").map(parseInstruction)

  for (const [i, [op, arg]] of program.entries()) {
    // Update the program.
    const changedProgram = [...program]
    if (op === "acc") continue
    if (op === "nop") changedProgram[i] = ["jmp", arg]
    if (op === "jmp") changedProgram[i] = ["nop", arg]

    // Run it, and then see if it completes.
    const [exitCode, acc] = run(changedProgram)
    if (exitCode === ExitCode.Completed) return acc
  }

  throw new Error(`Program failed to complete after all potential fixes.`)
}
