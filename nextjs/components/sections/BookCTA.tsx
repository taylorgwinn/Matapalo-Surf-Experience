import Link from "next/link";

export default function BookCTA() {
  return (
    <section id="book" className="bg-ocean px-8 py-24 text-center">
      <h2
        className="font-bebas text-cream"
        style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
      >
        Ready to Catch Your Wave?
      </h2>
      <p className="mx-auto mt-4 max-w-[520px] text-[1.1rem] leading-[1.7] text-cream/85">
        Spaces are limited and this place fills up fast. Reach out today and
        let&apos;s plan your perfect Matapalo experience.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="#contact"
          className="rounded-full bg-cream px-[2.2rem] py-[0.85rem] font-nunito text-[1rem] font-extrabold text-ocean no-underline transition-all duration-200 hover:-translate-y-px hover:bg-sand"
        >
          Send a Message
        </Link>
        <a
          href="https://wa.me/50689460041"
          target="_blank"
          rel="noopener"
          className="rounded-full border-2 border-cream/60 bg-transparent px-[2.2rem] py-[0.85rem] font-nunito text-[1rem] font-extrabold text-cream no-underline transition-all duration-200 hover:-translate-y-px hover:bg-cream/10"
        >
          WhatsApp Us
        </a>
      </div>
    </section>
  );
}
