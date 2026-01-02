"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 overflow-hidden bg-[#0A0A0A]">
      <nav className="mx-auto flex h-[70px] w-full max-w-[100%] items-center justify-between px-[25px] py-[10px]">
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo-Actual2025-DEF.avif"
            alt="LatinBarber Studio"
            width={180}
            height={56}
            className="h-[53px] w-auto"
            priority
          />
        </Link>
        <div className="hidden items-center gap-[10px] md:flex">
          {NAV_LINKS.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex">
          <Link href="/prenota" className="btn-prenota">
            <span className="material-symbols-outlined !text-[20px]">
              event_available
            </span>
            <span>PRENOTA</span>
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
          aria-label="Apri menu"
        >
          <span className="sr-only">Apri menu</span>
          <span className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
          </span>
        </button>
      </nav>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
