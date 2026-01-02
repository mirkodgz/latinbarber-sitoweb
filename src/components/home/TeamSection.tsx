"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const TEAM = [
    {
        name: "BRAYAN SUAREZ",
        image: "/brayan-suarez-01.avif"
    },
    {
        name: "JUNIOR ESCUDERO",
        image: "/junior-escudero-02.webp"
    },
    {
        name: "JOSE LUIS",
        image: "/joseluis-03.avif"
    },
    {
        name: "OSCAR JARA",
        image: "/oscar-jara-04.avif"
    },
];

export default function TeamSection() {
    return (
        <section className="bg-black py-24">
            <Container className="max-w-[1600px] space-y-16 px-4 lg:px-0">
                {/* Header */}
                <div className="mx-auto grid gap-8 lg:max-w-[1200px] lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <p className="font-sans text-xs uppercase text-accent font-semibold tracking-[0.38em]">
                            I NOSTRI BARBIERE
                        </p>
                        <h2 className="mt-3 font-heading text-[48px] leading-none text-white uppercase">
                            I NOSTRI BARBIERE
                        </h2>
                    </div>
                    <p className="font-sans text-[18px] font-normal leading-[1.2em] tracking-[-0.03em] text-white">
                        Pronto a rivoluzionare il tuo look?
                        <br />
                        Prenota subito il tuo servizio preferito con il nostro team di esperti.
                    </p>
                </div>

                {/* Team Grid */}
                <motion.div
                    className="mx-auto grid gap-6 sm:grid-cols-2 lg:max-w-[1200px] lg:grid-cols-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {TEAM.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="group relative"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[3/4] w-full overflow-hidden grayscale transition-all duration-500 group-hover:grayscale-0">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 25vw"
                                />
                            </div>

                            {/* Name Label */}
                            <div className="mt-0 border-l-[2px] border-accent bg-[#141414] py-6 text-center transition-colors group-hover:bg-[#1a1a1a]">
                                <span className="font-heading text-[20px] uppercase tracking-wider text-white">
                                    {member.name}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}
