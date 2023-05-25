import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pixel Muse",
  description:
    "Pixel Muse is a suite of bots that create and share random color pixel images on Twitter and Telegram platforms. You can enjoy these beautiful images every day by following the bots on social media or requesting them via messages or mentions.",
  metadataBase: new URL("https://pixel-muse.vercel.app"),
  twitter: {
    card: "summary_large_image",
    title: "Pixel Muse",
    description:
      "Pixel Muse is a suite of bots that create and share random color pixel images on Twitter and Telegram platforms. You can enjoy these beautiful images every day by following the bots on social media or requesting them via messages or mentions.",
    site: "@PixelMuseBot",
    creator: "@samiwarraich2",
    images: "/images/pixel-muse-bot.jpeg",
  },
  openGraph: {
    type: "website",
    url: "https://pixel-muse.vercel.app",
    title: "Pixel Muse",
    description:
      "Pixel Muse is a suite of bots that create and share random color pixel images on Twitter and Telegram platforms. You can enjoy these beautiful images every day by following the bots on social media or requesting them via messages or mentions.",
    siteName: "Pixel Muse",
    images: [
      {
        url: "/images/pixel-muse-bot.jpeg",
      },
    ],
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
  },
  icons: [
    { rel: "apple-touch-icon", sizes: "120x120", url: "./images/favicon.png" },
    {
      rel: "icon",
      sizes: "32x32",
      type: "image/png",
      url: "./images/favicon.png",
    },
    {
      rel: "icon",
      sizes: "16x16",
      type: "image/png",
      url: "./images/favicon.png",
    },
  ],
  viewport: "width=device-width, initial-scale=1.0",
  authors: [{ name: "Sami Warraich", url: "https://samiwarraich.github.io" }],
};
