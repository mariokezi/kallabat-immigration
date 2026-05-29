import { Metadata } from "next";
import { Hero } from "@/components/sections/hero";

export const metadata: Metadata = {
  title: "Joseph Kallabat & Associates, P.C. | Leaders In Global Immigration",
  description: "Michigan's trusted immigration law firm since 1997. Employment-based visas, green cards, PERM, family immigration, and citizenship. 601+ Google reviews, 4.9 stars. AV Preeminent rated.",
};
import { Gateway } from "@/components/sections/gateway";
import { IndustriesSection } from "@/components/sections/industries";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WhyKallabat } from "@/components/sections/why-kallabat";
import { GoogleReviews } from "@/components/sections/google-reviews";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Gateway />
      <IndustriesSection />
      <ServicesGrid />
      <WhyKallabat />
      <GoogleReviews />
    </>
  );
}
