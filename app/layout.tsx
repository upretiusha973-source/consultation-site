import type { Metadata } from "next";
import Script from "next/script";
import type { CSSProperties } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://digital-usha-landing-page.vercel.app"),
  title: "Digital Usha | Free 1:1 AI Marketing Consultation",
  description:
    "Book a free 1:1 AI marketing consultation and get a customized marketing strategy built specifically for your business.",
  openGraph: {
    title: "Digital Usha | Free 1:1 AI Marketing Consultation",
    description:
      "Get a customized marketing strategy built specifically for your business with a free 1:1 AI consultation.",
    url: "https://digital-usha-landing-page.vercel.app",
    siteName: "Digital Usha",
    type: "website",
    images: [
      {
        url: "/logoo.png",
        width: 1200,
        height: 630,
        alt: "Digital Usha logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Usha | Free 1:1 AI Marketing Consultation",
    description:
      "Book your free AI consultation and receive a customized marketing strategy for your business.",
    images: ["/logoo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{ "--font-manrope": "Arial, Helvetica, sans-serif", "--font-cormorant": "Georgia, serif" } as CSSProperties}
    >
      <body>
        {children}
        <Script
          id="meta-pixel"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1711852193840597');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1711852193840597&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
