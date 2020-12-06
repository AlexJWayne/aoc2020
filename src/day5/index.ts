export function toInt(value: string): number {
  return parseInt(value.replace(/[FL]/g, "0").replace(/[BR]/g, "1"), 2)
}

export function solve1(input: string): number {
  const lines = input.split("\n")
  return Math.max(...lines.map(toInt))
}

export function solve2(input: string): number {
  const lines = input.split("\n")
  const seatIds = lines.map(toInt)
  const min = Math.min(...seatIds)
  const max = Math.max(...seatIds)

  for (let i = min + 1; i < max; i++) {
    if (!seatIds.includes(i)) return i
  }

  throw new Error("No seat available!")
}
