import { FactList } from "../components/fact-list";
import { Hero } from "../components/hero";
import { LinkList } from "../components/link-list";
import { RecordRow } from "../components/record-row";
import { SectionHead } from "../components/section-head";
import {
  homeSelectedPublicationIds,
  publications,
  publicProfiles,
  siteEmail
} from "./site-content";

const homeSelectedPublications = homeSelectedPublicationIds
  .map((id) => publications.find((publication) => publication.id === id))
  .filter((publication) => publication !== undefined);

export default function HomePage() {
  return (
    <>
      <Hero
        actions={[
          { href: "#publications", label: "Selected publications", primary: true },
          { href: "/research/", label: "Research overview" },
          { href: "/contact/", label: "Contact" }
        ]}
        aside={
          <>
            <div className="focus-statement">
              <span className="focus-statement__label">Current Focus</span>
              <div className="focus-statement__text">Reservoir computing for signal equalization</div>
            </div>
            <FactList
              facts={[
                { label: "Research Area", value: "Photonic Reservoir Computing" },
                {
                  label: "Affiliation",
                  value: "Photonics Research Group, Ghent University - imec"
                },
                {
                  label: "Contact",
                  value: <a href={`mailto:${siteEmail}`}>{siteEmail}</a>
                }
              ]}
            />
          </>
        }
        eyebrow="Academic Profile"
        lede="Doctoral researcher in photonics, with current work centered on reservoir computing for signal equalization."
        profiles={publicProfiles}
        role="Doctoral Researcher, Ghent University - imec"
        summary="The broader publication record includes deep photonic networks, fabrication-aware integrated design, and on-chip control of optical behavior."
        title="Aycan Deniz Vit"
      />

      <section className="section" aria-labelledby="research-title">
        <SectionHead
          kicker="Research Snapshot"
          summary="Current work sits in photonic reservoir computing for signal equalization, supported by adjacent work in deep photonic networks and robust integrated photonic design."
          title="Current direction first, adjacent work after."
        />
        <div className="split-grid">
          <article className="card card--lead">
            <h3 className="card__title">Reservoir Computing for Signal Equalization</h3>
            <p className="card__body">
              The current doctoral direction focuses on photonic reservoir computing and its use in
              difficult equalization problems.
            </p>
            <div className="tag-row">
              <span>Reservoir computing</span>
              <span>Signal equalization</span>
              <span>Photonic computing</span>
            </div>
          </article>
          <div className="thread-list">
            <article className="thread-row">
              <div className="thread-row__label">Built Through</div>
              <div className="thread-row__body">
                <h3>Deep Photonic Networks</h3>
                <p>Network-based photonic platforms for arbitrary and broadband optical functionality.</p>
              </div>
            </article>
            <article className="thread-row">
              <div className="thread-row__label">Extends Into</div>
              <div className="thread-row__body">
                <h3>Robust Integrated Design</h3>
                <p>
                  Fabrication-tolerant design, polarization handling, and dispersion engineering on
                  chip.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="publications" className="section" aria-labelledby="publications-title">
        <SectionHead
          kicker="Selected Publications"
          linkHref="/publications/"
          linkLabel="Full publications"
          title="Two papers to orient the reader."
        />
        <div className="record-table">
          {homeSelectedPublications.map((publication, index) => (
            <RecordRow
              key={publication.id}
              authors={publication.authors}
              href={`https://doi.org/${publication.doi}`}
              index={String(index + 1).padStart(2, "0")}
              meta={`${publication.venue}, ${publication.year}`}
              title={publication.title}
            />
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="utility-title">
        <SectionHead kicker="Contact And Records" title="Contact and public records." />
        <div className="split-grid">
          <article className="panel panel--tint">
            <h3 className="panel__title">Direct Contact</h3>
            <FactList
              facts={[
                { label: "Email", value: <a href={`mailto:${siteEmail}`}>{siteEmail}</a> },
                {
                  label: "Best For",
                  value: "Collaborations, publication questions, and conference contact."
                }
              ]}
            />
          </article>
          <div className="feature-stack">
            <article className="panel">
              <h3 className="panel__title">Public Records</h3>
              <LinkList links={[publicProfiles[2], publicProfiles[0], publicProfiles[1]]} />
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
