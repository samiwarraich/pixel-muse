import { Metadata } from "next";

const title = "Pixel Muse";
const description =
  "Pixel Muse is a suite of bots that create and share random color pixel images on Twitter and Telegram platforms. You can enjoy these beautiful images every day by following the bots on social media or requesting them via messages or mentions.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Pixel Muse",
  metadataBase: new URL("https://pixel-muse.vercel.app"),
  alternates: {
    canonical: "/",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    site: "@PixelMuseBot",
    creator: "@samiwarra1ch",
    images: "/images/pixel-muse-bot.png",
  },
  openGraph: {
    type: "website",
    url: "/",
    title,
    description,
    siteName: "Pixel Muse",
    images: "/images/pixel-muse-bot.png",
  },
  robots: "all",
  keywords: [
    "colors",
    "colour",
    "pixels",
    "pixel",
    "pixel art",
    "random pixel",
    "random pixel art",
    "pixel muse",
    "pixel bot",
    "pixel muse bot",
    "art",
    "random color pixel art",
    "samiwarraich",
    "Sami Warraich",
  ],
  other: {
    "google-site-verification": "hztt4vcG42duVjOSpid_W9ugB5xznC01VRcutNPlBpI",
    "msvalidate.01": "DD992E9CC85A0E458EA3599D0526C78A",
    "p:domain_verify": "5d40bb6cf120718969b9be1519543e7e",
  },
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "120x120 180x180 167x167 152x152",
      url: "/images/favicon.png",
    },
    {
      rel: "icon",
      sizes:
        "16x16 32x32 48x48 72x72 96x96 128x128 144x144 152x152 192x192 384x384 512x512",
      type: "image/png",
      url: "/images/favicon.png",
    },
  ],
  manifest: "/manifest.webmanifest",
  viewport: "width=device-width, initial-scale=1.0",
  authors: [{ name: "Sami Warraich", url: "https://samiwarraich.github.io" }],
  themeColor: "#151718",
};
