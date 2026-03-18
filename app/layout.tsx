import type { Metadata } from "next";
import { IBM_Plex_Sans, Newsreader } from "next/font/google";
import type { ReactNode } from "react";
import { PageShell } from "../components/page-shell";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { siteTitle, siteUrl } from "./site-content";
import "./globals.css";

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans"
});

const displayFont = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`
  },
  description:
    "Aycan Deniz Vit is a doctoral researcher in photonics at Ghent University - imec, with current work focused on reservoir computing for signal equalization.",
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <PageShell>{children}</PageShell>
        <SiteFooter />
      </body>
    </html>
  );
}
