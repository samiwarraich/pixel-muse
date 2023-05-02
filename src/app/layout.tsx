import "./globals.css";
import { firaCode, metaData } from "@/utils";

export const metadata = metaData;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${firaCode.variable} font-fira`}>
      <body>{children}</body>
    </html>
  );
}
