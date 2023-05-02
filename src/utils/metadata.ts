import { Metadata } from "next";

export const metaData: Metadata = {
  title: "Color Gradient",
  description:
    "Color Gradient is a suite of bots that create and share gradient color images on Twitter and Telegram platforms. You can enjoy these beautiful images every day by following the bots on social media or requesting them via messages or mentions.",
  twitter: {
    card: "summary_large_image",
    title: "Color Gradient",
    description:
      "Color Gradient is a suite of bots that create and share gradient color images on Twitter and Telegram platforms. You can enjoy these beautiful images every day by following the bots on social media or requesting them via messages or mentions.",
    site: "@gradient_bot",
    creator: "@samiwarraich2",
    images: "https://colorgradient.vercel.app/images/color-gradient-bot.jpg",
  },
  openGraph: {
    type: "website",
    url: "https://colorgradient.vercel.app",
    title: "Color Gradient",
    description:
      "Color Gradient is a suite of bots that create and share gradient color images on Twitter and Telegram platforms. You can enjoy these beautiful images every day by following the bots on social media or requesting them via messages or mentions.",
    siteName: "Color Gradient",
    images: [
      {
        url: "https://colorgradient.vercel.app/images/color-gradient-bot.jpg",
      },
    ],
  },
  robots: "all",
  keywords: [
    "colors",
    "colour",
    "gradient",
    "color code",
    "gradient background",
    "color gradient",
    "gradient colors",
    "gradients",
    "gradient generator",
    "help with color management in windows",
    "hex color",
    "samiwarraich",
    "Sami Warraich",
  ],
  other: {
    "google-site-verification": "hztt4vcG42duVjOSpid_W9ugB5xznC01VRcutNPlBpI",
    "msvalidate.01": "DD992E9CC85A0E458EA3599D0526C78A",
  },
  icons: [
    { rel: "apple-touch-icon", sizes: "120x120", url: "./images/favicon.png" },
    { rel: "icon", sizes: "32x32", url: "./images/favicon.png" },
    { rel: "icon", sizes: "16x16", url: "./images/favicon.png" },
  ],
  viewport: "width=device-width, initial-scale=1.0",
};
