export default function QuoteStrip() {
  return (
    <div className="bg-jungle px-8 py-16 text-center">
      <blockquote
        className="font-bebas mx-auto mb-4 max-w-[760px] text-sand leading-[1.4]"
        style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)" }}
      >
        &ldquo;The most biologically intense place on earth.&rdquo;
      </blockquote>
      <cite className="text-[0.85rem] font-bold uppercase not-italic tracking-[0.12em] text-sand/65">
        — National Geographic, on the Osa Peninsula
      </cite>
    </div>
  );
}
