"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";

const STATS = [
    { label: "anni di esperienza alle spalle", value: 10, prefix: "+", suffix: "" },
    { label: "stelle su Google", value: 4.9, prefix: "", suffix: "", decimals: 1 },
    { label: "recensioni su Google", value: 218, prefix: "+", suffix: "" },
    { label: "clienti soddisfatti", value: 3, prefix: "+", suffix: "K" },
];

function Counter({
    value,
    prefix = "",
    suffix = "",
    decimals = 0,
}: {
    value: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const spring = useSpring(0, {
        mass: 1,
        stiffness: 75,
        damping: 15,
    });

    const display = useTransform(spring, (current) => {
        return current.toFixed(decimals);
    });

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, spring, value]);

    const [displayValue, setDisplayValue] = useState("0");

    useEffect(() => {
        return display.on("change", (latest) => {
            setDisplayValue(latest);
        });
    }, [display]);

    return (
        <span ref={ref} className="font-heading text-[50px] md:text-[80px] font-bold text-[#faf5ea] leading-none">
            {prefix}
            {displayValue}
            {suffix}
        </span>
    );
}

export default function StatsSection() {
    return (
        <section className="relative w-full py-24 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/background-numbers-counter.avif"
                    alt="Stats Background"
                    fill
                    className="object-cover"
                    priority={false}
                />
                <div className="absolute inset-0 bg-black/60" /> {/* Overlay for better readability */}
            </div>

            <Container className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {STATS.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center justify-center p-4">
                            <Counter
                                value={stat.value}
                                prefix={stat.prefix}
                                suffix={stat.suffix}
                                decimals={stat.decimals}
                            />
                            <p className="mt-2 font-sans text-base md:text-lg text-white/90 font-light tracking-wide">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
