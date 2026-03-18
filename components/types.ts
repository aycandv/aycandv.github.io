export type NavItem = {
  href: string;
  label: string;
};

export type ExternalLink = {
  href: string;
  label: string;
};

export type Publication = {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  doi: string;
};

export type ResearchThread = {
  label: string;
  title: string;
  body: string;
};
