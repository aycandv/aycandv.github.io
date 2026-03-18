import { readFileSync } from "node:fs";
import { resolve } from "node:path";

describe("GitHub Pages workflow", () => {
  it("builds the Next.js export and deploys it with the Pages actions", () => {
    const workflowPath = resolve(
      process.cwd(),
      ".github/workflows/deploy-github-pages.yml"
    );
    const workflow = readFileSync(workflowPath, "utf8");

    expect(workflow).toContain("uses: actions/configure-pages@v5");
    expect(workflow).toContain("uses: actions/upload-pages-artifact@v4");
    expect(workflow).toContain("uses: actions/deploy-pages@v4");
    expect(workflow).toContain("npm ci");
    expect(workflow).toContain("npm run build");
    expect(workflow).toContain("path: ./out");
    expect(workflow).toContain("branches: [main]");
    expect(workflow).toContain('FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: "true"');
  });
});
