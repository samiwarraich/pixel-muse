import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { Header, Footer } from "@/components";
import { firaCode } from "@/utils";

export { metadata } from "@/utils";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const MS_CLARITY = process.env.NEXT_PUBLIC_MS_CLARITY;
  const FB_PIXEL = process.env.NEXT_PUBLIC_FB_PIXEL;
  return (
    <html lang="en" className={`${firaCode.variable} font-fira-code`}>
      <body>
        <div className="container mx-auto m-4">
          <Header />
          {children}
          <Analytics />
          <Script type="text/javascript" id="ms-clarity">
            {`(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${MS_CLARITY}");`}
          </Script>
          <Script id="fb-pixel">
            {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL}');
            fbq('track', 'PageView');`}
          </Script>
          <Footer />
        </div>
      </body>
    </html>
  );
}
