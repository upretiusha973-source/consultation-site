import type { Metadata } from "next";
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
        url: "/logo.png",
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
    images: ["/logo.png"],
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
      <body>{children}</body>
    </html>
  );
}
