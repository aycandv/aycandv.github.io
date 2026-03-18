import type { ExternalLink, NavItem, Publication, ResearchThread } from "../components/types";

export const siteTitle = "Aycan Deniz Vit";
export const siteEmail = "aycan.vit@ugent.be";
export const siteUrl = "https://aycandv.github.io";

export const primaryNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/research/", label: "Research" },
  { href: "/publications/", label: "Publications" },
  { href: "/contact/", label: "Contact" }
];

export const publicProfiles: ExternalLink[] = [
  {
    href: "https://scholar.google.com/citations?user=wwsfmqwAAAAJ&hl=en",
    label: "Google Scholar"
  },
  { href: "https://orcid.org/0000-0002-0451-643X", label: "ORCID" },
  {
    href: "https://www.photonics.intec.ugent.be/contact/people.asp?ID=660",
    label: "UGent Profile"
  }
];

export const footerLinks: ExternalLink[] = [
  {
    href: "https://www.photonics.intec.ugent.be/contact/people.asp?ID=660",
    label: "UGent"
  },
  {
    href: "https://scholar.google.com/citations?user=wwsfmqwAAAAJ&hl=en",
    label: "Scholar"
  },
  { href: "https://orcid.org/0000-0002-0451-643X", label: "ORCID" }
];

export const publications: Publication[] = [
  {
    id: "nature-comms-2024",
    title: "Deep photonic network platform enabling arbitrary and broadband optical functionality",
    authors: "Ali Najjar Amiri, Aycan Deniz Vit, Kazim Gorgulu, Emir Salih Magden",
    venue: "Nature Communications",
    year: 2024,
    doi: "10.1038/s41467-024-45846-3"
  },
  {
    id: "optics-letters-2025-dispersion",
    title: "On-chip arbitrary dispersion engineering with deep photonic networks",
    authors: "Kazim Gorgulu, Aycan Deniz Vit, Ali Najjar Amiri, Emir Salih Magden",
    venue: "Optics Letters",
    year: 2025,
    doi: "10.1364/OL.564441"
  },
  {
    id: "jlt-2025-polarization",
    title: "Universal On-Chip Polarization Handling With Deep Photonic Networks",
    authors:
      "Aycan Deniz Vit, Ujal Rzayev, Bahrem Serhat Danis, Ali Najjar Amiri, Kazim Gorgulu, Emir Salih Magden",
    venue: "Journal of Lightwave Technology",
    year: 2025,
    doi: "10.1109/JLT.2025.3589148"
  },
  {
    id: "jlt-2025-layout-aware",
    title: "Layout-Aware and Fabrication-Tolerant Deep Photonic Networks",
    authors:
      "Aycan Deniz Vit, Kazim Gorgulu, Ali Najjar Amiri, Bahrem Serhat Danis, Ujal Rzayev, Ahmet Onur Dasdemir, Abdullah Magden, Emir Salih Magden",
    venue: "Journal of Lightwave Technology",
    year: 2025,
    doi: "10.1109/JLT.2025.3621420"
  },
  {
    id: "spie-2024-duplexer",
    title: "A wideband silicon photonic duplexer constructed from a deep photonic network of custom Mach-Zehnder interferometers",
    authors: "Ali Najjar Amiri, Aycan Deniz Vit, Kazim Gorgulu, Emir Salih Magden",
    venue: "Silicon Photonics XIX",
    year: 2024,
    doi: "10.1117/12.3002531"
  },
  {
    id: "spie-2024-fabrication",
    title: "Optimizing photonic devices under fabrication variations with deep photonic networks",
    authors: "Kazim Gorgulu, Aycan Deniz Vit, Ali Najjar Amiri, Emir Salih Magden",
    venue: "Silicon Photonics XIX",
    year: 2024,
    doi: "10.1117/12.3003058"
  },
  {
    id: "spie-2024-polarization",
    title: "Towards universal polarization handling with silicon-based deep photonic networks",
    authors: "Aycan Deniz Vit, Ali Najjar Amiri, Kazim Gorgulu, Emir Salih Magden",
    venue: "Integrated Optics: Devices, Materials, and Technologies XXVIII",
    year: 2024,
    doi: "10.1117/12.3003033"
  }
];

export const homeSelectedPublicationIds = [
  "nature-comms-2024",
  "optics-letters-2025-dispersion"
];

export const publicationSelectedIds = [
  "nature-comms-2024",
  "optics-letters-2025-dispersion",
  "jlt-2025-polarization",
  "jlt-2025-layout-aware"
];

export const researchThreads: ResearchThread[] = [
  {
    label: "Now",
    title: "Reservoir Computing and Equalization",
    body: "Current work centers on how photonic reservoir-computing systems can support demanding equalization tasks."
  },
  {
    label: "Built Through",
    title: "Deep Photonic Networks",
    body: "Network-based photonic platforms for arbitrary and broadband optical functionality."
  },
  {
    label: "Extends Into",
    title: "Robust Design and Optical Control",
    body: "Fabrication-tolerant design, polarization handling, and dispersion engineering on chip."
  }
];

export const researchReadingNotes: Record<string, string> = {
  "nature-comms-2024":
    "Platform-level work on deep photonic networks and broadband optical functionality.",
  "optics-letters-2025-dispersion":
    "Extends the publication record into on-chip dispersion control.",
  "jlt-2025-polarization":
    "Connects the research profile to polarization handling and optical control."
};

export const publicationGroupYears = [2025, 2024];
