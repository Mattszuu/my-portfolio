import Reveal from "./Reveal";

export default function SectionHeader({ label, title, sub }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="eyebrow mb-3">{label}</p>
      <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight max-w-2xl">
        {title}
      </h2>
      {sub && (
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {sub}
        </p>
      )}
    </Reveal>
  );
}
