const reviews = [
  {
    name: "Blas",
    source: "Google Review",
    quote:
      "True locals with an awesome vibe. They know every wave and every corner of Matapalo like no one else. Professional, welcoming, and the real surf spirit!",
  },
  {
    name: "Melissa",
    source: "Google Review",
    quote:
      "I don't have enough words to describe how fortunate I feel to have come across Matapalo Surf Experience. Not only is Matapalo one of the most magical parts of Costa Rica, the staff are genuinely the nicest people to connect with and adapt to your surfing level to make you enjoy and learn as much as possible. This was a life changing experience that we plan to make a yearly tradition.",
  },
  {
    name: "Alana",
    source: "Google Review",
    quote:
      "First time surfing and this experience was phenomenal! Aaron, who is local to Matapalo, was a terrific instructor and got us all (age range 28–63) easily up on the boards in no time! Our group had a lot of success riding tons of waves! This exceeded expectations and we would 100% recommend to anyone looking for a first time surf experience!",
  },
  {
    name: "Bob",
    source: "Google Review",
    quote:
      "Aaron, Taylor and the whole crew of instructors took really good care of us this past week. I am fairly new to the sport and surfed every day I was here with these folks. They were all sincere, caring, and a lot of fun. I progressed each day under their individualized coaching and enjoyed a lot of good rides. My wife has only tried a couple times before, she found the waves and the people sweet as well.",
  },
  {
    name: "Beth",
    source: "Google Review",
    quote:
      "Don't think twice about booking time with Matapalo Surf Experience. From start to finish they have been exceptional to work with. I'm an intermediate surfer who hadn't been in the water in a couple years and Aaron was the best. They have very high quality boards which is hard to do in such a remote part of CR. They know the waves and area inside and out — I felt very safe and confident with them and most important caught great waves. Taylor was exceptional at coordinating. Definitely a trusted and highly valuable team that will make your trip one to remember.",
  },
  {
    name: "Chloe",
    source: "Google Review",
    quote:
      "We had a great week with Matapalo Surf Experience. We got taken to the best break for our level every day and all the instructors were reliable and had good attitudes. They got us into a lot of waves too! Lance gave us really helpful technical feedback too. Highly recommended. We'll all be back!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-sand px-8 py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 text-center">
          <p className="mb-[0.6rem] text-[0.78rem] font-extrabold uppercase tracking-[0.18em] text-coral">
            Guest Reviews
          </p>
          <h2
            className="font-bebas text-dark"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15 }}
          >
            What People Are Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="flex flex-col gap-4 rounded-[20px] bg-ocean p-8"
            >
              <div className="tracking-[0.1em] text-coral">★★★★★</div>
              <blockquote className="flex-1 text-[0.97rem] italic leading-[1.75] text-cream/90">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <div className="mt-auto flex flex-col gap-[0.2rem]">
                <span className="text-[0.95rem] font-extrabold text-cream">{r.name}</span>
                <span className="text-[0.75rem] font-bold uppercase tracking-[0.08em] text-coral">
                  {r.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
