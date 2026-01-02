"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { FlowButton } from "@/components/ui/FlowButton";
import Image from "next/image";

// Sample images for the carousel (placeholders, can be updated with real ones)
const CAROUSEL_IMAGES = [
  "/carruselhomepage/carrusel01.avif",
  "/carruselhomepage/carrusel03.avif",
  "/carruselhomepage/carrusel04.avif",
  "/carruselhomepage/carrusel12.avif",
  "/carruselhomepage/Gallery4.jpg",
  "/carruselhomepage/Gallery6.jpg",
];

export default function GalleryPreview() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ speed: 0.6, stopOnInteraction: false }),
  ]);

  return (
    <section className="bg-[#141414] py-24 border-t border-white/5">
      <Container className="max-w-[1600px] space-y-12 px-4 lg:px-0">
        <div className="mx-auto flex flex-col gap-4 md:flex-row md:items-end md:justify-between lg:max-w-[1200px]">
          <div>
            <p className="font-sans text-xs uppercase text-accent font-semibold tracking-[0.38em]">
              Il nostro studio a Milano
            </p>
            <h2 className="mt-3 font-heading text-[48px] leading-none text-white uppercase">
              Vieni a Trovarci
            </h2>
          </div>
          <Link href="/gallery">
            <FlowButton text="GALLERY" />
          </Link>
        </div>
      </Container>

      {/* Full width carousel */}
      <div className="mt-12 w-full overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {CAROUSEL_IMAGES.map((src, index) => (
            <div
              key={index}
              className="relative min-w-[300px] md:min-w-[400px] h-[300px] md:h-[400px] flex-[0_0_auto]"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 300px, 400px"
              />
            </div>
          ))}
          {/* Duplicate images to ensure seamless loop if needed, though autoscroll handles it nicely */}
          {CAROUSEL_IMAGES.map((src, index) => (
            <div
              key={`dup-${index}`}
              className="relative min-w-[300px] md:min-w-[400px] h-[300px] md:h-[400px] flex-[0_0_auto]"
            >
              <Image
                src={src}
                alt={`Gallery image duplicated ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 300px, 400px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
