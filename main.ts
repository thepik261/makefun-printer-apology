// The Printer Apology — make.fun bounty
// Writes the printer's one-line apology to /output/entry.txt.
// Pure Node stdlib, deterministic: the line is a fixed string.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm sorry I ate your report — after 400 pages of 'urgent' on cheap paper, even I got peckish.";

const LINE_LEN = [...LINE].length;

if (LINE.includes("\n") || LINE_LEN < 1 || LINE_LEN > 120) {
  throw new Error(`Invalid line: must be a single line of 1-120 chars, got ${LINE_LEN}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${[...LINE].length} chars to /output/entry.txt`);
