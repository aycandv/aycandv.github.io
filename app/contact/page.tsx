import type { Metadata } from "next";
import { FactList } from "../../components/fact-list";
import { Hero } from "../../components/hero";
import { LinkList } from "../../components/link-list";
import { SectionHead } from "../../components/section-head";
import { publicProfiles, siteEmail } from "../site-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact information for Aycan Deniz Vit, including institutional email and public academic records.",
  alternates: {
    canonical: "/contact/"
  }
};

export default function ContactPage() {
  return (
    <>
      <Hero
        actions={[
          { href: `mailto:${siteEmail}`, label: "Email", primary: true },
          { href: "#verification", label: "Public records" }
        ]}
        aside={
          <>
            <div className="focus-statement">
              <span className="focus-statement__label">Primary Route</span>
              <div className="focus-statement__text">Institutional email for direct outreach</div>
            </div>
            <FactList
              facts={[
                { label: "Institution", value: "Ghent University - imec" },
                { label: "Group", value: "Photonics Research Group" },
                { label: "Location", value: "Gent, Belgium" },
                { label: "Research Area", value: "Photonic Reservoir Computing" }
              ]}
            />
          </>
        }
        eyebrow="Contact"
        lede="Institutional email remains the primary public contact path."
        summary="Public academic records are available for affiliation and publication history."
        title="Contact"
      />

      <section className="section">
        <SectionHead kicker="Best Paths" title="Email and academic records." />
        <div className="two-grid">
          <article className="card card--lead">
            <h3 className="card__title">Collaboration and direct outreach</h3>
            <p className="card__body">
              Email is the clearest route for collaboration, conference contact, student
              questions, and requests that need a direct response.
            </p>
            <div className="tag-row">
              <a href={`mailto:${siteEmail}`}>{siteEmail}</a>
            </div>
          </article>
          <article className="card">
            <h3 className="card__title">Publication and profile verification</h3>
            <p className="card__body">
              Use UGent, Google Scholar, and ORCID to confirm affiliation, publication history, or
              DOI-backed records.
            </p>
          </article>
        </div>
      </section>

      <section id="verification" className="section">
        <SectionHead kicker="Profile Index" title="Academic records." />
        <div className="utility-grid">
          <article className="panel">
            <h3 className="panel__title">Academic Records</h3>
            <LinkList links={[publicProfiles[2], publicProfiles[0], publicProfiles[1]]} />
          </article>
          <article className="panel panel--tint">
            <h3 className="panel__title">Direct Contact</h3>
            <FactList
              facts={[
                { label: "Email", value: <a href={`mailto:${siteEmail}`}>{siteEmail}</a> },
                { label: "Location", value: "Gent, Belgium" }
              ]}
            />
          </article>
        </div>
      </section>
    </>
  );
}
