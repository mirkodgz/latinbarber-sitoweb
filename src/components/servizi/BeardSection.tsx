import ServiceSection from "./ServiceSection";
import { BEARD_SERVICES } from "@/lib/constants";

export default function BeardSection() {
  return (
    <ServiceSection
      eyebrow="Barba"
      title={BEARD_SERVICES.title}
      description={BEARD_SERVICES.description}
      includes={BEARD_SERVICES.includes}
      image={BEARD_SERVICES.image}
      reverse
    />
  );
}

