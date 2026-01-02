"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function BookingEmbed() {
  return (
    <motion.div
      className="rounded-3xl border border-dashed border-white/20 bg-surface/80 p-8 text-center text-muted"
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <p className="font-heading text-xs uppercase tracking-[0.6em] text-accent">
        Booking Embed
      </p>
      <p className="mt-4 text-sm text-muted">
        Qui integreremo l&apos;iframe GoHighLevel per la prenotazione diretta.
        Puoi sostituire questo placeholder con il codice definitivo.
      </p>
      <div className="mt-6 h-64 rounded-2xl border border-white/10 bg-black/60" />
    </motion.div>
  );
}

