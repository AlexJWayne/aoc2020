import fs from "fs"
import path from "path"

export function readInput(directory: string): string {
  const inputData = readFile(directory, "input.txt")
  if (inputData) return inputData
  throw new Error(`No puzzle input data found for input.txt`)
}

export function readExample(directory: string, part?: number): string {
  const filenames = []
  if (part) filenames.push(`input.example${part}.txt`)
  filenames.push("input.example.txt")

  for (const filename of filenames) {
    const inputData = readFile(directory, filename)
    if (inputData) return inputData
  }
  throw new Error(`No example input data found for ${filenames.join(", ")}`)
}

function readFile(directory: string, filename: string): string | undefined {
  const filepath = path.join(__dirname, directory, filename)
  if (fs.existsSync(filepath)) {
    return fs.readFileSync(filepath).toString()
  }
}
