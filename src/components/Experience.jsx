import { motion } from "framer-motion";
import CONFIG from "../data/config";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="px-6 sm:px-10 py-24 md:py-32 max-w-7xl mx-auto scroll-mt-20">
      <SectionHeader
        label="Experience"
        title="From building interfaces to running infrastructure."
      />

      <div className="relative">
        {/* Timeline rail */}
        <div
          className="absolute left-[7px] md:left-1/2 top-2 bottom-2 w-px"
          style={{ background: "var(--border)" }}
        />

        <div className="space-y-12">
          {CONFIG.workExperience.map((job, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <div
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                  i % 2 === 0 ? "" : ""
                }`}
              >
                {/* Node */}
                <span
                  className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2 w-[15px] h-[15px] rounded-full"
                  style={{
                    background: job.current ? "var(--signal)" : "var(--bg)",
                    border: `2px solid ${job.current ? "var(--signal)" : "var(--border-strong)"}`,
                  }}
                />

                <div
                  className={`pl-8 md:pl-0 ${
                    i % 2 === 0 ? "md:col-start-1 md:text-right md:pr-12" : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <p className="font-mono text-xs mb-2" style={{ color: "var(--text-faint)" }}>
                    {job.period}
                    {job.current && (
                      <span
                        className="ml-2 px-2 py-0.5 rounded-full text-[10px] font-medium"
                        style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                      >
                        current
                      </span>
                    )}
                  </p>
                  <h3 className="font-display text-xl font-bold">{job.title}</h3>
                  <p className="text-sm mt-1 font-medium" style={{ color: "var(--accent)" }}>
                    {job.company} · {job.location}
                  </p>
                  <ul
                    className={`mt-4 space-y-2 text-sm leading-relaxed ${
                      i % 2 === 0 ? "md:list-none" : ""
                    }`}
                    style={{ color: "var(--text-muted)" }}
                  >
                    {job.responsibilities.map((r, j) => (
                      <li key={j}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
