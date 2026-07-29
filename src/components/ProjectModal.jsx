import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Github, ArrowUpRight } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setIdx(0);
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  const images = project?.images ?? [];

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8"
          style={{ background: "rgba(5, 8, 15, 0.7)", backdropFilter: "blur(6px)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-2xl"
            style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full"
              style={{ background: "color-mix(in srgb, var(--bg) 80%, transparent)", border: "1px solid var(--border)" }}
            >
              <X size={16} />
            </button>

            {images.length > 0 && (
              <div className="relative aspect-video" style={{ background: "var(--bg-inset)" }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={idx}
                    src={images[idx]}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    className="w-full h-full object-contain"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </AnimatePresence>
                {images.length > 1 && (
                  <>
                    <button
                      aria-label="Previous image"
                      onClick={() => setIdx((i) => (i - 1 + images.length) % images.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full"
                      style={{ background: "color-mix(in srgb, var(--bg) 80%, transparent)", border: "1px solid var(--border)" }}
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      aria-label="Next image"
                      onClick={() => setIdx((i) => (i + 1) % images.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full"
                      style={{ background: "color-mix(in srgb, var(--bg) 80%, transparent)", border: "1px solid var(--border)" }}
                    >
                      <ChevronRight size={16} />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {images.map((_, i) => (
                        <span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full transition-colors"
                          style={{ background: i === idx ? "var(--accent)" : "var(--border-strong)" }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            <div className="p-6 md:p-8">
              <p className="font-mono text-xs mb-2" style={{ color: "var(--text-faint)" }}>
                {project.year}
              </p>
              <h3 className="font-display text-2xl font-bold">{project.title}</h3>
              <p className="text-sm mt-1 font-medium" style={{ color: "var(--accent)" }}>
                {project.subtitle}
              </p>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {project.description}
              </p>

              <h4 className="mt-6 font-mono text-[11px] uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                My contribution
              </h4>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {project.contribution}
              </p>

              <h4 className="mt-6 font-mono text-[11px] uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                Stack & tools
              </h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tools.split(",").map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium"
                    style={{ background: "var(--bg-inset)", color: "var(--text-muted)" }}
                  >
                    {t.trim()}
                  </span>
                ))}
              </div>

              {(project.github || project.link) && (
                <div className="mt-7 flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold"
                      style={{ border: "1px solid var(--border-strong)" }}
                    >
                      <Github size={15} /> Source
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white"
                      style={{ background: "var(--accent)" }}
                    >
                      Live site <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
