import { render, screen } from "@testing-library/react";
import ContactPage from "../../app/contact/page";

describe("contact page", () => {
  it("renders direct contact and public record links", () => {
    render(<ContactPage />);

    expect(screen.getByRole("heading", { level: 1, name: "Contact" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute(
      "href",
      "mailto:aycan.vit@ugent.be"
    );
    expect(screen.getByRole("heading", { level: 2, name: "Academic records." })).toBeInTheDocument();
  });
});
