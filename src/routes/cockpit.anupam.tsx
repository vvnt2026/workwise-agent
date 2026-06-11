import { createFileRoute } from "@tanstack/react-router";
import { CockpitShell } from "@/components/cockpit/CockpitShell";
import { MorningBriefing, ControlTower, AIInsight, AgentActivity, AttentionList, HRCopilot } from "@/components/cockpit/CockpitSections";
import { anupamNav } from "@/components/cockpit/navData";

export const Route = createFileRoute("/cockpit/anupam")({
  head: () => ({ meta: [{ title: "Anupam Sirbhaiya · Group CHRO · Bajaj Finserv" }] }),
  component: Page,
});

function Page() {
  return (
    <CockpitShell
      persona={{
        initials: "AS",
        name: "Anupam Sirbhaiya",
        role: "Group CHRO",
        entity: "Bajaj Finserv Limited",
        location: "Pune",
        navGroups: anupamNav,
        widgets: (
          <div>
            <div className="text-[10px] uppercase tracking-wider text-sidebar-foreground/40 font-semibold mb-2">Group scope</div>
            <div className="text-[11px] text-sidebar-foreground/70 space-y-1">
              <div>BFL · 53,420</div>
              <div>Bajaj Life · 28,100</div>
              <div>BGI · 12,800</div>
              <div>AMC · 1,240</div>
              <div>Alts · 580</div>
              <div>Health · 6,200</div>
              <div>Markets · 2,328</div>
            </div>
          </div>
        ),
      }}
      personaSlug="anupam"
      headerCenter="Anupam Sirbhaiya · Group CHRO · Bajaj Finserv Limited"
      contextStrip="Good morning, Anupam — 3 group-level signals and 1 strategic priority need your attention today."
    >
      <MorningBriefing>
        Group workforce at 1,04,668 across 7 entities. Three signals need your read today: AMC attrition running 5pp
        above group average with niche talent exiting to Mirae and Nippon; post-Allianz pulse trust score slipped 0.3
        points MoM to 6.4 — Finance function the fastest declining; and 4,200 IRDA agent licences lapsing in 90 days
        with renewal sprint at 61%. BFL field attrition holding at 14.9% — your one green signal today.
      </MorningBriefing>

      <ControlTower
        kpis={[
          {
            label: "Group workforce", value: "1,04,668", sub: "Across 7 entities",
            detail: {
              headline: "1,04,668 employees · YoY +6.2%",
              narrative: "Headcount concentrated in BFL field force (51%) and Bajaj Life agency operations (27%). Net growth driven by AMC build-out (+340 since Apr) and Health expansion (+1,120).",
              table: {
                cols: ["Entity", "Headcount", "YoY Δ", "Attrition"],
                rows: [
                  ["Bajaj Finance", "53,420", "+4.1%", "14.9%"],
                  ["Bajaj Life Insurance", "28,100", "+2.8%", "21.4%"],
                  ["Bajaj General Insurance", "12,800", "+5.6%", "17.2%"],
                  ["Bajaj Finserv Health", "6,200", "+22.0%", "19.8%"],
                  ["Bajaj Markets", "2,328", "+9.1%", "16.4%"],
                  ["Bajaj Finserv AMC", "1,240", "+38.0%", "11.2%"],
                  ["Bajaj Alts", "580", "+24.5%", "9.6%"],
                ],
              },
              actions: ["Export to board pack", "Send to Sanjiv", "Open entity drill"],
            },
          },
          {
            label: "Group attrition", value: "16.4%", sub: "vs BFSI 18.2%", tone: "healthy",
            detail: {
              headline: "Group attrition 16.4% · 180 bps below BFSI peer median",
              bullets: [
                "Best-in-class: Bajaj Alts (9.6%) and AMC (11.2%) — small specialist cohorts.",
                "Worst: Bajaj Life agency 31.2% (industry 34%) and Health 19.8% (rapid scale-up).",
              ],
            },
          },
          {
            label: "Leadership bench", value: "62%", sub: "CXO-1 coverage", tone: "warning",
            detail: {
              headline: "62% of CXO-1 roles have ≥1 ready-now successor",
              narrative: "14 critical CXO-1 roles across the group. 8 have ready-now bench; 6 have only ready-in-12-24-mo successors or no internal bench at all.",
            },
          },
          {
            label: "Cross-entity mobility", value: "4.1%", sub: "Target 6%", tone: "warning",
            detail: { headline: "Internal mobility 4.1% · target 6% by FY27" },
          },
          {
            label: "Leadership bench strength", value: "71%", sub: "Group governance layer · target 85%", tone: "warning",
            detail: {
              headline: "Bajaj Life governance layer 71% leadership-ready",
              narrative: "Assessed across 142 governance-critical roles (Finance, Risk, Compliance, IR, Legal). 41 roles still below readiness threshold; 9 of those are board-reporting.",
            },
          },
          {
            label: "Succession · CXO", value: "8 / 14", sub: "Roles with ready-now", tone: "warning",
            detail: {
              headline: "8 of 14 CXO roles have a ready-now successor",
              bullets: [
                "Bajaj Life accounts for 3 of the 6 uncovered roles.",
                "Average successor readiness = 19 months — above target 12.",
              ],
            },
          },
          {
            label: "Time-to-Productivity", value: "68 d", sub: "New hire to full output · Target 55 d", tone: "warning",
            detail: { headline: "Group TTP 68 days · 13 days above target" },
          },
          {
            label: "Internal Fill Rate", value: "41%", sub: "Roles filled internally · Target 55%", tone: "warning",
            detail: { headline: "Internal fill rate 41% · target 55%" },
          },
        ]}
      />

      <AIInsight
        title="Finance function trust declining — intervention window is now"
        body="Post-Allianz pulse shows Finance function trust at 6.1/10 and the only function declining (−0.1 MoM). All other functions are flat or improving. Finance teams typically show this pattern when role clarity and comp parity remain unresolved post-merger. Historical data from 3 comparable insurance integrations shows trust recovers in 90 days with targeted intervention — or falls below 5.5 within 6 months without it. You are in the intervention window. Recommended: 30-day Finance function town hall + role clarity workshop + comp parity audit. Cost: low. Window: 60 days."
        confidence="81–87%"
        sources={["Post-Allianz pulse data", "BFSI merger integration benchmarks", "Finance function sentiment trends"]}
        drill={{
          headline: "Finance function trust 6.1/10 — only declining function post-Allianz",
          narrative: "Pulse re-scored from 1,420 Finance employees across BALIC + Group. Open-text themes: 'role clarity lost' (38%), 'comp review delayed' (29%), 'reporting line ambiguity' (22%).",
          table: {
            cols: ["Function", "Trust", "MoM", "Top theme"],
            rows: [
              ["Finance", "6.1", "↓0.1", "Role clarity"],
              ["Bancassurance", "6.4", "↑0.2", "Slow integration"],
              ["Agency", "7.1", "↑0.6", "Improving fastest"],
              ["HR", "7.2", "↑0.3", "Stable"],
              ["Claims (BAGIC)", "7.3", "↑0.5", "Stable"],
              ["Tech", "7.8", "↑0.4", "Most settled"],
            ],
          },
          bullets: [
            "Comparable insurance merger benchmarks (HDFC-ERGO, ICICI-Pru) show 60-day intervention window before trust hardens.",
            "30-day Finance town-hall + role clarity workshop cost: ~₹18L.",
            "Cost of inaction modelled: 11–14% Finance attrition over 6 months ≈ ₹3.4 Cr.",
          ],
          actions: ["Schedule Finance town-hall", "Brief Priya", "Commission comp parity audit"],
          agenticRead: "Culture Integration Agent compared this month's Finance pulse against the 3-month trailing baseline and against 2 BFSI post-merger benchmarks — the divergence triggered this insight.",
          sources: ["Allianz integration pulse", "BFSI merger benchmarks", "Workday Finance org"],
          confidence: "81–87%",
        }}
      />

      <AIInsight
        title="1,180 DST→RM promotions stalled — FY26 target miss risk"
        body="DST→RM progression backlog stands at 1,180 candidates who have met performance criteria but are awaiting promotion interview scheduling. Average wait: 47 days past eligibility. BFL field attrition data shows that eligible-but-not-promoted DSTs have 2.3× higher 90-day exit rate vs promoted peers. At current backlog pace, approximately 280 of the 1,180 will exit before promotion — losing trained talent at the exact moment they peak. Recommended: emergency interview sprint — 5 days, dedicated panel, clear 48-hour decision SLA. Saves estimated ₹1.07 Cr in replacement costs."
        confidence="87–93%"
        sources={["HRMS promotion pipeline", "BFL attrition cohort model", "Promotion-lag exit correlation"]}
        drill={{
          headline: "1,180 eligible DSTs awaiting RM promotion · avg 47 days past eligibility",
          narrative: "Backlog is concentrated in West and South. Single biggest blocker is interview panel capacity — only 2 active panels for 9 zones.",
          table: {
            cols: ["Zone", "Backlog", "Avg wait", "Projected exits"],
            rows: [
              ["West (Pune HQ)", "412", "52 d", "98"],
              ["South", "284", "49 d", "68"],
              ["North", "236", "44 d", "54"],
              ["East", "158", "41 d", "36"],
              ["Central (MP)", "90", "38 d", "24"],
            ],
          },
          bullets: [
            "Promoted DSTs show 14% productivity uplift in first 60 days — backlog is suppressing zone output.",
            "5-day interview sprint with 4 parallel panels can clear the backlog in 9 working days.",
            "Replacement cost per exited DST ≈ ₹38,000 (sourcing + ramp). 280 exits ≈ ₹1.07 Cr saved.",
          ],
          actions: ["Approve interview sprint", "Brief Rohit", "Reset 48-hour SLA"],
          agenticRead: "Field Performance Agent cross-checked HRMS promotion eligibility against panel calendars and exit cohort behaviour — flagged when projected exits crossed the 200-employee threshold.",
          sources: ["HRMS promotion pipeline", "Panel calendars", "BFL exit cohort model"],
          confidence: "87–93%",
        }}
      />

      <AIInsight
        title="BGI claims comp gap creating a poaching corridor"
        body="Claims analyst roles at BAGIC are paying 8% below market median. Three competitors (HDFC Ergo, ICICI Lombard, New India) have active lateral hiring campaigns targeting exactly this profile — 3–6 years experience, non-life claims, Pune/Mumbai location. BAGIC claims has 320 open roles and a current team showing 16.1% attrition. The comp gap is the only structural driver — manager scores and culture scores are healthy. A targeted 8% correction for claims analyst band costs approximately ₹1.8 Cr annually. The attrition replacement cost at current pace: ₹3.2 Cr. Recommended: approve claims analyst comp correction in next compensation review cycle. Flag to BAGIC CHRO for immediate action."
        confidence="84–90%"
        sources={["Market comp benchmarks", "Competitor hiring intelligence", "BAGIC attrition model"]}
        drill={{
          headline: "BGI claims analyst pay 8% below market — active poaching from 3 competitors",
          table: {
            cols: ["Band", "BAGIC", "Market P50", "Gap"],
            rows: [
              ["Claims Analyst L1", "₹5.8L", "₹6.3L", "-7.9%"],
              ["Claims Analyst L2", "₹7.6L", "₹8.4L", "-9.5%"],
              ["Senior Claims Analyst", "₹11.2L", "₹12.1L", "-7.4%"],
              ["Claims Manager", "₹16.8L", "₹17.6L", "-4.5%"],
            ],
          },
          bullets: [
            "Active competitor JDs scraped from LinkedIn last 14 days: HDFC Ergo 38, ICICI Lombard 41, New India 22.",
            "Pune + Mumbai location filter — 71% match to BAGIC current footprint.",
            "Manager NPS and culture scores in BAGIC claims are healthy (+44, 7.6) — comp is the only lever.",
          ],
          actions: ["Approve comp correction", "Flag to BAGIC CHRO", "Open band review"],
          agenticRead: "Compensation Benchmarking Agent compared internal bands against scraped competitor JDs and 4 external benchmark vendors — flagged when 3 simultaneous competitor campaigns appeared.",
          sources: ["Mercer / AON benchmarks", "LinkedIn JD scrape", "BAGIC attrition model"],
          confidence: "84–90%",
        }}
      />

      <AgentActivity
        runs={[
          { agent: "Succession Agent", message: "Flagged 3 CXO-1 roles at Bajaj Life with no ready-now successor.", time: "02:14" },
          { agent: "Compliance Agent (SEBI/IRDAI)", message: "Q1 board reporting pack drafted; 2 anomalies flagged.", time: "03:01" },
          { agent: "Culture Integration Agent", message: "Post-Allianz pulse: trust score 6.4/10, down 0.3 MoM.", time: "03:42" },
          { agent: "Skills Agent", message: "AMC & Alts hiring gap: 240 niche roles, 31% closed.", time: "04:18" },
          { agent: "Attrition Agent", message: "BFL field attrition trending 14.9%, within FY benchmark.", time: "04:55" },
          { agent: "Compensation Benchmarking Agent", message: "BGI claims roles 8% below market median.", time: "05:30" },
          { agent: "Licensing Agent", message: "IRDA licence lapses next 90 days: 4,200 agents.", time: "06:02" },
          { agent: "Field Performance Agent", message: "DST→RM progression backlog: 1,180 candidates.", time: "06:21" },
        ]}
      />

      <AttentionList
        items={[
          {
            priority: "critical", title: "Bajaj Life CXO-1 succession gap",
            detail: "3 critical roles · 0 ready-now successors · strategic growth agenda",
            action: "Open succession board",
            drill: {
              headline: "3 of 9 CXO-1 roles at Bajaj Life have no internal ready-now successor",
              narrative: "Chief Distribution, Appointed Actuary and Head Bancassurance are the three uncovered roles. Combined, they own ₹18,400 Cr APE.",
              bullets: [
                "Chief Distribution Officer — incumbent in role 22 months, regretted-attrition risk Medium.",
                "Appointed Actuary — regulatory role; replacement timeline 6-9 months even with external search.",
                "Head Bancassurance — succession plan exists but candidate is in BFL, not Bajaj Life.",
              ],
              table: {
                cols: ["Role", "Incumbent tenure", "Internal bench", "External search"],
                rows: [
                  ["Chief Distribution Officer", "22 mo", "0", "Egon Zehnder · 60 d in"],
                  ["Appointed Actuary", "34 mo", "0", "Spencer Stuart · 90 d in"],
                  ["Head Bancassurance", "11 mo", "0 at BALIC · 1 at BFL", "Internal slate first"],
                ],
              },
              actions: ["Approve external search budget", "Open ExCo discussion", "Initiate BFL→BALIC move"],
              agenticRead: "Succession Agent matched incumbent tenure + readiness data + active-search status — flagged because 3 simultaneous gaps cross the group-governance disclosure threshold.",
              sources: ["Workday HRIS", "Succession board", "External search trackers"],
              confidence: "89–94%",
            },
          },
          {
            priority: "warning", title: "Post-Allianz integration opportunity",
            detail: "Culture integration progress 6.4/10 · target 8.0 by Q4 FY27",
            action: "Review pulse",
            drill: {
              headline: "Post-Allianz trust 6.4/10 · Finance function dragging the score",
              narrative: "5 months post-Allianz exit. Trust climbing across 5 of 6 functions; Finance is the lone declining function and is pulling the composite.",
              bullets: [
                "Tech and Claims have crossed the 7.0 stability threshold.",
                "Bancassurance trust stalled at 6.4 — pulse cites brand confusion (Bajaj Life vs Bajaj Allianz Life).",
                "Brand transition complete on signage; in-customer collateral migration at 78%.",
              ],
              actions: ["Schedule town-hall", "Commission integration audit", "Brief Priya"],
              agenticRead: "Culture Integration Agent re-scored open-text sentiment from 18,200 employees across 6 functions — divergence on Finance triggered this flag.",
              sources: ["Allianz integration pulse", "Open-text NLP", "Brand transition tracker"],
              confidence: "78–84%",
            },
          },
          {
            priority: "warning", title: "AMC & Alts talent gap",
            detail: "240 niche roles open · 31% filled · time-to-hire 84 days",
            action: "Approve hiring uplift",
            drill: {
              headline: "75 of 240 niche roles filled · 84-day time-to-hire across AMC & Alts",
              bullets: [
                "Hardest roles: Quant PMs (12 open), Credit analysts for Alts (24 open), Compliance lead (3 open).",
                "Pipeline below target — only 1.8 qualified candidates per role.",
                "Compensation 11% below boutique fund benchmark.",
              ],
              table: {
                cols: ["Function", "Open", "Filled", "Avg TTH"],
                rows: [
                  ["AMC · Quant PMs", "12", "3", "112 d"],
                  ["AMC · Equity Analyst", "38", "14", "76 d"],
                  ["Alts · Credit Analyst", "24", "6", "98 d"],
                  ["Compliance · Senior", "3", "0", "140 d"],
                ],
              },
              actions: ["Approve 11% off-cycle correction", "Engage 2 specialist search firms", "Open AMC capability framework"],
              agenticRead: "Hiring Agent compared funnel velocity against boutique fund benchmark and surfaced compensation gap as the primary structural driver of low pipeline quality.",
              sources: ["Workday ATS", "Boutique fund benchmark", "Search firm pipelines"],
              confidence: "80–86%",
            },
          },
          {
            priority: "warning", title: "4,200 IRDA agent licences lapsing",
            detail: "₹340 Cr APE at regulatory risk · Bajaj Life agency channel",
            action: "Brief Priya",
            drill: {
              headline: "4,200 IRDA licences lapse in next 90 days · sprint at 61%",
              narrative: "Renewal sprint led by Priya. Bottleneck is module completion in West and South zones — 11,200 agents still owe Bancassurance modules.",
              table: {
                cols: ["Zone", "Lapsing", "Module pending", "Sprint %"],
                rows: [
                  ["West", "1,840", "4,420", "58%"],
                  ["South", "1,120", "3,180", "54%"],
                  ["North", "780", "2,140", "67%"],
                  ["East", "460", "1,460", "71%"],
                ],
              },
              bullets: [
                "₹340 Cr APE attached to these 4,200 agents (avg ₹8.1L APE/agent).",
                "Module completion via mobile micro-cohorts can cut wait time 38%.",
                "IRDAI penalty exposure if any cohort lapses without action.",
              ],
              actions: ["Brief Priya", "Approve mobile micro-cohort spend", "Escalate West sprint"],
              agenticRead: "Licensing Agent monitors IRDAI renewal portal nightly; flagged when sprint velocity dropped below the 65% threshold required to clear the 90-day window.",
              sources: ["IRDAI renewal portal", "LMS module tracker", "Agency APE attribution"],
              confidence: "92–96%",
            },
          },
          {
            priority: "warning", title: "BGI claims compensation gap",
            detail: "8% below market median · attrition risk in HAT teams",
            action: "Review banding",
            drill: {
              headline: "BGI HAT analyst pay 8% below market · 3 competitors actively hiring",
              bullets: [
                "Comp gap is the only structural driver — manager NPS +44, culture 7.6.",
                "Annual cost to close: ~₹1.8 Cr · replacement cost if unaddressed: ~₹3.2 Cr.",
                "Pune + Mumbai cohort (71% of HAT footprint) most exposed.",
              ],
              actions: ["Approve off-cycle correction", "Flag to BAGIC CHRO"],
              agenticRead: "Compensation Benchmarking Agent compared internal bands against 4 vendors + competitor JD scrape — see linked AI Insight for full evidence.",
              sources: ["Mercer / AON", "LinkedIn JDs", "BAGIC attrition model"],
              confidence: "84–90%",
            },
          },
          {
            priority: "healthy", title: "BFL field attrition 14.9%",
            detail: "Below BFSI benchmark of 18.2% · FY24 improvement holding",
            action: "Acknowledge",
            drill: {
              headline: "BFL field attrition holding at 14.9% — best in 7 quarters",
              narrative: "Result of the manager-density correction in Pune and a tighter promotion SLA. Replicable into MP rural.",
              bullets: [
                "180 bps below BFSI peer median (18.2%).",
                "Largest gain: Pune zone (15.2% → 12.8% in 5 months).",
                "Pattern to document: 1-manager-per-12-SO ratio + 30-day promotion SLA.",
              ],
              actions: ["Document playbook", "Replicate in MP rural"],
              agenticRead: "Attrition Agent confirmed 7-quarter low against rolling cohort baseline — flagged as a green signal to capture and replicate.",
              sources: ["Workday attrition cube", "Peer benchmark feed"],
              confidence: "92–95%",
            },
          },
        ]}
      />

      <HRCopilot
        personaName="Anupam"
        prompts={[
          {
            q: "Show me CXO-1 succession coverage across all 7 entities",
            a: "Across 14 CXO-1 roles, 8 have a ready-now internal successor (62%).\n\n• BFL — 4 of 5 roles covered. Gap: Chief Risk Officer successor in 12-mo readiness.\n• Bajaj Life — 1 of 4 roles covered. CRITICAL: Chief Distribution Officer, Appointed Actuary, Head Bancassurance all uncovered.\n• BGI — 2 of 2 covered.\n• AMC — 0 of 1 covered (CIO).\n• Alts — 1 of 1.\n• Health — 0 of 1 (Chief Medical Officer — search active).\n• Markets — N/A (no CXO-1 layer yet).\n\nRecommended next: open the succession board, prioritise Bajaj Life and trigger external search on the three CRITICAL roles.",
          },
          {
            q: "Which entity has the highest culture integration risk this quarter?",
            a: "Bajaj Life Insurance — clearly. Post-Allianz trust score has slipped 0.3 MoM to 6.4/10, with Finance (6.1 ↓0.1) the only declining function. Open-text sentiment cites 'role clarity lost' and 'comp review delayed' as the top two themes. BGI and AMC are stable at 7.1+; BFL is at 7.4 and improving. Recommend a Priya-led Finance function town hall within 30 days.",
          },
          {
            q: "Draft a board update on Bajaj Life leadership continuity — people lens",
            a: "Draft v0.9:\n\n'Bajaj Life people readiness for the strategic growth agenda stands at 71%, up 9pp this quarter. Finance & Treasury (84%) and Compliance (78%) lead; Investor Relations (44%) and Actuarial (63%) are below threshold with active remediation plans.\n\nThe single largest risk is succession depth: 3 of 9 CXO-1 roles lack a ready-now internal successor and external searches are activated for two. We project 112 leadership exits across the next 18 months absent intervention; a ₹14 Cr retention plan is recommended for committee approval.\n\nCulture integration post-Allianz remains in the watch zone (trust 6.4/10) and is being addressed via a function-level pulse and town-hall sequence led by Priya Deshmukh.'\n\nWant me to tighten it for tone or shorten to one page?",
          },
          {
            q: "Compare attrition: BFL field vs Bajaj Life agency vs BGI claims",
            a: "• BFL field — 14.9% (below BFSI benchmark 17.1%). Improvement of 2.2pp YoY. Watch: Pune/Nashik burnout cluster (42 SOs).\n• Bajaj Life agency — 31.2% (industry 34%). Best in 7 quarters but high in absolute terms; top 5% of agents drive 38% of APE so retention concentration risk is real.\n• BGI claims (HAT) — 12.4% (benchmark 15.6%). Healthiest of the three. But compensation gap of 8% vs market median is a forward risk — already showing as 4 analysts on 8th overtime day in Sunita Rao's cockpit.",
          },
          {
            q: "How is our Learning Academy tracking against FY26 targets?",
            a: "Group Learning Academy · FY26 Snapshot\n\nCompletion rates:\n• Mandatory compliance training: 91% (↑4% vs FY25)\n• Leadership pipeline programs: 67% (↓3% — BALIC cohort delayed)\n• DST onboarding curriculum: 84% (2,847 DSTs certified this quarter)\n\nLearning impact:\n• DSTs who completed full onboarding curriculum: 23% higher 90-day productivity vs those who didn't\n• Managers completing coaching certification: 31% lower team attrition vs non-certified managers\n\nGaps requiring attention:\n🔴 BALIC leadership cohort — 3-week delay due to post-Allianz restructuring. 18 HiPo nominees at risk of missing FY26 window.\n🟡 AMC/Alts team — no structured learning path for 67 new niche roles added post-expansion.\n\nRecommendation: Prioritise BALIC cohort restart and commission AMC capability framework in Q2.",
          },
        ]}
      />
    </CockpitShell>
  );
}
