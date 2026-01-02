import ServiceSection from "./ServiceSection";
import { HAIR_SERVICES } from "@/lib/constants";

export default function HairSection() {
  return (
    <ServiceSection
      eyebrow="Taglio di capelli"
      title={HAIR_SERVICES.title}
      description={HAIR_SERVICES.description}
      includes={HAIR_SERVICES.includes}
      image={HAIR_SERVICES.image}
    />
  );
}

