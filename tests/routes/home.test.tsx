import { render, screen } from "@testing-library/react";
import HomePage from "../../app/page";

describe("home page", () => {
  it("renders the homepage hero and public records section", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { level: 1, name: "Aycan Deniz Vit" })).toBeInTheDocument();
    expect(
      screen.getByText(
        /Doctoral researcher in photonics, with current work centered on reservoir computing for signal equalization\./i
      )
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Selected publications" })).toHaveAttribute(
      "href",
      "#publications"
    );
    expect(screen.getByRole("heading", { level: 2, name: "Contact and public records." })).toBeInTheDocument();
  });
});
