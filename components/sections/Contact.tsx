import ContactForm from "@/components/ContactForm";

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.17 1.535 5.943L.057 23.571a.75.75 0 00.937.937l5.628-1.478A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.712 9.712 0 01-4.953-1.354l-.355-.211-3.68.965.983-3.586-.231-.368A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="bg-sand px-8 py-20">
      <div className="mx-auto grid max-w-[900px] grid-cols-1 items-start gap-12 md:grid-cols-2">
        {/* Info column */}
        <div>
          <p className="mb-[0.6rem] text-[0.78rem] font-extrabold uppercase tracking-[0.18em] text-coral">
            Get In Touch
          </p>
          <h2
            className="font-bebas text-dark"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15 }}
          >
            Let&apos;s Make It Happen
          </h2>
          <p className="mt-5 text-[1rem] leading-[1.7] text-[#4a5c4b]">
            Have questions about booking, retreat packages, or what to expect?
            Drop us a line — we love hearing from future surfers. Response time
            is quick and the stoke is always high.
          </p>

          <div className="mt-6 flex flex-col gap-[0.9rem]">
            <a
              href="https://wa.me/50689460041"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-[0.85rem] text-[0.97rem] font-semibold text-dark no-underline transition-colors duration-200 hover:text-coral"
            >
              <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-cream shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                <WhatsAppIcon />
              </span>
              +506 8946 0041
            </a>
            <a
              href="mailto:matapalosurfexperience@gmail.com"
              className="flex items-center gap-[0.85rem] text-[0.97rem] font-semibold text-dark no-underline transition-colors duration-200 hover:text-coral"
            >
              <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-cream text-[1.1rem] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                ✉️
              </span>
              matapalosurfexperience@gmail.com
            </a>
            <a
              href="https://instagram.com/matapalosurfexperience"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-[0.85rem] text-[0.97rem] font-semibold text-dark no-underline transition-colors duration-200 hover:text-coral"
            >
              <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-cream shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                <InstagramIcon />
              </span>
              @matapalosurfexperience
            </a>
            <a
              href="https://maps.google.com/?q=Cabo+Matapalo+Costa+Rica"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-[0.85rem] text-[0.97rem] font-semibold text-dark no-underline transition-colors duration-200 hover:text-coral"
            >
              <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-cream text-[1.1rem] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                📍
              </span>
              Cabo Matapalo, Osa Peninsula
            </a>
          </div>
        </div>

        {/* Form */}
        <ContactForm />
      </div>
    </section>
  );
}
