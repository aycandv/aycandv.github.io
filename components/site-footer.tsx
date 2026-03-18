import Link from "next/link";
import { footerLinks, siteTitle } from "../app/site-content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-note">
        <div className="footer-note__label">{siteTitle}</div>
        <div className="footer-note__links">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} rel="noreferrer" target="_blank">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
