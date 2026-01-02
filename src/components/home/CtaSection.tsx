"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { fadeInUp } from "@/lib/animations";

export default function CtaSection() {
  return (
    <section className="py-20">
      <Container>
        <motion.div
          className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-r from-accent to-[#c7981f] p-10 text-black shadow-glow"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="eyebrow">Prenotazione immediata</p>
          <h3 className="mt-4 heading-2">Pronto a rivoluzionare il tuo look?</h3>
          <p className="mt-4 max-w-2xl text-base">
            Seleziona la sede che preferisci e assicurati il tuo slot con il
            team LatinBarber. Rituali esclusivi, prodotti premium e cura
            sartoriale in ogni dettaglio.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/prenota"
              className="rounded-full bg-black px-8 py-4 font-heading text-xs uppercase tracking-[0.05em] text-accent transition hover:bg-surface"
            >
              Prenota ora
            </Link>
            <Link
              href="/servizi"
              className="rounded-full border border-black px-8 py-4 font-heading text-xs uppercase tracking-[0.05em]"
            >
              Consulta il listino
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

