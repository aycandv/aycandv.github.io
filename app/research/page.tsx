import type { Metadata } from "next";
import { FactList } from "../../components/fact-list";
import { Hero } from "../../components/hero";
import { RecordRow } from "../../components/record-row";
import { SectionHead } from "../../components/section-head";
import {
  publications,
  researchReadingNotes,
  researchThreads
} from "../site-content";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research profile for Aycan Deniz Vit, focused on reservoir computing for signal equalization and related work in deep photonic networks and integrated photonic design.",
  alternates: {
    canonical: "/research/"
  }
};

const readingIds = ["nature-comms-2024", "optics-letters-2025-dispersion", "jlt-2025-polarization"];
const readingPublications = readingIds
  .map((id) => publications.find((publication) => publication.id === id))
  .filter((publication) => publication !== undefined);

export default function ResearchPage() {
  return (
    <>
      <Hero
        actions={[
          { href: "#threads", label: "Research threads", primary: true },
          { href: "#reading", label: "Selected reading" }
        ]}
        aside={
          <>
            <div className="focus-statement">
              <span className="focus-statement__label">Active Direction</span>
              <div className="focus-statement__text">Reservoir computing for signal equalization</div>
            </div>
            <FactList
              facts={[
                { label: "Area", value: "Photonic Reservoir Computing" },
                {
                  label: "Group",
                  value: "Photonics Research Group, Ghent University - imec"
                },
                {
                  label: "Public Records",
                  value: "UGent profile, Google Scholar, ORCID, and DOI-backed publications."
                }
              ]}
            />
          </>
        }
        eyebrow="Research"
        lede="Current work focuses on reservoir computing for signal equalization within a broader photonics research profile."
        role={undefined}
        summary="Related publications track deep photonic networks, arbitrary broadband optical functionality, and fabrication-tolerant integrated photonic design."
        title="Research"
      />

      <section id="threads" className="section">
        <SectionHead
          kicker="Research Threads"
          summary="The visible research record connects the current doctoral direction to broader work in deep photonic networks and robust on-chip optical control."
          title="Current direction and related work."
        />
        <div className="thread-list">
          {researchThreads.map((thread) => (
            <article key={thread.title} className="thread-row">
              <div className="thread-row__label">{thread.label}</div>
              <div className="thread-row__body">
                <h3>{thread.title}</h3>
                <p>{thread.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="reading" className="section">
        <SectionHead
          kicker="Selected Reading"
          linkHref="/publications/"
          linkLabel="Full publications"
          title="Representative papers linked to the current profile."
        />
        <div className="record-table">
          {readingPublications.map((publication, index) => (
            <RecordRow
              key={publication.id}
              authors={publication.authors}
              href={`https://doi.org/${publication.doi}`}
              index={String(index + 1).padStart(2, "0")}
              meta={`${publication.venue}, ${publication.year}`}
              note={researchReadingNotes[publication.id]}
              title={publication.title}
            />
          ))}
        </div>
      </section>
    </>
  );
}
