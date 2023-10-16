import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pixel Muse",
    short_name: "Pixel Muse",
    description:
      "Pixel Muse is a suite of bots that create and share random color pixel images on Twitter and Telegram platforms. You can enjoy these beautiful images every day by following the bots on social media or requesting them via messages or mentions.",
    start_url: "/",
    display: "standalone",
    background_color: "#1C2331",
    theme_color: "#1C2331",
    icons: [
      {
        src: "./images/favicon.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: "./images/favicon.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  };
}
