/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Home",
  titleTemplate: "%s | Chance Farrell",
  defaultTitle: "Chance Farrell",
  description: "Next.js + chakra-ui + TypeScript template",
  canonical: "https://chancefarrell.xyz",
  openGraph: {
    url: "https://chancefarrell.xyz",
    title: "Chance's Site",
    description: "Chance's Portfolio Site",
    images: [
      {
        url: "https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "nextarter-chakra.sznm.dev og-image",
      },
    ],
    site_name: "Chance Farrell",
  },
  twitter: {
    handle: "@probablychance",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
