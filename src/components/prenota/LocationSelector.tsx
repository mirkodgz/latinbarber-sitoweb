"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { LOCATIONS } from "@/lib/constants";

type LocationSelectorProps = {
  selectedId: string;
  onSelect: (id: string) => void;
};

export default function LocationSelector({
  selectedId,
  onSelect,
}: LocationSelectorProps) {
  return (
    <section className="py-16">
      <Container>
        <div className="mb-8 text-center md:text-left">
          <p className="eyebrow">Scegli la sede</p>
          <h2 className="mt-3 heading-2">Milano Lorenteggio o Bicocca</h2>
        </div>
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {LOCATIONS.map((location) => {
            const isActive = selectedId === location.id;
            return (
              <motion.button
                key={location.id}
                type="button"
                variants={fadeInUp}
                onClick={() => onSelect(location.id)}
                className={`group relative overflow-hidden rounded-3xl border-2 p-0 text-left transition focus:outline-none ${
                  isActive
                    ? "border-accent shadow-glow"
                    : "border-white/10 hover:border-white/40"
                }`}
              >
                <Image
                  src={location.image}
                  alt={location.name}
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <p className="text-sm uppercase tracking-[0.1em] text-muted">
                    {location.id === "lorenteggio"
                      ? "Milano Sud-Ovest"
                      : "Milano Nord"}
                  </p>
                  <h3 className="mt-2 heading-2">{location.name}</h3>
                  <p className="mt-1 text-sm text-muted">{location.address}</p>
                  <span className="mt-4 inline-flex items-center justify-center rounded-full bg-black/70 px-5 py-2 text-xs uppercase tracking-[0.1em] text-accent">
                    {isActive ? "Selezionata" : "Seleziona"}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

