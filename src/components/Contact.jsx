import CONFIG from "../data/config";
import Reveal from "./Reveal";
import { Mail, Github, Linkedin, Instagram, FileText } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-6 sm:px-10 py-24 md:py-32 max-w-7xl mx-auto scroll-mt-20">
      <Reveal>
        <div
          className="rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}
        >
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Let's build something reliable.
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-[15px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Open to conversations about infrastructure, frontend work, or anything in between. Based in {CONFIG.location}.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${CONFIG.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--accent)" }}
            >
              <Mail size={16} /> {CONFIG.email}
            </a>
            {CONFIG.resumes.map((r) => (
              <a
                key={r.file}
                href={`/${r.file}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-transform hover:-translate-y-0.5"
                style={{ border: "1px solid var(--border-strong)" }}
              >
                <FileText size={16} /> {r.label}
              </a>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-5">
            <a aria-label="GitHub" href={CONFIG.socials.github} target="_blank" rel="noreferrer" className="transition-colors hover:opacity-70">
              <Github size={20} />
            </a>
            <a aria-label="LinkedIn" href={CONFIG.socials.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:opacity-70">
              <Linkedin size={20} />
            </a>
            <a aria-label="Instagram" href={CONFIG.socials.instagram} target="_blank" rel="noreferrer" className="transition-colors hover:opacity-70">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
