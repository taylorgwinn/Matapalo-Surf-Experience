"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
  { href: "/info", label: "Info" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex h-[76px] items-center justify-between overflow-visible px-10"
      style={{
        background: "rgba(10, 20, 15, 0.55)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      {/* Logo */}
      <Link href="/" onClick={closeMenu}>
        <Image
          src="/images/logo.png"
          alt="Matapalo Surf Experience"
          width={120}
          height={104}
          className="h-[104px] w-auto brightness-0 invert"
          priority
        />
      </Link>

      {/* Desktop links */}
      <ul className="hidden list-none items-center gap-8 md:flex">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[0.95rem] font-bold uppercase tracking-[0.04em] text-sand no-underline transition-colors duration-200 hover:text-coral"
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/#book"
            className="rounded-full bg-coral px-[1.3rem] py-2 text-[0.95rem] font-bold uppercase tracking-[0.04em] text-cream no-underline transition-all duration-200 hover:-translate-y-px hover:bg-[#c9623c]"
          >
            Book Now
          </Link>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className="flex flex-col items-center justify-center gap-[5px] bg-transparent p-[0.4rem] text-sand md:hidden"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((o) => !o)}
      >
        <span
          className="block h-[2px] w-6 rounded-sm bg-current transition-transform duration-250"
          style={
            isOpen ? { transform: "translateY(7px) rotate(45deg)" } : undefined
          }
        />
        <span
          className="block h-[2px] w-6 rounded-sm bg-current transition-opacity duration-250"
          style={isOpen ? { opacity: 0 } : undefined}
        />
        <span
          className="block h-[2px] w-6 rounded-sm bg-current transition-transform duration-250"
          style={
            isOpen
              ? { transform: "translateY(-7px) rotate(-45deg)" }
              : undefined
          }
        />
      </button>

      {/* Mobile drawer */}
      <ul
        className="fixed left-0 right-0 top-[76px] z-[99] flex flex-col gap-0 px-8 pb-8 pt-2 transition-all duration-300 md:hidden"
        style={{
          background: "rgba(10, 20, 15, 0.97)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          transform: isOpen ? "translateY(0)" : "translateY(-110%)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          listStyle: "none",
        }}
      >
        {links.map((link) => (
          <li
            key={link.href}
            className="border-b border-white/10 last:border-b-0"
          >
            <Link
              href={link.href}
              onClick={closeMenu}
              className="block py-[0.9rem] text-[1.05rem] font-bold uppercase tracking-[0.04em] text-sand no-underline transition-colors duration-200 hover:text-coral"
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li className="mt-2">
          <Link
            href="/#book"
            onClick={closeMenu}
            className="block rounded-full bg-coral px-[1.3rem] py-[0.9rem] text-center text-[1.05rem] font-bold uppercase tracking-[0.04em] text-cream no-underline transition-all duration-200 hover:bg-[#c9623c]"
          >
            Book Now
          </Link>
        </li>
      </ul>
    </nav>
  );
}
