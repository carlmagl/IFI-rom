import { getStaticProps } from "./pages";

export const CONTENTFUL_BASE_URL = "https://cdn.contentful.com";
export const SIO_BASE_URL =
  "https://sio.no/mat-og-drikke/spisesteder/Ole-Johan-spiseri";

export const GITHUB_IFI_ROM = "https://github.com/carlmagl/IFI-rom";
export const YR_BASE_URL = "https://api.met.no/weatherapi/nowcast/2.0/complete";

// Order is important
export const navLinks: readonly { label: string; href: string }[] = [
  { label: "Foreninger", href: "/foreninger" },
  { label: "Kantine", href: "/kantine" },
  { label: "Kollektivt", href: "/kollektivt" },
  // { label: "Arrangementer", href: "/arrangementer" },
];

// export const getStaticPropsRevalidationTime = 3600; // 1 hour
export const getStaticPropsRevalidationTime = 60; // 5 minutesa

export const IFI_LAT = "59.9145";
export const IFI_LONG = "10.7499";
