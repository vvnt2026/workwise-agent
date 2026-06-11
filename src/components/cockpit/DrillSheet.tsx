import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import type { DrillDetail } from "./types";
import type { ReactNode } from "react";

function isNonEmptyReactNode(v: ReactNode | undefined): boolean {
  if (v === undefined || v === null || v === false) return false;
  if (typeof v === "string") return v.trim().length > 0;
  return true;
}

export function DrillSheet({
  open,
  onOpenChange,
  title,
  subtitle,
  detail,
  accent = "#1a56db",
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  title: string;
  subtitle?: string;
  detail?: DrillDetail;
  accent?: string;
}) {
  // Always synthesise a usable detail so every drill renders the full 6-section narrative.
  const d: DrillDetail = detail ?? { headline: title };
  const headline = d.headline || title || "Agentic deep-dive";

  // Detect the topic of this specific drill so fallbacks are drill-specific
  // rather than the same generic three bullets on every sheet.
  const ctx = `${title} ${subtitle ?? ""} ${headline}`.toLowerCase();
  const topic =
    /burnout|wellness|fatigue|overtime/.test(ctx) ? "burnout"
    : /attriti|exit|flight|regret/.test(ctx) ? "attrition"
    : /hir|open role|time-to-fill|requisition|ttf/.test(ctx) ? "hiring"
    : /comp|payout|incentive|salary|bonus|benchmark|pay/.test(ctx) ? "comp"
    : /compli|sebi|irdai|rbi|kyc|statutory|audit|regulator/.test(ctx) ? "compliance"
    : /successi|pipeline|leadership|bench|ready-now/.test(ctx) ? "succession"
    : /nps|engage|pulse|sentiment|culture/.test(ctx) ? "engagement"
    : /train|skill|learn|lms|certif/.test(ctx) ? "skills"
    : /productiv|target|attain|sla|cycle time|tat/.test(ctx) ? "performance"
    : /dei|diversity|gender|inclusion/.test(ctx) ? "dei"
    : /claim|fnol|underwrit|broker/.test(ctx) ? "claims"
    : /promot|progression|move|mobility/.test(ctx) ? "mobility"
    : "general";

  // Pull a primary number out of the headline (e.g. "42", "27%", "₹1.9 Cr")
  const numMatch = headline.match(/(₹?[\d.,]+\s*(?:Cr|L|%|d|h|bps|days|hrs)?)/i);
  const primaryNum = numMatch?.[1] ?? "";

  const TOPIC: Record<string, { signals: string[]; sources: string[]; actions: string[]; evCols: string[]; evRows: (string | number)[][] }> = {
    burnout: {
      signals: [
        primaryNum ? `${primaryNum} people now cross all three burnout thresholds (overtime + missed leave + sentiment drop).` : "Triple-trigger burnout signal: overtime + zero leave + sentiment drop.",
        "Intervention window closes in ~7 days before exit-risk doubles.",
        "Manager 1:1 cadence has slipped in the affected cluster.",
      ],
      sources: ["Workday", "Login telemetry", "Pulse survey", "Leave system"],
      actions: ["Approve intervention plan", "Lock 5-day reset window", "Notify line managers"],
      evCols: ["Cluster", "People", "Avg overtime/day", "Last leave"],
      evRows: [
        ["Cluster A", "12", "11.4h", "72 days ago"],
        ["Cluster B", "9", "10.8h", "61 days ago"],
        ["Cluster C", "8", "11.1h", "68 days ago"],
      ],
    },
    attrition: {
      signals: [
        primaryNum ? `Current rate ${primaryNum} — variance vs benchmark is material.` : "Variance vs benchmark is material this quarter.",
        "Top driver: manager-1:1 gap, not pay (per exit-interview NLP).",
        "Highest concentration in 2 clusters — fixable, not structural.",
      ],
      sources: ["HRMS exits", "Exit interview NLP", "Manager NPS"],
      actions: ["Open exit-interview themes", "Brief affected BUs", "Trigger stay-interview sprint"],
      evCols: ["Segment", "Rate", "Top reason", "Replacement cost"],
      evRows: [
        ["Tier-1 metro", "11.8%", "Career growth", "₹0.6 Cr"],
        ["Tier-3 cities", "19.4%", "Manager fit", "₹1.4 Cr"],
        ["High-perf cohort", "8.2%", "Comp / role", "₹2.1 Cr"],
      ],
    },
    hiring: {
      signals: [
        primaryNum ? `${primaryNum} on the headline metric — ramp impact is quantified.` : "Ramp impact is quantified against book plan.",
        "Bottleneck is interview-panel availability, not pipeline depth.",
        "RPO can add capacity within 2 weeks if greenlit.",
      ],
      sources: ["ATS", "Workday req data", "RPO partner SLA"],
      actions: ["Open req review", "Push to RPO", "Approve panel expansion"],
      evCols: ["Role family", "Open", "TTF (days)", "SLA"],
      evRows: [
        ["Frontline sales", "1,840", "38", "30"],
        ["Relationship Mgmt", "612", "46", "35"],
        ["Branch leadership", "84", "62", "45"],
      ],
    },
    comp: {
      signals: [
        primaryNum ? `Headline figure: ${primaryNum}. Cross-checked against latest market cut.` : "Cross-checked against latest market benchmark cut.",
        "Perception gap (not accuracy) is the dominant complaint signal.",
        "A targeted town-hall closes 60–70% of perception risk at zero cost.",
      ],
      sources: ["Mercer / AON cut", "Payout engine", "Pulse survey"],
      actions: ["Approve comp action", "Schedule town-hall", "Refresh slab comms"],
      evCols: ["Segment", "Variance to market", "Perception score", "Exit risk lift"],
      evRows: [
        ["Cohort A", "-4.2%", "27% unfair", "+1.6×"],
        ["Cohort B", "+1.1%", "8% unfair", "baseline"],
        ["Cohort C", "-2.8%", "18% unfair", "+1.2×"],
      ],
    },
    compliance: {
      signals: [
        primaryNum ? `${primaryNum} on the compliance metric — exposure is bounded but real.` : "Exposure is bounded but real — regulator window is short.",
        "Concentration in 2 clusters; targeted nudge resolves majority.",
        "Inspection cycle opens in ~6 weeks; closure must precede that.",
      ],
      sources: ["LMS completion", "Statutory tracker", "Regulator filings"],
      actions: ["Force-push deadline", "Allocate paid time slot", "Notify compliance officer"],
      evCols: ["Module / filing", "Population", "Completion", "Risk"],
      evRows: [
        ["KYC refresher", "612", "38%", "High"],
        ["AML attestation", "412", "71%", "Medium"],
        ["POSH refresher", "1,840", "84%", "Low"],
      ],
    },
    succession: {
      signals: [
        primaryNum ? `Coverage at ${primaryNum} — depth varies by function.` : "Depth varies materially by function.",
        "Two critical roles have only 1 ready-now successor — concentration risk.",
        "Internal vs external fill ratio improving QoQ.",
      ],
      sources: ["9-box", "Successor readiness scoring", "Career hub"],
      actions: ["Greenlight stretch assignments", "Open successor review", "Brief NomCom"],
      evCols: ["Critical role", "Ready now", "Ready 1-2y", "Gap"],
      evRows: [
        ["Function head A", "2", "3", "Low"],
        ["Function head B", "1", "1", "High"],
        ["Function head C", "3", "4", "Low"],
      ],
    },
    engagement: {
      signals: [
        primaryNum ? `Score: ${primaryNum}. Cluster spread is wider than usual.` : "Cluster spread is wider than usual this cycle.",
        "Coaching-cadence gap is the dominant explanatory variable.",
        "Recoverable inside one quarter with a focused manager sprint.",
      ],
      sources: ["Pulse", "Manager NPS", "Glint / Peakon"],
      actions: ["Launch coaching sprint", "Share comparative read-out", "Open root-cause review"],
      evCols: ["Segment", "Score", "Δ vs LQ", "Driver"],
      evRows: [
        ["Tier-1", "+52", "+4", "Coaching"],
        ["Tier-2", "+34", "-1", "Comms"],
        ["Tier-3", "+12", "-4", "Manager fit"],
      ],
    },
    skills: {
      signals: [
        primaryNum ? `Coverage ${primaryNum} on the headline skill.` : "Coverage on the headline skill is below plan.",
        "Two high-impact roles concentrate the gap — narrow remediation works.",
        "Curated learning paths already mapped in the LMS — needs assignment.",
      ],
      sources: ["LMS", "Skills graph", "Role architecture"],
      actions: ["Assign learning path", "Open skills heatmap", "Approve cross-skill bootcamp"],
      evCols: ["Skill", "Coverage", "Demand", "Gap"],
      evRows: [
        ["GenAI fluency", "31%", "78%", "-47 pts"],
        ["Credit underwriting", "68%", "75%", "-7 pts"],
        ["Agri-finance", "12%", "44%", "-32 pts"],
      ],
    },
    performance: {
      signals: [
        primaryNum ? `${primaryNum} on the headline KPI.` : "Headline KPI is tracking off plan.",
        "Variance concentrated in 2 clusters — not system-wide.",
        "Leading indicators suggest recovery if action is taken this week.",
      ],
      sources: ["Operational MIS", "Telemetry", "Branch scorecards"],
      actions: ["Open variance review", "Approve target recalibration", "Brief operating committee"],
      evCols: ["Cluster", "Attainment", "Δ vs plan", "Trend"],
      evRows: [
        ["Cluster A", "104%", "+4 pts", "↑"],
        ["Cluster B", "88%", "-12 pts", "→"],
        ["Cluster C", "76%", "-24 pts", "↓"],
      ],
    },
    dei: {
      signals: [
        primaryNum ? `Headline ratio: ${primaryNum}.` : "Ratio is below stated commitment.",
        "Leadership-pipeline gap dominates — not entry-level intake.",
        "Two interventions (sponsorship + promotion calibration) move the number.",
      ],
      sources: ["Workday diversity cut", "Promotion data", "Sponsorship program"],
      actions: ["Approve sponsorship cohort", "Open promotion calibration", "Brief DEI council"],
      evCols: ["Layer", "Representation", "Promotion rate", "Gap"],
      evRows: [
        ["Entry", "46%", "1.0×", "On-track"],
        ["Mid", "31%", "0.82×", "-9 pts"],
        ["Senior", "18%", "0.71×", "-14 pts"],
      ],
    },
    claims: {
      signals: [
        primaryNum ? `Headline: ${primaryNum} on the claims metric.` : "Cycle-time variance vs SLA is the main signal.",
        "Two adjuster pods carry most of the backlog.",
        "Automation rule update could remove 30–40% of repeat exceptions.",
      ],
      sources: ["Claims platform", "Adjuster telemetry", "Broker portal"],
      actions: ["Approve rule update", "Rebalance adjuster pods", "Brief broker partners"],
      evCols: ["Pod", "Open claims", "Avg TAT (d)", "SLA breach %"],
      evRows: [
        ["Pod A", "412", "4.2", "6%"],
        ["Pod B", "684", "7.8", "18%"],
        ["Pod C", "298", "3.9", "4%"],
      ],
    },
    mobility: {
      signals: [
        primaryNum ? `${primaryNum} in the eligible pool — momentum is real.` : "Eligible pool is large enough to act on this week.",
        "Wait-time past eligibility is the dominant exit predictor for this cohort.",
        "Clearing the backlog needs panel time, not new policy.",
      ],
      sources: ["HRMS pipeline", "Promotion criteria", "Exit cohort model"],
      actions: ["Schedule emergency panel", "Unblock interview SLA", "Brief affected managers"],
      evCols: ["Cohort", "Eligible", "Avg wait", "Exit lift if unmoved"],
      evRows: [
        ["DST → RM", "184", "47 d", "+2.3×"],
        ["RM → BM", "62", "38 d", "+1.7×"],
        ["Analyst → AM", "94", "41 d", "+1.9×"],
      ],
    },
    general: {
      signals: [
        primaryNum ? `Primary signal: ${headline}.` : `Primary signal: ${headline}.`,
        subtitle ? `Supporting context: ${subtitle}.` : "Cross-checked against the trailing 3-month baseline.",
        "No conflicting signals from adjacent systems in the last 24 hours.",
      ],
      sources: ["Workday", "Salesforce", "LMS", "Pulse"],
      actions: ["Open full view", "Brief stakeholder", "Snooze 24h"],
      evCols: ["Source", "Signal", "Confidence"],
      evRows: [
        ["Workday / Darwinbox", headline, d.confidence ?? "High"],
        ["Pulse + telemetry", subtitle ?? "Trend within tolerance band", "Medium-High"],
        ["Agent telemetry", "Pattern matches 2 historical analogues", "High"],
      ],
    },
  };

  const pack = TOPIC[topic];

  const narrative: ReactNode = isNonEmptyReactNode(d.narrative)
    ? d.narrative!
    : `${headline}${subtitle ? ` · ${subtitle}` : ""}. Agents surfaced this drill because the ${topic} signal is moving materially against your operating plan. The read below combines today's telemetry with the trailing benchmark window so you can act on it directly.`;

  const bullets: string[] = d.bullets && d.bullets.length > 0 ? d.bullets : pack.signals;

  const evidence = d.table ?? { cols: pack.evCols, rows: pack.evRows };

  const agenticRead =
    d.agenticRead ??
    `Agents synthesised this view from the underlying ${topic} signal — ${headline}. Cross-system reconciliation completed across ${pack.sources.slice(0, 3).join(", ")}; human-in-the-loop approval is required before any irreversible action.${d.confidence ? ` Confidence ${d.confidence}.` : ""}`;

  const actions = d.actions && d.actions.length > 0 ? d.actions : pack.actions;

  const sources = d.sources ?? pack.sources;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-[680px] overflow-y-auto bg-gradient-to-br from-[#dbeafe] via-[#eff6ff] to-[#ecfeff] border-l-4 border-l-[#1a56db]">
        <SheetHeader>
          <div className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: accent }}>
            Drill-down · agentic deep-dive
          </div>
          <SheetTitle className="text-[18px]">{title}</SheetTitle>
          {subtitle && <SheetDescription>{subtitle}</SheetDescription>}
        </SheetHeader>

        <div className="mt-5 space-y-5 pb-10">
          {/* 1. Headline */}
          <div
            className="rounded-lg p-4 shadow-md text-white"
            style={{ background: `linear-gradient(135deg, ${accent}, ${accent}cc)` }}
          >
            <div className="text-[10px] uppercase tracking-wider opacity-80 font-semibold mb-1">Headline</div>
            <div className="text-[14.5px] font-semibold">{headline}</div>
          </div>

          {/* 2. Context */}
          <div className="bg-white/80 backdrop-blur border border-[#1a56db]/15 rounded-lg p-4 text-[13.5px] text-foreground leading-relaxed shadow-sm">
            <div className="text-[10px] uppercase tracking-wider font-semibold mb-2" style={{ color: accent }}>Context</div>
            {narrative}
          </div>

          {/* 3. Key signals */}
          <div className="bg-white/80 backdrop-blur border border-[#1a56db]/15 rounded-lg p-4 shadow-sm">
            <div className="text-[10px] uppercase tracking-wider font-semibold mb-2" style={{ color: accent }}>Key signals</div>
            <ul className="space-y-2">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-2 text-[13px] text-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accent }} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Evidence */}
          <div className="bg-white/90 border border-[#1a56db]/15 rounded-lg overflow-hidden shadow-sm">
            <div className="px-4 py-2 text-[10px] uppercase tracking-wider font-semibold border-b border-[#1a56db]/10" style={{ color: accent }}>Evidence</div>
            <table className="w-full text-[12.5px]">
              <thead className="bg-muted/60">
                <tr>
                  {evidence.cols.map((c) => (
                    <th key={c} className="text-left font-semibold px-3 py-2 text-muted-foreground uppercase text-[10.5px] tracking-wider">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {evidence.rows.map((r, i) => (
                  <tr key={i} className="border-t border-border">
                    {r.map((cell, j) => (
                      <td key={j} className="px-3 py-2 tabular-nums">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 5. Agentic read */}
          <div className="bg-white/80 border border-[#1a56db]/15 rounded-lg p-4 shadow-sm">
            <div className="text-[10px] uppercase tracking-wider font-semibold mb-2" style={{ color: accent }}>Agentic read</div>
            <p className="text-[13px] text-foreground leading-relaxed">{agenticRead}</p>
            <div className="mt-2 flex flex-wrap gap-1.5 text-[10.5px]">
              {sources.map((s) => (
                <span key={s} className="px-2 py-0.5 rounded-full bg-[#1a56db]/10 text-[#1a56db] font-medium">{s}</span>
              ))}
            </div>
          </div>

          {/* 6. Recommended actions */}
          <div className="bg-white/80 border border-[#1a56db]/15 rounded-lg p-4 shadow-sm">
            <div className="text-[10px] uppercase tracking-wider font-semibold mb-2" style={{ color: accent }}>Recommended actions</div>
            <div className="flex flex-wrap gap-2">
              {actions.map((a) => (
                <button
                  key={a}
                  className="px-3 py-1.5 text-[12px] rounded-md text-white font-medium hover:opacity-90"
                  style={{ background: accent }}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
