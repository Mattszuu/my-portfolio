import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import CONFIG from "../data/config";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [filter, setFilter] = useState("all");

  const allProjects = [
    ...CONFIG.projects.dev.map((p) => ({ ...p, type: "dev" })),
    ...CONFIG.projects.qa.map((p) => ({ ...p, type: "qa" })),
  ];

  const filtered = allProjects.filter(
    (p) => filter === "all" || p.type === filter,
  );

  const openModal = (project) => {
    setSelectedProject(project);
    setImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject?.images) {
      setImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject?.images) {
      setImageIndex(
        (prev) =>
          (prev - 1 + selectedProject.images.length) %
          selectedProject.images.length,
      );
    }
  };

  return (
    <section
      id="work"
      className="px-6 sm:px-10 py-24 md:py-32 max-w-7xl mx-auto"
    >
      <SectionHeader
        number="01"
        label="Selected Work"
        title="A few things I've built and tested."
      />

      {/* Filter pills */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex gap-2 mb-12"
      >
        {[
          { id: "all", label: "All" },
          { id: "dev", label: "Development" },
          { id: "qa", label: "QA" },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
              filter === f.id
                ? "bg-[var(--text)] text-[var(--bg)] border-[var(--text)]"
                : "border-[var(--border-strong)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--text)]"
            }`}
          >
            {f.label}
          </button>
        ))}
      </motion.div>

      {/* Project list - editorial style */}
      <div className="border-t border-[var(--border)]">
        {filtered.map((project, idx) => (
          <motion.button
            key={project.id}
            onClick={() => openModal(project)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="group w-full text-left border-b border-[var(--border)] py-8 md:py-10 grid grid-cols-12 gap-4 items-center hover:border-[var(--border-strong)] transition-colors"
          >
            <div className="col-span-1 text-xs text-[var(--text-faint)]">
              {String(idx + 1).padStart(2, "0")}
            </div>
            <div className="col-span-7 md:col-span-6">
              <h3 className="font-serif text-2xl md:text-3xl group-hover:text-[var(--accent)] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--text-muted)] mt-1">
                {project.subtitle}
              </p>
            </div>
            <div className="hidden md:block col-span-3 text-xs text-[var(--text-faint)]">
              {project.tools?.split(", ").slice(0, 2).join(", ")}
            </div>
            <div className="col-span-3 md:col-span-1 text-xs text-[var(--text-faint)] text-right">
              {project.year}
            </div>
            <div className="col-span-1 text-right">
              <ArrowUpRight className="w-5 h-5 ml-auto text-[var(--text-faint)] group-hover:text-[var(--accent)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="sticky top-4 left-full -translate-x-12 z-10 p-2 rounded-full bg-[var(--bg)] border border-[var(--border-strong)] hover:border-[var(--accent)] transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-8 md:p-10">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-xs text-[var(--text-faint)]">
                  {selectedProject.year}
                </span>
                <span className="text-xs text-[var(--text-faint)]">·</span>
                <span className="text-xs text-[var(--text-muted)]">
                  {selectedProject.subtitle}
                </span>
              </div>
              <h3 className="font-serif text-4xl md:text-5xl mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-[var(--text-muted)] mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Links */}
              <div className="flex flex-wrap gap-3 mb-8">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-[var(--border-strong)] rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-[var(--accent)] text-[var(--bg)] rounded-full hover:bg-[var(--text)] transition-colors"
                  >
                    Live demo
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Image carousel */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="relative mb-8 rounded-xl overflow-hidden bg-black border border-[var(--border)]">
                  <img
                    src={selectedProject.images[imageIndex]}
                    alt={`${selectedProject.title} screenshot ${
                      imageIndex + 1
                    }`}
                    className="w-full h-auto max-h-[500px] object-contain"
                  />
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[var(--bg)]/80 backdrop-blur-sm hover:bg-[var(--bg)] transition-colors"
                        aria-label="Previous"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[var(--bg)]/80 backdrop-blur-sm hover:bg-[var(--bg)] transition-colors"
                        aria-label="Next"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {selectedProject.images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setImageIndex(i)}
                            className={`h-1 rounded-full transition-all ${
                              i === imageIndex
                                ? "w-6 bg-[var(--accent)]"
                                : "w-1 bg-white/40"
                            }`}
                            aria-label={`Image ${i + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Details */}
              <div className="space-y-6 pt-6 border-t border-[var(--border)]">
                {selectedProject.contribution && (
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-faint)] mb-2">
                      My contribution
                    </p>
                    <p className="text-[var(--text-muted)] leading-relaxed">
                      {selectedProject.contribution}
                    </p>
                  </div>
                )}
                {selectedProject.tools && (
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-faint)] mb-3">
                      Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.split(", ").map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs border border-[var(--border-strong)] rounded-full text-[var(--text-muted)]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
