"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Container from "@/components/layout/Container";
import { TextMarquee } from "@/components/ui/Marquee";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { IoLocationOutline, IoCallOutline, IoTimeOutline } from "react-icons/io5";

export default function PrenotaPage() {


    return (
        <main className="bg-[#111111] min-h-screen">
            {/* HERO SECTION */}
            <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden pt-[80px]">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/background-pattern-hero-latinbarber.avif"
                        alt="Pattern Background"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/80 via-[#111111]/40 to-[#111111]" />
                </div>

                <Container className="relative z-10 text-center flex flex-col items-center">
                    <h1 className="font-heading text-[50px] md:text-[80px] text-white uppercase leading-none tracking-normal mb-6">
                        PRENOTA UN APPUNTAMENTO
                    </h1>
                    <p className="font-sans text-gray-300 max-w-2xl text-lg md:text-xl font-light mb-12 leading-relaxed">
                        Pronto a rivoluzionare il tuo look?<br className="hidden md:block" />
                    </p>


                </Container>
            </section>

            {/* BOOKING EMBED SECTION */}
            <section id="booking-section" className="py-20 relative z-10">
                <Container className="max-w-[1000px]">
                    {/* Booking Card */}
                    <div className="border border-white/10 rounded-3xl p-1 bg-[#0a0a0a] shadow-2xl overflow-hidden">
                        <div className="relative w-full bg-[#111] rounded-[22px] overflow-hidden min-h-[800px]">
                            <iframe
                                src="https://api.leadconnectorhq.com/widget/booking/Hs0mC6fRg9AjA2saJUh3"
                                style={{ width: '100%', border: 'none', minHeight: '800px' }}
                                scrolling="no"
                                id="Hs0mC6fRg9AjA2saJUh3_1767295423913"
                                title="Prenotazione LatinBarber"
                            />
                            <Script
                                src="https://link.msgsndr.com/js/form_embed.js"
                                type="text/javascript"
                                strategy="afterInteractive"
                            />
                        </div>
                    </div>
                </Container>
            </section>

            {/* INFO GRID SECTION */}
            <section className="py-24 bg-[#111]">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">

                        {/* DOVE SIAMO */}
                        <div className="flex flex-col items-center px-4 py-8 md:py-0">
                            <IoLocationOutline className="text-accent text-[50px] mb-6 stroke-[1.5px]" />
                            <h3 className="font-heading text-[28px] uppercase text-white mb-4 tracking-wide">
                                DOVE SIAMO
                            </h3>
                            <div className="text-gray-400 font-sans font-light leading-relaxed mb-6">
                                <p>Via Lorenteggio, 234, 20147</p>
                                <p>Milano MI</p>
                            </div>
                            <a href="https://maps.google.com" target="_blank" className="text-accent font-bold text-sm tracking-widest uppercase hover:underline flex items-center gap-2">
                                GOOGLE MAPS <span className="text-xs">❯</span>
                            </a>
                        </div>

                        {/* CONTATTACI */}
                        <div className="flex flex-col items-center px-4 py-8 md:py-0">
                            <IoCallOutline className="text-accent text-[50px] mb-6 stroke-[1.5px]" />
                            <h3 className="font-heading text-[28px] uppercase text-white mb-4 tracking-wide">
                                CONTATTACI
                            </h3>
                            <div className="text-gray-400 font-sans font-light leading-relaxed">
                                <p className="mb-2">+39 351 855 2351 - Prenota</p>
                                <p>+39 351 229 6273 - Info</p>
                            </div>
                        </div>

                        {/* OPENING HOURS */}
                        <div className="flex flex-col items-center px-4 py-8 md:py-0">
                            <IoTimeOutline className="text-accent text-[50px] mb-6 stroke-[1.5px]" />
                            <h3 className="font-heading text-[28px] uppercase text-white mb-4 tracking-wide">
                                OPENING HOURS
                            </h3>
                            <div className="text-gray-400 font-sans font-light leading-relaxed">
                                <p className="mb-2">Lunedì - Sabato: 9:00 - 20:00</p>
                                <p>Domenica: 10:00 - 20:00</p>
                            </div>
                        </div>

                    </div>
                </Container>
            </section>

            {/* MARQUEE BANNER */}
            <div className="border-t border-white/10 bg-black">
                <TextMarquee />
            </div>

        </main>
    );
}
