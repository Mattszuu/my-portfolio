import CONFIG from "../data/config";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-6 sm:px-10 py-8" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs" style={{ color: "var(--text-faint)" }}>
          © {year} {CONFIG.name}
        </p>
        <p className="font-mono text-xs flex items-center gap-2" style={{ color: "var(--text-faint)" }}>
          <span className="status-dot" style={{ width: 6, height: 6 }} />
          all systems operational
        </p>
      </div>
    </footer>
  );
}
