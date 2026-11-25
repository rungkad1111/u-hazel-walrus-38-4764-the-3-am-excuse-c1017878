// The 3 AM Excuse — a hardware wallet refuses to sign at 3 AM.
// Writes the one-line excuse to /output/entry.txt (must be 1-200 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "At 3 AM my secure element is dreaming in private keys, and your memecoin isn't in a single one of them.";

// Runtime gate: the entry must be 1-200 chars of non-whitespace UTF-8 text.
// Fail loudly instead of shipping an invalid entry.
const chars = [...EXCUSE].length;
if (chars < 1 || chars > 200 || EXCUSE.trim().length === 0) {
  throw new Error(`excuse is ${chars} chars, outside the 1-200 gate`);
}
if (EXCUSE.includes("\n")) {
  throw new Error("excuse must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
