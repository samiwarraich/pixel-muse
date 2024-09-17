import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  const systemTheme =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  return {
    name: "Pixel Muse",
    short_name: "Pixel Muse",
    description:
      "Pixel Muse is a suite of bots that create and share random color pixel images on Twitter and Telegram platforms. You can enjoy these beautiful images every day by following the bots on social media or requesting them via messages or mentions.",
    start_url: "/",
    display: "standalone",
    background_color: systemTheme === "dark" ? "#000000" : "#ffffff",
    theme_color: systemTheme === "dark" ? "#000000" : "#ffffff",
    icons: [
      {
        src: "/images/favicon.png",
        type: "image/png",
        sizes:
          "16x16 32x32 48x48 72x72 96x96 128x128 144x144 152x152 192x192 384x384 512x512 120x120 180x180 167x167 152x152",
      },
    ],
  };
}
