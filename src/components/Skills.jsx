import { motion } from "framer-motion";
import CONFIG from "../data/config";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 sm:px-10 py-24 md:py-32 max-w-7xl mx-auto"
    >
      <SectionHeader
        number="03"
        label="Skills"
        title="Tools and technologies I work with."
      />

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
        {Object.entries(CONFIG.skills).map(([category, skills], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
            className="border-t border-[var(--border)] pt-6"
          >
            <div className="flex items-baseline justify-between mb-6">
              <h3 className="font-serif text-2xl">{category}</h3>
              <span className="text-xs text-[var(--text-faint)]">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-xs text-[var(--text-muted)] border border-[var(--border)] rounded-full hover:border-[var(--border-strong)] hover:text-[var(--text)] transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
