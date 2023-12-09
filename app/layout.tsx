import "@/styles/globals.css";
import {
  Header,
  Footer,
  MSClarity,
  Analytics,
  SpeedInsights,
} from "@/components";
import { firaCode } from "@/utils";

export { metadata, viewport } from "@/utils";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${firaCode.variable} font-fira-code`}>
      <body className="select-none">
        <main className="container mx-auto m-4 h-screen">
          <Header />
          {children}
          <Analytics />
          <SpeedInsights />
          <MSClarity />
          <Footer />
        </main>
      </body>
    </html>
  );
}
