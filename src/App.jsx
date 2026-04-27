import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const navItems = [
    { id: "work", label: "Work", number: "01" },
    { id: "about", label: "About", number: "02" },
    { id: "skills", label: "Skills", number: "03" },
    { id: "contact", label: "Contact", number: "04" },
  ];

  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Header navItems={navItems} />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer year={year} />
    </div>
  );
}
