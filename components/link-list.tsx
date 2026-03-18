import type { ExternalLink } from "./types";

export function LinkList({ links }: { links: ExternalLink[] }) {
  return (
    <div className="link-list">
      {links.map((link) => (
        <a
          key={link.href}
          className="link-row"
          href={link.href}
          rel="noreferrer"
          target="_blank"
        >
          <span>{link.label}</span>
          <span>Open</span>
        </a>
      ))}
    </div>
  );
}
