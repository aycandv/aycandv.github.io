import { render, screen } from "@testing-library/react";
import CvPage from "../../app/cv/page";

describe("cv page", () => {
  it("renders the dormant cv route for direct requests", () => {
    render(<CvPage />);

    expect(screen.getByRole("heading", { level: 1, name: "CV" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Request CV" })).toHaveAttribute(
      "href",
      "mailto:aycan.vit@ugent.be"
    );
  });
});
