import type { AgentRun, AIInsightDetail, AttentionItem, KPI } from "./types";

export type SectionOverride = {
  kpis?: KPI[];
  insight?: AIInsightDetail;
  attention?: AttentionItem[];
  agents?: AgentRun[];
};

// keyed as `${personaSlug}/${sectionSlug}` using slugify(item.label)
export const sectionOverrides: Record<string, SectionOverride> = {
  // ─────────────────────── ANUPAM ───────────────────────
  "anupam/entity-breakdown": {
    insight: {
      title: "AMC talent cliff — action window closing",
      body: "AMC attrition at 22.4% is running 5pp above group average. Exit interview data shows 3 of 4 departures citing compensation (14% below Mirae / Nippon / WhiteOak median) as primary reason — not role or manager. This is a fixable problem. An off-cycle comp correction for the 37 analyst and fund manager roles costs approximately ₹2.1 Cr annually. The replacement cost of 8 exits at current pace: ₹4.8 Cr plus 84-day time-to-hire for niche profiles. Net recommendation: approve off-cycle correction in July review.",
      confidence: "88–93%",
      sources: ["Workday exit data", "Market compensation benchmarks", "Replacement cost model"],
    },
    attention: [
      { priority: "critical", title: "Review AMC comp correction proposal", detail: "Finance sign-off needed · ₹2.1 Cr annual · 37 analyst/PM roles", action: "Approve" },
      { priority: "warning", title: "Bajaj Alts 67 open roles · 84-day TTH", detail: "Sourcing strategy needs rethink", action: "Open" },
      { priority: "warning", title: "BFL → AMC quant mobility · 12 profiles match", detail: "Cross-entity move feasibility: HIGH", action: "Initiate" },
    ],
    agents: [
      { agent: "AMC Attrition Agent", message: "3 new high-risk exits predicted Q3 · comp gap primary signal.", time: "04:18" },
      { agent: "Hiring Agent", message: "AMC TTH now 84 days · 23 JDs open >60 days · sourcing review needed.", time: "05:12" },
      { agent: "Mobility Agent", message: "12 BFL quant profiles match AMC open JDs · cross-entity feasibility HIGH.", time: "06:30" },
    ],
  },

  "anupam/succession-tracker": {
    insight: {
      title: "Chief Digital Officer — hidden succession risk",
      body: "Chief Digital Officer joined as external hire 5 months ago (0.4 yrs tenure). No internal successor identified. External hires in digital leadership roles across BFSI show 42% exit rate within 18 months — driven by startup offers and Big Tech pull. Current CDO has no vesting cliff until month 24. This role controls the group's digital transformation agenda across all 7 entities. A departure in months 6–18 would be the highest disruption risk in the succession portfolio — yet it is not flagged as critical because the role is currently filled. Recommend: identify 1 internal shadow for CDO, begin structured knowledge transfer, and review retention structure before month 12 vesting cliff.",
      confidence: "79–85%",
      sources: ["Tenure risk model", "BFSI external hire cohort data", "Digital leadership attrition benchmarks"],
    },
    attention: [
      { priority: "critical", title: "Identify CDO internal shadow", detail: "Assign by Q3 · Owner: Group CHRO", action: "Assign" },
      { priority: "warning", title: "Chief Actuary BALIC · 1 partial-ready successor", detail: "Accelerate development plan", action: "Open" },
      { priority: "warning", title: "External search status briefing", detail: "ExCo update on timeline + diversity slate progress", action: "Brief" },
    ],
    agents: [
      { agent: "Succession Agent", message: "CDO tenure cross-matched with BFSI exit cohort · risk flag elevated.", time: "02:14" },
      { agent: "Succession Agent", message: "Chief Agency search: 3 candidates in final round · 1 withdrew yesterday.", time: "03:44" },
      { agent: "Talent Agent", message: "HiPo cross-match for Actuary pipeline: 2 internal profiles identified at BAGIC.", time: "05:22" },
    ],
  },

  "anupam/learning-academy": {
    kpis: [
      { label: "Time-to-Productivity", value: "68 d", sub: "Target 55 d · ↑3 d (worsening)", tone: "warning" },
      { label: "90-Day Retention", value: "73%", sub: "Target 82% · ↑2pp QoQ", tone: "warning" },
      { label: "Manager Certification", value: "58%", sub: "Target 80% · static", tone: "warning" },
      { label: "Mandatory Compliance", value: "91%", sub: "Target 100% · ↑4pp", tone: "healthy" },
    ],
    insight: {
      title: "Curriculum completion is the single biggest TTP lever",
      body: "Hires who complete the full onboarding curriculum reach productivity at day 57 — vs day 78 for those who don't. Same hiring funnel, same managers. The 21-day delta is curriculum completion alone. Teams with coaching-certified managers show 31% lower attrition. 42% of managers have never completed the coaching module. Recommended: make Module 5 mobile-first (currently 4.2 hr desktop-only) and mandate manager coaching certification before BM promotion takes effect.",
      confidence: "85–90%",
      sources: ["LMS completion data", "TTP cohort model", "Manager certification registry"],
    },
    attention: [
      { priority: "critical", title: "Split Module 5 into 3 mobile micro-modules", detail: "Estimated TTP impact: −9 days · L&D to deliver in 6 weeks", action: "Approve" },
      { priority: "warning", title: "Mandatory manager coaching pre-BM promotion", detail: "Currently no policy gate exists in BFL West", action: "Draft policy" },
      { priority: "warning", title: "SEBI training at 89%", detail: "Internal policy modules at 84% · accelerate completion", action: "Push" },
    ],
    agents: [
      { agent: "Learning Analytics Agent", message: "TTP cohort delta: 21 days between full vs partial curriculum completion.", time: "02:42" },
      { agent: "Manager Certification Agent", message: "42% of BMs never completed coaching cert · 7 overdue >90 days.", time: "04:08" },
      { agent: "Compliance Learning Agent", message: "IRDAI modules 97% complete · internal policy 84% · SEBI 89%.", time: "05:18" },
    ],
  },

  "anupam/workforce-geography": {
    kpis: [
      { label: "Total locations", value: "3,200", sub: "Across 4 regions · 84 international" },
      { label: "West concentration", value: "37%", sub: "38,420 employees · HQ-heavy", tone: "warning" },
      { label: "East rural ramp lag", value: "11 d", sub: "Behind onboarding benchmark", tone: "warning" },
      { label: "Cross-skill cohort", value: "340 SOs", sub: "Agri-finance before Kharif", tone: "warning" },
    ],
    insight: {
      title: "East rural-B2C ramp is the FY26 geographic bottleneck",
      body: "East region onboarding is running 11 days behind benchmark — and the Kharif lending season is 47 days away. Of 340 SOs needed for the agri-finance cross-skill, only 92 have started the module. Sourcing partners in Bhubaneswar and Patna are delivering at 64% of plan. Recommend: front-load cross-skill cohorts to weekly batches and add 2 regional training partners before July 1.",
      confidence: "82–88%",
      sources: ["Workday onboarding velocity", "LMS module completion", "Sourcing partner SLAs"],
    },
    attention: [
      { priority: "critical", title: "Approve 2 regional training partners · East", detail: "Decision needed before July 1 · ₹62L spend", action: "Approve" },
      { priority: "warning", title: "Weekly cross-skill batches · 340 SOs", detail: "Currently monthly · move to weekly", action: "Schedule" },
      { priority: "healthy", title: "South + West stable", detail: "No geographic intervention required", action: "Acknowledge" },
    ],
    agents: [
      { agent: "Onboarding Velocity Agent", message: "East ramp 11 d behind benchmark · agri cross-skill at 27%.", time: "02:38" },
      { agent: "Sourcing Partner Agent", message: "Bhubaneswar + Patna partners at 64% of plan · escalation drafted.", time: "03:52" },
      { agent: "Geo Distribution Agent", message: "Top 5 cities now 41% of workforce · West concentration creeping +0.4pp QoQ.", time: "05:10" },
    ],
  },

  "anupam/cost-intelligence": {
    kpis: [
      { label: "Total people cost", value: "₹4,840 Cr", sub: "18.2% of revenue · FY26 est" },
      { label: "Replacement cost exposure", value: "₹312 Cr", sub: "At current 16.4% attrition", tone: "warning" },
      { label: "Saving · 2pp attrition cut", value: "₹67 Cr", sub: "Modelled at 14.4% attrition", tone: "healthy" },
      { label: "Learning ROI", value: "3.2×", sub: "Best in BFSI peer set", tone: "healthy" },
    ],
    insight: {
      title: "BFL field + BALIC agency are your two cost-leverage points",
      body: "62% of people cost sits in fixed salary, but the variable line (₹1,016 Cr) is where leverage lives. Two cohorts drive 71% of replacement cost: BFL field force and BALIC agency. A 2pp attrition reduction in just these two cohorts saves an estimated ₹49 Cr — more than the full L&D budget. The Nashik/Pune manager intervention and the Bancassurance retention plan are the two highest-ROI cost actions available this quarter.",
      confidence: "85–90%",
      sources: ["Workday cost ledger", "Attrition replacement model", "Variable comp cube"],
    },
    attention: [
      { priority: "critical", title: "Approve BALIC retention spend · ₹14 Cr", detail: "Modelled saving ₹38 Cr · payback 4.4 months", action: "Approve" },
      { priority: "warning", title: "BFL field manager coaching scale-up", detail: "Pune playbook → MH/MP/Goa · ₹4.2 Cr", action: "Approve" },
      { priority: "healthy", title: "Learning ROI 3.2× holds", detail: "Continue investment; pause expansion debate", action: "Document" },
    ],
    agents: [
      { agent: "Cost Modelling Agent", message: "Replacement cost recomputed: ₹312 Cr at 16.4% · ₹245 Cr at 14.4%.", time: "02:12" },
      { agent: "Variable Comp Agent", message: "DST→RM promotion backlog adds est ₹1.07 Cr replacement cost.", time: "03:30" },
      { agent: "Learning ROI Agent", message: "Curriculum completers show 23% productivity uplift · ROI stable at 3.2×.", time: "04:48" },
    ],
  },

  "anupam/today-s-actions": {
    insight: {
      title: "Two of today's items are time-critical · three can wait to Monday",
      body: "The Priya IRDA briefing and the BALIC succession review both have decision windows that close this week. The AMC hiring uplift, BGI comp review and board pack can absorb a 3-day slip without operational impact. Suggested sequence: brief Priya at 11:00 (15 min), succession review at 16:00 (45 min). That clears your critical lane today.",
      confidence: "Decision-support · high",
      sources: ["Calendar", "Decision SLA tracker", "Action routing logs"],
    },
    attention: [
      { priority: "critical", title: "Brief Priya · IRDA sprint approval", detail: "11:00 · 15 min · sprint at 61% needs uplift decision", action: "Brief" },
      { priority: "critical", title: "Succession board · 3 BALIC CXO-1 gaps", detail: "16:00 · 45 min · external search budget needed", action: "Open" },
      { priority: "warning", title: "AMC hiring uplift · 240 niche roles", detail: "Can absorb 3-day slip · decide by Monday", action: "Schedule" },
      { priority: "warning", title: "BGI claims comp banding review", detail: "Decision Thursday · prep brief overnight", action: "Prep" },
    ],
    agents: [
      { agent: "Routing Agent", message: "5 items routed to your desk · 2 critical · 2 warning · 1 info.", time: "06:02" },
      { agent: "Calendar Agent", message: "11:00 and 16:00 slots reserved for critical decisions.", time: "06:18" },
      { agent: "Decision SLA Agent", message: "IRDA briefing window closes today EOD · succession by Friday.", time: "06:35" },
    ],
  },

  "anupam/leadership-pipeline": {
    insight: {
      title: "BALIC carries the highest HiPo concentration AND the highest flight risk",
      body: "BALIC holds 38% of the group HiPo pool but has had 6 external offers in the last 90 days — 4 in the Ready-Now (CXO-1) tier. The post-Allianz restructuring delayed the leadership cohort by 3 weeks, which the HiPo cohort reads as career-stagnation signal. Recommend: immediate restart of the BALIC cohort + targeted retention conversation with the top 6 Ready-Now HiPos before end of June.",
      confidence: "83–89%",
      sources: ["HiPo registry", "External offer tracker", "Cohort enrolment data"],
    },
    attention: [
      { priority: "critical", title: "Restart BALIC leadership cohort", detail: "3-week delay · 22 enrolled HiPos waiting", action: "Restart" },
      { priority: "critical", title: "Top 6 BALIC HiPos · retention conversation", detail: "Before end of June · scripted by HRBP", action: "Schedule" },
      { priority: "warning", title: "Diversity gap · women HiPo 32% vs target 40%", detail: "FY27 target · pipeline action needed", action: "Plan" },
      { priority: "healthy", title: "Ready-Now bench · 14 HiPos active", detail: "9 in rotational assignments · on plan", action: "Acknowledge" },
    ],
    agents: [
      { agent: "HiPo Pipeline Agent", message: "BALIC external offer count: 6 in 90 days · 4 in Ready-Now tier.", time: "02:24" },
      { agent: "Cohort Enrolment Agent", message: "BALIC leadership cohort delay = 3 wks · 22 HiPos waiting.", time: "03:48" },
      { agent: "Diversity Agent", message: "Women HiPo 32% · 8pp gap to FY27 target.", time: "05:02" },
    ],
  },

  "anupam/cross-entity-mobility": {
    insight: {
      title: "Manager release-reluctance costs you ~₹42 Cr annually",
      body: "58% of blocked mobility cases trace back to a single root cause: the releasing manager refuses to free the employee. Today there is no incentive for the releasing manager and no penalty for blocking. AMC currently fills 67% of roles from external hires at an average premium of ₹3.2L per hire vs the equivalent internal move. Modelled: a 1.9pp mobility lift = ~1,980 fewer external hires = ₹42 Cr annual saving. Recommend: launch the internal marketplace v2 with a release-credit incentive for source managers.",
      confidence: "80–86%",
      sources: ["Mobility transaction log", "External hire premium model", "Manager release survey"],
    },
    attention: [
      { priority: "critical", title: "Approve internal marketplace v2 launch", detail: "Q3 launch · release-credit incentive built in", action: "Approve" },
      { priority: "warning", title: "AMC external hire dependency · 67%", detail: "Cross-entity quant move feasibility = HIGH (12 BFL profiles)", action: "Initiate" },
      { priority: "warning", title: "Standardise cross-entity comp bands", detail: "31% of blocked moves cite comp-band mismatch", action: "Open" },
    ],
    agents: [
      { agent: "Mobility Agent", message: "4.1% mobility vs 6% target · gap = 1,980 external hires = ₹42 Cr.", time: "02:48" },
      { agent: "Release Behaviour Agent", message: "58% of blocked moves cite manager refusal · no incentive structure exists.", time: "03:36" },
      { agent: "Cross-Entity Match Agent", message: "12 BFL quant profiles match open AMC JDs · feasibility HIGH.", time: "04:54" },
    ],
  },

  "anupam/group-skills-index": {
    insight: {
      title: "Digital underwriting gap is your highest-leverage skill investment",
      body: "Digital Insurance Underwriting at 62% coverage gap is the single biggest blocker to BALIC + BAGIC straight-through processing roadmap — a roadmap that targets ₹140 Cr annual cost-to-serve reduction by FY28. Quant for AMC is the next highest gap and is on the critical path for the FY27 product launch. Agri-finance is closeable in 60 days with rural cohort training timed against Kharif. Recommend: ringfence ₹18 Cr capability budget across these three skills.",
      confidence: "84–90%",
      sources: ["Skills inventory", "Roadmap dependency map", "Capability ROI model"],
    },
    attention: [
      { priority: "critical", title: "Ringfence ₹18 Cr · digital UW + quant + agri", detail: "FY27 roadmap depends on this", action: "Approve" },
      { priority: "warning", title: "Launch agri-finance bootcamp · 60 d", detail: "Timed against Kharif · 1,200 SOs", action: "Schedule" },
      { priority: "warning", title: "External hiring · AMC quant", detail: "12 open roles · 84-day TTH currently", action: "Open" },
      { priority: "healthy", title: "Consumer lending skill coverage 94%", detail: "BFL field force well-served", action: "Acknowledge" },
    ],
    agents: [
      { agent: "Skills Agent", message: "Digital UW gap at 62% blocks STP roadmap · ₹140 Cr at stake.", time: "02:18" },
      { agent: "Skills Agent", message: "Quant gap at 77% critical for AMC FY27 product launch.", time: "03:32" },
      { agent: "Capability ROI Agent", message: "Agri-finance bootcamp ROI = 4.1× · 60-day delivery feasible.", time: "04:46" },
    ],
  },

  "anupam/comp-benchmarking": {
    insight: {
      title: "Two off-cycle corrections will absorb 80% of compensation risk",
      body: "AMC analyst at -15% and BALIC actuary at -10% account for 80% of business-critical comp gap. Both are scarce skills with active competitor poaching. Off-cycle correction cost: ~₹3.4 Cr annually. Modelled retained-attrition saving: ~₹6.8 Cr. The BAGIC claims gap at -8% is significant but operationally absorbable through Q1 FY27 cycle. The BFL field gap at -4% is within tolerable variance.",
      confidence: "85–91%",
      sources: ["Mercer / AON benchmarks", "Competitor JD scrape", "Attrition replacement model"],
    },
    attention: [
      { priority: "critical", title: "Approve off-cycle correction · AMC", detail: "-15% gap · ₹2.1 Cr annual · 37 roles", action: "Approve" },
      { priority: "critical", title: "Approve off-cycle correction · BALIC Actuary", detail: "-10% gap · ₹1.3 Cr annual · scarce regulatory skill", action: "Approve" },
      { priority: "warning", title: "BAGIC claims · Q1 FY27 cycle", detail: "-8% gap · absorbable to next cycle", action: "Schedule" },
      { priority: "healthy", title: "BFL RM at +4% vs market", detail: "No action needed", action: "Acknowledge" },
    ],
    agents: [
      { agent: "Compensation Benchmarking Agent", message: "AMC analyst gap -15% confirmed across 3 vendor benchmarks.", time: "02:42" },
      { agent: "Compensation Benchmarking Agent", message: "BALIC actuary gap -10% · 4 active competitor JDs scraped.", time: "03:58" },
      { agent: "Replacement Cost Agent", message: "₹3.4 Cr correction vs ₹6.8 Cr retained-attrition saving = 2× payback.", time: "05:18" },
    ],
  },

  "anupam/statutory-calendar": {
    insight: {
      title: "PF BFL East and KYC overdue cohort are your two near-term breach risks",
      body: "Of 47 statutory obligations in next 90 days, 45 are on-track. The two exceptions are PF ECR filing in BFL East (auto-filing failed for 1 establishment) and the 612 RBI KYC recertifications overdue in the BFL field force. Both are operationally fixable in under 5 working days but carry regulatory exposure if missed. IRDA agent renewal sprint is on its own track managed by Priya.",
      confidence: "Operational · 96%",
      sources: ["Compliance calendar", "PF portal", "RBI KYC tracker"],
    },
    attention: [
      { priority: "critical", title: "Resolve BFL East PF filing · Jun 15", detail: "Auto-file failed for 1 establishment", action: "Escalate" },
      { priority: "critical", title: "612 KYC recertifications overdue", detail: "RBI exposure · 5-day cohort sprint", action: "Sprint" },
      { priority: "warning", title: "ESIC half-year return · Jul 15", detail: "Preparation started · on plan", action: "Track" },
      { priority: "healthy", title: "POSH annual report · Sep 30", detail: "Template ready · 100% closure rate YTD", action: "Acknowledge" },
    ],
    agents: [
      { agent: "Compliance Agent", message: "47 obligations next 90 days · 2 at risk · auto-resolution path mapped.", time: "02:08" },
      { agent: "PF Filing Agent", message: "BFL East PF: auto-file failed · manual escalation drafted.", time: "03:24" },
      { agent: "KYC Recert Agent", message: "612 SOs overdue · cohort sprint plan ready · 5 working days.", time: "04:42" },
    ],
  },

  "anupam/dei-index": {
    insight: {
      title: "Women-in-field is the single biggest lever to your FY27 40% target",
      body: "Group women representation at 34% is 6pp shy of the FY27 target. BFL field force (29%) and AMC (28%) are the laggards — both are field-heavy / specialist-heavy and will not move on natural attrition. A dedicated women-in-field hiring initiative — targeted at Tier-2 city DST roles where female labour participation is rising — can deliver an estimated +2.4pp lift in 12 months. PwD and LGBTQ+ inclusion are tracking but need policy roll-out completion in the 2 remaining entities.",
      confidence: "78–84%",
      sources: ["DEI dashboard", "Field hiring cohort data", "Labour participation index"],
    },
    attention: [
      { priority: "critical", title: "Approve women-in-field initiative · FY27", detail: "+2.4pp lift modelled · BFL + AMC focus", action: "Approve" },
      { priority: "warning", title: "Roll out LGBTQ+ policy · last 2 entities", detail: "AMC + Markets pending", action: "Brief" },
      { priority: "warning", title: "PwD representation 0.8% vs 2% target", detail: "FY28 target · accessibility audit needed", action: "Audit" },
      { priority: "healthy", title: "Health entity at 48% women", detail: "Highest in group · share playbook", action: "Document" },
    ],
    agents: [
      { agent: "DEI Agent", message: "Group women 34% · BFL + AMC weighted drag · field-heavy structure.", time: "02:32" },
      { agent: "Hiring Cohort Agent", message: "Tier-2 female DST applicant rate +18% YoY · sourcing opportunity.", time: "03:48" },
      { agent: "Policy Coverage Agent", message: "LGBTQ+ policy live in 5/7 · AMC + Markets pending roll-out.", time: "05:02" },
    ],
  },

  "anupam/sebi-irdai-flags": {
    insight: {
      title: "The 2 IRDAI flags at BALIC are linked — and both compound if the renewal sprint slips",
      body: "The licence-lapse risk (4,200 agents) and the mis-selling training escalation (3 active cases) share the same root: the LMS module completion bottleneck in West and South. Closing the renewal sprint will simultaneously close 2 of the 3 mis-selling complaints because both training tracks share modules 4 and 7. The SEBI independent director ratio is a Company Secretary action — already in motion. RBI KYC is the only flag outside this corridor.",
      confidence: "84–90%",
      sources: ["IRDAI portal", "Mis-selling case files", "LMS module dependency map"],
    },
    attention: [
      { priority: "critical", title: "IRDA licence lapse · 4,200 agents", detail: "Cross-linked to mis-selling cases · sprint uplift needed", action: "Brief Priya" },
      { priority: "critical", title: "3 active mis-selling cases · BALIC", detail: "2 close on completion of modules 4 + 7", action: "Track" },
      { priority: "warning", title: "RBI KYC overdue · 612 SOs", detail: "5-day sprint plan ready", action: "Sprint" },
      { priority: "healthy", title: "BAGIC mis-selling -12% MoM", detail: "Sunita's team intervention working", action: "Acknowledge" },
    ],
    agents: [
      { agent: "Compliance Agent (IRDAI)", message: "Licence lapse + mis-selling root-cause linked · LMS module dependency mapped.", time: "01:54" },
      { agent: "Compliance Agent (SEBI)", message: "Independent director ratio fix in motion · Company Sec brief drafted.", time: "03:08" },
      { agent: "Compliance Agent (RBI)", message: "KYC recertification overdue cohort: 612 · sprint plan attached.", time: "04:32" },
    ],
  },

  "anupam/post-allianz-integration": {
    insight: {
      title: "Finance is the only function declining — and it is your 30-day priority",
      body: "5 functions out of 6 are trending up post-Allianz exit. Tech and Claims have crossed the 7.0 stability threshold. Agency is improving fastest (+0.6 MoM). The lone exception is Finance at 6.1 (↓0.1), driven by role clarity ambiguity and delayed comp review. Comparable BFSI merger benchmarks (HDFC-ERGO month 5, ICICI-Pru month 6) show a 60-day window before sentiment hardens. Recommend: Finance function deep-dive + town hall within 30 days, with comp parity audit running in parallel.",
      confidence: "82–87%",
      sources: ["Integration pulse", "BFSI merger benchmarks", "Open-text NLP"],
    },
    attention: [
      { priority: "critical", title: "Finance town-hall · within 30 days", detail: "Priya to lead · agenda: role clarity + comp", action: "Schedule" },
      { priority: "warning", title: "Commission integration audit", detail: "Independent third-party · 6-week report", action: "Commission" },
      { priority: "warning", title: "Bancassurance trust 6.4 · stalled", detail: "Brand confusion cited in 22% of comments", action: "Brief" },
      { priority: "healthy", title: "Brand transition signage complete", detail: "Customer collateral 78% migrated", action: "Track" },
    ],
    agents: [
      { agent: "Culture Integration Agent", message: "Finance trust 6.1 ↓0.1 · only declining function · benchmark window 60 d.", time: "02:14" },
      { agent: "Open-Text NLP Agent", message: "Bancassurance: 22% of comments cite brand confusion · collateral lag root cause.", time: "03:38" },
      { agent: "Brand Transition Agent", message: "Signage 100% · customer collateral 78% · in-app 92%.", time: "05:02" },
    ],
  },

  // ─────────────────────── ROHIT ───────────────────────
  "rohit/territory-dashboard": {
    kpis: [
      { label: "MH vs MP attrition", value: "3.3pp gap", sub: "MH 13.8% · MP 17.1%", tone: "warning" },
      { label: "MP open-role load", value: "34.9%", sub: "of zone open roles vs 34.4% headcount", tone: "warning" },
      { label: "Goa fill rate", value: "28 d TTF", sub: "84 open roles · fastest in zone", tone: "healthy" },
      { label: "Rural ramp lag", value: "11 d", sub: "behind benchmark · 340 SOs need cross-skill", tone: "warning" },
    ],
    insight: {
      title: "MP is understaffed relative to its open-role burden",
      body: "MP has 34.4% of zone headcount but carries 34.9% of open roles — marginal on paper. Combined with 17.1% attrition (vs MH 13.8%) and the rural B2C expansion, MP net capacity is stretched 18% below operational requirement. Vidarbha has added 147 new sub-branch territories. Each needs a seasoned SO to anchor it. Current ramp speed means these territories will operate at 60% capacity through the monsoon — the highest-activity period for rural lending in MP. Recommended: temporarily redeploy 12 Q1-performing SOs from Goa (territory saturated) to Vidarbha. Goa NPS and targets can absorb the reduction for one quarter.",
      confidence: "77–83%",
      sources: ["Territory capacity model", "Expansion plan data", "Seasonal lending cycle benchmarks"],
    },
    attention: [
      { priority: "critical", title: "Approve Vidarbha SO redeployment", detail: "12 Goa SOs → MP · this week", action: "Approve" },
      { priority: "warning", title: "Rural B2C cross-skill · 340 SOs", detail: "Agri-finance module before Kharif season", action: "Schedule" },
      { priority: "healthy", title: "Goa territory review", detail: "18 branches at 96% capacity · growth ceiling approaching", action: "Plan" },
    ],
    agents: [
      { agent: "Territory Capacity Agent", message: "Vidarbha sub-territory gap model run · 12 redeployment candidates identified.", time: "02:18" },
      { agent: "Rural Expansion Agent", message: "Kharif season readiness: 340 SOs need cross-skill · L&D module queued.", time: "03:44" },
      { agent: "Hiring Agent", message: "MP open roles 41-day TTF vs Goa 28 days · sourcing strategy gap flagged.", time: "04:52" },
      { agent: "Attrition Agent", message: "MP 17.1% vs zone 14.9% · delta increasing · root cause: manager density.", time: "05:30" },
    ],
  },

  "rohit/burnout-monitor": {
    insight: {
      title: "Nashik cluster escalates to exits in 14 days — Pune has more time",
      body: "The 42 flagged SOs split into two distinct risk profiles needing different interventions. Nashik 14: avg tenure 11 months, avg target attainment 58%, manager 1:1 cadence once in 61 days — acute risk, 72% probability of ≥4 exits in 14 days without intervention. Pune 28: avg tenure 17 months, 71% attainment, 1:1 cadence every 38 days — early-stage burnout, workload rebalance alone may stabilise. Recommended: split the intervention. Nashik gets immediate compulsory 5-day leave for top 8 risk-scored SOs + manager replacement review for 2 lowest-NPS managers. Pune gets workload rebalance + group town hall on incentive slab. Do not apply the same intervention to both — Pune needs conversation, Nashik needs relief.",
      confidence: "81–87%",
      sources: ["Burnout signal model", "Leave balance data", "Manager 1:1 cadence logs", "Exit probability cohort model"],
    },
    attention: [
      { priority: "critical", title: "Nashik: compulsory leave for top 8 risk-scored SOs", detail: "Approve by EOD today", action: "Approve" },
      { priority: "critical", title: "Nashik manager review", detail: "2 managers NPS <+18 · coaching or reassignment decision", action: "Decide" },
      { priority: "warning", title: "Pune: workload rebalance", detail: "Redistribute 3 geographies per SO · this week", action: "Schedule" },
      { priority: "warning", title: "Pune SME incentive town hall", detail: "Before perception hardens into intent", action: "Book" },
    ],
    agents: [
      { agent: "Burnout Agent", message: "Nashik cohort exit probability: 72% chance of 4+ exits in 14 days without intervention.", time: "01:44" },
      { agent: "Burnout Agent", message: "Pune cohort classified as early-stage · workload rebalance sufficient.", time: "02:31" },
      { agent: "Manager Behaviour Agent", message: "2 Nashik managers: 0 structured 1:1s in 38 days · NPS below +18.", time: "03:18" },
      { agent: "Leave Balance Agent", message: "8 Nashik SOs: zero leave in 90 days · compulsory leave trigger met.", time: "04:02" },
    ],
  },

  "rohit/flight-risk-list": {
    kpis: [
      { label: "Total flagged", value: "186", sub: "Top 5 shown in table", tone: "warning" },
      { label: "Exits expected this month", value: "11", sub: "Statistically · 4 in top-20 list", tone: "warning" },
      { label: "Replacement cost exposure", value: "₹6.8 Cr", sub: "If all 186 exit", tone: "critical" },
      { label: "Highest risk branch", value: "Nashik East", sub: "3 of top 5 from here", tone: "critical" },
    ],
    insight: {
      title: "Relocation fatigue is your most underestimated exit driver",
      body: "Of the 186 flagged employees, 34 have been relocated 2+ times in 18 months. This cohort has the highest actual exit rate in the last 6 months — 41% versus the overall field force average of 14.9%. Relocation fatigue is invisible in standard attrition analysis because it sits across multiple branches and doesn't cluster geographically. It only surfaces when you cross-reference location history with exit data. Dinesh Kale in Aurangabad (risk score 82) is your best example — 3rd posting in 22 months, never in home district, no promotion conversation in last review. Recommended: implement a relocation cap policy — no SO relocated more than twice in 24 months without written consent and a career path conversation. Estimated impact: 34 retained employees, ₹1.8 Cr saved annually.",
      confidence: "82–88%",
      sources: ["Employee location history", "Exit interview reason codes", "Relocation-attrition correlation model"],
    },
    attention: [
      { priority: "critical", title: "Kavya Sharma · Nashik East · score 94", detail: "Manager 1:1 overdue 38 days · call her today", action: "Call" },
      { priority: "critical", title: "Rohit Pawar · Pune West", detail: "Incentive dispute open 21 days · resolve before next payout cycle", action: "Resolve" },
      { priority: "warning", title: "34 employees with 2+ relocations in 18 months", detail: "Stay conversation + buddy manager", action: "Schedule" },
      { priority: "warning", title: "Anjali Tiwari · competitor offer rumour", detail: "Confirm via manager · prep retention conversation", action: "Verify" },
    ],
    agents: [
      { agent: "Flight Risk Agent", message: "186 employees scored · 11 predicted exits this month · model confidence 84%.", time: "01:52" },
      { agent: "Location History Agent", message: "34 employees: 2+ relocations in 18 months · relocation fatigue flag raised.", time: "02:44" },
      { agent: "Competitor Intelligence Agent", message: "Axis Finance and HDB Financial active lateral campaigns in Pune/Nagpur/Nashik · 3 employees targeted.", time: "03:38" },
      { agent: "Retention Protocol Agent", message: "Top 5 risk profiles prepared · retention conversation guides ready.", time: "04:20" },
    ],
  },

  "rohit/manager-nps": {
    kpis: [
      { label: "Zone Manager NPS", value: "+38", sub: "↑6 pts YoY", tone: "healthy" },
      { label: "Managers below +30", value: "7", sub: "Nashik · Aurangabad · Jabalpur", tone: "warning" },
      { label: "NPS vs attrition", value: "10.6pp", sub: "<+30 teams 22.4% · >+40 teams 11.8%", tone: "warning" },
      { label: "Coaching certified", value: "58%", sub: "Target 80%", tone: "warning" },
    ],
    insight: {
      title: "Dinesh Kumar in Jabalpur has never done a structured 1:1 — his attrition shows it",
      body: "Branch Manager Dinesh Kumar at Jabalpur shows NPS +14 — the lowest in the zone — with 24.8% team attrition, zero recorded structured 1:1s in the system, and no coaching certification. His team of 31 SOs has had 8 exits in 90 days. But this is not about Dinesh — it is about a gap in your manager development system. Dinesh has been a Branch Manager for 2.3 years and has received no coaching intervention. This pattern appears in all 3 bottom-NPS managers: promoted for field performance, not management capability, and received no structured transition support. Recommended — Immediate: pair Dinesh with a +50 NPS branch manager from Pune as peer mentor for 6 weeks. Systemic: mandatory 3-day new manager onboarding before any BM promotion takes effect — currently does not exist in BFL West.",
      confidence: "85–91%",
      sources: ["Manager NPS survey", "1:1 calendar data from Salesforce", "Team attrition cohort model"],
    },
    attention: [
      { priority: "critical", title: "Dinesh Kumar · Jabalpur · NPS +14", detail: "Assign peer mentor from Pune today", action: "Assign" },
      { priority: "critical", title: "Ramesh Tiwari · Aurangabad · NPS +19", detail: "Enrol in coaching sprint starting Monday", action: "Enrol" },
      { priority: "warning", title: "Suresh More · Nagpur · NPS +31 declining", detail: "HRBP check-in this week before red zone", action: "Schedule" },
      { priority: "healthy", title: "Priya Nair · Pune Central · NPS +52", detail: "Nominate as peer mentor for Jabalpur pairing", action: "Nominate" },
    ],
    agents: [
      { agent: "Manager Behaviour Agent", message: "Dinesh Kumar: 0 structured 1:1s in Salesforce in 2.3 years of BM tenure.", time: "01:38" },
      { agent: "Manager Behaviour Agent", message: "Bottom 3 NPS managers: all promoted from field with no manager onboarding.", time: "02:24" },
      { agent: "Coaching Certification Agent", message: "58% of BFL West managers certified · 7 overdue > 90 days.", time: "03:10" },
      { agent: "Attrition Correlation Agent", message: "NPS <+30 teams 22.4% attrition vs >+40 teams 11.8% · 10.6pp gap = ₹3.1 Cr at stake.", time: "04:44" },
    ],
  },

  "rohit/attrition-tracker": {
    kpis: [
      { label: "12-month trend", value: "14.9%", sub: "17.1% → 14.9% · ↓2.2pp YoY", tone: "healthy" },
      { label: "Feb–May uptick", value: "+1.1pp", sub: "13.8% → 14.9% · competitor hiring season", tone: "warning" },
      { label: "Exit reason #1", value: "Incentive", sub: "34% of exits", tone: "warning" },
      { label: "Preventable exits", value: "68%", sub: "Flagged before resignation", tone: "warning" },
    ],
    insight: {
      title: "68% of your exits are preventable — and the same 3 managers keep appearing",
      body: "Exit interview analysis from last 180 days shows 68% of exits cite at least one factor that was flagged by the attrition agent 30+ days before resignation — but no intervention was triggered. The 3 factors most frequently flagged-but-not-acted-upon: (1) manager 1:1 gap > 30 days (44% of exits), (2) incentive dispute open > 14 days (31%), (3) promotion eligibility passed with no conversation (28%). Critically: 3 branch managers appear in the manager field of 41% of preventable exits — Dinesh Kumar (Jabalpur), Ramesh Tiwari (Aurangabad), and Sandeep Mane (Nashik West). This is not a zone attrition problem. It is a 3-manager problem costing you ₹2.1 Cr annually in preventable replacement.",
      confidence: "88–93%",
      sources: ["Exit interview reason codes", "Attrition agent flag history", "Manager attribution model"],
    },
    attention: [
      { priority: "critical", title: "Review 3 high-attrition managers", detail: "Dinesh / Ramesh / Sandeep · coaching or reassignment · decide by Friday", action: "Decide" },
      { priority: "warning", title: "Incentive dispute SLA: 14 d (current 21 d)", detail: "Fix the process, not just the cases", action: "Reset SLA" },
      { priority: "warning", title: "Promotion conversation SLA: 7 days post-eligibility", detail: "No system trigger exists today", action: "Build" },
      { priority: "healthy", title: "YoY improvement 2.2pp", detail: "Document what worked · replicate in MP rural", action: "Document" },
    ],
    agents: [
      { agent: "Exit Analysis Agent", message: "Last 180 days exit interviews re-processed · 68% preventable · intervention gap identified.", time: "02:06" },
      { agent: "Manager Attribution Agent", message: "3 managers appear in 41% of preventable exits · flag raised to HRBP.", time: "02:54" },
      { agent: "Competitor Intelligence Agent", message: "Feb–May uptick: 19 verified lateral departures to Axis Finance / HDB.", time: "03:40" },
      { agent: "Promotion Pipeline Agent", message: "28% of exits had unacted promotion eligibility flag · system trigger gap.", time: "04:22" },
    ],
  },

  "rohit/incentive-accuracy": {
    kpis: [
      { label: "Payout accuracy", value: "99.4%", sub: "↑0.3pp vs last cycle", tone: "healthy" },
      { label: "Fairness perception", value: "27% neg", sub: "SME vertical", tone: "warning" },
      { label: "Disputes open", value: "18", sub: "Avg age 21 d · SLA 14 d", tone: "warning" },
      { label: "Slab complexity", value: "7 slabs", sub: "3 changed mid-quarter", tone: "warning" },
    ],
    insight: {
      title: "99.4% accuracy is masking a fairness crisis — these are different problems",
      body: "Incentive accuracy at 99.4% means the system is calculating correctly. But 27% of SME SOs saying payouts are unfair means communication of the calculation is broken. The specific issue: the mid-quarter slab reset reduced payout for 847 SOs who were tracking to a higher tier. Calculations were correct per the new slab — but SOs were never shown how the revised slab was applied to their YTD performance. They received a number with no explanation. In field sales culture, unexplained deductions become rumours within 48 hours. Recommended — Immediate: publish a 1-page payout explainer for SME vertical. Systemic: any slab change must be accompanied by an auto-generated personalised impact statement for every SO before payout date.",
      confidence: "82–88%",
      sources: ["Incentive pulse survey", "Slab change log", "Dispute reason codes"],
    },
    attention: [
      { priority: "critical", title: "Draft and send SME incentive explainer", detail: "This week · before July payout opens", action: "Draft" },
      { priority: "warning", title: "Resolve 18 open disputes (7 past 14-d SLA)", detail: "Finance team to prioritise", action: "Escalate" },
      { priority: "warning", title: "Policy: mandatory impact statement with any slab change", detail: "Raise with central HR", action: "Propose" },
      { priority: "healthy", title: "99.4% accuracy maintained", detail: "Acknowledge payroll team", action: "Recognise" },
    ],
    agents: [
      { agent: "Incentive Accuracy Agent", message: "Payout cycle processed · 99.4% correct · 18 disputes auto-flagged.", time: "01:30" },
      { agent: "Sentiment Agent", message: "SME pulse rerun post-payout · 27% fairness-negative · slab confusion as primary driver.", time: "02:18" },
      { agent: "Dispute Resolution Agent", message: "18 open disputes · 7 past SLA · escalation to finance queued.", time: "03:05" },
      { agent: "Communication Agent", message: "No payout explainer sent with last cycle · gap flagged to HRBP.", time: "04:50" },
    ],
  },

  "rohit/ramp-tracker": {
    kpis: [
      { label: "Current cohort", value: "1,847", sub: "DSTs · joined last 90 d" },
      { label: "Avg time to first disbursal", value: "22 d", sub: "Target 18 d", tone: "warning" },
      { label: "Day-7 check-in completion", value: "62%", sub: "Manager skipping 38%", tone: "warning" },
      { label: "Ramp to target productivity", value: "43%", sub: "On track · benchmark 68 d", tone: "warning" },
    ],
    insight: {
      title: "Day-7 check-in skip is the single biggest ramp drag — and it takes 10 minutes to fix",
      body: "Ramp analysis shows a clear fork in the data at Day 7. DSTs whose manager completed a Day-7 check-in reach first disbursal in avg 19 days. DSTs whose manager skipped it: avg 27 days. The check-in itself is not the mechanism — it signals to the new joiner that their manager is watching, which increases CRM login frequency by 34% in the following week. 38% of managers are skipping this — not maliciously, but because it is not in their task management system. It exists as a policy document, not a calendar event with a reminder. Recommended: auto-create a Day-7 calendar event in every new manager's Salesforce when a new joiner is assigned. Zero cost. Estimated ramp improvement: 8 days faster per DST. At 1,847 DSTs per cohort — 14,776 combined days of productivity recovered.",
      confidence: "87–93%",
      sources: ["Ramp cohort analysis", "Salesforce calendar data", "CRM login telemetry"],
    },
    attention: [
      { priority: "critical", title: "Add Day-7 check-in auto-calendar trigger to Salesforce", detail: "1-day fix · raise with tech", action: "Raise" },
      { priority: "warning", title: "312 DSTs blocked on IRDA cert", detail: "L&D to prioritise cohort completion", action: "Prioritise" },
      { priority: "warning", title: "System access delay avg 2.3 d (IT SLA breach)", detail: "Escalate to IT helpdesk", action: "Escalate" },
      { priority: "healthy", title: "94% Day-1 onboarding complete", detail: "Strong start · Day-7 fix will compound this", action: "Maintain" },
    ],
    agents: [
      { agent: "Ramp Analysis Agent", message: "Day-7 check-in correlation: 8-day ramp gap · Salesforce fix recommended.", time: "01:44" },
      { agent: "New Joiner Monitor Agent", message: "1,847 DSTs tracked · 71 not yet logged into CRM by Day 5.", time: "02:30" },
      { agent: "IRDA Certification Agent", message: "312 DSTs pending cert · blocked from Gold/Platinum product suite.", time: "03:15" },
      { agent: "System Access Agent", message: "Avg 2.3 day access delay across 87 new joiners this month · IT escalation raised.", time: "04:48" },
    ],
  },

  // ─────────────────────── PRIYA ───────────────────────
  "priya/irdai-compliance": {
    kpis: [
      { label: "Total at-risk agents", value: "4,200", sub: "Lapsing before Jun 30", tone: "critical" },
      { label: "Sprint completion", value: "61%", sub: "Certificates issued: 847", tone: "warning" },
      { label: "APE at risk", value: "₹340 Cr", sub: "₹84 Cr from top-5% agents", tone: "critical" },
      { label: "East zone critical lag", value: "12%", sub: "Worst of 4 zones", tone: "critical" },
    ],
    insight: {
      title: "Patna logistics is the single point of failure — one decision fixes 498 agents",
      body: "East zone has 1,260 agents in the lapse pipeline. Kolkata (762 agents) has 1 exam centre with 8-day backlog. Patna (498 agents) has zero centres — agents must travel 4 hours to Kolkata or Ranchi. IRDAI regulations permit proctored online IC-38 exams since 2024. BALIC has not activated this channel. One decision — activate online proctoring for East zone — immediately makes all 498 Patna agents schedulable this week. It also reduces Kolkata exam centre pressure by 30%, cutting backlog from 8 days to under 3. This is not a training problem. It is a scheduling infrastructure problem with a known, tested, approved solution.",
      confidence: "91–96%",
      sources: ["IRDAI circular 2024", "Agent location data", "Exam centre capacity model"],
    },
    attention: [
      { priority: "critical", title: "Activate online IC-38 proctoring for East zone", detail: "IT + L&D · can be live in 48 hours", action: "Activate" },
      { priority: "critical", title: "Book 6 Kolkata cohorts of 30 agents", detail: "This week · clears critical 63 top agents", action: "Book" },
      { priority: "warning", title: "North zone: 18% completion with 12 days left", detail: "Assign dedicated ADM to manage sprint", action: "Assign" },
      { priority: "healthy", title: "South zone on track at 31%", detail: "Replicate South ADM model to other zones", action: "Replicate" },
    ],
    agents: [
      { agent: "IRDAI Compliance Agent", message: "East zone: 0 agents scheduled in Patna · online proctor option not activated.", time: "01:22" },
      { agent: "IRDAI Compliance Agent", message: "Top 63 East APE agents all in lapse pipeline · ₹84 Cr APE at risk confirmed.", time: "02:44" },
      { agent: "Exam Logistics Agent", message: "Kolkata centre backlog 8-day wait · online proctor reduces to 3 days.", time: "03:30" },
      { agent: "IRDAI Sprint Agent", message: "Zones updated · South 31% · West 24% · North 18% · East 12% · East escalation triggered.", time: "04:48" },
    ],
  },

  "priya/licence-renewal-pipeline": {
    kpis: [
      { label: "Funnel conversion", value: "20%", sub: "Notified 4,200 → Booked 67% → Completed 27% → Certified 20%", tone: "warning" },
      { label: "Daily cert rate", value: "41/day", sub: "Need 95/day to clear by Jun 30", tone: "critical" },
      { label: "Days remaining", value: "18 d", sub: "3,353 still to certify", tone: "critical" },
      { label: "Biggest conversion gap", value: "40pp", sub: "Booked → Completed drop", tone: "warning" },
    ],
    insight: {
      title: "40% of agents who booked exams are not showing up — this is costing you the sprint",
      body: "The funnel shows 2,841 agents booked exams but only 1,124 completed them — a 60% show-up rate. With 18 days left and 3,353 certifications needed, 60% show-up means you certify ~1,900 agents by deadline — leaving 1,450 lapsed. Non-show analysis shows 3 patterns: (1) 47% got zero SMS/WhatsApp reminder, (2) 23% had exam centre changed without notification, (3) 30% rural agents took half-day off but centre was full. None are intent failures. All are logistics failures. Recommended: automated WhatsApp reminder 72hr + 24hr before exam for all 1,717 booked-but-not-completed agents. Show-up improves from 60% to 82%. Additional certifications: +376. Cost: near zero.",
      confidence: "86–91%",
      sources: ["Exam booking data", "Attendance logs", "No-show reason survey"],
    },
    attention: [
      { priority: "critical", title: "Activate WhatsApp reminder for 1,717 no-show-risk agents", detail: "72hr + 24hr before exam · L&D to deploy today", action: "Deploy" },
      { priority: "critical", title: "Fix centre notification gap (23% of no-shows)", detail: "Update SMS workflow", action: "Fix" },
      { priority: "warning", title: "Rural no-shows: full centre issue", detail: "Open branch-level overflow batches", action: "Open" },
      { priority: "healthy", title: "South zone 82% show-up", detail: "Interview their ADM on what's working", action: "Learn" },
    ],
    agents: [
      { agent: "Exam Attendance Agent", message: "No-show analysis complete · 3 root causes · none are intent failures.", time: "02:08" },
      { agent: "Communication Agent", message: "1,717 booked but not completed · 47% had zero reminder · WhatsApp campaign prepared.", time: "03:14" },
      { agent: "Logistics Agent", message: "23% no-shows: centre change not communicated · SMS workflow gap to IT.", time: "04:22" },
      { agent: "Capacity Agent", message: "Rural overflow: 34 additional slots needed this week in tier-3 locations.", time: "05:10" },
    ],
  },

  "priya/agent-productivity-ape": {
    kpis: [
      { label: "Avg APE / agent", value: "₹2.1L", sub: "Target ₹2.4L · gap ₹494 Cr group-wide", tone: "warning" },
      { label: "Top 5% concentration", value: "8,243", sub: "38% of total APE" },
      { label: "Bottom 40%", value: "65,945", sub: "Only 7% of APE", tone: "warning" },
      { label: "Top vs median multiplier", value: "5.9×", sub: "₹12.4L vs ₹2.1L" },
    ],
    insight: {
      title: "Middle 40% productivity is your largest untapped lever — worth ₹312 Cr",
      body: "Strategy focuses on protecting the top 5% and managing out the bottom 40%. But the data shows the highest leverage is the middle 40% — 65,944 agents averaging ₹1.8L APE vs peer benchmark of ₹2.3L. The ₹0.5L per-agent gap × 65,944 = ₹329 Cr in additional APE annually. What separates BALIC's middle-cohort top performers from its median: (1) manager who reviews call conversion weekly not monthly, (2) completed Bancassurance cross-sell cert, (3) personal sales toolkit (collateral + calculator app). None cost significantly. Recommended: middle-cohort productivity sprint — 90-day programme targeting 12,000 agents in the ₹1.5–2.0L APE band. Conservative target: ₹0.2L APE lift per agent = ₹240 Cr additional APE.",
      confidence: "79–85%",
      sources: ["Agent APE cohort data", "Peer benchmarks", "Manager behaviour correlation"],
    },
    attention: [
      { priority: "critical", title: "Design middle-cohort sprint brief", detail: "12,000 agents · 90-day programme · Q3 start", action: "Brief" },
      { priority: "warning", title: "Bancassurance cross-sell cert: 61% complete", detail: "Direct APE correlation confirmed · accelerate", action: "Accelerate" },
      { priority: "warning", title: "Top 5% retention: 6 agents with external offers (last 30 d)", detail: "Trigger high-value retention protocol", action: "Protect" },
      { priority: "healthy", title: "Bottom 40% managed exit", detail: "400 natural exits expected Q3 · replace with higher-quality activations", action: "Plan" },
    ],
    agents: [
      { agent: "APE Analysis Agent", message: "Middle cohort gap model: ₹329 Cr opportunity · 3 differentiating behaviours mapped.", time: "02:18" },
      { agent: "Top Agent Monitor", message: "6 high-value agents (APE >₹8L): competitor approach detected · retention flag raised.", time: "03:04" },
      { agent: "Bancassurance Agent", message: "Cross-sell cert 61% · uncertified agents 23% lower APE.", time: "04:16" },
      { agent: "Productivity Benchmark Agent", message: "HDFC Life middle cohort ₹2.4L vs BALIC ₹1.8L · gap analysis prepared.", time: "05:38" },
    ],
  },

  "priya/agent-attrition-churn": {
    kpis: [
      { label: "Annual attrition", value: "31.2%", sub: "Peer best: HDFC Life 29%", tone: "warning" },
      { label: "0-6 month washout", value: "58%", sub: "Biggest lever", tone: "critical" },
      { label: "High-value exits (APE >₹4L)", value: "29", sub: "In 6 months · ₹3.8 Cr APE lost", tone: "critical" },
      { label: "Preventable exits", value: "72%", sub: "Flagged before resignation · 41% acted on", tone: "warning" },
    ],
    insight: {
      title: "72% of exits were flagged in advance — but only 41% received intervention",
      body: "The attrition agent has been flagging at-risk agents for 6 months. In that period, 214 agents were flagged high-risk. Of these, 154 eventually exited. 111 of those exits were flagged 21+ days before resignation — giving adequate time for intervention. Only 45 of those 111 received any manager or HR intervention. The remaining 66 received their flag — and nothing happened. This is not a prediction problem. The model is working. It is an action problem. Root cause: flags are sent to ADMs as email alerts. Email open rate for ADM alerts: 34%. Recommended: migrate agent risk flags from email to WhatsApp for ADMs. Attach a 3-action script (call, offer, escalate) to every high-risk flag. Intervention rate: 34% → 70%. APE retention estimate: ₹2.1 Cr annually.",
      confidence: "87–92%",
      sources: ["Attrition agent flag log", "ADM email open rate data", "Intervention outcome tracking"],
    },
    attention: [
      { priority: "critical", title: "Migrate ADM risk alerts from email to WhatsApp", detail: "IT + L&D · 3-day change · current email open rate 34%", action: "Migrate" },
      { priority: "critical", title: "3 BMs generating 34% of high-value exits", detail: "Coaching decision this week", action: "Decide" },
      { priority: "warning", title: "0-6 month washout: Module 5 is the blocker", detail: "Break into 3 micro-modules", action: "Redesign" },
      { priority: "healthy", title: "HDFC Life benchmark 29% vs BALIC 31.2%", detail: "2.2pp gap closeable with washout reduction alone", action: "Target" },
    ],
    agents: [
      { agent: "Attrition Prediction Agent", message: "Last 6 months: 214 flagged · 154 exited · precision 72% · 59 unfollowed flags.", time: "01:48" },
      { agent: "ADM Alert Agent", message: "Email open rate 34% · WhatsApp pilot 81% · migration recommendation prepared.", time: "02:36" },
      { agent: "High-Value Agent Monitor", message: "29 APE >₹4L exits in 6 months · 3 managers attributed to 34%.", time: "03:22" },
      { agent: "Washout Cohort Agent", message: "Module 5 completion 31% · correlation with 6-month retention confirmed.", time: "04:44" },
    ],
  },

  "priya/succession-tracker": {
    kpis: [
      { label: "CXO/CXO-1 roles", value: "14", sub: "8 with ready-now successor (57%)", tone: "warning" },
      { label: "Critical vacancies", value: "2", sub: "Chief Agency + Chief Bancassurance", tone: "critical" },
      { label: "HiPo pipeline", value: "31", sub: "Leaders in 12–18 month track" },
      { label: "External hire risk", value: "CDO 5 mo", sub: "No successor identified", tone: "warning" },
    ],
    insight: {
      title: "Chief Bancassurance is your riskiest succession gap — not Chief Agency",
      body: "The search for Chief Agency is visible and being managed. But Chief Bancassurance (Rohini Sharma, 1.1 years in role) is a more acute risk not being tracked with the same urgency. Bancassurance contributes 34% of BALIC's new business premium. Rohini arrived as an external hire from Kotak Life — she has no internal network, no ready successor, and is still in a learning curve. BFSI data shows external hires in channel leadership roles have a 38% exit rate within 24 months — most commonly at the 14–18 month mark when the honeymoon ends and internal friction peaks. Rohini is at month 13. Recommended: (1) Retention — identify what would make month 24 feel like a career milestone (role expansion, team growth, ExCo visibility). (2) Bench — identify 1 internal candidate to shadow the Bancassurance P&L — not as a threat, but as business continuity.",
      confidence: "78–84%",
      sources: ["BALIC succession data", "BFSI external hire exit cohort", "Bancassurance channel P&L data"],
    },
    attention: [
      { priority: "critical", title: "Chief Agency search: candidate 3 withdrew", detail: "Brief revised slate to panel by Thursday", action: "Brief" },
      { priority: "critical", title: "Schedule retention conversation with Rohini Sharma", detail: "Month 13 is the critical window · Priya to lead this week", action: "Schedule" },
      { priority: "warning", title: "CDO succession gap: no internal shadow", detail: "Raise to Group CHRO for cross-entity sourcing", action: "Raise" },
      { priority: "warning", title: "BALIC HiPo cohort: 3-week delay", detail: "Restart plan needed by Q3", action: "Restart" },
    ],
    agents: [
      { agent: "Succession Agent", message: "Rohini Sharma tenure model: month 13 · BFSI exit probability at 18 months: 38%.", time: "02:04" },
      { agent: "Search Agent", message: "Chief Agency: candidate 3 withdrew · 2 remaining in final round.", time: "02:58" },
      { agent: "HiPo Monitor Agent", message: "BALIC cohort delay: 18 leaders at risk · restart plan queued.", time: "04:12" },
      { agent: "External Hire Risk Agent", message: "CDO + Chief Banc: both external, both <18 months, neither has shadow · combined risk flagged.", time: "05:24" },
    ],
  },

  "priya/post-allianz-integration": {
    kpis: [
      { label: "Overall trust score", value: "6.8/10", sub: "Target 8.0 by Q4 FY27", tone: "warning" },
      { label: "Functions declining", value: "1 of 6", sub: "Finance: 6.1 ↓0.1", tone: "critical" },
      { label: "Months since Allianz exit", value: "5 mo", sub: "Jan 8, 2026" },
      { label: "Fastest improving", value: "Agency", sub: "7.1 · ↑0.6 MoM", tone: "healthy" },
    ],
    insight: {
      title: "Finance function is diverging from the rest — the cause is specific and fixable",
      body: "Five of six BALIC functions show improving or stable trust scores 5 months post-Allianz. Finance is the only exception: 6.1/10 and declining by 0.1 MoM — making it the single trust risk in the integration. Pulse open-text from Finance shows 3 recurring themes: (1) 'My role has changed but my title hasn't' — 34%, (2) 'Compensation review promised by April — hasn't happened' — 28%, (3) 'I don't know who the real decision-maker is anymore' — 22%. These are not culture problems. They are process gaps with specific owners. Theme 1 → HR · role clarity workshop. Theme 2 → Total Rewards · April promise must be honoured or officially reset. Theme 3 → CEO · Finance org chart communication gap. Recommended: host a Finance-only town hall within 30 days. Address all 3 themes directly. Do not conflate this with the broader integration narrative — Finance needs its own conversation.",
      confidence: "82–87%",
      sources: ["Integration pulse survey", "Open-text NLP analysis", "Function-level trust trend model"],
    },
    attention: [
      { priority: "critical", title: "Schedule Finance function town hall", detail: "30-day deadline · Priya to co-facilitate with CFO", action: "Schedule" },
      { priority: "critical", title: "Total Rewards comp review (April promise)", detail: "Confirm revised date to Finance employees this week", action: "Confirm" },
      { priority: "warning", title: "Finance org chart: decision rights unclear", detail: "Raise to Tarun Chugh for org communication this month", action: "Raise" },
      { priority: "healthy", title: "Agency integration trust 7.1 ↑0.6", detail: "Fastest improvement · document ADM engagement model", action: "Document" },
    ],
    agents: [
      { agent: "Integration Pulse Agent", message: "Finance: 6.1/10 ↓0.1 · only declining function · open-text analysis triggered.", time: "01:52" },
      { agent: "NLP Sentiment Agent", message: "Finance open-text: 3 themes (role clarity / comp delay / decision rights) · brief prepared.", time: "02:40" },
      { agent: "Benchmark Agent", message: "Comparable BFSI integrations: Finance recovers in 90 days with intervention · falls to 5.5 in 6 months without.", time: "03:28" },
      { agent: "Agency Integration Agent", message: "Agency trust 7.1 ↑0.6 · ADM weekly connect as success driver.", time: "04:14" },
    ],
  },

  "priya/direct-staff-attrition": {
    kpis: [
      { label: "Direct headcount", value: "4,840", sub: "Employees" },
      { label: "Attrition rate", value: "18.3%", sub: "Above group avg 16.4%", tone: "warning" },
      { label: "Open roles", value: "840", sub: "Avg TTF: 47 d", tone: "warning" },
      { label: "Time-to-productivity", value: "74 d", sub: "Target 58 d", tone: "warning" },
    ],
    insight: {
      title: "Attrition at 18.3% is 1.9pp above group — the cause is tenure compression, not pay",
      body: "BALIC direct workforce exits at 18.3% vs group average 16.4%. Standard analysis points to comp. But comp benchmarking shows BALIC direct roles are within 4% of market median — inside acceptable range. The real driver visible in tenure data: average tenure at exit is 2.1 years. Classic '2-year itch' pattern — employees who see no clear next role by month 18–24 begin to explore externally. BALIC internal mobility rate: 4.1% — second lowest in group (only AMC lower). Employees who want to grow have no visible internal pathway. Recommended: launch a BALIC internal jobs portal — a simple filtered view of all open roles across BALIC entities. Communicate at month-18 mark via manager 1:1. Cost: near zero if built on existing Workday module. Expected impact: 2pp attrition reduction = 97 retained employees = ₹6.2 Cr replacement cost saved.",
      confidence: "81–87%",
      sources: ["Exit tenure analysis", "Compensation benchmarks", "Internal mobility data"],
    },
    attention: [
      { priority: "critical", title: "Launch BALIC internal jobs portal", detail: "Workday module available · IT to activate in 1 week", action: "Launch" },
      { priority: "warning", title: "Manager 1:1 at month 18", detail: "Add to standard calendar as automatic trigger", action: "Configure" },
      { priority: "warning", title: "840 open roles · 47-d TTF · 3 critical roles >90 d", detail: "Review sourcing strategy", action: "Review" },
      { priority: "healthy", title: "Comp within market range", detail: "Don't over-invest in pay · invest in mobility", action: "Acknowledge" },
    ],
    agents: [
      { agent: "Tenure Analysis Agent", message: "Exit tenure 2.1 yrs avg · month 18-24 risk window · mobility gap as root cause.", time: "02:22" },
      { agent: "Internal Mobility Agent", message: "BALIC mobility 4.1% · 2nd lowest in group · Workday jobs portal not activated.", time: "03:08" },
      { agent: "Open Role Monitor", message: "840 open roles · 3 roles >90 days unfilled · sourcing review needed.", time: "04:16" },
      { agent: "Compensation Benchmark Agent", message: "Direct comp within 4% of market median · pay not the attrition driver.", time: "05:02" },
    ],
  },

  // ─────────────────────── SUNITA ───────────────────────
  "sunita/sla-monitor": {
    kpis: [
      { label: "Cashless pre-auth SLA (48hr)", value: "91.2%", sub: "23 at breach risk by 2pm", tone: "critical" },
      { label: "Motor OD SLA (7 days)", value: "94.1%", sub: "3 approaching deadline", tone: "warning" },
      { label: "Health reimbursement (30 days)", value: "97.8%", sub: "On track", tone: "healthy" },
      { label: "IRDAI penalty exposure today", value: "₹1.15L", sub: "If 23 breaches confirmed", tone: "critical" },
    ],
    insight: {
      title: "Cashless SLA has been declining for 8 straight days — this is structural, not a capacity spike",
      body: "SLA compliance for cashless pre-auth has dropped from 96.1% to 91.2% over 8 consecutive days. Single-day drops are capacity issues. 8-day trends are structural. Root cause analysis shows the decline tracks exactly with the departure of 3 senior analysts who handled network hospital pre-auth queries — these are the complex cases requiring clinical judgement that junior analysts route back for clarification. Each rerouting adds 6–8 hours to a 48-hour SLA. Currently 34% of cashless cases are being rerouted at least once. Before the 3 senior departures: 11%. Recommended: Designate Karan Mehta as cashless pre-auth specialist for the next 30 days — all rerouted cases go to him first, not back into the general queue. This restores de-facto senior judgement without a hiring decision.",
      confidence: "84–90%",
      sources: ["SLA trend data", "Case routing logs", "Analyst departure records"],
    },
    attention: [
      { priority: "critical", title: "Redistribute Prerna's 23 breach-risk cases to Karan + Suresh", detail: "Now · prevents ₹1.15L penalty today", action: "Redistribute" },
      { priority: "critical", title: "Designate Karan as cashless pre-auth lead", detail: "Stops the 8-day SLA decline · implement today", action: "Assign" },
      { priority: "warning", title: "Motor OD: 3 cases approaching 7-day deadline", detail: "Assign dedicated analyst · avoid IRDAI flag", action: "Assign" },
      { priority: "healthy", title: "Motor TP at 98.4% — best performing category", detail: "Document workflow for cashless team to learn from", action: "Document" },
    ],
    agents: [
      { agent: "SLA Prediction Agent", message: "23 cashless cases: breach by 2pm confirmed · redistribution brief prepared for Sunita.", time: "01:18" },
      { agent: "Routing Analysis Agent", message: "Rerouting rate: 34% vs pre-departure baseline 11% · 3 senior analyst departures as root cause.", time: "02:44" },
      { agent: "Capacity Match Agent", message: "Karan: 19 absorption units · Suresh: 12 units · combined covers all 23 at-risk cases.", time: "03:30" },
      { agent: "IRDAI Penalty Agent", message: "₹1.15L exposure if 23 breaches confirmed · escalation ready for Sunita approval.", time: "04:12" },
    ],
  },

  "sunita/case-queue-847": {
    kpis: [
      { label: "Total active cases", value: "847", sub: "Across 16 active analysts" },
      { label: "Age distribution risk", value: "23 / 228", sub: ">47hrs breach · 36–47hrs urgent", tone: "critical" },
      { label: "Avg cases per analyst", value: "52.9", sub: "Range 31–68", tone: "warning" },
      { label: "Redistribution needed", value: "27 cases", sub: "From Prerna → Karan + Suresh", tone: "warning" },
    ],
    insight: {
      title: "Queue concentration risk: 3 analysts carry 47% of breach-risk cases",
      body: "Of the 251 cases in the 36+ hour danger zone, Prerna (14), Aisha (4), and Vijay (3) carry 21 of the 23 highest-risk cases between them. All 3 are in the top overtime bucket (8+ days). The team has capacity — Karan and Suresh combined have 31 spare units. The problem is the queue system assigns cases by incoming channel, not by analyst load. This means overloaded analysts keep receiving new cases while available analysts sit at lower loads. Recommended: Enable load-balanced auto-routing in the case management system (BAGIC's Symbo platform supports this — it is currently switched off). One configuration change. Prevents queue concentration from recurring every time a high-volume analyst takes leave or is overloaded.",
      confidence: "87–93%",
      sources: ["Case management system", "Analyst load model", "Symbo platform configuration log"],
    },
    attention: [
      { priority: "critical", title: "Enable load-balanced auto-routing in Symbo", detail: "IT config change · can be live in 4 hours", action: "Raise" },
      { priority: "critical", title: "Manual redistribute 27 cases from Prerna today", detail: "19 to Karan · 8 to Suresh · do now while Symbo fix is pending", action: "Redistribute" },
      { priority: "warning", title: "Deepa returns tomorrow — brief her on 27 new cases", detail: "Assigned during her leave · 15-min handoff", action: "Brief" },
      { priority: "healthy", title: "Karan + Suresh: flag their availability pattern to HRBP", detail: "Model profile for new hire profiling", action: "Flag" },
    ],
    agents: [
      { agent: "Queue Analysis Agent", message: "Load concentration confirmed: 3 analysts carry 47% of breach-risk cases · redistribution map prepared.", time: "01:44" },
      { agent: "Symbo Config Agent", message: "Load-balanced routing: currently disabled · 1 config change to enable · IT brief prepared.", time: "02:28" },
      { agent: "Capacity Agent", message: "Karan + Suresh combined absorption: 31 units · covers all redistribution needed today.", time: "03:16" },
      { agent: "Overtime Monitor", message: "Prerna / Aisha / Vijay: 8+ consecutive overtime days · resignation risk elevated · HRBP alert sent to Neha.", time: "04:50" },
    ],
  },

  "sunita/team-roster": {
    kpis: [
      { label: "Present today", value: "15 / 18", sub: "Analysts on the floor" },
      { label: "Leave + training", value: "3", sub: "Deepa (CL) · Ravi (sick) · Manish (training till 2pm)", tone: "warning" },
      { label: "Overtime risk", value: "4 analysts", sub: "8+ consecutive days", tone: "critical" },
      { label: "Monsoon cover gap", value: "12 needed", sub: "Empanelled 8 of 22", tone: "critical" },
    ],
    insight: {
      title: "You have 10 days to build monsoon cover — here is the only path that gets you there",
      body: "Standard empanelment takes 18–21 days. Monsoon surge is 10 days away. Standard process has failed. But BAGIC has two fast paths pre-approved and available right now. Path 1 — Pre-cleared agency list: 14 surveyors cleared last monsoon are still on the approved vendor list. Re-activation takes 3 days — background check waived, just needs BAGIC HR approval and contract sign. Path 2 — Mumbai deputation: BAGIC Mumbai HAT is in post-monsoon low season (their peak is Oct–Dec). 6 trained analysts available for deputation. Precedent exists — done in 2023 monsoon. Takes 5 days to arrange. Combined: 20 additional resources by Day 8. Covers the 39% capacity gap with 2 days buffer. Both paths require one email from Sunita to BAGIC Operations Head and HR. That email needs to go today.",
      confidence: "86–92%",
      sources: ["BAGIC empanelment records", "Mumbai HAT capacity calendar", "2023 monsoon deputation precedent"],
    },
    attention: [
      { priority: "critical", title: "Email BAGIC Operations: activate 14 pre-cleared surveyors", detail: "3-day path · send today", action: "Email" },
      { priority: "critical", title: "Email BAGIC HR: request 6 Mumbai analyst deputation for July", detail: "5-day path · send today", action: "Email" },
      { priority: "warning", title: "4 overtime analysts: schedule 3-day rotation leave", detail: "Before surge starts · reduces resignation risk", action: "Schedule" },
      { priority: "warning", title: "Manish available post 2pm today for urgent cases", detail: "Brief him on redistribution when training ends", action: "Brief" },
    ],
    agents: [
      { agent: "Monsoon Surge Agent", message: "Capacity gap: 39% · standard empanelment too slow · 2 fast paths identified.", time: "01:14" },
      { agent: "Empanelment Agent", message: "14 pre-cleared surveyors on approved list · 3-day re-activation path · approval brief prepared.", time: "02:38" },
      { agent: "Mumbai Deputation Agent", message: "BAGIC Mumbai: 6 analysts available July · 2023 precedent confirmed · request template prepared.", time: "03:24" },
      { agent: "Overtime Risk Agent", message: "4 analysts: 8+ days OT · 3.1× resignation probability · rotation leave plan prepared.", time: "04:48" },
    ],
  },

  "sunita/irdai-tracker": {
    kpis: [
      { label: "Your certification", value: "47 days", sub: "Remaining · renewal window opens in 17 days" },
      { label: "Team cert expiry risk", value: "2 analysts", sub: "Deepa 18d · Ravi 22d", tone: "critical" },
      { label: "Legal processing block", value: "Hard stop", sub: "If lapsed: cannot process claims (IRDAI mandate)", tone: "critical" },
      { label: "Renewal time estimate", value: "3 hours", sub: "4 online modules · mobile-friendly" },
    ],
    insight: {
      title: "Deepa returns from leave tomorrow with 18 days to cert expiry — she cannot legally process claims after July 4 without renewal",
      body: "Deepa Nair's IRDAI certification expires July 4 — 18 days from today. She is currently on 2 days casual leave and returns tomorrow. Under IRDAI guidelines, any claims processor with a lapsed certification cannot legally handle claims. If Deepa's cert lapses, she becomes non-billable to BAGIC and her 47 active cases must be redistributed immediately. This is not about willingness — Deepa does not appear to know her expiry date. The certification system sends renewal alerts at 30 days, but Deepa was on leave when the alert was sent and never opened it. Ravi Kumar has the same problem — cert expires July 8, currently on sick leave Day 3, alert unread. Recommended: Send both a direct WhatsApp from Sunita today — not a system alert. Both renewals take 3 hours online. If completed this week, both are cleared before monsoon surge.",
      confidence: "94–98%",
      sources: ["IRDAI certification database", "Alert delivery log", "Return-from-leave calendar"],
    },
    attention: [
      { priority: "critical", title: "WhatsApp Deepa today: cert expires July 4", detail: "Renew this week · 3 hours online", action: "WhatsApp" },
      { priority: "critical", title: "WhatsApp Ravi today: cert expires July 8", detail: "Renew during sick leave recovery (online, no travel)", action: "WhatsApp" },
      { priority: "warning", title: "Manish: book renewal in July calendar", detail: "Before monsoon surge begins", action: "Book" },
      { priority: "healthy", title: "System alert gap: leave-period alerts not being read", detail: "Raise to IT for read-receipt + manager notification copy", action: "Raise" },
    ],
    agents: [
      { agent: "IRDAI Cert Monitor", message: "Deepa Nair: expiry Jul 4 · 18 days · on leave · alert unread · escalation raised.", time: "01:30" },
      { agent: "IRDAI Cert Monitor", message: "Ravi Kumar: expiry Jul 8 · 22 days · sick leave Day 3 · alert unread · escalation raised.", time: "02:08" },
      { agent: "Alert Delivery Agent", message: "Both 30-day system alerts undelivered due to leave · WhatsApp escalation recommended vs system alert.", time: "03:22" },
      { agent: "Legal Compliance Agent", message: "Post-July 4: Deepa non-processable · 47 cases need contingency redistribution plan prepared.", time: "04:40" },
    ],
  },

  "sunita/escalations": {
    kpis: [
      { label: "Active escalations", value: "3", sub: "2 critical · 1 medium", tone: "critical" },
      { label: "Oldest case", value: "52 days", sub: "Rajesh Pandey · IRDAI complaint filed", tone: "critical" },
      { label: "IRDAI complaints (active)", value: "1", sub: "Response due EOD today", tone: "critical" },
      { label: "Avg escalation age", value: "31 days", sub: "Target <14 days", tone: "warning" },
    ],
    insight: {
      title: "Rajesh Pandey's case has crossed the IRDAI complaint threshold — a system response will not close this",
      body: "Rajesh Pandey's motor OD claim is 52 days old. IRDAI mandates 30-day resolution for motor claims. He filed an IRDAI complaint on Day 42 — 10 days ago. IRDAI complaint response is due today by EOD. The case has been handled by Karan Mehta via the standard queue. Surveyor delay is the documented reason — the surveyor visited on Day 14 but the report was submitted on Day 38, citing documentation issues. Rajesh has called the branch 4 times in 10 days. He is not angry about the delay anymore — he is angry about the silence. A standard system response citing 'surveyor delay' will satisfy IRDAI procedurally but will almost certainly generate a social media post — Rajesh's LinkedIn indicates he works in financial services and has 3,200 connections. Recommended: Sunita calls Rajesh personally today before filing the IRDAI response. Acknowledge the delay. Give a specific resolution date (recommend: June 12 — 5 days). Then honour it. This takes 15 minutes and prevents a reputational incident.",
      confidence: "79–85%",
      sources: ["Case history log", "IRDAI complaint system", "Customer contact record"],
    },
    attention: [
      { priority: "critical", title: "Call Rajesh Pandey personally before filing IRDAI response", detail: "Sunita to lead · 15 minutes · today", action: "Call" },
      { priority: "critical", title: "File IRDAI complaint response by EOD today", detail: "Karan to draft · Sunita to approve", action: "Approve" },
      { priority: "critical", title: "Sunanda Iyer — hospitalised · cashless denied twice", detail: "Override and approve now · medical team on call", action: "Override" },
      { priority: "warning", title: "Internal audit query: claims reserve adequacy", detail: "Due June 10 · draft response by Thursday", action: "Draft" },
    ],
    agents: [
      { agent: "Escalation Monitor", message: "Rajesh Pandey: Day 52 · IRDAI complaint filed Day 42 · response due EOD today · Sunita alert sent.", time: "01:22" },
      { agent: "Social Risk Agent", message: "Pandey LinkedIn profile: financial services · 3,200 connections · reputational risk flag raised.", time: "02:08" },
      { agent: "IRDAI Response Agent", message: "Complaint response template drafted · awaiting Sunita approval before filing.", time: "03:14" },
      { agent: "Medical Override Agent", message: "Sunanda Iyer: pre-auth denied twice · hospitalised · clinical override option prepared for Sunita approval.", time: "04:30" },
    ],
  },

  "sunita/my-career-path": {
    kpis: [
      { label: "Current readiness · DM Claims", value: "71%", sub: "↑3pp this month", tone: "healthy" },
      { label: "Estimated timeline", value: "6–9 months", sub: "If Q3 rotation secured" },
      { label: "Key gap", value: "Motor OD", sub: "Cross-exposure · opportunity available Q3", tone: "warning" },
      { label: "Peer benchmark", value: "6.1 yrs", sub: "vs avg DM promotion 7.2 yrs · ahead of pace", tone: "healthy" },
    ],
    insight: {
      title: "The Q3 Motor OD rotation is your fastest path to DM — but the window closes July 15",
      body: "BAGIC Motor OD team has 1 open rotation slot for Q3 (July–September). It is an 8-week cross-functional rotation for analysts seeking cross-line experience — exactly the gap in Sunita's DM readiness profile. Last year, 4 analysts applied for 1 slot. Applications open July 1 and historically close within 5 days. Sunita's DM readiness without this rotation: 71% — timeline 12–15 months. With this rotation: readiness jumps to 88% — timeline 3–4 months. The P&L module (8 hours) can run in parallel during the rotation. Only barrier: Sunita needs HRBP Neha to submit the nomination before July 1. That is 25 days from today. Neha does not yet know Sunita wants this. Recommended: Tell Neha this week. The rotation is the single action that compresses 12 months into 4.",
      confidence: "83–89%",
      sources: ["BAGIC rotation programme", "DM readiness model", "HRBP nomination records"],
    },
    attention: [
      { priority: "healthy", title: "Tell HRBP Neha about Motor OD rotation interest this week", detail: "Nomination due July 1 · window closes July 15", action: "Schedule" },
      { priority: "healthy", title: "Book P&L module (8 hours)", detail: "Can complete during rotation · clears second DM gap", action: "Book" },
      { priority: "healthy", title: "Acting DM opportunity: raise with Neha for Q4", detail: "Rotation makes you eligible to be considered", action: "Raise" },
    ],
    agents: [
      { agent: "Career Readiness Agent", message: "DM readiness: 71% · Motor OD rotation: 17pp jump if completed · fastest path confirmed.", time: "02:14" },
      { agent: "Rotation Availability Agent", message: "Q3 Motor OD slot: 1 available · applications open July 1 · historically closes in 5 days · urgent flag raised.", time: "03:02" },
      { agent: "Peer Benchmark Agent", message: "BAGIC DM avg promotion: 7.2 years · Sunita: 6.1 years · ahead of pace with rotation completion.", time: "04:18" },
      { agent: "Learning Path Agent", message: "P&L module: 8 hours · can run in parallel during rotation · schedule prepared.", time: "05:10" },
    ],
  },

  // ─────────────────────── AARAV ───────────────────────
  "aarav/my-90-day-journey": {
    kpis: [
      { label: "Phase 1 progress", value: "23 / 30", sub: "7 days remaining · on track", tone: "healthy" },
      { label: "Batch position", value: "Top 36%", sub: "Ahead of 64% of your cohort at Day 23", tone: "healthy" },
      { label: "Biggest milestone hit", value: "First disbursal", sub: "Day 18 🏆" },
      { label: "Next milestone", value: "14 disbursals", sub: "By Day 30 · 6 more to go", tone: "warning" },
    ],
    insight: {
      title: "You're on pace for a strong Phase 1 — one focus area to lock in before Day 30",
      body: "Your disbursal pace, CRM login streak, and product cert progress all put you in the top third of your batch. The one area to sharpen before Day 30: cross-sell attempts. The top 10% at Day 30 have made at least 3 cross-sell attempts — they don't always convert, but managers score initiative highly in Phase 1 reviews. You haven't logged a cross-sell attempt yet. Not because you're not capable — but because you probably haven't been told this is tracked yet. Now you know. Next 3 customer interactions: try mentioning one additional product. Even a 'no' counts as an attempt in the system.",
      confidence: "High",
      sources: ["Your CRM activity", "Batch position model", "Day 30 review criteria"],
    },
    attention: [
      { priority: "healthy", title: "Visit Vijay Sales Goregaon before 11am", detail: "3 applications waiting · 2 likely to convert", action: "Open" },
      { priority: "healthy", title: "Do Module 6 of IRDA cert on your commute", detail: "32 mins · unlocks 3 new products", action: "Start" },
      { priority: "healthy", title: "Message Rajan about his Day 23 approach in Andheri", detail: "He's free today 4–4:30pm", action: "Message" },
    ],
    agents: [
      { agent: "Your Ramp Agent", message: "Checked your disbursal pace: on track for 14 by Day 30 if Goregaon visit happens today.", time: "06:30" },
      { agent: "Your Learning Agent", message: "2 IRDA modules remaining · Module 6 is 32 mins · commute-friendly.", time: "06:45" },
      { agent: "Your Batch Agent", message: "Batch position updated: you're ahead of 64% · top 10% are at 12 — the gap is closeable.", time: "07:00" },
      { agent: "Your Day 30 Prep Agent", message: "3 of 4 review criteria on track · only open item: 2 documents · 4 mins each.", time: "07:15" },
    ],
  },

  "aarav/my-learning": {
    kpis: [
      { label: "Modules complete", value: "5 / 7", sub: "71%", tone: "healthy" },
      { label: "IRDA cert status", value: "2 left", sub: "60 mins · due this week", tone: "warning" },
      { label: "Your batch learning rank", value: "Top 28%", sub: "Above average", tone: "healthy" },
      { label: "Products unlocked", value: "4 / 7", sub: "3 more after cert", tone: "warning" },
    ],
    insight: {
      title: "The SOs who earn most in their first year all have one thing in common: they finished IRDA cert before Day 25",
      body: "BFL batch data from the last 3 years shows a clear pattern: SOs who complete IRDA cert before Day 25 earn on average ₹2,400 more per month in their first year than those who complete it after Day 40. It's not about the cert — it's about the products. Once certified, you can sell Home Loan, PL Gold, and Consumer Durable Loan. These are higher-ticket products with bigger incentive payouts. More importantly: customers who come in for one product often qualify for a second. If you can't sell the second product because you're not certified, you're leaving money on the table on visits you've already made. You need 60 minutes. Module 6 is designed for commute learning on mobile — audio-led, no video required.",
      confidence: "High",
      sources: ["BFL batch earnings data", "Product unlock matrix", "Mobile learning telemetry"],
    },
    attention: [
      { priority: "healthy", title: "Start Module 6 now", detail: "32 mins · audio-friendly for your commute to Goregaon", action: "Start" },
      { priority: "healthy", title: "Module 7 can be done this evening", detail: "28 mins · finishes your cert 2 days before Day 30", action: "Plan" },
      { priority: "healthy", title: "Once certified: ask your manager for the 3 new products brief", detail: "1-hour session · boosts your Day 30 review score", action: "Ask" },
    ],
    agents: [
      { agent: "Your Learning Agent", message: "Module 5 completed Day 12 · streak maintained · Module 6 queued for today.", time: "06:30" },
      { agent: "Batch Comparison Agent", message: "Your learning completion pace: top 28% of batch · IRDA cert is your last gap vs top 10%.", time: "06:45" },
      { agent: "Products Agent", message: "Products you can sell today: 4 · products after cert: 7 · 3 additional products in Goregaon territory have strong demand.", time: "07:00" },
      { agent: "Day 30 Prep Agent", message: "Cert complete by Day 25 = 5 days with full product suite before review · strong impression signal.", time: "07:15" },
    ],
  },

  "aarav/my-incentives": {
    kpis: [
      { label: "Earned so far this month", value: "₹4,800", sub: "8 disbursals" },
      { label: "Next slab unlocks at", value: "15 disbursals", sub: "₹720/disbursal vs ₹600 now", tone: "warning" },
      { label: "Month-end projection", value: "₹8,400", sub: "If you hit 20: ₹13,800", tone: "healthy" },
      { label: "Year 1 potential", value: "~₹1.1L/mo", sub: "SOs at your pace by Month 4", tone: "healthy" },
    ],
    insight: {
      title: "You're 6 disbursals from a slab jump — Goregaon alone could get you 2 of those today",
      body: "The difference between ending the month at 14 vs ending at 15 is small in count but significant in earnings. At 14: ₹8,400 (₹600/each). At 15: ₹8,520 for the first 14, then ₹720/each for every one after. At 20: ₹13,800 total (5 at the higher rate). The 3 Goregaon applications waiting today: 2 likely conversions. That's 10 — halfway to 15. 4 more conversions after that — realistic over 7 days with your current pace — and you're in the next slab for everything after 15. The top 25% of your batch at Day 30 typically hit 17–19 disbursals. That tier typically earns ₹12,000–₹15,000 in Month 1. You're 7 days from Day 30. 6 disbursals to reach that tier.",
      confidence: "High",
      sources: ["BFL incentive slab schedule", "Goregaon territory pipeline", "Batch earnings cohort"],
    },
    attention: [
      { priority: "healthy", title: "Visit Goregaon today — 2 likely conversions", detail: "Puts you at 10 · 4 from next slab", action: "Visit" },
      { priority: "healthy", title: "Complete IRDA cert this week", detail: "Unlocks higher-ticket products · adds ₹2,400/month avg", action: "Start" },
      { priority: "healthy", title: "Ask Rajan about his highest-converting territory this week", detail: "Learn his routing", action: "Ask" },
    ],
    agents: [
      { agent: "Your Incentive Agent", message: "Slab position updated: at 8 disbursals · 6 more to next slab · Goregaon visit modelled.", time: "06:30" },
      { agent: "Territory Agent", message: "Vijay Sales Goregaon: 3 applications · 2 high conversion probability · visit brief prepared.", time: "06:45" },
      { agent: "Month Projection Agent", message: "At current pace: 14 by month end · ₹8,400 projected · 20 is reachable: ₹13,800.", time: "07:00" },
      { agent: "Batch Earnings Agent", message: "Top 25% of your batch at Day 30: ₹12K–₹15K · you're on the edge of that tier.", time: "07:15" },
    ],
  },

  "aarav/my-documents": {
    kpis: [
      { label: "Documents complete", value: "5 / 7", sub: "71%", tone: "healthy" },
      { label: "Time to clear remaining", value: "~8 mins", sub: "Both today", tone: "warning" },
      { label: "Impact of clearing today", value: "No delay", sub: "First salary · Day 30 review ✅", tone: "healthy" },
      { label: "Last updated", value: "Day 16", sub: "7 days ago" },
    ],
    insight: {
      title: "These 2 documents take 8 minutes — and your first salary depends on both",
      body: "PF nomination and photo ID are the only two documents blocking your employee record from being marked complete. An incomplete record creates a manual exception in the payroll system — which means someone has to manually clear it before your salary is processed. Most of the time this gets done. But occasionally it causes a 3–5 day salary delay — and it always requires a follow-up from you. You can eliminate that risk in 8 minutes right now. The PF form is pre-filled — you just need to upload a photo ID (the same Aadhar you already uploaded works fine). The branch photo: any clear photo from your phone with a plain background. They're not strict about format for branch records.",
      confidence: "High",
      sources: ["BFL payroll workflow", "Your document checklist", "Day 30 review criteria"],
    },
    attention: [
      { priority: "healthy", title: "Upload your photo ID for PF nomination now", detail: "Aadhar works · 4 mins", action: "Upload" },
      { priority: "healthy", title: "Take a quick phone photo for branch records", detail: "Plain background · upload takes 2 mins", action: "Upload" },
      { priority: "healthy", title: "Once done: your record is complete and salary has no delay risk", detail: "Both items clear with a single visit to the app", action: "Confirm" },
    ],
    agents: [
      { agent: "Your Documents Agent", message: "2 pending items identified · PF nomination + branch photo · combined: 8 minutes.", time: "06:30" },
      { agent: "Payroll Risk Agent", message: "Incomplete records flagged · manual exception risk · completing today eliminates delay.", time: "07:00" },
      { agent: "Day 30 Prep Agent", message: "Documents complete = one less conversation at your review · your manager will notice.", time: "07:15" },
    ],
  },

  "aarav/my-buddy": {
    kpis: [
      { label: "Rajan's tenure", value: "3.2 years", sub: "Knows every Andheri territory" },
      { label: "Rajan's last month", value: "28 disbursals", sub: "Top 12% of zone", tone: "healthy" },
      { label: "Last connected", value: "5 days ago", sub: "Time to say hi", tone: "warning" },
      { label: "Next availability", value: "Today 4–4:30pm", sub: "Free slot · book it", tone: "healthy" },
    ],
    insight: {
      title: "Rajan hit 14 disbursals in his first month — here is the one thing he says made the difference",
      body: "Your agent pulled Rajan's Day 23 data from his onboarding file (with permission). At Day 23, Rajan had 9 disbursals — 1 more than you. He finished Month 1 with 14 disbursals — exactly the target. When asked what made the difference in Week 4: 'I stopped treating every visit as a disbursal attempt. I started visiting branches just to be known. 3 of my last 5 disbursals in Month 1 came from branches that called me — not from branches I cold-visited.' This is relationship territory management — it is what separates Month 1 SOs from Month 4 SOs. 4pm today with Rajan: ask him which 3 branches he visits just to stay visible. That list is worth ₹3,000/month to you over time.",
      confidence: "High",
      sources: ["Rajan's onboarding file", "Territory conversion model", "Buddy session notes"],
    },
    attention: [
      { priority: "healthy", title: "Message Rajan to confirm 4pm today", detail: "Ask about Goregaon branch + relationship territory tips", action: "Message" },
      { priority: "healthy", title: "Before your chat: write down your 2 biggest Month 1 questions", detail: "Rajan's answers are more useful than any training module", action: "Prep" },
      { priority: "healthy", title: "After the chat: log your 3 takeaways in your CRM notes", detail: "Shows initiative to your manager at Day 30", action: "Log" },
    ],
    agents: [
      { agent: "Your Buddy Agent", message: "Rajan has a free slot today 4–4:30pm · calendar invite prepared · send to Rajan?", time: "06:30" },
      { agent: "Territory Intel Agent", message: "Rajan's top 5 branches by conversion rate · 3 of them overlap with your territory.", time: "06:45" },
      { agent: "Comparison Agent", message: "Rajan at Day 23: 9 disbursals · finished Month 1 at 14 · you're tracking the same curve.", time: "07:00" },
      { agent: "Coaching Agent", message: "Top question for your Rajan session today: 'Which 3 branches do you just visit to be known?'", time: "07:15" },
    ],
  },

  "aarav/raise-a-request": {
    kpis: [
      { label: "Avg response", value: "Same day", sub: "For IT & medical", tone: "healthy" },
      { label: "Your open tickets", value: "0", sub: "All clear", tone: "healthy" },
      { label: "Confidential channel", value: "HRBP", sub: "Rohit Kapoor · 24-hr SLA" },
      { label: "Emergency line", value: "WhatsApp", sub: "Rohit · immediate" },
    ],
    insight: {
      title: "Pro tip: the fastest way to get anything resolved at BFL",
      body: "For anything urgent: WhatsApp your HRBP Rohit Kapoor directly. His number is in your contact list. For system issues: raise a ticket AND call IT helpdesk on the same day — tickets alone take twice as long. For incentive queries: screenshot the payout slip before raising the query — it speeds up resolution from 2 days to same day. Most importantly: if something doesn't feel right — your manager, your territory, your team — talk to Rohit. That's what he's there for. He handled 140+ new joiner queries last quarter and says the SOs who reach out early always have smoother first 90 days. No question is too small. You're 23 days in — asking questions is a sign of a strong start, not a weak one.",
      confidence: "High",
      sources: ["BFL HR support playbook", "Rohit's intake queue", "New joiner survey"],
    },
    attention: [
      { priority: "healthy", title: "Save Rohit Kapoor's WhatsApp now", detail: "Faster than any system for urgent stuff · 24-hr SLA", action: "Save" },
      { priority: "healthy", title: "For incentive queries: screenshot the slip first", detail: "Cuts resolution from 2 days to same day", action: "Note" },
      { priority: "healthy", title: "Something doesn't feel right? Talk to Rohit", detail: "Confidential · he handled 140+ queries last quarter", action: "Connect" },
    ],
    agents: [
      { agent: "Your Helpdesk Agent", message: "No open tickets in your name · all systems clear · IT contact saved to your profile.", time: "06:30" },
      { agent: "HRBP Connect Agent", message: "Rohit Kapoor available today · 24-hr response SLA · WhatsApp template ready.", time: "07:00" },
      { agent: "Onboarding Care Agent", message: "Day 23 check: 0 unresolved issues flagged · keep reaching out early — it pays.", time: "07:15" },
    ],
  },
};
