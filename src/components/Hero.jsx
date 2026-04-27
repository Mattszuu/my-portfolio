import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Instagram } from "lucide-react";
import CONFIG from "../data/config";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 sm:px-10 pt-24 pb-12 max-w-7xl mx-auto"
    >
      {/* Status pill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-3 py-1.5 border border-[var(--border-strong)] rounded-full text-xs text-[var(--text-muted)] mb-12 self-start"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Available for opportunities
      </motion.div>

      {/* Main content - asymmetric grid */}
      <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end">
        {/* Name - takes 7 columns */}
        <div className="md:col-span-7">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs tracking-[0.2em] uppercase text-[var(--text-faint)] mb-6"
          >
            {CONFIG.location}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif text-6xl sm:text-7xl md:text-8xl leading-[0.95] tracking-tight"
          >
            Christian
            <br />
            Matthew
            <br />
            <em className="text-[var(--accent)] not-italic font-serif italic">
              Untalan.
            </em>
          </motion.h1>
        </div>

        {/* Description - takes 5 columns */}
        <div className="md:col-span-5 md:pb-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed mb-8 max-w-md"
          >
            {CONFIG.tagline}. Led the frontend build of UpKyp — a property
            management SaaS for Filipino landlords.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-3 items-center"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--accent)] text-[var(--bg)] text-sm font-medium rounded-full hover:bg-[var(--text)] transition-colors"
            >
              View work
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 text-sm text-[var(--text)] border border-[var(--border-strong)] rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              Get in touch
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex gap-4 mt-8"
          >
            <a
              href={CONFIG.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={CONFIG.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={CONFIG.socials.Instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="mt-20 flex items-center gap-4 text-xs text-[var(--text-faint)]"
      >
        <span className="tracking-[0.2em]">SCROLL</span>
        <div className="flex-1 h-px bg-[var(--border)]" />
        <span>01 / 04</span>
      </motion.div>
    </section>
  );
}
