import Image from "next/image";

export default function Founder() {
  return (
    <section id="founder" className="bg-jungle px-8 py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
        {/* Image */}
        <div className="relative h-[300px] overflow-hidden rounded-[16px] shadow-[0_20px_60px_rgba(0,0,0,0.4)] md:h-[620px]">
          <Image
            src="/images/founder-aaron-2.jpg"
            alt="Aaron Garcia, Founder of Matapalo Surf Experience"
            fill
            className="object-cover"
            style={{ objectPosition: "center 15%" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Text */}
        <div>
          <p className="mb-[0.6rem] text-[0.78rem] font-extrabold uppercase tracking-[0.18em] text-sky">
            Meet the Founder
          </p>
          <h2
            className="font-bebas text-cream"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15 }}
          >
            Aaron Garcia
          </h2>
          <div className="mt-6 flex flex-wrap gap-[0.6rem]">
            {["CEO & Founder", "Surf Guide", "ISA Certified"].map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/15 bg-white/[0.08] px-[0.9rem] py-[0.35rem] text-[0.78rem] font-bold uppercase tracking-[0.07em] text-sand"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="mt-6 leading-[1.8] text-cream/85">
            I discovered my passion for surfing at 12 years old. I&apos;ve competed
            in national contests and traveled to many other countries, surfing
            some of the best surf breaks on earth.
          </p>
          <p className="mt-4 leading-[1.8] text-cream/85">
            As a teenager, I began to work with local surf schools and developed
            my skills as an instructor. I have worked with people from all over
            the world, both individually and through retreats like RiseUp and
            specialty yoga retreats.
          </p>
          <p className="mt-4 leading-[1.8] text-cream/85">
            My goal is for people to come surf Matapalo, experience the jungle
            life, and enjoy all of the incredible things it has to offer.
          </p>
          <p className="mt-8 text-[1rem] font-semibold italic text-coral">
            — Aaron Garcia, founder and owner of Matapalo Surf Experience
          </p>
        </div>
      </div>
    </section>
  );
}
