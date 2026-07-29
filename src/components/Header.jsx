import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
];

const sectionLinks = [
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  const goToSection = (id) => {
    setOpen(false);
    if (location.pathname !== "/") return; // handled by Link below
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 transition-all"
      style={{
        background: scrolled ? "color-mix(in srgb, var(--bg) 82%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="font-mono text-sm font-medium tracking-tight">
          <span style={{ color: "var(--accent)" }}>~/</span>untalan
          <span className="caret ml-1" aria-hidden="true" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="link-underline text-sm font-medium"
              style={({ isActive }) => ({
                color: isActive ? "var(--text)" : "var(--text-muted)",
              })}
            >
              {item.label}
            </NavLink>
          ))}
          {sectionLinks.map((s) => (
            <Link
              key={s.id}
              to={`/#${s.id}`}
              onClick={() => goToSection(s.id)}
              className="link-underline text-sm font-medium"
              style={{ color: "var(--text-muted)" }}
            >
              {s.label}
            </Link>
          ))}
          <ThemeToggle theme={theme} toggle={toggle} />
        </nav>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle theme={theme} toggle={toggle} />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="p-2 rounded-lg"
            style={{ border: "1px solid var(--border)" }}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
            style={{ background: "var(--bg-elevated)", borderBottom: "1px solid var(--border)" }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className="text-sm font-medium">
                  {item.label}
                </NavLink>
              ))}
              {sectionLinks.map((s) => (
                <Link
                  key={s.id}
                  to={`/#${s.id}`}
                  onClick={() => goToSection(s.id)}
                  className="text-sm font-medium"
                  style={{ color: "var(--text-muted)" }}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function ThemeToggle({ theme, toggle }) {
  return (
    <button
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      className="relative p-2 rounded-lg overflow-hidden"
      style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25 }}
          className="block"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
