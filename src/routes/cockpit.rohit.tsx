import { createFileRoute } from "@tanstack/react-router";
import { CockpitShell } from "@/components/cockpit/CockpitShell";
import { MorningBriefing, ControlTower, AIInsight, AgentActivity, AttentionList, HRCopilot } from "@/components/cockpit/CockpitSections";
import { rohitNav } from "@/components/cockpit/navData";

export const Route = createFileRoute("/cockpit/rohit")({
  head: () => ({ meta: [{ title: "Rohit Kapoor · HRBP Field Sales · Bajaj Finance" }] }),
  component: Page,
});

function Page() {
  return (
    <CockpitShell
      persona={{
        initials: "RK",
        name: "Rohit Kapoor",
        role: "HRBP · Field Sales",
        entity: "Bajaj Finance · West India",
        location: "Mumbai · MH/GA/MP",
        navGroups: rohitNav,
        widgets: (
          <div>
            <div className="text-[10px] uppercase tracking-wider text-sidebar-foreground/40 font-semibold mb-2">Zone</div>
            <div className="text-[11px] text-sidebar-foreground/70 space-y-1">
              <div>Headcount · 32,140</div>
              <div>Branches · 412</div>
              <div>Verticals · Consumer · SME · Rural</div>
            </div>
          </div>
        ),
      }}
      personaSlug="rohit"
      headerCenter="Rohit Kapoor · HRBP Field Sales · BFL West India"
      contextStrip="Good morning, Rohit — 42 Sales Officers in Pune & Nashik zone are showing burnout signals. Cost of inaction this month: ₹1.9 Cr."
    >
      <MorningBriefing>
        Morning, Rohit. Three signals need your decision today. 42 SOs in Pune and Nashik have hit triple burnout
        criteria — the intervention window closes in 7 days before exit risk doubles. Kavya Sharma in Nashik East is
        your highest flight-risk at score 94, with a manager who has not done a 1:1 in 38 days. And 184 DSTs in Pune
        zone have cleared promotion criteria but are stuck waiting for interview scheduling — each extra week costs
        you 4 exits from that cohort statistically.
      </MorningBriefing>

      <ControlTower
        kpis={[
          {
            label: "Field headcount", value: "32,140", sub: "MH · GA · MP",
            detail: {
              headline: "32,140 field employees across 412 branches",
              table: {
                cols: ["Vertical", "Headcount", "Branches", "YoY Δ"],
                rows: [
                  ["Consumer lending", "18,420", "236", "+3.1%"],
                  ["SME finance", "7,840", "112", "+5.8%"],
                  ["Rural B2C", "5,880", "64", "+18.4%"],
                ],
              },
              actions: ["Export to MIS", "Drill by branch"],
            },
          },
          {
            label: "Field attrition", value: "14.9%", sub: "FY24 · vs 17.1% LY", tone: "healthy",
            detail: {
              headline: "Field attrition 14.9% · 220 bps improvement YoY",
              bullets: ["Driven by manager NPS recovery in Tier-1 cities.", "Watch: Tier-3 still at 19.4%.", "Voluntary exits dominant — only 1.8% involuntary."],
            },
          },
          {
            label: "Open roles", value: "2,925", sub: "DST · RM · SO", tone: "warning",
            detail: {
              headline: "2,925 open roles · 41-day time-to-fill",
              table: {
                cols: ["Role", "Open", "TTF (days)"],
                rows: [["Sales Officer (DST)", "1,840", "38"], ["Relationship Manager", "612", "46"], ["Branch Manager", "84", "62"], ["Rural Officer", "389", "44"]],
              },
              actions: ["Open req review", "Push to RPO"],
            },
          },
          {
            label: "Time-to-productivity", value: "68 d", sub: "Benchmark 57 d", tone: "warning",
            detail: {
              headline: "DST time-to-productivity 68 days · 11 above benchmark",
              bullets: ["Largest gap in Vidarbha rural ramp (78 days).", "Onboarding bootcamp redesign in pilot — early cohort at 61 days.", "Productivity = first 5 disbursals milestone."],
            },
          },
          {
            label: "Target vs actual", value: "92%", sub: "Zone YTD",
            detail: {
              headline: "Zone YTD attainment 92% of book target",
              table: {
                cols: ["Branch cluster", "Attainment"],
                rows: [["Mumbai Metro", "104%"], ["Pune", "88%"], ["Nashik", "82%"], ["Vidarbha rural", "76%"], ["Goa", "97%"]],
              },
            },
          },
          {
            label: "Burnout risk", value: "42", sub: "Pune & Nashik SOs", tone: "critical",
            detail: {
              headline: "42 Sales Officers in active burnout signal cluster",
              narrative: "Trigger conditions: ≥10-hour logins for 18 consecutive days AND missed targets 3 months running AND no leave in last 60 days.",
              table: {
                cols: ["Branch", "SOs flagged", "Avg overtime/day"],
                rows: [["Pune · Kothrud", "12", "11.4h"], ["Pune · Hadapsar", "9", "10.8h"], ["Nashik · College Rd", "8", "11.1h"], ["Nashik · Satpur", "7", "10.6h"], ["Pune · Wakad", "6", "11.0h"]],
              },
              actions: ["Approve ₹2.2L intervention plan", "Lock 5-day reset window"],
            },
          },
          {
            label: "Manager NPS", value: "+38", sub: "Tier 3 cities low",
            detail: { headline: "Manager NPS +38 overall · Tier-3 at +12", bullets: ["Tier-1 +52 (best in 6 quarters)", "Tier-2 +34", "Tier-3 +12 — coaching investment needed"] },
          },
          {
            label: "Incentive accuracy", value: "99.4%", sub: "Last payout cycle", tone: "healthy",
            detail: { headline: "99.4% accuracy · zero escalations last cycle", bullets: ["Up from 96.8% three cycles ago.", "Driven by new payout engine and reconciliation agent."] },
          },
        ]}
      />

      <AIInsight
        title="Manager NPS gap is costing you ₹3.1 Cr — and it has one fix"
        body="You have 7 branch managers across Nashik, Aurangabad and Jabalpur with NPS below +22. These 7 managers collectively cover 4,180 SOs. Their teams show 22.4% attrition vs 11.8% for managers with NPS above +40. The gap is not personality — it is coaching cadence. All 7 managers have done fewer than 1 structured 1:1 per month with their team leads. A 6-week coaching sprint for these 7 managers (external facilitation + peer shadowing) costs ₹1.4L. The attrition saving from closing the gap: ₹3.1 Cr at current replacement cost. This is your highest ROI action this quarter."
        confidence="83–89%"
        sources={["Manager NPS survey", "Login telemetry", "Attrition cohort correlation model"]}
      />

      <AIInsight
        title="184 promotion-eligible DSTs are 38 days past their SLA — 4 will exit this week"
        body="Promotion pipeline shows 184 DSTs in Pune zone who met all criteria 38+ days ago but have not had a promotion interview scheduled. Internal data shows DSTs who wait more than 30 days post-eligibility have 2.3× higher exit probability in the following 30 days. Based on this model, 4 exits from this cohort are expected this week if no action is taken. Each exit from a promotion-ready DST costs ₹52,000 in replacement and ramp — but more critically, these are your best-performing field staff, not average. Recommended: emergency interview panel — 2 days, 20 candidates per day. Clears the backlog in 10 days."
        confidence="86–92%"
        sources={["HRMS promotion pipeline", "Exit cohort analysis", "Promotion-lag attrition model"]}
      />

      <AIInsight
        title="SME vertical incentive perception is a hidden time bomb"
        body="27% of SME vertical Sales Officers — 847 employees across Pune and Nagpur — rated their last incentive payout as unfair in the monthly pulse. The specific complaint is not payout accuracy (which is 99.4%) but slab structure: the slab reset mid-quarter meant SOs who were on track for the higher tier were recategorised downward without warning. SME vertical already shows the highest attrition in the zone at 18.4%. Unfair compensation perception is the #1 predictor of exit within 60 days in BFL field data. Recommended: host a 45-minute town hall with SME vertical in Pune and Nagpur separately this week — not to change the slab, but to explain the change. Perception management costs nothing. The attrition cost of inaction: ₹2.8 Cr."
        confidence="79–85%"
        sources={["Incentive pulse survey", "SME attrition model", "Exit interview reason data"]}
      />

      <AgentActivity
        runs={[
          { agent: "Attrition Agent", message: "42 SOs flagged · Pune & Nashik · burnout cluster.", time: "02:08" },
          { agent: "Field Performance Agent", message: "DST→RM progression: 184 candidates ready in Pune zone.", time: "02:51" },
          { agent: "Compensation Benchmarking Agent", message: "Incentive slab perceived unfair by 27% of SMEs surveyed.", time: "03:34" },
          { agent: "Skills Agent", message: "Rural B2C: 340 SOs need cross-skill into agri-finance.", time: "04:12" },
          { agent: "Compliance Agent (SEBI/IRDAI)", message: "Tier-3 KYC training overdue for 612 SOs.", time: "04:55" },
          { agent: "Succession Agent", message: "12 Branch Manager roles · 3 ready successors each.", time: "05:30" },
          { agent: "Culture Integration Agent", message: "Manager NPS in Tier-3 down 4pts; coaching gap.", time: "06:05" },
        ]}
      />

      <AttentionList
        items={[
          {
            priority: "critical", title: "42 SOs burnout cluster · Pune/Nashik",
            detail: "₹1.9 Cr replacement risk · ₹2.2L intervention · 7-day window",
            action: "Approve plan",
            drill: {
              headline: "42 Sales Officers · burnout cluster · 7-day decision window",
              bullets: ["31 of 42 have taken zero leave in 60 days.", "Manager 1:1 sentiment trending negative.", "Branch Managers in 5 affected branches already escalated."],
              table: {
                cols: ["Branch", "Manager", "SOs", "Action"],
                rows: [["Kothrud", "S. Joshi", "12", "5-day reset"], ["Hadapsar", "R. Pawar", "9", "Workload rebalance"], ["College Rd", "A. Deshmukh", "8", "1:1 sprint"], ["Satpur", "V. Patil", "7", "5-day reset"], ["Wakad", "N. Iyer", "6", "1:1 sprint"]],
              },
              actions: ["Approve ₹2.2L plan", "Notify managers", "Lock dates"],
            },
          },
          {
            priority: "critical", title: "612 SOs overdue on KYC training",
            detail: "RBI compliance exposure across MH/MP",
            action: "Push deadline",
            drill: {
              headline: "612 SOs overdue on RBI KYC refresher",
              bullets: ["340 in Tier-3 MP; 272 in Vidarbha rural cluster.", "Module is 90 minutes — completion at 38% across affected cohort.", "Regulatory inspection cycle opens in 6 weeks."],
              actions: ["Force-push deadline 7 days", "Allocate paid time slot"],
            },
          },
          {
            priority: "warning", title: "2,925 open roles · time-to-fill 41 days",
            detail: "Rural expansion ramp slipping by 11 days",
            action: "Open req review",
            drill: { headline: "Time-to-fill 41 days vs 30 target", bullets: ["Rural roles slowest at 48 days.", "Branch Manager pipeline shallow — only 1.4 candidates per role.", "RPO ramp adding capacity in Q2."] },
          },
          {
            priority: "warning", title: "Incentive fairness perception 27% negative",
            detail: "Cluster: SME vertical · Pune & Nagpur",
            action: "Schedule town-hall",
            drill: { headline: "27% of SME SOs perceive incentive slab as unfair", bullets: ["Concentrated in Pune & Nagpur SME branches.", "Driver: cross-sell credit unclear in slab calc.", "Recommend town-hall + slab walkthrough."] },
          },
          {
            priority: "warning", title: "DST→RM progression backlog · 184",
            detail: "Pune zone · ready candidates blocked by interview SLA",
            action: "Unblock pipeline",
            drill: { headline: "184 DSTs ready for RM promotion · blocked", bullets: ["Average wait time 47 days vs 14-day SLA.", "Bottleneck: zonal interview panel availability.", "Risk: regretted-attrition spike in this cohort if delays continue."] },
          },
          {
            priority: "healthy", title: "Last payout cycle 99.4% accurate",
            detail: "Zero escalations · finance sign-off received",
            action: "Acknowledge",
            drill: { headline: "Cleanest cycle in 18 months", bullets: ["Zero finance escalations.", "Cohort surveyed reported 94% satisfaction.", "Recognition prepared for payout ops team."] },
          },
        ]}
      />

      <HRCopilot
        personaName="Rohit"
        prompts={[
          {
            q: "Show me all 42 burnout-flagged SOs and their branches",
            a: "Here's the cluster, grouped by branch:\n\n• Pune · Kothrud (Mgr: S. Joshi) — 12 SOs. Top names: A. Salunkhe, P. Bhosale, R. Kale.\n• Pune · Hadapsar (R. Pawar) — 9 SOs. Top: N. Jadhav, K. Bagul.\n• Nashik · College Rd (A. Deshmukh) — 8 SOs.\n• Nashik · Satpur (V. Patil) — 7 SOs.\n• Pune · Wakad (N. Iyer) — 6 SOs.\n\n31 of 42 have taken zero leave in 60 days. Intervention plan (₹2.2L) is loaded and waiting for your approval — full list with employee IDs is in the drill-down sheet on the burnout KPI tile.",
          },
          {
            q: "Which branches missed target 3 months running?",
            a: "Across MH/MP/GA, 14 branches missed target 3 months running. Top concern:\n\n• Nashik · Satpur — 76% attainment (Nov), 71% (Dec), 68% (Jan).\n• Vidarbha · Wardha — 74% / 70% / 65%.\n• Pune · Hadapsar — 82% / 78% / 75%.\n\nAll three overlap with the burnout cluster — the under-performance is likely a symptom, not a cause. Recommend pairing intervention plan with branch-level target recalibration.",
          },
          {
            q: "Draft a manager 1:1 nudge for the Pune cluster",
            a: "Draft message to Pune Branch Managers (S. Joshi, R. Pawar, N. Iyer):\n\n'Team — flagging that 27 SOs across your branches are in our burnout signal cluster (≥10h logins for 18 days, zero leave in 60). A 5-day paid reset plus targeted 1:1s is the recommended intervention; budget and dates are pre-approved.\n\nCould you please: (1) hold a 30-min 1:1 with each flagged SO this week, (2) confirm leave dates from the picker by Friday, (3) and flag any SO you believe needs deeper conversation. Loop me in if anything looks off.'\n\nWant me to personalise it per manager or send it as-is?",
          },
          {
            q: "What's our true time-to-productivity for DSTs this quarter?",
            a: "Q3 cohort time-to-productivity is 68 days vs benchmark 57.\n\nBy zone: Mumbai Metro 59 days · Pune 64 · Nashik 71 · Vidarbha rural 78 · Goa 62.\n\nThe Vidarbha gap is structural — distances between leads and longer paperwork cycles. The Pune/Nashik gap is correlated with the burnout cluster (over-stretched SOs ramp slower). New onboarding bootcamp pilot cohort in Mumbai is already at 61 days — if we roll it out group-wide we should hit 59 by Q1 FY27.",
          },
        ]}
      />
    </CockpitShell>
  );
}
