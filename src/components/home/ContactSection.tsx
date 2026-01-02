"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ContactSection() {
  return (
    <section className="bg-background py-20">
      <Container>
        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Location Column */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center text-center"
          >
            {/* Location Icon */}
            <div className="mb-6 flex h-10 w-10 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="h-full w-full fill-accent"
              >
                <path d="M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z" />
              </svg>
            </div>

            {/* Title */}
            <h3 className="mb-4 font-heading text-[19px] font-normal uppercase leading-[1em] tracking-[0em] text-[#FAF5EA]">
              DOVE SIAMO
            </h3>

            {/* Address */}
            <p className="mb-6 font-heading text-[19px] font-normal uppercase leading-[1em] tracking-[0em] text-[#FAF5EA]">
              VIA LORENTEGGIO, 234, 20147
              <br />
              MILANO MI
            </p>

            {/* Google Maps Link */}
            <Link
              href="https://maps.app.goo.gl/q9ekZbHGMSe59LFD6"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-sans text-base font-bold uppercase leading-[150%] text-accent transition hover:opacity-80"
            >
              <span>GOOGLE MAPS</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="h-5 w-5 fill-accent transition-transform group-hover:translate-x-1"
              >
                <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
              </svg>
            </Link>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center text-center"
          >
            {/* Phone Icon */}
            <div className="mb-6 flex h-10 w-10 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-full w-full fill-accent"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>

            {/* Title */}
            <h3 className="mb-4 font-heading text-[19px] font-normal uppercase leading-[1em] tracking-[0em] text-[#FAF5EA]">
              CONTATTACI
            </h3>

            {/* Phone Numbers */}
            <div className="space-y-2 font-heading text-[19px] font-normal leading-[1em] tracking-[0em] text-[#FAF5EA]">
              <p>
                <Link
                  href="tel:+393518552351"
                  className="transition hover:text-accent"
                >
                  +39 351 855 2351
                </Link>{" "}
                - PRENOTA
              </p>
              <p>
                <Link
                  href="tel:+393512296273"
                  className="transition hover:text-accent"
                >
                  +39 351 229 6273
                </Link>{" "}
                - INFO
              </p>
            </div>
          </motion.div>

          {/* Opening Hours Column */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center text-center"
          >
            {/* Clock Icon */}
            <div className="mb-6 flex h-10 w-10 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-full w-full fill-accent"
              >
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
              </svg>
            </div>

            {/* Title */}
            <h3 className="mb-4 font-heading text-[19px] font-normal uppercase leading-[1em] tracking-[0em] text-[#FAF5EA]">
              ORARI APERTURA
            </h3>

            {/* Hours */}
            <div className="space-y-2 font-heading text-[19px] font-normal leading-[1em] tracking-[0em] text-[#FAF5EA]">
              <p>LUNEDÌ - SABATO: 9:00 - 20:00</p>
              <p>DOMENICA: 10:00 - 20:00</p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

