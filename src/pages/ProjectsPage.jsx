import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CONFIG from "../data/config";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import Reveal from "../components/Reveal";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "infra", label: "Infrastructure" },
  { key: "dev", label: "Development" },
  { key: "qa", label: "QA" },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const all = [
    ...CONFIG.projects.infra.map((p) => ({ ...p, type: "infra" })),
    ...CONFIG.projects.dev.map((p) => ({ ...p, type: "dev" })),
    ...CONFIG.projects.qa.map((p) => ({ ...p, type: "qa" })),
  ];
  const filtered = all.filter((p) => filter === "all" || p.type === filter);

  return (
    <section className="px-6 sm:px-10 pt-32 md:pt-40 pb-24 max-w-7xl mx-auto min-h-screen">
      <Reveal>
        <p className="eyebrow mb-3">Projects</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
          Everything I've built,
          <br />
          shipped, and tested.
        </h1>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 mb-10">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={
                filter === f.key
                  ? { background: "var(--accent)", color: "#fff" }
                  : { border: "1px solid var(--border)", color: "var(--text-muted)" }
              }
            >
              {f.label}
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} onOpen={setSelected} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
