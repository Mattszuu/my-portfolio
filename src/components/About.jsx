import { motion } from "framer-motion";
import CONFIG from "../data/config";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section
      id="about"
      className="px-6 sm:px-10 py-24 md:py-32 max-w-7xl mx-auto"
    >
      <SectionHeader
        number="02"
        label="About"
        title="I build interfaces and ensure they work end to end."
      />

      {/* Bio paragraph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="grid md:grid-cols-12 gap-8 mb-24"
      >
        <div className="md:col-span-7 md:col-start-3">
          <p className="text-lg text-[var(--text-muted)] leading-relaxed">
            {CONFIG.about}
          </p>
        </div>
      </motion.div>

      {/* Experience timeline */}
      <div className="grid md:grid-cols-12 gap-8 mb-24">
        <div className="md:col-span-3">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.2em] text-[var(--text-faint)]"
          >
            Experience
          </motion.p>
        </div>
        <div className="md:col-span-9">
          {CONFIG.workExperience.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="border-t border-[var(--border)] py-8 first:border-t-0 first:pt-0"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                <div>
                  <h4 className="font-serif text-2xl md:text-3xl">
                    {job.title}
                  </h4>
                  <p className="text-sm text-[var(--text-muted)] mt-1">
                    {job.company} · {job.location}
                  </p>
                </div>
                <span className="text-xs text-[var(--text-faint)] tracking-wider">
                  {job.period}
                </span>
              </div>
              <ul className="space-y-2 mt-4">
                {job.responsibilities.map((resp, i) => (
                  <li
                    key={i}
                    className="text-sm text-[var(--text-muted)] leading-relaxed pl-4 relative"
                  >
                    <span className="absolute left-0 top-2.5 w-2 h-px bg-[var(--text-faint)]" />
                    {resp}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="grid md:grid-cols-12 gap-8 mb-24">
        <div className="md:col-span-3">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.2em] text-[var(--text-faint)]"
          >
            Education
          </motion.p>
        </div>
        <div className="md:col-span-9">
          {CONFIG.education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="border-t border-[var(--border)] py-8 first:border-t-0 first:pt-0"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                <div>
                  <h4 className="font-serif text-2xl md:text-3xl">
                    {edu.school}
                  </h4>
                  <p className="text-sm text-[var(--text-muted)] mt-1">
                    {edu.degree}
                    {edu.gpa && (
                      <span className="text-[var(--text-faint)]">
                        {" "}
                        · GPA {edu.gpa}
                      </span>
                    )}
                  </p>
                </div>
                <span className="text-xs text-[var(--text-faint)] tracking-wider">
                  {edu.period}
                </span>
              </div>
              {edu.awards && (
                <ul className="space-y-1 mt-3">
                  {edu.awards.map((award, i) => (
                    <li
                      key={i}
                      className="text-sm text-[var(--text-muted)] pl-4 relative"
                    >
                      <span className="absolute left-0 top-2.5 w-2 h-px bg-[var(--accent)]" />
                      {award}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificates */}
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.2em] text-[var(--text-faint)]"
          >
            Certifications
          </motion.p>
        </div>
        <div className="md:col-span-9">
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {CONFIG.certificates.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="border-t border-[var(--border)] pt-4"
              >
                <p className="text-sm text-[var(--text)] mb-1">{cert.title}</p>
                <p className="text-xs text-[var(--text-faint)]">
                  {cert.issuer} · {cert.date}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
