import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Joseph Kallabat & Associates, P.C. | Leaders In Global Immigration",
    template: "%s | Kallabat Immigration Law",
  },
  description:
    "Michigan's trusted immigration law firm since 1997. Employment-based visas, green cards, PERM, family immigration, and citizenship for employers and individuals.",
  keywords: [
    "immigration lawyer Michigan",
    "H-1B visa attorney",
    "employment immigration lawyer",
    "green card attorney",
    "PERM labor certification",
    "immigration law firm West Bloomfield",
    "Joseph Kallabat",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Joseph Kallabat & Associates, P.C.",
    title: "Leaders In Global Immigration | Kallabat Law",
    description:
      "Serving corporate and individual clients in employment and family immigration law since 1997. 601+ Google Reviews. AV Preeminent Rated.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
