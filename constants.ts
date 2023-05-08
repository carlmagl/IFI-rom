import { getStaticProps } from "./pages";

export const CONTENTFUL_BASE_URL = "https://cdn.contentful.com";
export const SIO_BASE_URL =
  "https://sio.no/mat-og-drikke/spisesteder/Ole-Johan-spiseri";

export const GITHUB_IFI_ROM = "https://github.com/carlmagl/IFI-rom";

export const navLinks: readonly { label: string; href: string }[] = [
  { label: "Foreninger", href: "/foreninger" },
  { label: "Kollektivt", href: "/kollektivt" },
  { label: "Kantine", href: "/kantine" },
  // { label: "Arrangementer", href: "/arrangementer" },
];

export const getStaticPropsRevalidationTime = 3600; // 1 hour
