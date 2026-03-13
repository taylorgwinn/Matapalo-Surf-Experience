import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";
import StatsRibbon from "@/components/sections/StatsRibbon";
import About from "@/components/sections/About";
import Coaches from "@/components/sections/Coaches";
import Founder from "@/components/sections/Founder";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import QuoteStrip from "@/components/sections/QuoteStrip";
import Experience from "@/components/sections/Experience";
import Testimonials from "@/components/sections/Testimonials";
import BookCTA from "@/components/sections/BookCTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <section
        id="hero"
        className="relative flex min-h-[600px] items-start justify-center overflow-hidden text-center"
        style={{ height: "100vh", paddingTop: "calc(76px + 0.75rem)" }}
      >
        <HeroSlideshow />

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,25,20,0.35) 0%, rgba(10,25,20,0.55) 60%, rgba(10,25,20,0.8) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-[2] max-w-[800px] px-4">
          <span className="mb-8 inline-block rounded-full bg-coral px-4 py-[0.35rem] text-[0.8rem] font-extrabold uppercase tracking-[0.15em] text-cream">
            Cabo Matapalo · Osa Peninsula · Costa Rica
          </span>
          <h1
            className="font-bebas mb-4 text-cream"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              lineHeight: 1.1,
              textShadow: "0 4px 20px rgba(0,0,0,0.4)",
            }}
          >
            Surf the Jungle
          </h1>
          <p
            className="mx-auto mb-14 max-w-[560px] text-cream/90"
            style={{ fontSize: "clamp(1rem, 2.2vw, 1.25rem)", lineHeight: 1.7 }}
          >
            Private surf lessons, guiding, retreats, and jungle adventures in
            one of the most remote and beautiful corners of Costa Rica —
            locally owned, expert-led.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="#book"
              className="w-full max-w-[280px] rounded-full bg-coral px-[2.2rem] py-[0.85rem] text-center font-nunito text-[1rem] font-extrabold text-cream no-underline transition-all duration-200 hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] sm:w-auto"
            >
              Book Your Session
            </Link>
            <Link
              href="#services"
              className="w-full max-w-[280px] rounded-full border-2 border-cream/70 bg-transparent px-[2.2rem] py-[0.85rem] text-center font-nunito text-[1rem] font-extrabold text-cream no-underline transition-all duration-200 hover:-translate-y-px hover:bg-cream/10 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] sm:w-auto"
            >
              See What We Offer
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce-scroll absolute bottom-8 left-1/2 z-[2] flex flex-col items-center gap-[0.4rem] text-[0.75rem] font-bold uppercase tracking-[0.1em] text-cream/70">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-[22px] w-[22px]">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
          Scroll
        </div>
      </section>

      <StatsRibbon />
      <About />
      <Coaches />
      <Founder />
      <Services />
      <Gallery />
      <QuoteStrip />
      <Experience />
      <Testimonials />
      <BookCTA />
      <Contact />
      <Footer />
    </main>
  );
}
