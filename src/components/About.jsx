import CONFIG from "../data/config";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { GraduationCap, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="px-6 sm:px-10 py-24 md:py-32 max-w-7xl mx-auto scroll-mt-20">
      <SectionHeader label="About" title="The route here was not a straight line." />

      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12">
        <Reveal>
          <div className="space-y-5 text-[15px] md:text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {CONFIG.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <div className="space-y-5">
          <Reveal delay={0.1}>
            <div
              className="rounded-2xl p-6"
              style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}
            >
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
                <GraduationCap size={14} /> Education
              </p>
              {CONFIG.education.map((e, i) => (
                <div key={i} className={i > 0 ? "mt-5 pt-5" : ""} style={i > 0 ? { borderTop: "1px solid var(--border)" } : {}}>
                  <h4 className="font-semibold text-sm">{e.school}</h4>
                  <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>{e.degree}</p>
                  <p className="font-mono text-xs mt-1" style={{ color: "var(--text-faint)" }}>{e.period}</p>
                  {e.awards && (
                    <ul className="mt-2 space-y-1 text-xs" style={{ color: "var(--text-muted)" }}>
                      {e.awards.map((a, j) => (
                        <li key={j}>· {a}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div
              className="rounded-2xl p-6"
              style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}
            >
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
                <Award size={14} /> Certificates
              </p>
              <ul className="space-y-3">
                {CONFIG.certificates.map((c, i) => (
                  <li key={i} className="text-sm">
                    <span className="font-medium">{c.title}</span>
                    <span className="block font-mono text-xs mt-0.5" style={{ color: "var(--text-faint)" }}>
                      {c.issuer} · {c.date}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
