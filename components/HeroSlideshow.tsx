"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  { src: "/images/hero-wave.jpeg", alt: "Surfing at Cabo Matapalo", local: true },
  { src: "/images/@granoysal_REVIVE-6810.jpg", alt: "Surfing at Matapalo", local: true },
  { src: "/images/hero-lesson.jpeg", alt: "Surfing at Cabo Matapalo", local: true },
  { src: "/images/hero-lineup.jpeg", alt: "Surfers in the lineup at Cabo Matapalo", local: true },
  { src: "/images/woman surfing with son.png", alt: "Woman surfing with son at Cabo Matapalo", local: true },
  { src: "/images/@granoysal_REVIVE-4635.jpg", alt: "Surfing at Matapalo", local: true },
  { src: "/images/hero-aerial.jpeg", alt: "Aerial view of Cabo Matapalo", local: true },
  { src: "/images/@granoysal_REVIVE-5397.jpg", alt: "Surfing at Cabo Matapalo", local: true },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}
    </div>
  );
}
