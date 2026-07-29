import { motion } from "framer-motion";
import CONFIG from "../data/config";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Skills() {
  const entries = Object.entries(CONFIG.skills);
  return (
    <section id="skills" className="px-6 sm:px-10 py-24 md:py-32 max-w-7xl mx-auto scroll-mt-20">
      <SectionHeader
        label="Skills"
        title="Two stacks, one engineer."
        sub="Infrastructure first, product second — and enough of each to translate between the two."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {entries.map(([group, list], i) => (
          <Reveal key={group} delay={0.06 * i}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="h-full rounded-2xl p-6"
              style={{
                background: "var(--bg-elevated)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              <p className="font-mono text-[11px] uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
                {group}
              </p>
              <div className="flex flex-wrap gap-2">
                {list.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                    style={{ background: "var(--bg-inset)", color: "var(--text-muted)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
