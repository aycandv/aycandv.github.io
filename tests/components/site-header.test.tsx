import { render, screen } from "@testing-library/react";
import { SiteHeader } from "../../components/site-header";

let mockPathname = "/publications/";

vi.mock("next/navigation", () => ({
  usePathname: () => mockPathname
}));

describe("SiteHeader", () => {
  const originalResizeObserver = global.ResizeObserver;

  beforeEach(() => {
    mockPathname = "/publications/";

    global.ResizeObserver = class ResizeObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    } as typeof ResizeObserver;

    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(function () {
      if (this.tagName === "NAV") {
        return DOMRect.fromRect({ x: 100, y: 0, width: 420, height: 48 });
      }

      const label = this.textContent?.trim();
      const rects: Record<string, { x: number; width: number }> = {
        Home: { x: 100, width: 56 },
        Research: { x: 166, width: 77 },
        Publications: { x: 253, width: 96 },
        Contact: { x: 359, width: 68 }
      };

      const rect = label ? rects[label] : undefined;

      if (!rect) {
        return DOMRect.fromRect({ x: 0, y: 0, width: 0, height: 0 });
      }

      return DOMRect.fromRect({ x: rect.x, y: 0, width: rect.width, height: 40 });
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
    global.ResizeObserver = originalResizeObserver;
  });

  it("renders the public navigation without a CV link", () => {
    render(<SiteHeader />);

    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "Research" })).toHaveAttribute("href", "/research");
    expect(screen.getByRole("link", { name: "Publications" })).toHaveAttribute(
      "href",
      "/publications"
    );
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "/contact");
    expect(screen.queryByRole("link", { name: "CV" })).not.toBeInTheDocument();
  });

  it("marks the current route in the navigation", () => {
    render(<SiteHeader />);

    expect(screen.getByRole("link", { name: "Publications" })).toHaveAttribute(
      "aria-current",
      "page"
    );
  });

  it("positions a shared indicator under the active item and updates when the route changes", () => {
    const { rerender } = render(<SiteHeader />);

    const indicator = screen.getByTestId("site-nav-indicator");
    const underline = screen.getByTestId("site-nav-underline");
    expect(indicator).toHaveStyle({
      transform: "translateX(153px)",
      width: "96px",
      opacity: "1"
    });
    expect(underline).toHaveStyle({
      transform: "translateX(165px)",
      width: "72px",
      opacity: "1"
    });

    mockPathname = "/contact/";
    rerender(<SiteHeader />);

    expect(indicator).toHaveStyle({
      transform: "translateX(259px)",
      width: "68px",
      opacity: "1"
    });
    expect(underline).toHaveStyle({
      transform: "translateX(271px)",
      width: "44px",
      opacity: "1"
    });
  });
});
