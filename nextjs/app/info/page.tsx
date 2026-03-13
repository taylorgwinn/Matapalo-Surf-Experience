import type { Metadata } from "next";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Pricing & Info — Matapalo Surf Experience",
  description:
    "Everything you need to plan your perfect surf session — pricing, location, and how to reach us.",
};

/* ─── Reusable sub-components ─── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-[0.6rem] text-[0.78rem] font-extrabold uppercase tracking-[0.18em] text-coral">
      {children}
    </p>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-bebas text-dark"
      style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15 }}
    >
      {children}
    </h2>
  );
}

function PricingNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.9rem] leading-[1.6] text-[#4a5c4b] before:mr-1 before:font-extrabold before:text-jungle before:content-['—']">
      {children}
    </p>
  );
}

type PriceCardProps = {
  amount: string;
  unit: string;
  title: string;
  desc: string;
  featured?: boolean;
  note?: string;
};

function PriceCard({ amount, unit, title, desc, featured, note }: PriceCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[20px] px-6 py-7 shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-250 hover:-translate-y-[5px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] before:absolute before:left-0 before:right-0 before:top-0 before:h-1 before:rounded-t-[20px] before:content-[''] ${
        featured
          ? "border-2 border-ocean bg-cream before:bg-gradient-to-r before:from-ocean before:to-sky"
          : "bg-cream before:bg-coral"
      }`}
    >
      {featured && (
        <span className="absolute right-4 top-4 rounded-full bg-ocean px-[0.65rem] py-[0.25rem] text-[0.68rem] font-extrabold uppercase tracking-[0.1em] text-cream">
          Best Value
        </span>
      )}
      <div
        className="font-bebas leading-none text-coral"
        style={{ fontSize: "clamp(2.8rem, 5vw, 3.8rem)" }}
      >
        <sup className="text-[0.45em] align-super">$</sup>
        {amount}
      </div>
      <div className="mb-3 text-[0.8rem] font-bold uppercase tracking-[0.06em] text-[#6a7c6b]">
        {unit}
      </div>
      <div className="font-bebas mb-2 text-[1.25rem] tracking-[0.03em] text-dark">
        {title}
      </div>
      <p className="text-[0.9rem] leading-[1.6] text-[#5a6b5b]">{desc}</p>
      {note && (
        <p className="mt-1 text-[0.82rem] italic leading-[1.55] text-[#6a7c6b]">
          {note}
        </p>
      )}
    </div>
  );
}

/* ─── Contact card for the dark contact section ─── */
function ContactCard({
  href,
  icon,
  label,
  value,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener" : undefined}
      className="block rounded-[18px] border border-sand/[0.12] bg-cream/[0.06] p-7 text-center no-underline transition-all duration-200 hover:-translate-y-1 hover:border-coral/45 hover:bg-cream/[0.11]"
    >
      <span className="mb-3 block text-[2rem]">{icon}</span>
      <div className="mb-[0.4rem] text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-coral">
        {label}
      </div>
      <div className="text-[0.95rem] font-semibold leading-[1.45] text-sand" style={{ wordBreak: "break-word" }}>
        {value}
      </div>
    </a>
  );
}

