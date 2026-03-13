import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-cream px-8 py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
        {/* Image */}
        <div className="relative">
          <div className="relative h-[420px] w-full overflow-hidden rounded-[16px] shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
            <Image
              src="/images/sunset.jpg"
              alt="Sunset at Cabo Matapalo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 rounded-[14px] bg-jungle px-6 py-5 text-center shadow-[0_8px_24px_rgba(0,0,0,0.2)] md:-bottom-6 md:-right-6">
            <strong className="font-bebas block text-[2.2rem] leading-none text-cream">
              Osa
            </strong>
            <span className="text-[0.75rem] font-bold uppercase tracking-[0.08em] text-cream opacity-85">
              Peninsula
            </span>
          </div>
        </div>

        {/* Text */}
        <div className="mt-8 md:mt-0">
          <p className="mb-[0.6rem] text-[0.78rem] font-extrabold uppercase tracking-[0.18em] text-coral">
            Who We Are
          </p>
          <h2
            className="font-bebas text-dark"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15 }}
          >
            Born From the Ocean,
            <br />
            Rooted in Costa Rica
          </h2>
          <p className="mt-4 text-[1.1rem] leading-[1.75] text-[#4a5c4b]">
            Matapalo Surf Experience is a locally owned and operated surf-focused
            business nestled in Cabo Matapalo — a remote paradise on the tip of
            the Osa Peninsula, just 25 minutes from Puerto Jimenez.
          </p>
          <p className="mt-4 text-[1.1rem] leading-[1.75] text-[#4a5c4b]">
            National Geographic once called the Osa Peninsula{" "}
            <em>
              &ldquo;the most biologically intense place on earth.&rdquo;
            </em>{" "}
            We call it home. Our certified instructors bring over 20 years of
            surfing and 15 years of teaching experience to every session.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Private Lessons", "All Skill Levels", "ISA Certified", "Locally Owned", "Jungle & Ocean"].map(
              (pill) => (
                <span
                  key={pill}
                  className="rounded-full bg-sand px-4 py-[0.4rem] text-[0.82rem] font-extrabold tracking-[0.05em] text-jungle"
                >
                  {pill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
