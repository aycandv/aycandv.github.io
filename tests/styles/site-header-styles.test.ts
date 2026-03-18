import { readFileSync } from "node:fs";
import { resolve } from "node:path";

describe("site header styling", () => {
  it("uses a sandy gradient background instead of a flat translucent fill", () => {
    const css = readFileSync(resolve(process.cwd(), "app/globals.css"), "utf8");

    expect(css).toMatch(
      /\.site-header\s*\{[\s\S]*background:\s*linear-gradient\(\s*180deg,\s*rgba\(248,\s*243,\s*233,\s*0\.68\)\s*0%,\s*rgba\(243,\s*236,\s*224,\s*0\.82\)\s*52%,\s*rgba\(236,\s*227,\s*211,\s*0\.94\)\s*100%\s*\);/
    );
  });
});
