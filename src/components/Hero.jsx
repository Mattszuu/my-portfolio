import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import CONFIG from "../data/config";
import OpsConsole from "./OpsConsole";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 px-6 sm:px-10 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="flex items-center gap-2.5 mb-6">
            <span className="status-dot" />
            <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
              Junior Systems Engineer @ {CONFIG.company}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display font-extrabold leading-[1.02] text-[2.6rem] sm:text-6xl md:text-7xl"
          >
            I keep systems
            <br />
            <span style={{ color: "var(--accent)" }}>running</span> — and make
            <br />
            them worth using.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base md:text-lg leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {CONFIG.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--accent)", boxShadow: "var(--shadow)" }}
            >
              View projects
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-colors"
              style={{ border: "1px solid var(--border-strong)" }}
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <OpsConsole />
        </motion.div>
      </div>

      <motion.a
        href="#experience"
        aria-label="Scroll to experience"
        className="hidden md:flex absolute bottom-2 left-1/2 -translate-x-1/2 items-center gap-2 font-mono text-xs"
        style={{ color: "var(--text-faint)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <motion.span animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={14} />
        </motion.span>
        scroll
      </motion.a>
    </section>
  );
}
