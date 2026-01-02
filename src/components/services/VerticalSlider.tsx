"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface VerticalSliderProps {
    images: string[];
    alt: string;
}

export default function VerticalSlider({ images, alt }: VerticalSliderProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#111]">
            <AnimatePresence initial={false} mode="wait">
                <motion.div
                    key={images[index]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.21, 1.02, 0.47, 0.98],
                    }}
                    className="absolute inset-0 h-full w-full"
                >
                    <Image
                        src={images[index]}
                        alt={alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 40vw"
                        priority
                    />
                </motion.div>
            </AnimatePresence>

            {/* Vertical Dots Indicators */}
            <div className="absolute left-4 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${i === index ? "bg-accent h-4" : "bg-white/30"
                            }`}
                        aria-label={`Go to image ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
