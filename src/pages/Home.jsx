import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import CONFIG from "../data/config";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

export default function Home() {
  const location = useLocation();
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 60);
    }
  }, [location]);

  const featured = [
    ...CONFIG.projects.infra.slice(0, 1).map((p) => ({ ...p, type: "infra" })),
    ...CONFIG.projects.dev.slice(0, 1).map((p) => ({ ...p, type: "dev" })),
    ...CONFIG.projects.infra.slice(1, 2).map((p) => ({ ...p, type: "infra" })),
  ];

  return (
    <>
      <Hero />
      <Experience />

      {/* Featured work */}
      <section className="px-6 sm:px-10 py-24 md:py-32 max-w-7xl mx-auto">
        <SectionHeader
          label="Featured Work"
          title="Selected projects."
          sub="Cloud architecture, monitoring pipelines, and a SaaS product built end to end."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((p, i) => (
            <ProjectCard key={p.id} project={p} onOpen={setSelected} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold"
            style={{ border: "1px solid var(--border-strong)" }}
          >
            All projects <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      <Skills />
      <About />
      <Contact />
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
