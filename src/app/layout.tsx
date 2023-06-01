import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { Header, Footer } from "@/components";
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
          {/* Hotjar Tracking Code for https://pixel-muse.vercel.app  */}
          <Script id="hotjar">
            {`(function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_SITE_ID},hjsv:${process.env.NEXT_PUBLIC_HOTJAR_VERSION}};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
          </Script>
          <Footer />
        </div>
      </body>
    </html>
  );
}
