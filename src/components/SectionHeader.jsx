import { motion } from "framer-motion";

export default function SectionHeader({ number, label, title, kicker }) {
  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-6 text-xs text-[var(--text-faint)]"
      >
        <span className="tracking-[0.2em]">{number}</span>
        <div className="w-12 h-px bg-[var(--border-strong)]" />
        <span className="tracking-[0.2em] uppercase">{label}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight max-w-3xl"
      >
        {title}
      </motion.h2>

      {kicker && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-[var(--text-muted)] mt-6 max-w-xl"
        >
          {kicker}
        </motion.p>
      )}
    </div>
  );
}
