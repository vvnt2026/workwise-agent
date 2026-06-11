import { createFileRoute, Link } from "@tanstack/react-router";
import { CockpitShell } from "@/components/cockpit/CockpitShell";
import {
  ControlTower,
  AIInsight,
  AgentActivity,
  AttentionList,
  HRCopilot,
} from "@/components/cockpit/CockpitSections";
import { personaRegistry, slugify } from "@/components/cockpit/personaRegistry";
import { sectionOverrides } from "@/components/cockpit/sectionOverrides";
import type { KPI, AttentionItem } from "@/components/cockpit/types";
import type { NavItem } from "@/components/cockpit/CockpitShell";

export const Route = createFileRoute("/cockpit/$persona/$section")({
  component: SectionPage,
});

function SectionPage() {
  const { persona: pslug, section } = Route.useParams();
  const meta = personaRegistry[pslug];

  if (!meta) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        Persona not found.
      </div>
    );
  }

  let item: NavItem | undefined;
  let heading = "";
  for (const g of meta.navGroups) {
    for (const it of g.items) {
      if (slugify(it.label) === section) {
        item = it as NavItem;
        heading = g.heading;
      }
    }
  }

  const personaProps = {
    initials: meta.initials,
    name: meta.name,
    role: meta.role,
    entity: meta.entity,
    location: meta.location,
    avatarColor: meta.avatarColor,
    navGroups: meta.navGroups,
  };

  if (!item || !item.detail) {
    return (
      <CockpitShell
        persona={personaProps}
        personaSlug={meta.slug}
        headerCenter={`${meta.name} · Section not found`}
        contextStrip="The section you're looking for hasn't been wired up yet."
        accent={meta.accent}
      >
        <div className="bg-white border border-border rounded-lg p-8 text-center">
          <div className="text-[14px] font-semibold mb-2">Section not found</div>
          <div className="text-[12.5px] text-muted-foreground mb-4">
            "{section}" isn't a valid view under {meta.name}'s cockpit.
          </div>
          <Link
            to="/cockpit/$persona"
            params={{ persona: meta.slug }}
            className="text-[12.5px] font-semibold text-[#1a56db]"
          >
            ← Back to cockpit
          </Link>
        </div>
      </CockpitShell>
    );
  }

  const d = item.detail;
  const override = sectionOverrides[`${meta.slug}/${section}`];

  // Parse value like "🟢 14.9%" or "16.4% · healthy" → { value, sub, tone }
  function splitStatus(raw: string | number): { value: string; sub?: string; tone?: KPI["tone"] } {
    const cleaned = String(raw ?? "—").trim();
    let tone: KPI["tone"] | undefined;
    let rest = cleaned;
    const emoji = cleaned.match(/^(🔴|🟡|🟢)\s*(.*)$/);
    if (emoji) {
      tone = emoji[1] === "🔴" ? "critical" : emoji[1] === "🟡" ? "warning" : "healthy";
      rest = emoji[2];
    }
    const parts = rest.split("·").map((s) => s.trim()).filter(Boolean);
    if (parts.length > 1) {
      const tail = parts.slice(1).join(" · ");
      const lower = tail.toLowerCase();
      if (!tone) {
        if (/critical|risk/.test(lower)) tone = "critical";
        else if (/warning|watch/.test(lower)) tone = "warning";
        else if (/healthy|good|stable|covered/.test(lower)) tone = "healthy";
      }
      return { value: parts[0], sub: tail, tone };
    }
    return { value: rest, tone };
  }

  // KPIs: prefer override, else synthesise from table rows (no filler tiles)
  let kpis: KPI[] = [];
  if (override?.kpis && override.kpis.length > 0) {
    kpis = override.kpis;
  } else if (d.kpiOverrides && d.kpiOverrides.length > 0) {
    kpis = d.kpiOverrides;
  } else if (d.table && d.table.rows.length > 0) {
    d.table.rows.slice(0, 4).forEach((r: (string | number)[]) => {
      const parsed = splitStatus(r[1]);
      const subParts: string[] = [];
      if (parsed.sub) subParts.push(parsed.sub);
      if (r.length > 2 && d.table) subParts.push(`${d.table.cols[2] ?? ""}: ${r[2]}`);
      kpis.push({
        label: String(r[0]),
        value: parsed.value,
        sub: subParts.join(" · ") || undefined,
        tone: parsed.tone,
        detail: {
          headline: `${r[0]} · ${r.slice(1).join(" · ")}`,
          narrative: d.narrative,
          table: d.table,
          agenticRead: `Row-level drill on ${r[0]} — agents pulled this from the live ${item!.label.toLowerCase()} dataset. ${typeof d.narrative === "string" ? d.narrative : d.headline}`,
        },
      });
    });
  }

  // Attention items: prefer override, else synthesise from recommended actions
  let attention: AttentionItem[] = [];
  if (override?.attention && override.attention.length > 0) {
    attention = override.attention;
  } else if (d.attentionOverrides && d.attentionOverrides.length > 0) {
    attention = d.attentionOverrides;
  } else if (d.actions && d.actions.length > 0) {
    const priorities: AttentionItem["priority"][] = ["critical", "warning", "warning", "healthy"];
    attention = d.actions.slice(0, 4).map((a: string, i: number) => ({
      priority: priorities[i] ?? "healthy",
      title: a,
      detail: `${heading} → ${item!.label}`,
      action: "Open",
      drill: {
        headline: a,
        narrative: d.narrative ?? d.headline,
        bullets: d.bullets,
        table: d.table,
      },
    }));
  }

  // AI Insight: prefer override, else fall back to a contextual narrative summary
  const insight = override?.insight ?? d.aiInsight ?? {
    title: `Agentic read on ${item.label}`,
    body:
      typeof d.narrative === "string"
        ? d.narrative
        : d.bullets?.join(" ") ?? d.headline,
    confidence: "84–91%",
    sources: ["Workday / SAP SuccessFactors / Oracle Fusion HCM", "Darwinbox", "Agent telemetry"],
    drill: d,
  };

  // Agent activity: page-specific if provided, else persona-wide
  const agentRuns = override?.agents ?? d.agentRuns ?? meta.agents;

  return (
    <CockpitShell
      persona={personaProps}
      personaSlug={meta.slug}
      headerCenter={`${item.label} · ${meta.name}`}
      contextStrip={`${heading} → ${item.label} · live cockpit view`}
      accent={meta.accent}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
            {heading} → {item.label} · June 2026
          </div>
          <h1 className="text-[24px] font-semibold mt-1 flex items-center gap-2">
            {item.icon && <span>{item.icon}</span>}
            <span>{item.label}</span>
          </h1>
          <p className="text-[13.5px] text-muted-foreground mt-1 max-w-2xl">{d.headline}</p>
        </div>
        <Link
          to="/cockpit/$persona"
          params={{ persona: meta.slug }}
          className="text-[12px] font-semibold text-[#1a56db] hover:underline whitespace-nowrap"
        >
          ← Back to {meta.name.split(" ")[0]}'s cockpit
        </Link>
      </div>

      {kpis.length > 0 && <ControlTower kpis={kpis} accent={meta.accent} />}

      {d.table && (
        <section className="bg-white border border-border rounded-lg p-5">
          <div className="section-title mb-3">Detail breakdown · {item.label}</div>
          <div className="border border-border rounded-lg overflow-hidden">
            <table className="w-full text-[12.5px]">
              <thead className="bg-muted/60">
                <tr>
                  {d.table.cols.map((c: string) => (
                    <th
                      key={c}
                      className="text-left font-semibold px-3 py-2 text-muted-foreground uppercase text-[10.5px] tracking-wider"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {d.table.rows.map((r: (string | number)[], i: number) => (
                  <tr key={i} className="border-t border-border hover:bg-muted/20">
                    {r.map((cell: string | number, j: number) => (
                      <td key={j} className="px-3 py-2 tabular-nums">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {d.bullets && d.bullets.length > 0 && (
        <section className="bg-white border border-border rounded-lg p-5">
          <div className="section-title mb-3">Key signals</div>
          <ul className="space-y-2">
            {d.bullets.map((b: string, i: number) => (
              <li key={i} className="flex gap-2 text-[13px] text-foreground">
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: meta.accent }}
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <AIInsight
        title={insight.title}
        body={insight.body}
        confidence={insight.confidence}
        sources={insight.sources}
        accent={meta.accent}
        drill={insight.drill ?? d}
      />

      {attention.length > 0 && <AttentionList items={attention} accent={meta.accent} />}

      <AgentActivity runs={agentRuns} />

      <HRCopilot personaName={meta.name.split(" ")[0]} prompts={meta.prompts} accent={meta.accent} />
    </CockpitShell>
  );
}
