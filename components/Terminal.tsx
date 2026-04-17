"use client";

import { useState, useEffect, useRef } from "react";
import { HERO_DATA } from "@/data/portfolio";

type LineType = "cmd" | "out" | "success" | "ready";

const LINE_TYPES: LineType[] = ["cmd", "out", "out", "success", "success", "success", "ready"];

const LINE_COLORS: Record<LineType, string> = {
  cmd:     "text-purple-300",
  out:     "text-slate-400",
  success: "text-emerald-400",
  ready:   "text-blue-300",
};

const CHAR_DELAY = 32;
const LINE_PAUSE = 380;
const START_DELAY = 700;

export default function Terminal() {
  const [started, setStarted] = useState(false);
  const [completedLines, setCompletedLines] = useState<number[]>([]);
  const [typingText, setTypingText] = useState("");
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const lines = HERO_DATA.terminalLines;

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), START_DELAY);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!started || done) return;
    if (lineIdx >= lines.length) { setDone(true); return; }

    const line = lines[lineIdx];
    if (charIdx < line.length) {
      const t = setTimeout(() => {
        setTypingText(line.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, CHAR_DELAY);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setCompletedLines((prev) => [...prev, lineIdx]);
        setTypingText("");
        setCharIdx(0);
        setLineIdx((l) => l + 1);
      }, LINE_PAUSE);
      return () => clearTimeout(t);
    }
  }, [started, lineIdx, charIdx, done, lines]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [completedLines, typingText]);

  return (
    <div className="glass rounded-2xl overflow-hidden border border-white/10 font-mono text-sm w-full shadow-2xl glow-violet">
      {/* Chrome bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/[0.05]">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/60" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <span className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <span className="ml-2 text-xs text-slate-500 truncate">~/research/rl-finance</span>
      </div>

      {/* Body */}
      <div className="p-5 space-y-1.5 min-h-[230px] max-h-[300px] overflow-y-auto scrollbar-hide bg-black/20">
        {completedLines.map((i) => (
          <div key={i} className={LINE_COLORS[LINE_TYPES[i] ?? "out"]}>
            {lines[i]}
            {done && i === completedLines[completedLines.length - 1] && (
              <span className="animate-blink ml-0.5">█</span>
            )}
          </div>
        ))}

        {!done && started && (
          <div className={LINE_COLORS[LINE_TYPES[lineIdx] ?? "out"]}>
            {typingText}
            <span className="animate-blink ml-0.5">█</span>
          </div>
        )}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}
