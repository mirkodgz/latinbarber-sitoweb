"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { fadeInLeft, fadeInRight, fadeInUp } from "@/lib/animations";

type ServiceSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  includes: string[];
  image: string;
  reverse?: boolean;
};

export default function ServiceSection({
  eyebrow,
  title,
  description,
  includes,
  image,
  reverse = false,
}: ServiceSectionProps) {
  return (
    <section className="py-16">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          className={`space-y-6 ${reverse ? "lg:order-2" : ""}`}
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="eyebrow">{eyebrow}</p>
          <h3 className="heading-2">{title}</h3>
          <p className="text-lg text-muted">{description}</p>
          <ul className="space-y-3 text-sm text-foreground">
            {includes.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 border-b border-white/5 pb-3 last:border-none last:pb-0"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-xs text-accent">
                  ●
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className={`relative ${reverse ? "lg:order-1" : ""}`}
          variants={reverse ? fadeInLeft : fadeInRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="absolute -inset-4 rounded-3xl border border-white/10 bg-accent/5 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={image}
              alt={title}
              width={800}
              height={600}
              className="h-full w-full rounded-lg object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

