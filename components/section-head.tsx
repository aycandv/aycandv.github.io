type SectionHeadProps = {
  kicker: string;
  title: string;
  summary?: string;
  linkHref?: string;
  linkLabel?: string;
};

export function SectionHead({ kicker, title, summary, linkHref, linkLabel }: SectionHeadProps) {
  return (
    <div className="section__head">
      <div>
        <div className="section__kicker">{kicker}</div>
        <h2 className="section__title">{title}</h2>
      </div>
      {summary ? <p className="section__summary">{summary}</p> : null}
      {linkHref && linkLabel ? (
        <a className="section__link" href={linkHref}>
          {linkLabel}
        </a>
      ) : null}
    </div>
  );
}
