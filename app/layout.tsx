import "@/styles/globals.css";
import {
  Header,
  Footer,
  MSClarity,
  Analytics,
  SpeedInsights,
} from "@/components";
import { robotoMono } from "@/utils";

export { metadata, viewport } from "@/utils";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${robotoMono.variable} font-mono`}>
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
