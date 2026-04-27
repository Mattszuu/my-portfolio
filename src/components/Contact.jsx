import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Instagram, Mail } from "lucide-react";
import CONFIG from "../data/config";
import SectionHeader from "./SectionHeader";
import ResumeButton from "./ResumeButton";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 sm:px-10 py-24 md:py-32 max-w-7xl mx-auto"
    >
      <SectionHeader
        number="04"
        label="Contact"
        title={
          <>
            Let's build{" "}
            <em className="text-[var(--accent)] font-serif italic">
              something
            </em>{" "}
            together.
          </>
        }
      />

      <div className="grid md:grid-cols-12 gap-8 mb-24">
        <div className="md:col-span-7 md:col-start-3">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-[var(--text-muted)] leading-relaxed mb-10"
          >
            I'm open to frontend, full-stack, and QA opportunities. If you have
            a project, role, or just want to chat — reach out.
          </motion.p>

          {/* Email - large, clickable */}
          <motion.a
            href={`mailto:${CONFIG.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="group inline-flex items-center gap-3 font-serif text-3xl md:text-4xl hover:text-[var(--accent)] transition-colors mb-10"
          >
            {CONFIG.email}
            <ArrowUpRight className="w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          {/* Resume + actions */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <ResumeButton />
            <a
              href={`mailto:${CONFIG.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--accent)] text-[var(--bg)] text-sm font-medium rounded-full hover:bg-[var(--text)] transition-colors"
            >
              <Mail className="w-4 h-4" />
              Send email
            </a>
          </motion.div>
        </div>
      </div>

      {/* Quick info grid */}
      <div className="grid md:grid-cols-3 gap-8 border-t border-[var(--border)] pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-faint)] mb-3">
            Location
          </p>
          <p className="text-sm text-[var(--text-muted)]">{CONFIG.location}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-faint)] mb-3">
            Phone
          </p>
          <p className="text-sm text-[var(--text-muted)]">{CONFIG.phone}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-faint)] mb-3">
            Socials
          </p>
          <div className="flex gap-4">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
