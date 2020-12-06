import fs from "fs"
import path from "path"

export function readInput(directory: string): string {
  return readFile(directory, "input.txt")
}

export function readExample(directory: string): string {
  return readFile(directory, "input.example.txt")
}

function readFile(directory: string, filename: string): string {
  return fs.readFileSync(path.join(__dirname, directory, filename)).toString()
}
