type RecordRowProps = {
  index: string;
  title: string;
  meta: string;
  href: string;
  authors?: string;
  note?: string;
};

export function RecordRow({ index, title, meta, href, authors, note }: RecordRowProps) {
  return (
    <article className="record-row">
      <div className="record-row__index">{index}</div>
      <div>
        <div className="record-row__title">{title}</div>
        {authors ? <div className="record-row__authors">{authors}</div> : null}
        <div className="record-row__meta">{meta}</div>
        {note ? <div className="record-row__note">{note}</div> : null}
      </div>
      <a className="record-row__link" href={href} rel="noreferrer" target="_blank">
        DOI
      </a>
    </article>
  );
}
