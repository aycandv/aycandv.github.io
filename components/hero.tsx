import type { ReactNode } from "react";
import type { ExternalLink } from "./types";

type HeroAction = {
  href: string;
  label: string;
  primary?: boolean;
};

type HeroProps = {
  eyebrow: string;
  title: string;
  lede: string;
  summary?: string;
  role?: string;
  actions?: HeroAction[];
  profiles?: ExternalLink[];
  aside: ReactNode;
};

export function Hero({ eyebrow, title, lede, summary, role, actions, profiles, aside }: HeroProps) {
  const titleId = `${title.toLowerCase().replace(/\s+/g, "-")}-title`;

  return (
    <section className="surface hero" aria-labelledby={titleId}>
      <div className="hero__grid">
        <div>
          <div className="eyebrow">{eyebrow}</div>
          <h1 id={titleId} className="hero__title">
            {title}
          </h1>
          {role ? <div className="hero__role">{role}</div> : null}
          <p className="hero__lede">{lede}</p>
          {summary ? <p className="hero__summary">{summary}</p> : null}
          {actions?.length ? (
            <div className="hero__actions">
              {actions.map((action) => (
                <a
                  key={action.href}
                  className={action.primary ? "button-link button-link--primary" : "button-link"}
                  href={action.href}
                >
                  {action.label}
                </a>
              ))}
            </div>
          ) : null}
          {profiles?.length ? (
            <div className="hero__profiles" aria-label="External profiles">
              {profiles.map((profile) => (
                <a key={profile.href} href={profile.href} rel="noreferrer" target="_blank">
                  {profile.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
        <aside className="panel">{aside}</aside>
      </div>
    </section>
  );
}
