import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import ResumeButton from "./ResumeButton";

export default function Header({ dark, setDark, navItems }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/50 dark:border-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition"></div>
              <h1 className="relative text-xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent px-4 py-2">
                MU
              </h1>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            <ResumeButton />

            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-lg bg-slate-200/80 dark:bg-slate-800/80 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {dark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-lg bg-slate-200/80 dark:bg-slate-800/80"
              aria-label="Toggle dark mode"
            >
              {dark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg bg-slate-200/80 dark:bg-slate-800/80"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden border-t border-slate-200/50 dark:border-slate-800/50 backdrop-blur-lg bg-white/95 dark:bg-slate-900/95">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="py-2 px-4 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                onClick={() => setOpen(false)}
              >
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
