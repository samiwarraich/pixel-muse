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
        sizes: "72x72",
      },
      {
        src: "./images/favicon.png",
        type: "image/png",
        sizes: "96x96",
      },
      {
        src: "./images/favicon.png",
        type: "image/png",
        sizes: "120x120",
      },
      {
        src: "./images/favicon.png",
        type: "image/png",
        sizes: "144x144",
      },
      {
        src: "./images/favicon.png",
        type: "image/png",
        sizes: "180x180",
      },
      {
        src: "./images/favicon.png",
        type: "image/png",
        sizes: "192x192",
      },
    ],
  };
}
