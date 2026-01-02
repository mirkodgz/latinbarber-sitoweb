"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { scaleIn, staggerContainer } from "@/lib/animations";
import { SERVICE_PACKAGES } from "@/lib/constants";

export default function PackagesSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Pacchetti premium</p>
            <h2 className="mt-2 heading-2">Esperienze complete</h2>
          </div>
          <p className="max-w-lg text-muted">
            Rituali studiati per accompagnarti in ogni fase del restyling. Seleziona
            il pacchetto ideale e personalizzalo con i nostri barber master.
          </p>
        </div>
        <motion.div
          className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {SERVICE_PACKAGES.map((pkg) => (
            <motion.article
              key={pkg.name}
              variants={scaleIn}
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-surface/70 p-6 shadow-lg transition hover:-translate-y-1 hover:border-accent/50"
            >
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  width={800}
                  height={600}
                  className="h-48 w-full rounded-lg object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="mt-6 flex items-end justify-between text-accent">
                <p className="text-3xl font-heading">{pkg.price}</p>
                <p className="text-xs uppercase tracking-[0.05em] text-muted">
                  {pkg.duration}
                </p>
              </div>
              <h3 className="mt-4 heading-3">{pkg.name}</h3>
              <p className="mt-2 text-sm text-muted">{pkg.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-foreground">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

