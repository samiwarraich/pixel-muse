import "./globals.css";
import localFont from "@next/font/local";

export const metadata = {
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${firaCode.variable} font-fira`}>
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="all" />
        <meta
          name="google-site-verification"
          content="hztt4vcG42duVjOSpid_W9ugB5xznC01VRcutNPlBpI"
        />
        <meta name="msvalidate.01" content="DD992E9CC85A0E458EA3599D0526C78A" />
      </head>
      <body>{children}</body>
    </html>
  );
}

const firaCode = localFont({
  src: [
    {
      path: "../../public/fonts/FiraCode-Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/FiraCode-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/FiraCode-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/FiraCode-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/FiraCode-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-firaCode",
});
