import Image from "next/image";
import Container from "@/components/layout/Container";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { FlowButton } from "@/components/ui/FlowButton";
import Link from "next/link";
import Script from "next/script";

export default function GalleryPage() {
    return (
        <main className="bg-[#FAF5EA] min-h-screen">
            {/* Hero Section IDENTICAL to Services but with different text */}
            <section className="relative h-[30vh] min-h-[250px] w-full overflow-hidden pt-[70px]">
                <Image
                    src="/background-pattern-hero-latinbarber.avif"
                    alt="Gallery Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-black/80" />
                <Container className="relative z-10 flex h-full items-center justify-center">
                    <h1 className="font-heading text-[64px] md:text-[60px] text-white uppercase tracking-normal">
                        GALLERY
                    </h1>
                </Container>
            </section>

            {/* Gallery Grid with 12 images and animations */}
            <GalleryGrid />

            {/* Appointment Section */}
            <section className="bg-black py-24 border-t border-white/5">
                <Container className="max-w-[1000px] text-center">
                    <div className="mb-12">
                        <h2 className="font-heading text-[24px] md:text-[32px] text-accent uppercase tracking-widest mb-4">
                            SCEGLI LA DATA E ORA
                        </h2>
                        <p className="font-heading text-[48px] md:text-[64px] leading-tight text-white uppercase">
                            FISSA UN APPUNTAMENTO
                        </p>
                    </div>

                    <div className="relative w-full rounded-3xl border border-white/10 bg-[#0a0a0a] overflow-hidden">
                        <iframe
                            src="https://api.leadconnectorhq.com/widget/booking/Hs0mC6fRg9AjA2saJUh3"
                            style={{ width: '100%', border: 'none', minHeight: '800px' }}
                            scrolling="no"
                            id="Hs0mC6fRg9AjA2saJUh3_1767295423913"
                        />
                        <Script
                            src="https://link.msgsndr.com/js/form_embed.js"
                            type="text/javascript"
                            strategy="afterInteractive"
                        />
                    </div>
                </Container>
            </section>
        </main>
    );
}
