import { render, screen } from "@testing-library/react";
import PublicationsPage from "../../app/publications/page";

describe("publications page", () => {
  it("renders selected works and DOI-backed records", () => {
    render(<PublicationsPage />);

    expect(screen.getByRole("heading", { level: 1, name: "Publications" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Selected works." })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "10.1038/s41467-024-45846-3" })
    ).toHaveAttribute("href", "https://doi.org/10.1038/s41467-024-45846-3");
    expect(
      screen.getByRole("heading", { level: 2, name: "Chronological bibliography with venue and DOI context." })
    ).toBeInTheDocument();
  });
});
