import fs from "fs"
import path from "path"

export function readInput(directory: string): string {
  return fs.readFileSync(path.join(directory, "input.txt")).toString()
}
