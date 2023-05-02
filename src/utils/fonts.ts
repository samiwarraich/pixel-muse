import localFont from "@next/font/local";

export const firaCode = localFont({
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
