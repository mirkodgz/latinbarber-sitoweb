"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/constants";
import { useRef } from "react";

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 100, rotateX: 15 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            type: "spring",
            damping: 20,
            stiffness: 100,
        },
    },
};

export default function GalleryGrid() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    return (
        <section ref={ref} className="py-24 bg-black relative">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
                >
                    {GALLERY_IMAGES.map((image, index) => (
                        <div key={index} className="break-inside-avoid">
                            <Card image={image} index={index} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function Card({ image, index }: { image: any; index: number }) {
    return (
        <motion.div
            variants={item}
            className="relative group rounded-2xl overflow-hidden block w-full bg-[#111] border border-white/10"
            style={{ isolation: "isolate" }}
        >
            {/* Image container with scale effect on hover */}
            <div className="relative overflow-hidden aspect-[4/5] w-full">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    className="h-full w-full"
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </motion.div>

                {/* Modern overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-y-full group-hover:translate-y-[-100%]" style={{ transitionDuration: '1.5s' }} />

            </div>
        </motion.div>
    );
}
