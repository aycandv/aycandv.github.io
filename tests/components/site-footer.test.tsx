import { render, screen } from "@testing-library/react";
import { SiteFooter } from "../../components/site-footer";

describe("SiteFooter", () => {
  it("renders the footer label and external records", () => {
    render(<SiteFooter />);

    expect(screen.getByText("Aycan Deniz Vit")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "UGent" })).toHaveAttribute(
      "href",
      "https://www.photonics.intec.ugent.be/contact/people.asp?ID=660"
    );
    expect(screen.getByRole("link", { name: "Scholar" })).toHaveAttribute(
      "href",
      "https://scholar.google.com/citations?user=wwsfmqwAAAAJ&hl=en"
    );
    expect(screen.getByRole("link", { name: "ORCID" })).toHaveAttribute(
      "href",
      "https://orcid.org/0000-0002-0451-643X"
    );
  });
});
