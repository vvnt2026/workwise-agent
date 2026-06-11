import { Activity, Sparkles, MessageSquare, AlertTriangle, CheckCircle2, AlertCircle, Send, User2, Bot } from "lucide-react";
import { useMemo, useRef, useState, useEffect, type ReactNode } from "react";
import { DrillSheet } from "./DrillSheet";
import type { KPI, AttentionItem, AgentRun, CopilotPrompt, AIInsightDetail, DrillDetail } from "./types";

export type { KPI, AttentionItem, AgentRun, CopilotPrompt, AIInsightDetail, DrillDetail };

export function MorningBriefing({ children }: { children: ReactNode }) {
  return (
    <section className="bg-gradient-to-br from-[#dbeafe] via-[#eff6ff] to-[#ecfeff] border border-[#1a56db]/30 rounded-lg p-5 shadow-sm">
      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#1a56db] mb-2">Morning briefing</div>
      <p className="text-[14px] leading-relaxed text-foreground">{children}</p>
    </section>
  );
}

export function ControlTower({ kpis, accent = "#1a56db" }: { kpis: KPI[]; accent?: string }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const toneClass: Record<string, string> = {
    critical: "text-critical",
    warning: "text-warning",
    healthy: "text-healthy",
    default: "text-foreground",
  };
  const active = activeIdx !== null ? kpis[activeIdx] : null;
  return (
    <section>
      <div className="section-title mb-3">Control Tower · click any tile to drill</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {kpis.map((k, i) => (
          <button
            key={k.label}
            onClick={() => setActiveIdx(i)}
            className="bg-white border border-border rounded-lg p-4 text-left hover:border-primary/40 hover:shadow-sm transition-all group"
          >
            <div className="text-[10.5px] text-muted-foreground uppercase tracking-wide font-medium">{k.label}</div>
            <div className={`mt-1.5 text-[13.5px] font-medium tabular-nums ${toneClass[k.tone ?? "default"]}`}>
              {k.value}
            </div>
            {k.sub && <div className="mt-1 text-[11px] text-muted-foreground font-normal">{k.sub}</div>}
            <div className="mt-2 text-[10.5px] font-semibold uppercase tracking-wider text-[#1a56db]">
              Drill down →
            </div>
          </button>
        ))}
      </div>
      <DrillSheet
        open={activeIdx !== null}
        onOpenChange={(v) => !v && setActiveIdx(null)}
        title={active?.label ?? ""}
        subtitle={active ? `${active.value}${active.sub ? " · " + active.sub : ""}` : ""}
        detail={active?.detail}
        accent={accent}
      />
    </section>
  );
}

export function AIInsight({
  title,
  body,
  confidence,
  sources,
  showDisagree = true,
  accent = "#1a56db",
  drill,
}: AIInsightDetail & { showDisagree?: boolean; accent?: string; drill?: DrillDetail }) {
  const [open, setOpen] = useState(false);
  return (
    <section className="bg-white border border-border rounded-lg p-5">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-4 h-4" style={{ color: accent }} />
        <div className="section-title m-0">AI Insight</div>
      </div>
      <h3 className="text-[15px] font-semibold mb-2">{title}</h3>
      <p className="text-[13.5px] text-muted-foreground leading-relaxed">{body}</p>
      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11.5px] text-muted-foreground">
        <span>Confidence: <span className="text-foreground font-medium">{confidence}</span></span>
        <span>Sources: {sources.join(" · ")}</span>
      </div>
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => setOpen(true)}
          className="px-3.5 py-1.5 text-[12.5px] font-medium rounded-md text-white"
          style={{ background: accent }}
        >
          Investigate
        </button>
        <button
          onClick={() => setOpen(true)}
          className="px-3.5 py-1.5 text-[12.5px] font-medium rounded-md border border-border text-muted-foreground hover:text-foreground"
        >
          View evidence
        </button>
        {showDisagree && (
          <button className="px-3.5 py-1.5 text-[12.5px] font-medium rounded-md border border-border text-muted-foreground hover:text-foreground">
            Disagree
          </button>
        )}
      </div>
      <DrillSheet
        open={open}
        onOpenChange={setOpen}
        title={title}
        subtitle={`Confidence ${confidence} · ${sources.join(", ")}`}
        detail={drill}
        accent={accent}
      />
    </section>
  );
}

