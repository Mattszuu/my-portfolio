import { useEffect, useMemo, useState } from "react";
import CONFIG from "../data/config";

const LINES = [
  { cmd: "whoami", out: ["christian.matthew.untalan"] },
  { cmd: "systemctl status career.service", out: ["● career.service — active (running)", "   Loaded: frontend → infrastructure"] },
  { cmd: "geneos status", out: ["Gateway   RUNNING", "Netprobe  RUNNING"] },
];

function useUptimeDays() {
  return useMemo(() => {
    const start = new Date(CONFIG.startDate + "T00:00:00");
    const days = Math.max(1, Math.floor((Date.now() - start.getTime()) / 86400000));
    return days;
  }, []);
}

export default function OpsConsole() {
  const uptime = useUptimeDays();
  const [lineIdx, setLineIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [shownOut, setShownOut] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const current = LINES[lineIdx];
    if (!current) return;
    let i = 0;
    setTyped("");
    setShownOut([]);
    const typeTimer = setInterval(() => {
      i += 1;
      setTyped(current.cmd.slice(0, i));
      if (i >= current.cmd.length) {
        clearInterval(typeTimer);
        setTimeout(() => {
          setShownOut(current.out);
          setTimeout(() => {
            setHistory((h) => [...h.slice(-2), current]);
            setLineIdx((idx) => (idx + 1) % LINES.length);
          }, 2600);
        }, 350);
      }
    }, 55);
    return () => clearInterval(typeTimer);
  }, [lineIdx]);

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}
    >
      {/* Title bar */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{ background: "var(--bg-elevated)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-[11px]" style={{ color: "var(--text-faint)" }}>
          ops-console — ssh matt@prod
        </span>
      </div>

      {/* Status row */}
      <div
        className="grid grid-cols-3 divide-x px-0"
        style={{ background: "var(--bg-elevated)", borderBottom: "1px solid var(--border)" }}
      >
        <Stat label="frontend" value="operational" />
        <Stat label="infra" value="operational" />
        <Stat label="uptime" value={`${uptime}d in role`} plain />
      </div>

      {/* Terminal body */}
      <div
        className="font-mono text-[12.5px] leading-relaxed px-4 py-4 min-h-[190px]"
        style={{ background: "var(--console-bg)", color: "var(--console-text)" }}
      >
        {history.map((h, i) => (
          <div key={i} className="opacity-50 mb-1.5">
            <div>
              <span style={{ color: "var(--signal)" }}>$</span> {h.cmd}
            </div>
            {h.out.map((o, j) => (
              <div key={j} className="pl-4">{o}</div>
            ))}
          </div>
        ))}
        <div>
          <span style={{ color: "var(--signal)" }}>$</span> {typed}
          <span className="caret ml-0.5" />
        </div>
        {shownOut.map((o, j) => (
          <div key={j} className="pl-4">{o}</div>
        ))}
      </div>
    </div>
  );
}

function Stat({ label, value, plain }) {
  return (
    <div className="px-4 py-3" style={{ borderRight: "1px solid var(--border)" }}>
      <p className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: "var(--text-faint)" }}>
        {label}
      </p>
      <p className="flex items-center gap-1.5 text-xs font-medium">
        {!plain && <span className="status-dot" style={{ width: 6, height: 6 }} />}
        {value}
      </p>
    </div>
  );
}
