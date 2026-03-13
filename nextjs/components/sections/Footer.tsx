import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="border-t border-sand/[0.08] bg-dark px-6 py-10 text-center text-[0.85rem] leading-[1.8] text-sand/70"
    >
      <Image
        src="/images/logo.png"
        alt="Matapalo Surf Experience"
        width={140}
        height={70}
        className="mx-auto mb-4 block h-[70px] w-auto brightness-0 invert"
      />
      <div className="flex justify-center gap-4">
        <a
          href="https://instagram.com/matapalosurfexperience"
          target="_blank"
          rel="noopener"
          className="text-[0.8rem] font-bold uppercase tracking-[0.1em] text-sand opacity-80 no-underline transition-opacity duration-200 hover:opacity-100"
        >
          Instagram
        </a>
        <a
          href="https://wa.me/50689460041"
          target="_blank"
          rel="noopener"
          className="text-[0.8rem] font-bold uppercase tracking-[0.1em] text-sand opacity-80 no-underline transition-opacity duration-200 hover:opacity-100"
        >
          WhatsApp
        </a>
      </div>
      <p className="mt-4">
        <strong className="text-sand">Matapalo Surf Experience</strong>
        &nbsp;·&nbsp; Cabo Matapalo, Osa Peninsula, Costa Rica
      </p>
      <p className="mt-3 text-[0.75rem] opacity-50">
        &copy; 2026 Matapalo Surf Experience. All rights reserved. Made with 🤙
        in Costa Rica.
      </p>
    </footer>
  );
}
