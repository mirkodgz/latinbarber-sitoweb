"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { FlowButton } from "@/components/ui/FlowButton";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img-hero-1.avif"
          alt="LatinBarber Studio"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Dark Overlay - más sutil para que se vea mejor la imagen */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
      </div>

      {/* Content - Posicionado en la parte inferior izquierda */}
      <Container className="relative z-10 flex h-full items-end pb-16 md:pb-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex max-w-[800px] flex-col gap-[12px]"
        >
          {/* Eyebrow text */}
          <motion.p variants={fadeInUp} className="hero-eyebrow">
            Barberia classica e moderna
          </motion.p>

          {/* Título principal */}
          <motion.h1
            variants={fadeInUp}
            className="hero-title"
          >
            barbiere a{" "}
            <span className="text-accent">milano</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.h2
            variants={fadeInUp}
            className="hero-title"
          >
            stile latino, eleganza{" "}
            <span className="text-accent">italiana</span>
          </motion.h2>

          {/* Botón CTA */}
          <motion.div variants={fadeInUp} className="pt-2">
            <Link href="/servizi">
              <FlowButton text="Servizi" />
            </Link>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator - Lado derecho */}
      <div className="absolute bottom-8 right-6 z-10 hidden flex-col items-center gap-3 text-white/50 md:flex lg:right-8">
        <span className="text-xs font-sans uppercase tracking-[0.3em] writing-vertical-rl">
          Scroll
        </span>
        <div className="h-16 w-px bg-white/30" />
      </div>
    </section>
  );
}

