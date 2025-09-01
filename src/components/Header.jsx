import { useState } from "react";
import { motion } from "framer-motion";
import ResumeButton from "../components/ResumeButton";

export default function Header({ dark, setDark, navItems }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="p-4 flex justify-between items-center bg-white dark:bg-slate-950 shadow-md">
      <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        My Portfolio
      </h1>

      <nav className="hidden sm:flex items-center gap-6">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="hover:underline text-slate-900 dark:text-slate-100"
          >
            {item.label}
          </a>
        ))}

        <ResumeButton className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition" />

        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded bg-slate-200 dark:bg-slate-800 text-sm"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </nav>

      <div className="sm:hidden flex items-center gap-2">
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded bg-slate-200 dark:bg-slate-800"
        >
          {dark ? "☀️" : "🌙"}
        </button>
        <button
          onClick={() => setOpen(!open)}
          className="p-2 bg-slate-200 dark:bg-slate-800 rounded"
        >
          ☰
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 left-0 w-full bg-white dark:bg-slate-950 flex flex-col items-center py-4 sm:hidden shadow-md z-50"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="py-2 hover:underline text-slate-900 dark:text-slate-100"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <ResumeButton className="mt-3 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition" />

        </motion.nav>
      )}
    </header>
  );
}
