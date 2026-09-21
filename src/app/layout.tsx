import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer, MobileCtaBar } from "@/components/Footer";
import { company, addressLines } from "@/content/company";

const dmSans = localFont({
  src: "../../node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2",
  weight: "100 1000",
  style: "normal",
  variable: "--font-dm-sans",
  display: "swap",
});
const manrope = localFont({
  src: "../../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2",
  weight: "200 800",
  style: "normal",
  variable: "--font-manrope",
  display: "swap",
});
const fraunces = localFont({
  src: "../../node_modules/@fontsource-variable/fraunces/files/fraunces-latin-wght-normal.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://helsleyroofing.com"),
  title: {
    default:
      "Helsley Roofing Company | Plano, TX Roofers Since 1992",
    template: "%s | Helsley Roofing Company",
  },
  description:
    "Helsley Roofing Company has served Dallas, Fort Worth and Plano homeowners since 1992. Residential roofing, roof repair, storm damage repair, gutters and multi-family roofing. Free inspections.",
  openGraph: {
    type: "website",
    siteName: company.name,
    locale: "en_US",
  },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: company.name,
  url: "https://helsleyroofing.com",
  telephone: company.phone,
  foundingDate: "1992",
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    addressRegion: company.address.state,
    postalCode: company.address.zip,
    addressCountry: "US",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: company.googleRating,
    reviewCount: company.googleReviewCount,
  },
  description: addressLines.join(", "),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${manrope.variable} ${fraunces.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