/* ─── Page ─── */
export default function InfoPage() {
  return (
    <main>
      {/* Page header */}
      <div
        className="relative overflow-hidden px-8 pb-20 pt-36 text-center"
        style={{
          background: "linear-gradient(135deg, #1a2a1e 0%, #1e3a28 60%, #2d5a3a 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 60% 40%, rgba(0,119,182,0.15) 0%, transparent 65%)",
          }}
        />
        <span className="relative mb-5 inline-block rounded-full bg-coral px-4 py-[0.35rem] text-[0.78rem] font-extrabold uppercase tracking-[0.15em] text-cream">
          Cabo Matapalo · Osa Peninsula · Costa Rica
        </span>
        <h1
          className="font-bebas relative text-cream"
          style={{
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            lineHeight: 1.05,
            textShadow: "0 4px 20px rgba(0,0,0,0.35)",
          }}
        >
          Pricing &amp; Info
        </h1>
        <p
          className="relative mx-auto mt-4 max-w-[540px] leading-[1.7] text-cream/80"
          style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
        >
          Everything you need to plan your perfect surf session — pricing,
          location, and how to reach us.
        </p>
      </div>

      {/* ── LOCAL SURF BREAKS ── */}
      <section id="local-breaks" className="bg-sand px-8 py-20">
        <div className="mx-auto max-w-[960px]">
          <div className="mb-10">
            <H2>Local Surf Breaks</H2>
            <p className="mt-2 text-[1.05rem] leading-[1.75] text-[#4a5c4b]">
              Surf lessons right in Cabo Matapalo -- with the most beautiful and
              uncrowded breaks in Costa Rica.
            </p>
          </div>
          <div className="mb-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <PriceCard
              amount="90"
              unit="Per person / private session"
              title="Standard Session"
              desc="A full 2-hour surf lesson at our home break. Board included. Perfect for individuals and small groups."
            />
            <PriceCard
              amount="80"
              unit="Per person / private session"
              title="Group or Pack Rate"
              desc="Book for a group of 3 or more surfers, or purchase a pack of 3 or more sessions, and save $10 per person."
              featured
            />
            <PriceCard
              amount="150"
              unit="Per person / private session"
              title="Session + Beach Photos"
              desc="Everything in the standard session, plus professional beach photos so you can relive every wave."
            />
            <PriceCard
              amount="180"
              unit="Per person / private session"
              title="Session + Video Analysis"
              desc="Our most complete lesson. Surf footage captured and shared via WeTransfer link — watch yourself, learn faster, surf better."
            />
          </div>
          <div className="flex flex-col gap-[0.55rem] rounded-[16px] border-l-4 border-jungle bg-cream px-6 py-5">
            <PricingNote>All sessions are 2 hours, including an on-land intro for beginners.</PricingNote>
            <PricingNote>All sessions include boards. Specific size or style is not guaranteed.</PricingNote>
          </div>
        </div>
      </section>

      {/* ── PAVONES BREAKS ── */}
      <section id="pavones" className="bg-cream px-8 py-20">
        <div className="mx-auto max-w-[960px]">
          <div className="mb-10">
            <H2>Pavones Breaks</H2>
            <p className="mt-2 text-[1.05rem] leading-[1.75] text-[#4a5c4b]">
              Pavones is home to one of the longest left-hand point breaks in the
              world. We guide you there and get you in the water.
            </p>
          </div>
          <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <PriceCard
              amount="120"
              unit="Per person / private session"
              title="Guided Session"
              desc="Expert local guiding at the legendary Pavones point break. We know the lineup, the tides, and the best peaks."
            />
            <PriceCard
              amount="110"
              unit="Per person / private session"
              title="Group or Pack Rate"
              desc="Groups of 3 or more surfers, or packs of 3 or more sessions, at a discounted rate of $110 per person."
              featured
            />
          </div>

          {/* Boat charter */}
          <div
            className="mt-5 flex flex-col items-center justify-between gap-8 rounded-[20px] px-10 py-8 shadow-[0_8px_32px_rgba(0,119,182,0.3)] sm:flex-row"
            style={{
              background: "linear-gradient(135deg, #0077b6 0%, #005f99 100%)",
            }}
          >
            <div className="text-center sm:text-left">
              <h3 className="font-bebas mb-[0.35rem] text-[1.6rem] tracking-[0.04em] text-cream">
                Boat Charter
              </h3>
              <p className="max-w-[420px] text-[0.95rem] leading-[1.6] text-cream/88">
                Need to access a break by water? We arrange boat charters to surf
                spots. Pricing depends on location pick-up and the number of
                people in your crew.
              </p>
            </div>
            <div className="shrink-0 text-center">
              <div className="text-[0.75rem] font-extrabold uppercase tracking-[0.12em] text-cream/75">
                Starting at
              </div>
              <div className="font-bebas text-[3.5rem] leading-none text-sand">
                <sup className="text-[0.45em] align-super">$</sup>450
              </div>
              <div className="text-[0.75rem] text-cream/70">
                Based on location &amp; group size
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section id="location" className="bg-cream px-8 py-20">
        <div className="mx-auto max-w-[960px]">
          <div className="mb-8">
            <H2>Where to Find Us</H2>
            <p className="mt-3 max-w-[680px] text-[1.05rem] leading-[1.75] text-[#4a5c4b]">
              We are located in the Osa Peninsula, at the very bottom of Costa
              Rica, about 3 hours south of Dominical.
            </p>
          </div>
          <div className="overflow-hidden rounded-[16px] shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15722.123456789!2d-83.4800!3d8.3800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa1e3b3b3b3b3b3%3A0x0!2sCabo+Matapalo%2C+Costa+Rica!5e0!3m2!1sen!2sus!4v1234567890"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cabo Matapalo, Costa Rica"
              className="block h-[450px] w-full border-0"
            />
          </div>
        </div>
      </section>

      {/* ── PAYMENT ── */}
      <section id="payment" className="bg-sand px-8 py-20">
        <div className="mx-auto max-w-[960px]">
          <div className="mb-10">
            <H2>Payment Methods</H2>
          </div>
          <div className="flex flex-wrap gap-4">
            {[
              { icon: "💵", name: "Cash" },
              { icon: "📱", name: "Venmo" },
              { icon: "⚡", name: "Zelle" },
              { icon: "🅿️", name: "PayPal" },
              { icon: "🇨🇷", name: "Sinpe" },
              { icon: "🌐", name: "Wise" },
            ].map((m) => (
              <div
                key={m.name}
                className="flex min-w-[130px] flex-1 items-center gap-3 rounded-[14px] bg-cream px-6 py-[1.1rem] shadow-[0_3px_14px_rgba(0,0,0,0.07)] transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_10px_28px_rgba(0,0,0,0.1)]"
              >
                <span className="shrink-0 text-[1.5rem]">{m.icon}</span>
                <span className="font-bebas text-[1.2rem] tracking-[0.04em] text-dark">
                  {m.name}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-7 max-w-[560px] rounded-[14px] border-l-4 border-coral bg-cream px-6 py-5 text-[0.95rem] leading-[1.65] text-[#4a5c4b]">
            <strong className="text-dark">Payment timing:</strong> All payments
            are due within 24 hours of lesson completion.
          </div>
        </div>
      </section>

      {/* ── CONTACT INFO ── */}
      <section id="contact-info" className="bg-dark px-8 py-20">
        <div className="mx-auto max-w-[960px]">
          <div className="mb-12 text-center">
            <SectionLabel>Get In Touch</SectionLabel>
            <h2
              className="font-bebas text-sand"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15 }}
            >
              Get In Touch
            </h2>
            <p className="mx-auto mt-3 max-w-[600px] text-[1.05rem] leading-[1.75] text-sand/70">
              Ready to book or have questions? Reach out through any of these
              channels — we&apos;re quick to respond and always stoked to hear
              from you.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <ContactCard
              href="https://matapalosurf.com/"
              icon="🌐"
              label="Website"
              value="matapalosurf.com"
            />
            <ContactCard
              href="https://wa.me/50689460041"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.17 1.535 5.943L.057 23.571a.75.75 0 00.937.937l5.628-1.478A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.712 9.712 0 01-4.953-1.354l-.355-.211-3.68.965.983-3.586-.231-.368A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                </svg>
              }
              label="WhatsApp"
              value="+506 8946 0041"
            />
            <ContactCard
              href="mailto:matapalosurfexperience@gmail.com"
              icon="✉️"
              label="Email"
              value="matapalosurfexperience@gmail.com"
            />
            <ContactCard
              href="https://instagram.com/matapalosurfexperience"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="28" height="28">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              }
              label="Instagram"
              value="@matapalosurfexperience"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
