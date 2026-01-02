"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SERVICES_PREVIEW } from "@/lib/constants";
import { FlowButton } from "@/components/ui/FlowButton";

export default function ServicesPreview() {
  return (
    <section className="bg-[#141414] py-24">
      <Container className="max-w-[1600px] space-y-12 px-4 lg:px-0">
        <div className="mx-auto grid gap-8 lg:max-w-[1200px] lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-sans text-xs uppercase text-accent font-semibold tracking-[0.38em]">
              Le nostre Specialità
            </p>
            <h2 className="mt-3 font-heading text-[48px] leading-none text-white">
              SERVIZI
            </h2>
          </div>
          <p className="font-sans text-[18px] font-normal leading-[1.2em] tracking-[-0.03em] text-white">
            Offriamo un&apos;ampia gamma di servizi di barbiere in puro stile americano, mescolando il calore e la passione latina con l&apos;eleganza e lo stile italiano. Che tu preferisca un taglio classico o moderno.
          </p>
        </div>

        <motion.div
          className="grid gap-0 overflow-hidden lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {SERVICES_PREVIEW.map((service) => (
            <motion.article key={service.title} variants={fadeInUp}>
              <Link
                href={service.href}
                className="group relative block h-[505px] w-full overflow-hidden"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-105 group-hover:grayscale-0 grayscale"
                  priority={service.title === "Barba"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center border border-white/30 bg-black/40 px-4 py-2 font-heading text-sm uppercase tracking-[0.1em] text-white">
                      {service.title}
                    </span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition group-hover:border-accent group-hover:text-accent">
                      →
                    </span>
                  </div>
                  <div className="h-[2px] w-16 bg-accent" />
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <div className="flex justify-center pt-2">
          <Link href="/servizi">
            <FlowButton text="SCOPRI TUTTI I SERVIZI" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

