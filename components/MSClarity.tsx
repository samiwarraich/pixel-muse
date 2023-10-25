import Script from "next/script";

function MSClarity() {
  const MS_CLARITY = process.env.NEXT_PUBLIC_MS_CLARITY;
  if (!MS_CLARITY) return null;
  return (
    <>
      <Script type="text/javascript" id="ms-clarity" strategy="lazyOnload">
        {`(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${MS_CLARITY}");`}
      </Script>
    </>
  );
}

export default MSClarity;
