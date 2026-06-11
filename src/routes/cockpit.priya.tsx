import { createFileRoute } from "@tanstack/react-router";
import { CockpitShell } from "@/components/cockpit/CockpitShell";
import { MorningBriefing, ControlTower, AIInsight, AgentActivity, AttentionList, HRCopilot } from "@/components/cockpit/CockpitSections";
import { priyaNav } from "@/components/cockpit/navData";

export const Route = createFileRoute("/cockpit/priya")({
  head: () => ({ meta: [{ title: "Priya Deshmukh · HR Head · Bajaj Life Insurance" }] }),
  component: Page,
});

const TEAL = "#0d9488";

function Page() {
  return (
    <CockpitShell
      accent={TEAL}
      persona={{
        initials: "PD",
        name: "Priya Deshmukh",
        role: "HR Head",
        entity: "Bajaj Life Insurance",
        location: "Pune · Post-Allianz (Jan 2026)",
        avatarColor: TEAL,
        navGroups: priyaNav,
        widgets: (
          <div>
            <div className="text-[10px] uppercase tracking-wider text-sidebar-foreground/40 font-semibold mb-2">Strategic Governance</div>
            <div className="text-[11px] text-sidebar-foreground/70 space-y-1">
              <div>Bench strength: 71%</div>
              <div>Target: 85% by FY27</div>
              <div>Post-Allianz: Month 5</div>
            </div>
          </div>
        ),
      }}
      personaSlug="priya"
      headerCenter="Priya Deshmukh · HR Head · Bajaj Life Insurance"
      contextStrip="Good morning, Priya — IRDAI licensing: 4,200 agent licences will lapse in 90 days. ₹340 Cr APE at regulatory risk. Action required today."
    >
      <MorningBriefing>
        Morning, Priya. Four things need your attention today across leadership bench strength and governance coverage.
        IRDAI licence renewal sprint is at 61% — East zone is the critical lag at 12% completion with 1,260 agents at
        risk in Kolkata and Patna. Top-producing agent Meenakshi Iyer (APE ₹18.4L YTD) hasn't logged activity in 11
        days — flight risk score jumped to 87 overnight. Post-Allianz Finance function trust is the only score
        declining at 6.1 and needs a town hall decision from you this week. And Chief Agency search: candidate 3 of 5
        withdrew yesterday — the panel needs a revised brief by Thursday.
      </MorningBriefing>

      <ControlTower
        kpis={[
          {
            label: "Direct employees", value: "28,140", sub: "Pan-India",
            detail: {
              headline: "28,140 direct employees · 5 zones",
              table: {
                cols: ["Zone", "Headcount", "Attrition"],
                rows: [["West", "8,420", "19.4%"], ["South", "6,840", "21.8%"], ["North", "6,210", "22.6%"], ["East", "4,140", "23.1%"], ["HO Pune", "2,530", "11.2%"]],
              },
            },
          },
          {
            label: "Licensed agents", value: "1,64,861", sub: "Agency channel",
            detail: { headline: "1,64,861 licensed agents · top 5% drive 38% APE" },
          },
          {
            label: "Licences lapsing 90d", value: "4,200", sub: "₹340 Cr APE at risk", tone: "critical",
            detail: { headline: "4,200 IRDA licences lapsing in next 90 days" },
          },
          {
            label: "Agent productivity", value: "₹2.1L", sub: "APE per agent · YTD",
            detail: { headline: "₹2.1L APE per agent YTD" },
          },
          {
            label: "Bancassurance trained", value: "61%", sub: "BFL network cross-skill", tone: "warning",
            detail: { headline: "61% of agents have completed Bancassurance cross-skill" },
          },
          {
            label: "Post-rebrand pulse", value: "6.8/10", sub: "Up 0.4 MoM", tone: "healthy",
            detail: { headline: "Rebrand pulse 6.8/10 · up 0.4 MoM" },
          },
          {
            label: "Leadership bench strength", value: "71%", sub: "Governance layer · target 85%", tone: "warning",
            detail: { headline: "Governance layer 71% leadership-ready" },
          },
          {
            label: "Agency attrition", value: "31.2%", sub: "vs industry 34%", tone: "healthy",
            detail: { headline: "Agency attrition 31.2% — best in 7 quarters" },
          },
        ]}
      />

      <AIInsight
        accent={TEAL}
        title="4,200 agents · IRDA licence lapsing — East zone is the critical 14-day window (₹84 Cr APE exposed)"
        body="IRDAI renewal sprint shows East zone at 12% completion — the worst of all 4 zones. East zone carries 1,260 agents, of which only 151 have completed IC-38 renewal. The remaining 1,109 face licence lapse by June 30. The top 5% of East zone agents — 63 individuals — collectively generate ₹84 Cr APE annually. All 63 are in the lapse pipeline because exam bookings were never made. The bottleneck is not motivation — it is logistics. There is only one empanelled exam centre in Kolkata and none in Patna. Agents in Patna must travel 4 hours to sit the exam. Recommended: activate mobile exam facilitation in Patna immediately — IRDA allows proctored online IC-38. Book 6 cohort sessions of 30 agents each in Kolkata this week. This clears the critical 63 agents in 8 days."
        confidence="89–94%"
        sources={["IRDAI renewal portal", "Agent APE attribution data", "Exam centre availability map"]}
      />

      <AIInsight
        accent={TEAL}
        title="New agent washout in months 0-6 is destroying your recruitment economics"
        body="BALIC onboards approximately 2,400 new agents per quarter. Of these, 58% exit within 6 months — before they generate meaningful APE. At ₹8,400 per agent in recruitment and onboarding cost, 1,392 wasted activations per quarter = ₹1.17 Cr every 3 months in pure recruitment cost, plus the lost APE from agents who never reached productivity. But the data has a clear signal: agents who completed the full onboarding curriculum (all 7 modules) in the first 21 days show only 24% washout at 6 months vs 68% for those who completed fewer than 4 modules. The gap is not agent quality — it is onboarding completion. Currently only 31% of new agents complete all 7 modules in 21 days. The primary reason: Module 5 (IRDA product compliance) has a 4.2-hour duration and no mobile-friendly format. Recommended: break Module 5 into 3 micro-modules of under 45 minutes each. Mobile format. Estimated impact: onboarding completion rate from 31% to 58%, washout reduction saving ₹2.1 Cr per year in recruitment cost."
        confidence="84–90%"
        sources={["Agent lifecycle cohort data", "Onboarding completion logs", "6-month washout correlation model"]}
      />

      <AIInsight
        accent={TEAL}
        title="3 branch managers are generating 34% of your top-agent attrition"
        body="Of the 847 agents classified as high-value (APE > ₹4L annually), 29 have exited in the last 6 months. Exit interview analysis shows 34% — 10 agents — were managed by 3 specific branch managers: Ramesh Ghosh (Kolkata North), Sunita Pillai (Hyderabad Central), and Arvind Shetty (Mumbai West). These 3 managers have NPS scores of +16, +19, and +22 respectively — the bottom 3 of 84 branch managers. High-value agent exits to LIC and HDFC Life are predominantly from their branches. This is not coincidence — it is management style. All 3 have been flagged before for transaction-only relationships with top agents (no development conversations, no recognition, no career path discussions). Recommended: immediate 60-day intensive coaching for all 3. Assign an Agency Development Manager to shadow each branch for 2 weeks. If NPS doesn't move above +30 by end of Q2, reassign these branches."
        confidence="82–88%"
        sources={["Agent exit interviews", "Branch manager NPS data", "High-value agent attribution model"]}
      />

      <AgentActivity
        runs={[
          { agent: "Licensing Agent", message: "4,200 IRDA licences forecast to lapse by Q3.", time: "01:48" },
          { agent: "Compliance Agent (SEBI/IRDAI)", message: "Mis-selling complaint rate down 12% MoM.", time: "02:36" },
          { agent: "Succession Agent", message: "Leadership bench gap: 3 CXO-1 roles, 0 ready-now successors.", time: "03:20" },
          { agent: "Culture Integration Agent", message: "Post-Allianz trust up 0.4 to 6.8 across 6 functions.", time: "03:55" },
          { agent: "Skills Agent", message: "Bancassurance training: 11,200 agents pending modules.", time: "04:40" },
          { agent: "Attrition Agent", message: "Agency attrition 31.2% · best in 7 quarters.", time: "05:18" },
          { agent: "Compensation Benchmarking Agent", message: "Branch Manager pay 6% below HDFC Life median.", time: "05:55" },
          { agent: "Field Performance Agent", message: "Top 5% agents drive 38% of APE.", time: "06:30" },
        ]}
      />

      <AttentionList
        accent={TEAL}
        items={[
          {
            priority: "critical", title: "IRDA licensing sprint required",
            detail: "4,200 agents · ₹340 Cr APE · 90-day window",
            action: "Approve sprint",
            drill: { headline: "Sprint plan ready — needs your approval today" },
          },
          {
            priority: "critical", title: "Leadership bench gap",
            detail: "9 governance roles · 4 successors ready · group governance requirement",
            action: "Open succession",
            drill: { headline: "9 governance roles · 4 successors ready-now" },
          },
          {
            priority: "warning", title: "Bancassurance training shortfall",
            detail: "11,200 agents pending · BFL network cross-skill blocked",
            action: "Sequence cohorts",
            drill: { headline: "11,200 agents pending Bancassurance modules" },
          },
          {
            priority: "warning", title: "Branch Manager pay gap",
            detail: "6% below HDFC Life · attrition risk in Tier-1 cities",
            action: "Review banding",
            drill: { headline: "BM pay 6% below HDFC Life median" },
          },
          {
            priority: "warning", title: "Top 5% agents drive 38% APE",
            detail: "Concentration risk · loyalty program needed",
            action: "Design retention",
            drill: { headline: "Concentration risk in top decile" },
          },
          {
            priority: "healthy", title: "Post-rebrand pulse up 0.4 MoM",
            detail: "Trust 6.8/10 · all 6 functions positive",
            action: "Share with ExCo",
            drill: { headline: "Pulse up 0.4 MoM to 6.8/10" },
          },
        ]}
      />

      <HRCopilot
        accent={TEAL}
        personaName="Priya"
        prompts={[
          {
            q: "List all 4,200 agents whose licences expire in 90 days",
            a: "Top-line by zone:\n• West — 1,180 agents (₹98 Cr APE exposure). Concentrated in Mumbai (412), Pune (308), Ahmedabad (280), Surat (180).\n• South — 1,460 (₹118 Cr). Concentrated in Chennai (480), Bengaluru (412), Hyderabad (340), Coimbatore (228).\n• North — 920 (₹74 Cr). Concentrated in Delhi NCR (520), Jaipur (220), Lucknow (180).\n• East — 640 (₹50 Cr). Concentrated in Kolkata (340), Bhubaneswar (180), Patna (120).\n\nFull agent-level list (4,200 names, IRDA numbers, last activity, sales manager) is in the IRDAI tracker. Auto-nudge sequence is staged and waiting on your sprint approval.",
          },
          {
            q: "Compare our agency productivity vs LIC, HDFC Life, SBI Life",
            a: "APE per agent (YTD):\n• Bajaj Life — ₹2.1L\n• HDFC Life — ₹2.6L\n• SBI Life — ₹2.4L (bancassurance boost)\n• LIC — ₹1.4L (volume-led model)\n• ICICI Prudential — ₹2.5L\n\nWe trail HDFC Life and ICICI Pru by 19-24%. Gap is concentrated in middle quintile — our top decile (₹14L+) is competitive; the middle 50% is underperforming the market. Bancassurance cross-skill rollout is the single largest unlock — modelling suggests a 12-15% productivity lift if we close the 11,200-agent training backlog.",
          },
          {
            q: "Draft a leadership continuity brief for ExCo — Bajaj Life people lens",
            a: "Draft section v0.7 for the 'Leadership Continuity' brief (Bajaj Life people lens):\n\n'Bajaj Life Insurance Limited employs 28,140 direct employees and partners with 1,64,861 licensed agents across India. We have built a deep, multi-channel distribution platform with the agency channel as our flagship contributor (52% of APE).\n\nFollowing the strategic acquisition of Allianz SE's 26% stake in January 2026, the Company has executed a 14-month integration program covering brand, technology, governance and culture. Employee trust pulse, measured monthly, has recovered to 6.8/10 from a post-transition low of 6.2.\n\nOur leadership bench coverage stands at 71% on the strategic growth readiness rubric, with active succession programs across all critical roles — 3 CXO-1 roles currently carry 0 ready-now successors and are the focus of the next two quarters. We continue to invest in agent productivity, having achieved a 9% YoY improvement in APE per agent.'\n\nWant me to harden the numbers or shorten for an ExCo one-pager?",
          },
          {
            q: "Which Bancassurance branches have the lowest cross-sell rate?",
            a: "Bottom 5 BFL branches for Bajaj Life cross-sell (APE per BFL customer):\n• Kolhapur Main — ₹420 (vs network avg ₹1,840)\n• Jamshedpur Sakchi — ₹510\n• Ranchi Main Rd — ₹580\n• Indore Vijay Nagar — ₹620\n• Patna Frazer Rd — ₹640\n\nAll five overlap with branches where ≥40% of relationship managers haven't completed the Bajaj Life Bancassurance module. Recommendation: pair the training sprint with a 90-day cross-sell incentive overlay in these branches — modelled lift is ₹14 Cr APE.",
          },
        ]}
      />
    </CockpitShell>
  );
}
