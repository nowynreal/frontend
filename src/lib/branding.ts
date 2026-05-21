export const brand = {
  companyName: "Entrix Partners",
  shortName: "Entrix Partners",
  logo: {
    type: "text" as const,
    value: "Entrix Partners",
  },
  primaryColor: "#0b1b2b",
  accentColor: "#c9a24b",
  backgroundColor: "#e7ecf6",
  fontBody: "Manrope",
  fontDisplay: "Cormorant Garamond",
  slogan: "Helping Turkish companies expand into the U.S. with confidence.",
  contactEmail: "contact@entrix.com",
  social: {
    linkedin: "https://www.linkedin.com/company/anatolia-bridge-consulting",
    x: "https://x.com/anatoliabridge",
    youtube: "https://www.youtube.com/@anatoliabridge",
  },
};

export type Brand = typeof brand;
