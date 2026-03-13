import Image from "next/image";

const features = [
  { icon: "🌊", text: "Waves for every level — gentle rollers for beginners, powerful points for advanced surfers" },
  { icon: "📸", text: "Photo and video analysis available so you can track your real progress" },
  { icon: "🐒", text: "Share the jungle with howler monkeys, toucans, dolphins, and humpback whales" },
  { icon: "🤙", text: "Small groups, personalized coaching, genuine pura vida hospitality" },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-cream px-8 py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
        {/* Text — order 2 on mobile, order 1 on desktop */}
        <div className="order-2 md:order-1">
          <p className="mb-[0.6rem] text-[0.78rem] font-extrabold uppercase tracking-[0.18em] text-coral">
            What Makes Us Different
          </p>
          <h2
            className="font-bebas text-dark"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15 }}
          >
            More Than a Surf Lesson
          </h2>
          <p className="mt-4 max-w-[600px] text-[1.1rem] leading-[1.75] text-[#4a5c4b]">
            We&apos;re not a crowded surf school on a tourist beach. Matapalo is
            raw, remote, and real — a place where you can catch uncrowded waves,
            spot wildlife from the lineup, and fall asleep to the sound of the
            jungle.
          </p>
          <ul className="mt-6 flex flex-col gap-[0.85rem]">
            {features.map((f) => (
              <li key={f.icon} className="flex items-start gap-3 text-[1rem] leading-[1.5] text-[#3d4f3e]">
                <span className="mt-[0.05rem] flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sand text-[1rem]">
                  {f.icon}
                </span>
                <span>{f.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image — order 1 on mobile, order 2 on desktop */}
        <div className="order-1 md:order-2">
          <div className="relative h-[280px] w-full overflow-hidden rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] md:h-[480px]">
            <Image
              src="/images/aaron-lesson.jpg"
              alt="Aaron giving a surf lesson at Cabo Matapalo"
              fill
              className="object-cover"
              style={{ objectPosition: "30% center" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
