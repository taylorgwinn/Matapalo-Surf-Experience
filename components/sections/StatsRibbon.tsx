const stats = [
  { value: "20+", label: "Years Surfing" },
  { value: "15+", label: "Years Teaching" },
  { value: "100%", label: "Locally Owned" },
  { value: "All Levels", label: "Welcome" },
];

export default function StatsRibbon() {
  return (
    <div className="flex flex-wrap justify-center gap-12 bg-ocean px-8 py-6">
      {stats.map((s) => (
        <div key={s.label} className="text-center text-cream">
          <strong className="font-bebas block text-[2rem] leading-none">
            {s.value}
          </strong>
          <span className="text-[0.8rem] font-bold uppercase tracking-[0.08em] opacity-85">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}
