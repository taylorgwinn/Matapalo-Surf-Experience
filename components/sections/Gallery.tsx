type GalleryImage = {
  src: string;
  alt: string;
  tall?: boolean;
};

const images: GalleryImage[] = [
  { src: "/images/Kailu.png", alt: "Instructor surfing with a young child", tall: true },
  { src: "/images/surfers.png", alt: "Surfers riding waves at Cabo Matapalo" },
  { src: "/images/revive-4327.jpg", alt: "Surf lesson at Cabo Matapalo" },
  { src: "/images/beach-laughing.webp", alt: "Laughing on the beach after a session" },
  { src: "/images/big-wave.jpg", alt: "Surfer in the lineup with pelicans flying overhead" },
  { src: "/images/@granoysal_REVIVE-4331.jpg", alt: "Surfing at Cabo Matapalo" },
  { src: "/images/gallery-whatsapp-1.jpeg", alt: "Surfing at Cabo Matapalo" },
  { src: "/images/PHOTO-2026-03-12-13-39-40.jpg", alt: "Surfing at Cabo Matapalo" },
  { src: "/images/PHOTO-2026-03-12-20-20-31.jpg", alt: "Surfing at Cabo Matapalo" },
  { src: "/images/PHOTO-2026-03-12-20-19-16.jpg", alt: "Surfing at Cabo Matapalo" },
  { src: "/images/gallery-lesson-2.jpeg", alt: "Surfing at Cabo Matapalo" },
];

const tallCls =
  "w-full rounded-[12px] object-cover object-top brightness-[0.92] transition-all duration-300 hover:scale-[1.02] hover:brightness-105 h-[200px] sm:h-[200px] md:h-full md:[grid-row:span_2]";

const regularCls =
  "w-full rounded-[12px] object-cover brightness-[0.92] transition-all duration-300 hover:scale-[1.02] hover:brightness-105 h-[220px] sm:h-[180px] md:h-[260px]";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-dark px-4 py-20">
      <div className="mb-10 text-center">
        <p className="mb-[0.6rem] text-[0.78rem] font-extrabold uppercase tracking-[0.18em] text-sky">
          Matapalo Life
        </p>
        <h2
          className="font-bebas text-sand"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15 }}
        >
          Where the Jungle Meets the Sea
        </h2>
      </div>

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {images.map((img) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className={img.tall ? tallCls : regularCls}
          />
        ))}
      </div>
    </section>
  );
}
