"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";
import Image from "next/image";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

// Animation Variants
const menuVariants = {
  hidden: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { opacity: 0, y: 40, transition: { duration: 0.3 } },
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col bg-[#0A0A0A]"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Header inside Menu */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-white/5">
            <div className="w-[140px]">
              <Image
                src="/Logo-Actual2025-DEF.avif"
                alt="Latin Barber Logo"
                width={140}
                height={45}
                className="w-full h-auto opacity-90"
              />
            </div>
            <button
              onClick={onClose}
              className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 text-white transition-all hover:border-accent hover:text-accent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                className="transition-transform duration-300 group-hover:rotate-90"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Links Container */}
          <motion.div
            className="flex-1 flex flex-col justify-center items-center gap-8 py-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {NAV_LINKS.map((link) => (
              <motion.div key={link.href} variants={itemVariants}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="font-heading text-[30px] md:text-[50px] leading-none text-white font-normal uppercase tracking-wide hover:text-accent transition-colors block text-center"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={itemVariants} className="mt-8">
              <Link
                href="/prenota"
                onClick={onClose}
                className="inline-flex items-center justify-center bg-accent text-black font-heading text-xl uppercase tracking-wider px-10 py-4 font-normal hover:bg-white transition-all transform hover:scale-105"
              >
                PRENOTA ORA
              </Link>
            </motion.div>
          </motion.div>

          {/* Footer Socials */}
          <motion.div
            className="px-8 py-10 border-t border-white/5 flex flex-col items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.6 } }}
            exit={{ opacity: 0 }}
          >
            <p className="font-heading text-sm text-white/40 tracking-widest uppercase">Seguici sui social</p>
            <div className="flex items-center gap-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-accent transition-colors hover:scale-110 transform duration-200"
                >
                  {social.label === 'Instagram' && <FaInstagram />}
                  {social.label === 'TikTok' && <FaTiktok />}
                  {social.label === 'Facebook' && <FaFacebook />}
                </a>
              ))}
            </div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
