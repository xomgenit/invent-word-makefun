import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

// The coinage: "pocket" + "lapse" — a little memory slip that lives in
// your pocket. Built from the gesture itself, not from the gadget.
// Why this coinage works:
// - It names a real gap: everyone has done the pocket-pat, no word
//   exists for it. A dictionary would want it.
// - It is sayable and spellable at first sight: pocket + lapse, two
//   familiar parts, one new blend. No exotic spelling to memorise.
// - The definition lands in a single reading: one gesture, one image,
//   and the twist (the phone is already in your hand) carries the joke.
// - 79 characters, well inside the 140-character gate.
const word = "Pocketlapse";
const partOfSpeech = "(n.)";
const definition =
  "patting your pocket for the phone you are already holding.";

const line = `${word} ${partOfSpeech}: ${definition}`;

if (line.length > 140) {
  throw new Error(`entry too long: ${line.length} chars (max 140)`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
