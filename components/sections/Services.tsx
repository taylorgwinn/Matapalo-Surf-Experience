import Image from "next/image";

const services = [
  {
    src: "/images/2 women surfing.png",
    alt: "Surf Coaching",
    icon: "🏄",
    title: "Surf Coaching",
    desc: "One-on-one and small group lessons for all skill levels. We cover wave reading, surf etiquette, paddling technique, and pop-up mechanics. Our goal is to make every surfer — from first-timers to seasoned riders — feel confident, safe, and stoked in the water.",
  },
  {
    src: "/images/pelicans-lineup.webp",
    alt: "Jungle Adventures",
    icon: "🌿",
    title: "Jungle Adventures",
    desc: "Surf boat trips, deep-sea fishing, horseback riding on the beach, tree climbing, and wildlife exploration. Howler monkeys, toucans, scarlet macaws, dolphins, and humpback whales are regular neighbors here.",
  },
  {
    src: "/images/surf-brigade.png",
    alt: "Group & Partner Retreats",
    icon: "🤝",
    title: "Partner Retreats",
    desc: "Planning a yoga retreat, wellness event, or group adventure? We work with retreat organizers to create fully custom packages combining surf, nature, and local culture for your group.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-sand px-8 py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 text-center">
          <p className="mb-[0.6rem] text-[0.78rem] font-extrabold uppercase tracking-[0.18em] text-coral">
            What We Do
          </p>
          <h2
            className="font-bebas text-dark"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15 }}
          >
            Your Perfect Waves Await
          </h2>
          <p className="mx-auto mt-3 max-w-[600px] text-[1.1rem] leading-[1.75] text-[#4a5c4b]">
            Whether you&apos;re paddling for the first time or chasing your best
            cutback, we&apos;ve got an experience built for you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group overflow-hidden rounded-[20px] bg-cream shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-250 hover:-translate-y-[6px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]"
            >
              <div className="relative h-[220px] w-full">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="px-7 pb-8 pt-6">
                <div className="mb-2 text-[2rem]">{s.icon}</div>
                <h3 className="font-bebas mb-[0.6rem] text-[1.4rem] text-dark">
                  {s.title}
                </h3>
                <p className="text-[0.95rem] leading-[1.7] text-[#5a6b5b]">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
