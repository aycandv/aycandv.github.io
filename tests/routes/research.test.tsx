import { render, screen } from "@testing-library/react";
import ResearchPage from "../../app/research/page";

describe("research page", () => {
  it("renders the research profile and selected reading section", () => {
    render(<ResearchPage />);

    expect(screen.getByRole("heading", { level: 1, name: "Research" })).toBeInTheDocument();
    expect(
      screen.getByText(/Current work focuses on reservoir computing for signal equalization/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Representative papers linked to the current profile." })
    ).toBeInTheDocument();
  });
});
