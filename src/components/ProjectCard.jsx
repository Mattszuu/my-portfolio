import { motion } from "framer-motion";
import { ArrowUpRight, Github, Server, Code2, SearchCheck } from "lucide-react";

const TYPE_META = {
  infra: { label: "Infrastructure", Icon: Server },
  dev: { label: "Development", Icon: Code2 },
  qa: { label: "Quality Assurance", Icon: SearchCheck },
};

export default function ProjectCard({ project, onOpen, index = 0 }) {
  const meta = TYPE_META[project.type] ?? TYPE_META.dev;
  const cover = project.images?.[0];

  return (
    <motion.button
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: 0.05 * index, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      onClick={() => onOpen(project)}
      className="group text-left rounded-2xl overflow-hidden w-full"
      style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}
    >
      <div className="aspect-[16/10] overflow-hidden relative" style={{ background: "var(--bg-inset)" }}>
        {cover ? (
          <img
            src={cover}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <meta.Icon size={44} style={{ color: "var(--text-faint)" }} />
          </div>
        )}
        <span
          className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider backdrop-blur"
          style={{ background: "color-mix(in srgb, var(--bg) 75%, transparent)", border: "1px solid var(--border)" }}
        >
          <meta.Icon size={11} /> {meta.label}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display font-bold text-lg leading-tight">{project.title}</h3>
            <p className="text-xs mt-1 font-medium" style={{ color: "var(--accent)" }}>
              {project.subtitle}
            </p>
          </div>
          <span className="font-mono text-xs shrink-0" style={{ color: "var(--text-faint)" }}>
            {project.year}
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed line-clamp-3" style={{ color: "var(--text-muted)" }}>
          {project.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: "var(--accent)" }}>
          Case study
          <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </motion.button>
  );
}
