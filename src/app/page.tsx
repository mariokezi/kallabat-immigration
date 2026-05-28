import { Hero } from "@/components/sections/hero";
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
