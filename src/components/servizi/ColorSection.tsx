import ServiceSection from "./ServiceSection";
import { COLOR_SERVICES } from "@/lib/constants";

export default function ColorSection() {
  return (
    <ServiceSection
      eyebrow="Tinte e colorazioni"
      title={COLOR_SERVICES.title}
      description={COLOR_SERVICES.description}
      includes={COLOR_SERVICES.includes}
      image={COLOR_SERVICES.image}
      reverse
    />
  );
}

