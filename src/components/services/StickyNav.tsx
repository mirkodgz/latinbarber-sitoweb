"use client";

import { useState, useEffect } from "react";
import Container from "@/components/layout/Container";
import { SERVICE_CATEGORIES } from "@/data/services";

export default function StickyNav() {
    const [activeTab, setActiveTab] = useState(SERVICE_CATEGORIES[0].id);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 140; // Height of header + nav
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = SERVICE_CATEGORIES.map(cat => document.getElementById(cat.id));
            const scrollPosition = window.scrollY + 150;

            sections.forEach(section => {
                if (section) {
                    const top = section.offsetTop;
                    const height = section.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveTab(section.id);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="sticky top-[70px] z-40 w-full bg-accent py-2 shadow-lg">
            <Container>
                <div className="flex flex-wrap items-center justify-center gap-1 md:flex-nowrap md:gap-0">
                    {SERVICE_CATEGORIES.map((cat, index) => (
                        <button
                            key={cat.id}
                            onClick={() => scrollToSection(cat.id)}
                            className={`flex-1 px-4 py-3 text-center font-heading text-[12px] md:text-[14px] uppercase tracking-widest transition-all duration-300 hover:bg-black/5 ${activeTab === cat.id ? "bg-black text-white" : "text-black"
                                } ${index !== SERVICE_CATEGORIES.length - 1 ? "md:border-r border-black/10" : ""}`}
                        >
                            {cat.title}
                        </button>
                    ))}
                </div>
            </Container>
        </div>
    );
}
