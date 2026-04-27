import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ResumeButton from "./ResumeButton";

export default function Header({ navItems }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[var(--bg)]/70 border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-serif text-xl tracking-tight hover:text-[var(--accent)] transition-colors"
        >
          CMU<span className="text-[var(--accent)]">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group px-4 py-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors flex items-center gap-2"
            >
              <span className="text-[10px] text-[var(--text-faint)] group-hover:text-[var(--accent)] transition-colors">
                {item.number}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:block">
          <ResumeButton />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]">
          <nav className="px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 text-[var(--text-muted)] hover:text-[var(--text)]"
              >
                <span className="text-xs text-[var(--text-faint)]">
                  {item.number}
                </span>
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <ResumeButton />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
