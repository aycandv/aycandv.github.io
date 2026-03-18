import type { Metadata } from "next";
import { Hero } from "../../components/hero";
import { RecordRow } from "../../components/record-row";
import { SectionHead } from "../../components/section-head";
import {
  publicationGroupYears,
  publicationSelectedIds,
  publications
} from "../site-content";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Selected and chronological publications for Aycan Deniz Vit, with DOI-backed records and links to Google Scholar and ORCID.",
  alternates: {
    canonical: "/publications/"
  }
};

const selectedPublications = publicationSelectedIds
  .map((id) => publications.find((publication) => publication.id === id))
  .filter((publication) => publication !== undefined);

const leadPublication = selectedPublications[0];
const supportingPublications = selectedPublications.slice(1);

export default function PublicationsPage() {
  return (
    <>
      <Hero
        actions={[
          { href: "#selected", label: "Selected works", primary: true },
          { href: "#all", label: "Full list" }
        ]}
        aside={
          <>
            <div className="focus-statement">
              <span className="focus-statement__label">Record Scope</span>
              <div className="focus-statement__text">Current photonics work, grouped for fast scanning</div>
            </div>
            <div className="fact-list">
              <div className="fact">
                <span className="fact__label">Google Scholar</span>
                <div className="fact__value">Broader citation and publication index</div>
              </div>
              <div className="fact">
                <span className="fact__label">ORCID</span>
                <div className="fact__value">Persistent public record with DOI-backed entries</div>
              </div>
              <div className="fact">
                <span className="fact__label">Coverage</span>
                <div className="fact__value">Recent photonics publications</div>
              </div>
            </div>
          </>
        }
        eyebrow="Publications"
        lede="Selected and recent publications in photonics."
        summary="Google Scholar and ORCID provide broader public indexing of the publication record."
        title="Publications"
      />

      <section id="selected" className="section">
        <SectionHead kicker="Selected Works" title="Selected works." />
        <div className="split-grid">
          {leadPublication ? (
            <article className="card card--lead">
              <h3 className="card__title">{leadPublication.title}</h3>
              <p className="card__body">{leadPublication.authors}</p>
              <p className="card__body">
                {leadPublication.venue}, {leadPublication.year}
              </p>
              <div className="tag-row">
                <a
                  href={`https://doi.org/${leadPublication.doi}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  {leadPublication.doi}
                </a>
              </div>
            </article>
          ) : null}
          <article className="panel panel--tint">
            <h3 className="panel__title">Supporting references</h3>
            <div className="record-table record-table--compact">
              {supportingPublications.map((publication, index) => (
                <RecordRow
                  key={publication.id}
                  href={`https://doi.org/${publication.doi}`}
                  index={String(index + 1).padStart(2, "0")}
                  meta={`${publication.venue}, ${publication.year}`}
                  title={publication.title}
                />
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="all" className="section">
        <SectionHead
          kicker="Full List"
          linkHref="https://scholar.google.com/citations?user=wwsfmqwAAAAJ&hl=en"
          linkLabel="Scholar index"
          title="Chronological bibliography with venue and DOI context."
        />
        <div className="year-stack">
          {publicationGroupYears.map((year) => {
            const publicationsForYear = publications.filter((publication) => publication.year === year);

            return (
              <section key={year} className="year-group">
                <div className="year-group__label">{year}</div>
                <div className="year-group__body">
                  <div className="record-table">
                    {publicationsForYear.map((publication, index) => (
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
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </>
  );
}
