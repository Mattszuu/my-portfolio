import { useEffect, useMemo, useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  const navItems = useMemo(
    () => [
      { id: "about", label: "About" },
      { id: "projects", label: "Projects" },
      { id: "skills", label: "Skills" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Header dark={dark} setDark={setDark} navItems={navItems} />

      <main>
        <Hero />

        <About />

        <Projects />

        <Skills />

        <Contact />
      </main>

      <Footer year={year} />
    </div>
  );
}
