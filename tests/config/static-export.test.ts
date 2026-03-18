import nextConfig from "../../next.config";

describe("next static export configuration", () => {
  it("uses static export settings compatible with GitHub Pages", () => {
    expect(nextConfig.output).toBe("export");
    expect(nextConfig.trailingSlash).toBe(true);
    expect(nextConfig.images?.unoptimized).toBe(true);
  });
});
