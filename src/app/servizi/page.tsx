import Image from "next/image";
import Script from "next/script";
import Container from "@/components/layout/Container";
import StickyNav from "@/components/services/StickyNav";
import VerticalSlider from "@/components/services/VerticalSlider";
import { SERVICE_CATEGORIES, PREMIUM_PACKAGES } from "@/data/services";

export default function ServiziPage() {
  return (
    <main className="bg-[#FAF5EA] min-h-screen">
      {/* 30vh Hero Section */}
      <section className="relative h-[30vh] min-h-[250px] w-full overflow-hidden pt-[70px]">
        <Image
          src="/background-pattern-hero-latinbarber.avif"
          alt="Servizi Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-black/80" />
        <Container className="relative z-10 flex h-full items-center justify-center">
          <h1 className="font-heading text-[64px] md:text-[60px] text-white uppercase tracking-normal">
            SERVIZI
          </h1>
        </Container>
      </section>

      {/* Premium Packages Section */}
      <section className="bg-white py-20 border-b border-black/5">
        <Container>
          <div className="mb-12 bg-black px-6 py-4">
            <h2 className="font-heading text-[32px] md:text-[42px] text-white uppercase tracking-tight">
              PACCHETTI PREMIUM E OFFERTE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {PREMIUM_PACKAGES.map((pkg) => (
              <div key={pkg.id} className="relative flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="font-heading text-[20px] text-black font-bold tracking-tight whitespace-nowrap">
                    {pkg.name}
                  </h3>
                  <div className="flex-1 border-b border-black/20 min-w-[30px]"></div>
                  <div className="flex items-center gap-2">
                    {pkg.oldPrice && (
                      <span className="font-heading text-[18px] text-black/40 line-through">
                        {pkg.oldPrice}
                      </span>
                    )}
                    <span className="font-heading text-[20px] text-accent font-bold">
                      {pkg.price}
                    </span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-black/80 font-sans text-[15px] font-light leading-snug">
                      <span className="text-black text-[18px] leading-none">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sticky Navigation */}
      <StickyNav />

      {/* Service Categories Sections */}
      <div className="py-20 space-y-32">
        {SERVICE_CATEGORIES.map((category, index) => (
          <section key={category.id} id={category.id} className="scroll-mt-40">
            <Container>
              <div className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Visual Column */}
                <div className="w-full lg:w-5/12">
                  <VerticalSlider images={category.images} alt={category.title} />
                </div>

                {/* Content Column */}
                <div className="w-full lg:w-7/12">
                  <div
                    className="bg-black w-full mb-8"
                    style={{ padding: '7px 7px 4px 17px' }}
                  >
                    <h2 className="font-heading text-[32px] md:text-[40px] text-white uppercase tracking-normal font-normal leading-none">
                      {category.title}
                    </h2>
                  </div>

                  <p className="text-body-refined text-black/80 mb-12 max-w-2xl border-b border-black/10 pb-8">
                    {category.description}
                  </p>

                  <div className="space-y-6">
                    {category.services.map((service) => (
                      <div key={service.id} className="group flex justify-between items-end gap-4">
                        <div className="flex-1">
                          <h4 className={`font-heading text-[18px] md:text-[22px] tracking-wide ${service.highlighted ? 'text-accent' : 'text-black'}`}>
                            {service.name}
                          </h4>
                        </div>
                        <div className="flex-1 border-b-2 border-dotted border-black/10 mb-2 min-w-[50px] hidden md:block"></div>
                        <div className="text-right">
                          <span className="font-heading text-[22px] text-black whitespace-nowrap">
                            {service.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </section>
        ))}
      </div>

      {/* Appointment Section - Reuse from Gallery for consistency */}
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
