export default function Footer({ year }) {
  return (
    <footer className="px-6 sm:px-10 py-8 border-t border-[var(--border)] max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-[var(--text-faint)]">
        <p>© {year} Christian Matthew Untalan</p>
        <p>Built with React, Tailwind & Framer Motion</p>
        <a
          href="#hero"
          className="hover:text-[var(--accent)] transition-colors self-start md:self-auto"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
