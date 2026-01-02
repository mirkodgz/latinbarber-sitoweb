"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeProps {
    className?: string; // Additional classes for the container
    children: React.ReactNode; // Content to scroll
    velocity?: number; // Speed of the marquee (not used in this simplified CSS version but kept for API compat)
    repeat?: number; // How many times to repeat content to fill screen
}

export const Marquee = ({
    className,
    children,
    repeat = 4,
    ...props
}: MarqueeProps) => {
    return (
        <div className={cn("overflow-hidden w-full whitespace-nowrap flex bg-white", className)} {...props}>
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20, // Adjust speed here
                }}
            >
                {Array.from({ length: repeat }).map((_, i) => (
                    <div key={i} className="flex items-center mx-4">
                        {children}
                    </div>
                ))}
            </motion.div>
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20, // Adjust speed here
                }}
                aria-hidden="true"
            >
                {Array.from({ length: repeat }).map((_, i) => (
                    <div key={i} className="flex items-center mx-4">
                        {children}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

// Simplified version for just "text + star" scrolling
export function TextMarquee() {
    return (
        <div className="w-full bg-white overflow-hidden py-4 border-y border-gray-200">
            <motion.div
                className="flex whitespace-nowrap items-center"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 25,
                }}
            >
                {/* Content Block repeated enough to fill any screen */}
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="flex items-center">
                        <span className="font-heading text-[60px] md:text-[100px] text-black uppercase font-bold tracking-tight opacity-10 select-none">
                            TAGLIO
                        </span>
                        <span className="mx-8 text-black text-4xl opacity-20">✦</span>
                        <span className="font-heading text-[60px] md:text-[100px] text-black uppercase font-bold tracking-tight opacity-10 select-none">
                            BARBA
                        </span>
                        <span className="mx-8 text-black text-4xl opacity-20">✦</span>
                        <span className="font-heading text-[60px] md:text-[100px] text-black uppercase font-bold tracking-tight opacity-10 select-none">
                            TRATTAMENTI
                        </span>
                        <span className="mx-8 text-black text-4xl opacity-20">✦</span>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
