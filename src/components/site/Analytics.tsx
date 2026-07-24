/**
 * Google Analytics 4 + Google Tag Manager loader.
 *
 * Set the following in your project env (Publish → Environment):
 *   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 *   VITE_GTM_ID=GTM-XXXXXXX
 *
 * If a value is missing, the corresponding tag is not injected.
 */
import { useEffect } from "react";

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
const GTM_ID = import.meta.env.VITE_GTM_ID as string | undefined;

export function Analytics() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // GTM
    if (GTM_ID && !document.getElementById("gtm-script")) {
      const s = document.createElement("script");
      s.id = "gtm-script";
      s.async = true;
      s.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`;
      document.head.appendChild(s);

      const noscript = document.createElement("noscript");
      noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
      document.body.prepend(noscript);
    }

    // GA4
    if (GA_ID && !document.getElementById("ga-script")) {
      const s = document.createElement("script");
      s.id = "ga-script";
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(s);

      const c = document.createElement("script");
      c.innerHTML = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`;
      document.head.appendChild(c);
    }
  }, []);
  return null;
}
