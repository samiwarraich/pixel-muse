import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Header, Footer, MSClarity } from "@/components";
import { firaCode } from "@/utils";

export { metadata } from "@/utils";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${firaCode.variable} font-fira-code`}>
      <body>
        <div className="container mx-auto m-4">
          <Header />
          {children}
          <Analytics />
          <MSClarity />
          <Footer />
        </div>
      </body>
    </html>
  );
}
