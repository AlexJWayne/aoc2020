import fs from "fs"
import path from "path"
import chalk from "chalk"

function getExistingDays() {
  return fs
    .readdirSync(path.join(__dirname))
    .filter(name => /^day[\d]+$/.test(name))
}

function getImplementationFileNames(day: string): string[] {
  return fs
    .readdirSync(path.join(__dirname, day))
    .filter(filename => filename.endsWith(".ts"))
    .filter(filename => !filename.endsWith(".spec.ts"))
}

console.log()
console.log(chalk.gray("Lines of Code:"))

for (const day of getExistingDays()) {
  for (const fileName of getImplementationFileNames(day)) {
    const lines = fs
      .readFileSync(path.join(__dirname, day, fileName)) // Load the file.
      .toString() // Convert the buffer to a string.
      .replace(/\/\*(.|\n)*?\*\//gm, "") // remove multilline block comments.
      .split("\n") // Split into an array of lines.
      .filter(line => !/^\s*\/\//.test(line)) // Remove lines that are only comments.
      .filter(line => line.trim()) // Remove empty lines.
      .filter(line => !line.startsWith("import ")) // Remove imports.

    console.log(`${chalk.green(day)}${chalk.gray(":")} ${lines.length}`)
  }
}
