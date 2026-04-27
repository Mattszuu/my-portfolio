import { useState, useEffect, useRef } from "react";
import { Download, ChevronDown } from "lucide-react";
import CONFIG from "../data/config";

export default function ResumeButton() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="group inline-flex items-center gap-2 px-4 py-2 text-sm text-[var(--text)] border border-[var(--border-strong)] rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
      >
        Resume
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg overflow-hidden shadow-2xl">
          {CONFIG.resumes.map((resume, idx) => (
            <a
              key={idx}
              href={resume.file}
              download={resume.file}
              onClick={() => setOpen(false)}
              className="group flex items-start gap-3 p-4 hover:bg-white/5 transition-colors border-b border-[var(--border)] last:border-0"
            >
              <Download className="w-4 h-4 mt-0.5 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors" />
              <div className="flex-1">
                <p className="text-sm text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                  {resume.label}
                </p>
                <p className="text-xs text-[var(--text-faint)] mt-0.5">
                  {resume.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
