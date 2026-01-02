"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { FlowButton } from "@/components/ui/FlowButton";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const PRICES_LEFT = [
    { name: "Modellatura Barba Xpress", price: "DA 10€" },
    { name: "Taglio + Shampoo", price: "DA 15€" },
    { name: "Trattamento Barba", price: "DA 15€" },
    { name: "Servizio Taglio + Barba", price: "20€" },
    { name: "Design con Linee Personalizzate", price: "DA 5€" },
    { name: "Depilazione con Cera", price: "DA 5€" },
];

const PRICES_RIGHT = [
    { name: "Pulizia Viso Maschera Black/Gold + Esfoliante", price: "DA 20€" },
    { name: "Ondulazioni", price: "DA 45€" },
    { name: "Pacchetto Tinta Capelli", price: "DA 90€" },
    { name: "Pacchetto Permanente", price: "DA 80€" },
    { name: "Pacchetto Meches", price: "DA 80€" },
    { name: "Depilazione con Filo", price: "DA 5€" },
];

export default function PricesSection() {
    return (
        <section className="bg-black py-24">
            <Container className="max-w-[1600px] space-y-16 px-4 lg:px-0">
                {/* Header */}
                <div className="mx-auto grid gap-8 lg:max-w-[1200px] lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <h2 className="font-heading text-[48px] leading-none text-white uppercase">
                            Prezzi
                        </h2>
                    </div>
                    <p className="font-sans text-[18px] font-normal leading-[1.2em] tracking-[-0.03em] text-white">
                        Offriamo servizi di alta qualità a prezzi competitivi, pensati per soddisfare ogni esigenza. Trasparenza e professionalità sono alla base delle nostre offerte, garantendo il miglior rapporto qualità-prezzo.
                    </p>
                </div>

                {/* Price List */}
                <motion.div
                    className="mx-auto grid gap-x-16 gap-y-6 lg:max-w-[1200px] lg:grid-cols-2"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Left Column */}
                    <div className="space-y-6">
                        {PRICES_LEFT.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="flex items-end justify-between gap-4"
                            >
                                <span className="font-heading text-[20px] uppercase tracking-wider text-white w-[245px] shrink-0 select-none whitespace-pre-wrap break-words leading-none">
                                    {item.name}
                                </span>
                                <span className="mb-1 h-[2px] flex-1 w-auto bg-white"></span>
                                <span className="font-heading text-[20px] font-normal text-accent whitespace-nowrap shrink-0">
                                    {item.price}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {PRICES_RIGHT.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="flex items-end justify-between gap-4"
                            >
                                <span className="font-heading text-[20px] uppercase tracking-wider text-white w-[245px] shrink-0 select-none whitespace-pre-wrap break-words leading-none">
                                    {item.name}
                                </span>
                                <span className="mb-1 h-[2px] flex-1 w-auto bg-white"></span>
                                <span className="font-heading text-[20px] font-normal text-accent whitespace-nowrap shrink-0">
                                    {item.price}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <div className="flex justify-center pt-8">
                    <Link href="/servizi">
                        <FlowButton text="GUARDA TUTTI I SERVIZI" />
                    </Link>
                </div>
            </Container>
        </section>
    );
}
