import type { Metadata } from "next";
import { FactList } from "../../components/fact-list";
import { Hero } from "../../components/hero";
import { LinkList } from "../../components/link-list";
import { SectionHead } from "../../components/section-head";
import { publicProfiles, siteEmail } from "../site-content";

export const metadata: Metadata = {
  title: "CV",
  description: "CV information, direct contact, and public academic records for Aycan Deniz Vit.",
  alternates: {
    canonical: "/cv/"
  }
};

export default function CvPage() {
  return (
    <>
      <Hero
        actions={[
          { href: `mailto:${siteEmail}`, label: "Request CV", primary: true },
          { href: "/publications/", label: "Publications" }
        ]}
        aside={
          <>
            <div className="focus-statement">
              <span className="focus-statement__label">Current Position</span>
              <div className="focus-statement__text">Doctoral Researcher at Ghent University - imec</div>
            </div>
            <FactList
              facts={[
                { label: "Affiliation", value: "Ghent University - imec" },
                { label: "Group", value: "Photonics Research Group" },
                {
                  label: "Current Focus",
                  value: "Reservoir computing for signal equalization"
                },
                { label: "Contact", value: <a href={`mailto:${siteEmail}`}>{siteEmail}</a> }
              ]}
            />
          </>
        }
        eyebrow="CV"
        lede="A full CV is available on request."
        summary="Public academic profiles and direct contact remain available here."
        title="CV"
      />

      <section id="supporting-record" className="section">
        <SectionHead kicker="Public Records" title="Academic profiles and contact." />
        <div className="utility-grid">
          <article className="panel">
            <h3 className="panel__title">Profiles</h3>
            <LinkList links={[publicProfiles[2], publicProfiles[0], publicProfiles[1]]} />
          </article>
          <article className="panel panel--tint">
            <h3 className="panel__title">Direct Contact</h3>
            <FactList
              facts={[
                { label: "Email", value: <a href={`mailto:${siteEmail}`}>{siteEmail}</a> },
                {
                  label: "Use Case",
                  value: "Requests that specifically need the full CV or timeline"
                }
              ]}
            />
          </article>
        </div>
      </section>
    </>
  );
}
