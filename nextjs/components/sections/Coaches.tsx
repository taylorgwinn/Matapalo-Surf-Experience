import Image from "next/image";

const coaches = [
  { name: "Aaron", role: "Founder & Head Surf Instructor", src: "/images/aaron-coach.jpg", local: true },
  { name: "Ronnie", role: "Surf Instructor", src: "/images/Ronnie.png", local: true },
  { name: "Lance", role: "Surf Instructor", src: "/images/Lance.png", local: true },
  { name: "Braulio", role: "Surf Instructor", src: "/images/Braulio.png", local: true },
  { name: "Erick", role: "Surf Instructor", src: "/images/Erick.png", local: true },
  { name: "Jack", role: "Surf Instructor", src: "/images/Jack.png", local: true },
];

export default function Coaches() {
  return (
    <section id="coaches" className="bg-jungle px-8 py-20">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-12 text-center">
          <p className="mb-[0.6rem] text-[0.78rem] font-extrabold uppercase tracking-[0.18em] text-sky">
            The Team
          </p>
          <h2
            className="font-bebas text-sand"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15 }}
          >
            Our Coaches
          </h2>
          <p className="mx-auto mt-3 max-w-[600px] text-[1.1rem] leading-[1.75] text-sand/75">
            Costa Rica-born and raised, every one of our instructors shares a
            deep passion for the ocean, the sport, and passing that stoke on to
            you.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          {coaches.map((coach) => (
            <div key={coach.name} className="group text-center">
              <div className="mx-auto mb-4 h-[150px] w-[150px] overflow-hidden rounded-full border-4 border-cream shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-250 group-hover:-translate-y-1 group-hover:shadow-[0_16px_36px_rgba(0,0,0,0.16)]">
                <Image
                  src={coach.src}
                  alt={coach.name}
                  width={150}
                  height={150}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <h3 className="font-bebas mb-[0.2rem] text-[1.4rem] tracking-[0.03em] text-sand">
                {coach.name}
              </h3>
              <span className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-coral">
                {coach.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
