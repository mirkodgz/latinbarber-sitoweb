"use client";

import Container from "@/components/layout/Container";

export default function ReviewsSection() {
    return (
        <section className="bg-black py-24">
            <Container className="max-w-[1600px] px-4 lg:px-0">
                <div className="mx-auto grid gap-8 lg:max-w-[1200px] lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <p className="font-sans text-xs uppercase text-accent font-semibold tracking-[0.38em]">
                            LO DICONO I NOSTRI CLIENTI
                        </p>
                        <h2 className="mt-3 font-heading text-[48px] leading-none text-white uppercase">
                            LO DICONO I NOSTRI CLIENTI
                        </h2>
                    </div>
                    <p className="font-sans text-[18px] font-normal leading-[1.2em] tracking-[-0.03em] text-white">
                        Più di 200 recensioni a 5 stelle confermano la qualità e la passione che mettiamo in ogni taglio. Scopri cosa dicono di noi!
                    </p>
                </div>
            </Container>
        </section>
    );
}
