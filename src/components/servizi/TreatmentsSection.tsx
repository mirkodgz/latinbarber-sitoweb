import ServiceSection from "./ServiceSection";
import { TREATMENT_SERVICES } from "@/lib/constants";

export default function TreatmentsSection() {
  return (
    <ServiceSection
      eyebrow="Trattamenti"
      title={TREATMENT_SERVICES.title}
      description={TREATMENT_SERVICES.description}
      includes={TREATMENT_SERVICES.includes}
      image={TREATMENT_SERVICES.image}
    />
  );
}

