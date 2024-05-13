export function inArray(a1: string[], a2: string[]): string[] {
  return [...new Set(a1.filter((x) => a2.some((y) => y.includes(x))).sort())];
}

const a2: string[] = ["lively", "alive", "harp", "sharp", "armstrong"];

const a1: string[] = ["xyz", "nope", "arp", "strong"];

console.log(inArray(a1, a2)); // ["arp", "strong"]
