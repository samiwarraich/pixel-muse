import "./globals.css";
import { Header, Footer } from "@/components";
import { firaCode } from "@/utils";

export { metadata } from "@/utils";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${firaCode.variable} font-fira`}>
      <body>
        <div className="container mx-auto m-4">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
