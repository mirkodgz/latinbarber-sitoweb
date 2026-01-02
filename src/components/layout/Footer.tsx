"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { SOCIAL_LINKS } from "@/lib/constants";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#0A0A0A] pt-16 pb-8 border-t border-white/5">
            <Container>
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">

                    {/* Brand Column (Left Box) */}
                    <div className="lg:col-span-4 bg-[#111111] p-8 rounded-1xl border border-white/5 flex flex-col justify-center">
                        <Link href="/" className="block w-[180px] mb-8 mx-auto lg:mx-0">
                            <Image
                                src="/LatinBarber-Logo-Original.png"
                                alt="LatinBarber Studio"
                                width={180}
                                height={60}
                                className="w-full h-auto"
                            />
                        </Link>
                        <p className="font-sans text-[15px] leading-relaxed text-white font-light text-center lg:text-left">
                            Siamo orgogliosi di offrire un'esperienza unica ispirata allo stile e alla cultura dell'America Latina. Siamo una barberia latina che fonde tecniche tradizionali latine e moderne, evidenziando sempre calore, dedizione, uno stile inconfondibile e un'attenzione personalizzata.
                        </p>
                    </div>

                    {/* Links Section (Right Box) */}
                    <div className="lg:col-span-8 bg-[#111111] p-8 rounded-1xl border border-white/5">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* MENU */}
                            <div className="space-y-6">
                                <h4 className="font-heading text-[20px] tracking-wider text-accent uppercase">
                                    MENU
                                </h4>
                                <ul className="space-y-4 font-sans text-[15px] font-light text-white">
                                    <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                                    <li><Link href="/servizi" className="hover:text-accent transition-colors">Servizi</Link></li>
                                    <li><Link href="/gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
                                    <li><Link href="/prenota" className="hover:text-accent transition-colors">Prenota un appuntamento</Link></li>
                                </ul>
                            </div>

                            {/* SERVIZI */}
                            <div className="space-y-6">
                                <h4 className="font-heading text-[20px] tracking-wider text-accent uppercase">
                                    SERVIZI
                                </h4>
                                <ul className="space-y-4 font-sans text-[15px] font-light text-white">
                                    <li><Link href="/servizi#taglio" className="hover:text-accent transition-colors">Taglio di capelli</Link></li>
                                    <li><Link href="/servizi#barba" className="hover:text-accent transition-colors">Barba</Link></li>
                                    <li><Link href="/servizi#trattamenti" className="hover:text-accent transition-colors">Trattamenti aggiuntivi</Link></li>
                                    <li><Link href="/servizi#tinte" className="hover:text-accent transition-colors">Tinte e colorazioni</Link></li>
                                </ul>
                            </div>

                            {/* SEDI */}
                            <div className="space-y-6">
                                <h4 className="font-heading text-[20px] tracking-wider text-accent uppercase">
                                    SEDI
                                </h4>
                                <ul className="space-y-4 font-sans text-[15px] font-light text-white">
                                    <li><Link href="/prenota" className="hover:text-accent transition-colors">Prenota - Sede Lorenteggio</Link></li>
                                    <li><Link href="/prenota" className="hover:text-accent transition-colors">Prenota - Sede Bicocca</Link></li>
                                    <li><Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                                    <li><Link href="#" className="hover:text-accent transition-colors">Cookie Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar Social & Legal */}
                <div className="bg-[#111111] rounded-1xl border border-white/5 p-8 flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Social Left */}
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <h4 className="font-heading text-[24px] tracking-wider text-accent uppercase">
                            SIAMO PROTAGONISTI SUI SOCIAL !
                        </h4>
                        <div className="flex gap-3">
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-[#222] border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-black transition-all duration-300"
                                >
                                    <span className="sr-only">{social.label}</span>
                                    {/* Icons mapped simply based on label or generic */}
                                    {/* Icon rendering */}
                                    <span className="text-lg">
                                        {social.label === 'Instagram' && <FaInstagram />}
                                        {social.label === 'TikTok' && <FaTiktok />}
                                        {social.label === 'Facebook' && <FaFacebook />}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Legal Right */}
                    <div className="text-right space-y-1">
                        <p className="font-sans text-[13px] text-white">P.IVA 12948270967</p>
                        <p className="font-sans text-[13px] text-white">© {currentYear} LatinBarber Studio - All rights reserved</p>
                    </div>

                </div>
            </Container>
        </footer>
    );
}
