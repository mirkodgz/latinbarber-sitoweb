import Container from "@/components/layout/Container";
import Hero from "@/components/home/Hero";
import ContactSection from "@/components/home/ContactSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import PricesSection from "@/components/home/PricesSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import TeamSection from "@/components/home/TeamSection";
import ReviewsSection from "@/components/home/ReviewsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ContactSection />




      <ServicesPreview />
      <PricesSection />
      <GalleryPreview />
      <StatsSection />
      <TeamSection />
      <ReviewsSection />
      {/* CtaSection removed as per user request */}
    </>
  );
}