export function AgentActivity({ runs }: { runs: AgentRun[] }) {
  return (
    <section className="bg-white border border-border rounded-lg p-5">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="w-4 h-4 text-primary" />
        <div className="section-title m-0">Agent Activity · Overnight</div>
      </div>
      <ul className="space-y-3">
        {runs.map((r, i) => (
          <li key={i} className="flex items-start gap-3 text-[13px]">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <div className="flex-1">
              <span className="font-medium text-foreground">{r.agent}</span>
              <span className="text-muted-foreground"> — {r.message}</span>
            </div>
            <span className="text-[11px] text-muted-foreground shrink-0">{r.time}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function AttentionList({ items, accent = "#1a56db" }: { items: AttentionItem[]; accent?: string }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const cfg = {
    critical: { label: "CRITICAL", color: "text-critical bg-red-50 border-red-200", icon: AlertCircle },
    warning: { label: "WARNING", color: "text-warning bg-amber-50 border-amber-200", icon: AlertTriangle },
    healthy: { label: "HEALTHY", color: "text-healthy bg-green-50 border-green-200", icon: CheckCircle2 },
  } as const;
  const active = activeIdx !== null ? items[activeIdx] : null;
  return (
    <section className="bg-white border border-border rounded-lg p-5">
      <div className="section-title mb-4">What Needs Your Attention · click row to drill</div>
      <ul className="divide-y divide-border">
        {items.map((it, i) => {
          const c = cfg[it.priority];
          const Icon = c.icon;
          return (
            <li key={i} className="py-3 flex items-start gap-4 hover:bg-muted/30 -mx-2 px-2 rounded cursor-pointer" onClick={() => setActiveIdx(i)}>
              <span className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-1 rounded border ${c.color} shrink-0`}>
                <Icon className="w-3 h-3" />
                {c.label}
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-[13.5px] font-medium text-foreground">{it.title}</div>
                <div className="text-[12px] text-muted-foreground mt-0.5">{it.detail}</div>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); setActiveIdx(i); }}
                className="px-3 py-1.5 text-[12px] font-semibold rounded-md text-white shrink-0 hover:opacity-90 transition-opacity"
                style={{ background: "#1a56db" }}
              >
                {it.action} →
              </button>
            </li>
          );
        })}
      </ul>
      <DrillSheet
        open={activeIdx !== null}
        onOpenChange={(v) => !v && setActiveIdx(null)}
        title={active?.title ?? ""}
        subtitle={active?.detail}
        detail={
          active
            ? (active.drill ?? {
                headline: active.title,
                narrative: active.detail,
              })
            : undefined
        }
        accent={accent}
      />
    </section>
  );
}

type ChatMsg = { role: "user" | "bot"; text: string };

export function HRCopilot({
  prompts,
  accent = "#1a56db",
  personaName = "you",
}: {
  prompts: CopilotPrompt[];
  accent?: string;
  personaName?: string;
}) {
  const [messages, setMessages] = useState<ChatMsg[]>([
    { role: "bot", text: `Hi ${personaName}, I'm your HR Copilot. Ask anything about your people, data, or actions — or pick a suggested prompt below.` },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  const lookup = useMemo(() => {
    const m = new Map<string, string>();
    prompts.forEach((p) => m.set(p.q.toLowerCase().trim(), p.a));
    return m;
  }, [prompts]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, typing]);

  function answerFor(q: string): string {
    const key = q.toLowerCase().trim();
    if (lookup.has(key)) return lookup.get(key)!;
    // fuzzy match: highest word-overlap score
    let best = "";
    let bestScore = 0;
    const qWords = new Set(key.split(/\W+/).filter((w) => w.length > 3));
    for (const p of prompts) {
      const pWords = p.q.toLowerCase().split(/\W+/);
      const score = pWords.reduce((s, w) => (qWords.has(w) ? s + 1 : s), 0);
      if (score > bestScore) { bestScore = score; best = p.a; }
    }
    if (bestScore >= 2) return best;
    const list = prompts.map((p, i) => `${i + 1}. ${p.q}`).join("\n");
    return `In the live system, I'd query your actual Workday, Salesforce, and LMS data to answer this in real time. This demo is illustrative — here are things I can answer right now:\n\n${list}`;
  }

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { role: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    const reply = answerFor(trimmed);
    // simulate streaming delay
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: reply }]);
      setTyping(false);
    }, 550);
  }

  return (
    <section className="bg-white border border-border rounded-lg p-5">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare className="w-4 h-4" style={{ color: accent }} />
        <div className="section-title m-0">HR Copilot</div>
      </div>

      <div className="border border-border rounded-md bg-muted/20 h-[320px] overflow-y-auto p-3 space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={`flex items-start gap-2 ${m.role === "user" ? "justify-end" : ""}`}>
            {m.role === "bot" && (
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white shrink-0" style={{ background: accent }}>
                <Bot className="w-3.5 h-3.5" />
              </div>
            )}
            <div
              className={`max-w-[80%] rounded-lg px-3 py-2 text-[13px] leading-relaxed whitespace-pre-wrap ${
                m.role === "user" ? "text-white" : "bg-white border border-border text-foreground"
              }`}
              style={m.role === "user" ? { background: accent } : undefined}
            >
              {m.text}
            </div>
            {m.role === "user" && (
              <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-foreground shrink-0">
                <User2 className="w-3.5 h-3.5" />
              </div>
            )}
          </div>
        ))}
        {typing && (
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-white" style={{ background: accent }}>
              <Bot className="w-3.5 h-3.5" />
            </div>
            <div className="bg-white border border-border rounded-lg px-3 py-2 text-[13px] text-muted-foreground">
              <span className="inline-block animate-pulse">thinking…</span>
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {prompts.map((p) => (
          <button
            key={p.q}
            onClick={() => send(p.q)}
            className="text-left px-3 py-1.5 text-[12px] border border-border rounded-full hover:border-primary/40 hover:bg-accent text-foreground"
          >
            {p.q}
          </button>
        ))}
      </div>

      <form
        onSubmit={(e) => { e.preventDefault(); send(input); }}
        className="mt-3 flex items-center gap-2 border border-border rounded-md px-3 py-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent outline-none text-[13px] placeholder:text-muted-foreground"
          placeholder="Ask anything about your people, data, or actions…"
        />
        <button type="submit" className="text-white rounded-md p-1.5" style={{ background: accent }}>
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </section>
  );
}
