import type { NavGroup } from "./CockpitShell";

export const anupamNav: NavGroup[] = [
  {
    heading: "Group Overview",
    items: [
      {
        label: "Control Tower", icon: "🏛️",
        detail: {
          headline: "Group control tower · live signals across 7 entities",
          narrative: "Real-time aggregation of headcount, attrition, hiring velocity, compliance and culture across Bajaj Finance, Bajaj Life, BAGIC, AMC, Alts, Health and Markets. Refreshed every 4 minutes from Workday, Darwinbox and agent telemetry.",
          table: {
            cols: ["Signal", "Status", "Owner"],
            rows: [
              ["Group attrition", "16.4% · healthy", "CHRO"],
              ["Leadership bench", "62% · warning", "CHRO + ExCo"],
              ["IRDAI licence lapse", "4,200 in 90d", "Priya"],
              ["Allianz integration", "Trust 6.8 · improving", "Priya + Sanjiv"],
            ],
          },
          bullets: [
            "Hiring velocity holding at 21-day TTF for Sales Officer, 38-day for RM.",
            "Compliance posture 98.4% across 412 establishments.",
            "Agentic interventions saved 1,840 FTE-equivalent hours last 30 days.",
          ],
          actions: ["Export board snapshot", "Open governance log"],
        },
      },
      {
        label: "Entity Breakdown", icon: "📊",
        detail: {
          headline: "Group Entity Breakdown · June 2026",
          narrative: "Live entity-wise headcount, attrition and health score. Group total 1,04,708 employees with overall amber health, driven by AMC and Alts niche-skill churn.",
          table: {
            cols: ["Entity", "Headcount", "Attrition", "Open Roles", "Health"],
            rows: [
              ["Bajaj Finance (BFL)", "53,420", "14.9%", "2,925", "🟢 Good"],
              ["Bajaj Life Insurance", "28,140", "18.3%", "840", "🟡 Watch"],
              ["BAGIC (General)", "12,800", "16.1%", "320", "🟡 Watch"],
              ["Bajaj Finserv AMC", "1,240", "22.4%", "240", "🔴 At Risk"],
              ["Bajaj Alts", "580", "19.8%", "67", "🔴 At Risk"],
              ["Bajaj Finserv Health", "6,200", "17.2%", "188", "🟡 Watch"],
              ["Bajaj Markets", "2,328", "15.6%", "145", "🟢 Good"],
              ["GROUP TOTAL", "1,04,708", "16.4%", "4,725", "🟡 Overall"],
            ],
          },
          bullets: [
            "AMC & Alts combined attrition (21.2%) is 5pp above group average. Niche skills scarcity is driving exits to Mirae, Nippon and WhiteOak.",
            "BFL remains group anchor — 53% of headcount, lowest attrition, highest hiring velocity.",
            "Bajaj Life Leadership bench strength people-score moved +9pp this quarter despite watch-zone label.",
          ],
          actions: ["Drill by function", "Compare to FY25", "Brief ExCo on AMC retention"],
        },
      },
      {
        label: "Workforce Geography", icon: "🌍",
        detail: {
          headline: "Workforce Distribution · Pan India",
          narrative: "1,04,708 employees across 3,200 locations. West remains HQ-heavy; East rural-B2C ramp is 11 days behind onboarding benchmark and is the biggest geographic risk in FY26.",
          table: {
            cols: ["Region", "Headcount", "Key hubs", "Risk"],
            rows: [
              ["West (HQ)", "38,420", "Pune · Mumbai · Ahmedabad", "🟢 Stable"],
              ["North", "24,180", "Delhi NCR · Lucknow · Jaipur", "🟡 SO attrition watch"],
              ["South", "22,340", "Bengaluru · Chennai · Hyderabad", "🟢 Stable"],
              ["East", "19,768", "Kolkata · Bhubaneswar · Patna", "🟡 Rural ramp behind"],
            ],
          },
          bullets: [
            "Rural B2C expansion in East is 11 days behind benchmark. 340 SOs need cross-skilling into agri-finance before Kharif season.",
            "International footprint: 84 employees across Singapore, Dubai and London IRs.",
            "Top 5 cities account for 41% of total workforce.",
          ],
          actions: ["Open East ramp plan", "Approve cross-skill cohorts"],
        },
      },
      {
        label: "Cost Intelligence", icon: "💰",
        detail: {
          headline: "People Cost Intelligence · FY26",
          narrative: "Total people cost ₹4,840 Cr (FY26 est), 18.2% of revenue. Cost per employee ₹4.63L average. Estimated attrition replacement cost ₹312 Cr.",
          table: {
            cols: ["Cost head", "Share", "Amount"],
            rows: [
              ["Fixed salaries", "62%", "₹3,001 Cr"],
              ["Variable / incentive", "21%", "₹1,016 Cr"],
              ["Compliance & benefits", "6%", "₹291 Cr"],
              ["Training & L&D", "6%", "₹290 Cr"],
              ["Recruitment", "5%", "₹242 Cr"],
            ],
          },
          bullets: [
            "If group attrition reduces by 2pp (16.4% → 14.4%), estimated saving ₹67 Cr in replacement and ramp costs.",
            "BFL field force and BALIC agency channel are the highest-leverage points for cost optimisation.",
            "Learning ROI tracking at 3.2× spend — best-in-BFSI peer set.",
          ],
          actions: ["Open cost optimisation pack", "Approve targeted retention spend"],
        },
      },
      {
        label: "Today's Actions", icon: "📅", badge: "5",
        detail: {
          headline: "Actions Required · Today",
          narrative: "Five items routed to your desk this morning — 2 critical (IRDA sprint + succession), 2 warnings (AMC hiring + BGI comp), 1 info (Board pack).",
          table: {
            cols: ["Priority", "Action", "Owner / Entity", "Due"],
            rows: [
              ["🔴 Critical", "Brief Priya on IRDA sprint approval", "BALIC", "Today EOD"],
              ["🔴 Critical", "Review succession board · 3 CXO-1 gaps", "BALIC", "This week"],
              ["🟡 Warning", "Approve AMC hiring uplift · 240 niche roles", "AMC / Alts", "Monday"],
              ["🟡 Warning", "Review BGI claims compensation banding", "BAGIC", "This week"],
              ["🟢 Info", "Complete Board People Review pack", "Group", "Friday"],
            ],
          },
          actions: ["Brief Priya now", "Open succession board", "Approve AMC uplift", "Complete board pack"],
        },
      },
    ],
  },
  {
    heading: "Talent Strategy",
    items: [
      {
        label: "Succession Tracker", icon: "🎯",
        detail: {
          headline: "CXO & CXO-1 Succession · June 2026",
          narrative: "8 of 14 CXO/CXO-1 roles have a ready-now successor (62%). Business-critical gap: Chief Agency Officer + Chief Bancassurance at BALIC. Both must be filled before group governance requirements.",
          table: {
            cols: ["Role", "Entity", "Incumbent", "Ready-now", "Risk"],
            rows: [
              ["CEO", "BALIC", "Tarun Chugh · 4.2 yrs", "2", "🟢 Covered"],
              ["Chief Agency Officer", "BALIC", "Vacant · search on", "0", "🔴 Critical"],
              ["Chief Bancassurance", "BALIC", "Rohini Sharma · 1.1 yrs", "0", "🔴 Critical"],
              ["Chief Actuary", "BALIC", "Suresh Nair · 2.8 yrs", "1", "🟡 Watch"],
              ["Chief Risk", "BAGIC", "Arun Mehta · 3.1 yrs", "2", "🟢 Covered"],
              ["Chief Sales", "BFL", "3 candidates", "3", "🟢 Covered"],
              ["Chief Digital", "Group", "External hire · 0.4 yrs", "0", "🟡 Watch"],
            ],
          },
          bullets: [
            "Group governance will require disclosure of KMP stability. Chief Agency vacancy is the single biggest leadership-continuity timeline risk.",
            "External search engaged with Egon Zehnder on 6 roles, Spencer Stuart on 3 actuarial roles.",
            "Diversity slate adherence: 100% on all open searches.",
          ],
          actions: ["Open succession board", "Commission external search", "Brief Nomination Committee"],
        },
      },
      {
        label: "Leadership Pipeline", icon: "📈", badge: "HiPo",
        detail: {
          headline: "HiPo Pipeline · Group",
          narrative: "284 HiPos identified across 3 readiness tiers. BALIC carries the highest HiPo concentration (38%) and also the highest HiPo flight-risk — 6 external offers in last 90 days.",
          table: {
            cols: ["Tier", "Count", "Status"],
            rows: [
              ["Ready Now (CXO-1)", "14", "9 active in rotational assignments"],
              ["Ready 12–18 months", "31", "22 enrolled in Leadership Excellence Programme"],
              ["Ready 2–3 years", "68", "Identified via manager + performance cohort analysis"],
            ],
          },
          bullets: [
            "Top 3 ready-now: Deepa Kulkarni (BFL), Rahul Saxena (BALIC), Meera Iyer (BAGIC).",
            "BALIC cohort 3 weeks delayed due to post-Allianz restructuring — restart approved.",
            "Diversity in HiPo pool: 32% women, target 40% by FY27.",
          ],
          actions: ["Restart BALIC cohort", "Approve retention bonuses for top 6 BALIC HiPos"],
        },
      },
      {
        label: "Cross-Entity Mobility", icon: "🔄",
        detail: {
          headline: "Internal Mobility · FY26 YTD",
          narrative: "Mobility rate 4.1% vs target 6%. Largest flow is BFL → BALIC (34 transfers). AMC is failing on internal mobility — 67% of fills come from external hires.",
          table: {
            cols: ["Flow", "Transfers", "Note"],
            rows: [
              ["BFL → BALIC", "34", "Largest flow"],
              ["BFL → Markets", "18", "Digital talent"],
              ["BALIC → BFL", "12", "Operations leaders"],
              ["BAGIC → BALIC", "8", "Claims expertise"],
              ["AMC ← External", "67% of fills", "Internal mobility failing"],
            ],
          },
          bullets: [
            "Top blocker: manager reluctance to release talent (58% of cases).",
            "Comp band mismatch between entities blocks 31% of moves.",
            "Agent recommendation: launch cross-entity talent marketplace · 1.9pp mobility gain = 1,980 saved external hires = ~₹42 Cr saving.",
          ],
          actions: ["Launch internal marketplace v2", "Standardise cross-entity bands"],
        },
      },
      {
        label: "Group Skills Index", icon: "🚀",
        detail: {
          headline: "Skills Intelligence · Group",
          narrative: "74% coverage across 142 critical group skills. Critical gaps in Digital Insurance Underwriting (62%) and Quantitative Finance / Alts (77%).",
          table: {
            cols: ["Skill", "Required", "Available", "Gap"],
            rows: [
              ["Digital Insurance Underwriting", "840", "312", "🔴 62%"],
              ["Quantitative Finance / Alts", "380", "89", "🔴 77%"],
              ["Agri-Finance Product", "1,200", "860", "🟡 28%"],
              ["IRDAI Compliance & Mis-selling", "2,400", "1,890", "🟡 21%"],
              ["Consumer Lending (EMI/PL/HL)", "12,000", "11,240", "🟢 6%"],
            ],
          },
          bullets: [
            "Digital underwriting gap blocks BALIC + BAGIC straight-through processing roadmap.",
            "Quant gap is Business-critical for AMC product launch FY27.",
            "Agri-finance gap timed against Kharif season — closeable in 60 days with rural cohort training.",
          ],
          actions: ["Approve external hiring for quant", "Launch agri-finance bootcamp"],
        },
      },
      {
        label: "Comp Benchmarking", icon: "💸",
        detail: {
          headline: "Compensation vs Market · FY26",
          narrative: "Group at 62nd percentile of BFSI. Dangerous gaps in AMC (-15%) and Actuary (-10%) — both Business-critical. Off-cycle correction recommended before FY27 cycle.",
          table: {
            cols: ["Role", "Internal", "Market P50", "Gap", "Risk"],
            rows: [
              ["AMC Analyst", "₹14.6L", "₹17.2L", "-15%", "🔴"],
              ["Actuary (BALIC)", "₹38L", "₹42L", "-10%", "🔴"],
              ["Claims Analyst (BAGIC)", "₹6.8L", "₹7.4L", "-8%", "🔴"],
              ["Branch Manager (BALIC)", "₹18.2L", "₹19.4L", "-6%", "🔴"],
              ["DST/SO (BFL Field)", "₹4.1L", "₹4.3L", "-4%", "🟡"],
              ["RM (BFL)", "₹8.4L", "₹8.1L", "+4%", "🟢"],
            ],
          },
          actions: ["Approve off-cycle correction · AMC", "Approve off-cycle correction · Actuary"],
        },
      },
    ],
  },
  {
    heading: "Compliance & DEI",
    items: [
      {
        label: "Statutory Calendar", icon: "⚖️",
        detail: {
          headline: "Compliance Calendar · Next 90 Days",
          narrative: "47 statutory obligations next 90 days · 4 critical. PF ECR + first batch IRDA agent renewals are immediate.",
          table: {
            cols: ["Date", "Item", "Entity", "Status"],
            rows: [
              ["🔴 Jun 15", "PF ECR filing", "All entities", "6/7 auto-filed · BFL East pending"],
              ["🔴 Jun 30", "IRDA licence renewal · batch 1", "BALIC · 840 agents", "61% complete"],
              ["🟡 Jul 15", "ESIC half-year return", "BFL, BAGIC", "Preparation started"],
              ["🟡 Jul 31", "IRDA licensing · batch 2", "BALIC · 1,840 agents", "Pipeline open"],
              ["🟡 Aug 15", "RBI KYC recertification", "BFL field force", "612 overdue"],
              ["🟢 Sep 30", "IRDA licensing · final batch", "BALIC · 1,520 agents", "On plan"],
              ["🟢 Sep 30", "Annual POSH report", "All entities", "Template ready"],
            ],
          },
          actions: ["Resolve BFL East PF filing", "Escalate KYC overdue cohort"],
        },
      },
      {
        label: "DEI Index", icon: "👥",
        detail: {
          headline: "DEI Dashboard · Group",
          narrative: "Group women representation 34% overall, 18% in CXO+CXO-1. BFL and AMC are furthest from FY27 40% target — both field-heavy.",
          table: {
            cols: ["Entity", "Women %"],
            rows: [["Health", "48%"], ["BALIC", "41%"], ["BAGIC", "36%"], ["Markets", "31%"], ["BFL", "29%"], ["AMC", "28%"]],
          },
          bullets: [
            "PwD representation 0.8% · target 2% by FY28.",
            "LGBTQ+ inclusive policies live in 5 of 7 entities.",
            "Recommended: women-in-field hiring initiative in FY27 plan.",
          ],
          actions: ["Approve women-in-field initiative"],
        },
      },
      {
        label: "SEBI / IRDAI Flags", icon: "🔐",
        detail: {
          headline: "Regulatory Flags · Active",
          narrative: "5 active flags · 2 critical IRDAI. Mis-selling complaints trending down at BAGIC.",
          table: {
            cols: ["Severity", "Regulator", "Issue", "Owner"],
            rows: [
              ["🔴", "IRDAI", "Licence lapse risk · 4,200 agents · BALIC", "Priya"],
              ["🔴", "IRDAI", "Mis-selling training · 3 active cases · BALIC", "Compliance"],
              ["🟡", "SEBI", "Independent director ratio · Bajaj Finserv", "Co. Secretary"],
              ["🟡", "RBI", "KYC recertification · 612 SOs · BFL", "Rohit"],
              ["🟢", "IRDAI", "Mis-selling complaints down 12% MoM · BAGIC", "Sunita team"],
            ],
          },
        },
      },
      {
        label: "POSH Tracker", icon: "🛡️",
        detail: { headline: "POSH · 47 cases YTD · 100% closed within timeline", bullets: ["Repeat offenders: 0.", "ICs functional across all 7 entities.", "Awareness coverage: 96% workforce."] },
      },
      {
        label: "Labour Law Register", icon: "📋",
        detail: { headline: "Labour compliance score 98.4% across 412 establishments", bullets: ["Contract labour: 18,400 — registers up to date.", "Minimum wage variations: 0 flagged.", "S&E registrations: 96% auto-renewed."] },
      },
    ],
  },
  {
    heading: "Transformation",
    items: [
      {
        label: "Transform Index", icon: "🚀",
        detail: {
          headline: "Workforce Transformation Index",
          narrative: "Composite score 64/100 (↑3 MoM since pilot agents deployed in BFL West). HR Ops Automation at 54 is the biggest drag — 40% of HR workflows still manual.",
          table: {
            cols: ["Dimension", "Score", "Status"],
            rows: [
              ["Hiring Velocity", "72/100", "🟢"],
              ["Retention vs Target", "71/100", "🟢"],
              ["Skills Coverage", "61/100", "🟡 drag"],
              ["Onboarding Speed", "58/100", "🟡 drag"],
              ["HR Ops Automation", "54/100", "🔴 drag"],
            ],
          },
          actions: ["Scale BFL West pilot to all entities"],
        },
      },
      {
        label: "Learning Academy", icon: "🎓",
        detail: {
          headline: "Group Learning Academy · FY26",
          narrative: "18.4L learning hours YTD. ROI 3.2×. DSTs who complete full curriculum show +23% 90-day productivity — accelerating onboarding completions = ₹34 Cr productivity gain.",
          table: {
            cols: ["Programme", "Status", "Note"],
            rows: [
              ["DST Onboarding Curriculum", "✅ 84%", "2,847 certified"],
              ["Mandatory Compliance", "✅ 91%", "All entities"],
              ["Leadership Excellence", "🟡 67%", "BALIC cohort 3-wk delayed"],
              ["Bancassurance Cross-Sell", "🟡 61%", "11,200 agents pending"],
              ["AMC/Alts Capability Framework", "🔴 0%", "Not started · 67 niche roles"],
            ],
          },
          actions: ["Commission AMC capability framework", "Restart BALIC leadership cohort"],
        },
      },
      {
        label: "Post-Allianz Integration", icon: "🔗",
        detail: {
          headline: "Post-Allianz Integration Tracker",
          narrative: "5 months post-Allianz exit (Jan 8, 2026). Trust score 6.8/10, target 8.0 by Q4 FY27. Finance function trust is declining — needs immediate town-hall.",
          table: {
            cols: ["Function", "Trust", "Trend"],
            rows: [
              ["Tech", "7.8", "↑0.4 most settled"],
              ["Claims (BAGIC)", "7.3", "↑0.5 stable"],
              ["HR", "7.2", "↑0.3 stable"],
              ["Agency", "7.1", "↑0.6 improving fastest"],
              ["Bancassurance", "6.4", "↑0.2 slow"],
              ["Finance", "6.1", "↓0.1 DECLINING"],
            ],
          },
          bullets: [
            "Brand transition (Bajaj Allianz → Bajaj Life/General): ✅ complete.",
            "Leadership alignment in progress.",
            "Recommended: Finance function pulse deep-dive and town hall within 30 days.",
          ],
          actions: ["Schedule Finance town-hall", "Commission integration audit"],
        },
      },
    ],
  },
  {
    heading: "Reporting",
    items: [
      {
        label: "Board People Review", icon: "📋", badge: "81% ready",
        detail: {
          headline: "Board People Review Pack · Week of June 6, 2026",
          narrative: "81% ready · 3 sections pending. Compensation benchmarking insert not started — due Thursday.",
          table: {
            cols: ["Section", "Status"],
            rows: [
              ["Group headcount & movement", "✅"],
              ["Attrition dashboard", "✅"],
              ["Hiring pipeline summary", "✅"],
              ["Compliance status", "✅"],
              ["DEI metrics", "✅"],
              ["Succession coverage", "🟡 needs CXO sign-off"],
              ["BALIC Leadership bench strength narrative", "🟡 pending legal review"],
              ["Compensation benchmarking insert", "🔴 not started"],
            ],
          },
          actions: ["Generate missing sections with AI", "Download current draft", "Send for review"],
        },
      },
      {
        label: "MIS & Analytics Hub", icon: "📊",
        detail: { headline: "238 live HR dashboards · 18 entity-level cuts", bullets: ["Workday + Darwinbox unified data layer live.", "Self-serve queries: 2,400/week from line managers.", "Predictive attrition model accuracy: 86%."] },
      },
    ],
  },
];

export const rohitNav: NavGroup[] = [
  {
    heading: "Zone Overview",
    items: [
      {
        label: "Territory Dashboard", icon: "📍",
        detail: {
          headline: "West India Field Force · Territory View",
          narrative: "32,140 employees across MH, Goa and MP. Maharashtra is the engine; Nashik burnout cluster and MP rural ramp are the active risks.",
          table: {
            cols: ["State", "Headcount", "Branches", "Open Roles", "Attrition"],
            rows: [
              ["Maharashtra", "19,840", "247", "1,820", "13.8% 🟢"],
              ["Madhya Pradesh", "11,060", "147", "1,021", "17.1% 🟡"],
              ["Goa", "1,240", "18", "84", "11.2% 🟢"],
            ],
          },
          bullets: [
            "Pune zone hitting 92% target · Mumbai 96%.",
            "Watch: Nashik burnout cluster (42 SOs flagged).",
            "MP rural B2C ramp 11 days behind plan · Vidarbha expansion on track.",
          ],
        },
      },
      {
        label: "District View (MH/Goa/MP)", icon: "🗺️",
        detail: {
          headline: "District Intelligence · High Priority Zones",
          narrative: "8 priority districts under live monitoring. Nashik + Aurangabad + Jabalpur form the critical triangle — all 3 above 18% attrition AND below 85% target. Common factor: Manager NPS below +30.",
          table: {
            cols: ["District", "Headcount", "Attrition", "Target", "Priority"],
            rows: [
              ["Pune", "4,840", "15.2%", "92%", "🟡"],
              ["Mumbai", "3,120", "12.1%", "96%", "🟢"],
              ["Nashik", "1,680", "19.4%", "84%", "🔴"],
              ["Nagpur", "2,140", "16.8%", "88%", "🟡"],
              ["Aurangabad", "1,420", "18.2%", "81%", "🔴"],
              ["Bhopal", "2,080", "17.4%", "89%", "🟡"],
              ["Indore", "2,240", "15.8%", "94%", "🟢"],
              ["Jabalpur", "1,340", "18.9%", "79%", "🔴"],
            ],
          },
          actions: ["Coach managers · critical triangle", "Deploy HRBP to Nashik & Aurangabad"],
        },
      },
      {
        label: "Branch Performance", icon: "🏢",
        detail: {
          headline: "Branch Scorecard · Bottom 10 requiring intervention",
          narrative: "5 branches need urgent intervention. Pattern: low manager NPS strongly correlated with both attrition and target miss.",
          table: {
            cols: ["Branch", "Manager", "Target %", "Attrition", "NPS"],
            rows: [
              ["Nashik East", "Pradeep K.", "74%", "22.1%", "+18 🔴"],
              ["Aurangabad West", "Sandeep M.", "78%", "21.4%", "+22 🔴"],
              ["Jabalpur", "Ramesh T.", "76%", "23.2%", "+14 🔴"],
              ["Nagpur South", "Kavita R.", "82%", "18.8%", "+28 🟡"],
              ["Bhopal North", "Anil S.", "84%", "17.4%", "+31 🟡"],
            ],
          },
          actions: ["Schedule manager coaching", "Send branch HRBP"],
        },
      },
      {
        label: "Today's Actions", icon: "📅", badge: "4",
        detail: {
          headline: "Rohit's Action List · Today",
          narrative: "4 items routed this morning — 2 critical (burnout + KYC training), 2 warnings (DST→RM + Pune town-hall).",
          table: {
            cols: ["Priority", "Action", "Context"],
            rows: [
              ["🔴", "Approve burnout intervention · 42 SOs", "Pune & Nashik · ₹2.2L vs ₹1.9 Cr inaction (recruitment + training + ramp)"],
              ["🔴", "Escalate KYC training overdue · 612 SOs", "RBI compliance risk"],
              ["🟡", "Review DST→RM progression · 184 candidates", "Pune · blocked by interview SLA"],
              ["🟡", "Schedule Pune cluster town hall", "Incentive fairness perception"],
            ],
          },
          actions: ["Approve burnout sprint", "Escalate KYC", "Unblock RM pipeline", "Schedule town hall"],
        },
      },
      {
        label: "Cost of Attrition", icon: "💰",
        detail: {
          headline: "Attrition Cost Intelligence · West India FY26",
          narrative: "At current 14.9% attrition, replacement cost ~₹21.4 Cr/year. Reducing to BFSI best-practice 12% would save ₹5.2 Cr/year. Manager-NPS fix in bottom 3 districts alone = ₹3.1 Cr annual saving.",
          table: {
            cols: ["Cluster", "Attrition", "Exits", "Annual cost"],
            rows: [
              ["Nashik", "22.1%", "371", "₹1.4 Cr"],
              ["Jabalpur", "23.2%", "311", "₹1.2 Cr"],
              ["Aurangabad", "21.4%", "304", "₹1.0 Cr"],
              ["Zone total", "14.9%", "4,789", "₹21.4 Cr"],
            ],
          },
          bullets: [
            "Cost per DST replacement: ₹38,000 (recruitment + training + 68-day ramp).",
            "Cost per SO/RM replacement: ₹62,000.",
          ],
          actions: ["Approve manager coaching budget"],
        },
      },
    ],
  },
  {
    heading: "Field Force Intelligence",
    items: [
      {
        label: "Flight Risk List", icon: "⚠️",
        detail: {
          headline: "High Flight-Risk · Ranked List · West India",
          narrative: "186 employees flagged by Attrition Agent. Risk model uses tenure, incentive attainment, login streak, manager NPS, peer comparison. Top 5 below.",
          table: {
            cols: ["Name", "Branch", "Risk", "Signal"],
            rows: [
              ["Kavya Sharma", "Nashik East", "94", "Miss target 3M + low NPS"],
              ["Rohit Pawar", "Pune West", "89", "Incentive dispute + absence"],
              ["Sanjay Yadav", "Jabalpur", "87", "Peer attrition anxiety"],
              ["Anjali Tiwari", "Nagpur", "84", "Competitor offer rumour"],
              ["Dinesh Kale", "Aurangabad", "82", "Relocation fatigue · 3rd posting"],
            ],
          },
          bullets: ["+37 additional flight-risk employees beyond the top 5 shown."],
          actions: ["Trigger nudge campaign", "Brief managers", "Prep retention offers for top 5"],
        },
      },
      {
        label: "Burnout Monitor", icon: "🔥", badge: "Triple",
        detail: {
          headline: "Burnout Cluster Analysis · Pune & Nashik",
          narrative: "42 Sales Officers in triple-signal burnout: 18-day streak of 10+ hr logins + missed targets 3 months running + leave balance untouched 90 days. Intervention cost ₹2.2L vs inaction cost ₹1.9 Cr (₹45,238 per SO replacement — recruitment + training + ramp).",
          table: {
            cols: ["Factor", "Detail"],
            rows: [
              ["Cluster split", "Pune 28 · Nashik 14"],
              ["Avg tenure", "14 months"],
              ["Avg target achievement", "67%"],
              ["Incentive slab reset", "Perceived unfair by 71%"],
              ["Manager 1:1 cadence", "Once in 47 days (vs 14-day benchmark)"],
            ],
          },
          bullets: [
            "Week 1: Manager 1:1 for all 42 SOs.",
            "Week 2: Redistribute 3 geographies per SO.",
            "Week 3: 5-day reset leave for top 12 highest-risk.",
            "Week 4: Incentive slab review escalation to central HR.",
          ],
          actions: ["Approve compulsory leave", "Open retention sprint"],
        },
      },
      {
        label: "Attrition Tracker", icon: "📈",
        detail: {
          headline: "Field Attrition · 12-Month Trend",
          narrative: "Improving YoY (17.1% → 14.9% · -2.2pp). Feb–May uptick coincides with competitor hiring sprint from Axis Finance, HDB Financial, L&T Finance.",
          table: {
            cols: ["Reason", "Share"],
            rows: [["Incentive structure", "34%"], ["Manager relationship", "28%"], ["Career stagnation", "22%"], ["Better offer", "16%"]],
          },
          bullets: ["12-month range: low 13.8% (Jan'26) · high 17.1% (Jul'25).", "Early warning: competitor pull-factor at SO and RM levels."],
        },
      },
      {
        label: "Performance Quintiles", icon: "🏆",
        detail: {
          headline: "Field Force · Performance Distribution",
          narrative: "Top quintile drives disproportionate outcomes (118% achievement, 8.2% attrition). Bottom two quintiles need urgent intervention or managed exit.",
          table: {
            cols: ["Quintile", "Count", "Target %", "Attrition", "Action"],
            rows: [
              ["Q1 Top 20%", "6,428", "118%", "8.2%", "Accelerate to RM pipeline"],
              ["Q2", "6,428", "96%", "11.4%", "Coach to Q1"],
              ["Q3 Middle", "6,428", "82%", "15.8%", "Manager attention + training"],
              ["Q4", "6,428", "64%", "22.4%", "PIP or managed transition"],
              ["Q5 Bottom 20%", "6,428", "41%", "34.1%", "Urgent intervention / exit"],
            ],
          },
        },
      },
      {
        label: "Ramp Tracker", icon: "⏱️",
        detail: {
          headline: "New Joiner Ramp Intelligence",
          narrative: "1,847 DSTs in current cohort (joined last 90 days). Current ramp 68 days vs benchmark 57. Top blocker: managers skipping Day-7 check-in.",
          table: {
            cols: ["Milestone", "Status"],
            rows: [
              ["Day 1–7: System access + buddy", "94% complete ✅"],
              ["Day 8–21: Product certification", "78% complete 🟡"],
              ["Day 22–45: First 5 disbursals", "61% on track 🟡"],
              ["Day 46–68: Ramp to productivity", "43% tracking 🔴"],
            ],
          },
          bullets: [
            "Top blocker: Manager not doing Day-7 check-in (38% skipped).",
            "Branch system access delay avg 2.3 days.",
            "IRDA cert pending — blocks full product sell.",
          ],
        },
      },
      { label: "Target vs Actuals", icon: "🎯", detail: { headline: "Zone at 104% of disbursement · 96% of NPS target", table: { cols: ["Metric", "Target", "Actual"], rows: [["Disbursement", "₹14,200 Cr", "₹14,820 Cr"], ["NPS", "62", "59"], ["Cost / loan", "₹1,840", "₹1,920"]] } } },
    ],
  },
  {
    heading: "Hiring & Pipeline",
    items: [
      { label: "Open Roles", icon: "📋", detail: { headline: "2,925 open roles · 64% in rural B2C", table: { cols: ["Role", "Open", "Time-to-fill"], rows: [["Sales Officer", "1,840", "21 days"], ["Relationship Manager", "640", "38 days"], ["Branch Manager", "92", "62 days"], ["Collections", "353", "18 days"]] } } },
      { label: "Rural Expansion Pipeline", icon: "🌾", detail: { headline: "Vidarbha & MP Tier-3 ramp · 1,180 hires planned by Sep", bullets: ["Local sourcing partners: 14 engaged.", "Vernacular onboarding modules live.", "Branch lease pipeline: 38 sites cleared."] } },
      { label: "Campus Partnership Tracker", icon: "🎓", detail: { headline: "62 campus partners · 1,840 offers · 84% joining ratio", bullets: ["Top: Symbiosis, Welingkar, IBS Pune.", "New tie-ups: 8 rural management institutes."] } },
      { label: "New Joinee Monitor", icon: "👋", detail: { headline: "428 joinees in last 30 days · 12 at-risk in week-1", bullets: ["Buddy check-in compliance: 88%.", "Day-7 NPS: 7.6.", "First-90-day attrition: 6.2%."] } },
    ],
  },
  {
    heading: "People Operations",
    items: [
      { label: "Manager NPS", icon: "📊", detail: { headline: "Manager NPS +38 · up 6 pts YoY", bullets: ["Top driver: weekly 1:1 cadence.", "Bottom driver: career-path clarity for SOs."] } },
      { label: "Incentive Accuracy", icon: "💰", detail: { headline: "Incentive accuracy 99.2% · 38 disputes open", bullets: ["Avg dispute resolution: 4.1 days.", "Top dispute: target reset on territory transfer."] } },
      { label: "Recognition Board", icon: "🏅", detail: { headline: "1,240 peer recognitions this month · 86% branches active", bullets: ["Top recognised: Priya Joshi (Pune), Mahesh Patil (Nashik)."] } },
      { label: "Grievance", icon: "🤝", detail: { headline: "18 open grievances · 4 escalated", bullets: ["Avg resolution: 6.2 days vs SLA 7.", "Theme: incentive territory reassignment."] } },
      { label: "Learning Adoption", icon: "📚", detail: { headline: "Learning hours/employee 18.4 · target 24", bullets: ["GenAI module uptake lagging in rural cohort.", "Compliance refresh: 97% complete."] } },
    ],
  },
  {
    heading: "Compliance & Reporting",
    items: [
      {
        label: "PF / ESIC Tracker", icon: "⚖️",
        detail: {
          headline: "Statutory Compliance · West India",
          narrative: "PF enrolment 100% · ESIC half-year return due Jul 15 · 2 contractor labour licences overdue by 18 days.",
          table: {
            cols: ["Area", "Status"],
            rows: [
              ["PF enrolled", "32,140 / 32,140 ✅"],
              ["June ECR filing", "Due Jun 15 · auto-prepared ✅"],
              ["ESIC applicable", "18,240 employees"],
              ["ESIC half-year return", "Due Jul 15 · 94% records clean"],
              ["Contract labour vendors", "12 of 14 licensed ✅"],
              ["Overdue vendor licences", "2 · 18 days late"],
            ],
          },
          actions: ["Escalate to overdue vendors"],
        },
      },
      { label: "Contract Labour Register", icon: "📁", detail: { headline: "4,820 contract workers across 86 vendors", bullets: ["All vendors compliant on PF/ESIC pass-through.", "Audit cycle: monthly."] } },
    ],
  },
];

export const priyaNav: NavGroup[] = [
  {
    heading: "Agency Force",
    items: [
      {
        label: "IRDAI Compliance", icon: "🛡️",
        detail: {
          headline: "IRDAI Compliance Dashboard · Bajaj Life Agency",
          narrative: "1,64,861 licensed agents · 88.7% active and valid. Renewal sprint at 61% completion — gap of 39% (1,638 agents) against deadline. ₹340 Cr APE at risk.",
          table: {
            cols: ["Window", "Agents", "Risk"],
            rows: [
              ["0–30 days lapsing", "840", "🔴"],
              ["31–60 days lapsing", "1,420", "🟡"],
              ["61–90 days lapsing", "1,940", "🟡"],
              ["TOTAL at risk", "4,200", "🔴 ₹340 Cr APE"],
              ["Exam booked", "2,841 (67%)", ""],
              ["Exam completed", "1,124 (27%)", ""],
              ["Certificate issued", "847 (20%)", ""],
            ],
          },
          actions: ["Approve 18 additional training cohorts (West & South)", "Brief audit committee"],
        },
      },
      {
        label: "Licence Renewal Pipeline", icon: "🔄",
        detail: {
          headline: "IC-38 Renewal Pipeline",
          narrative: "East zone is the critical lag — only 12% completion vs South 31%. Recommended: regional manager escalation + dedicated exam centres in Kolkata & Patna.",
          table: {
            cols: ["Zone", "% Completed", "Note"],
            rows: [
              ["South", "31%", "🟢 fastest"],
              ["West", "24%", "🟡"],
              ["North", "18%", "🟡"],
              ["East", "12%", "🔴 critical lag · 504 of 1,260 booked"],
            ],
          },
          actions: ["Escalate East zone", "Open exam centres in Kolkata + Patna"],
        },
      },
      {
        label: "Agent Productivity (APE)", icon: "📊",
        detail: {
          headline: "Agent Productivity Intelligence",
          narrative: "Avg APE per active agent ₹2.1L YTD · target ₹2.4L · gap ₹494 Cr total. Concentration risk — top 5% drive 38% of APE. Loyalty programme and succession for top cohort critical pre-listing milestone.",
          table: {
            cols: ["Cohort", "Agents", "Avg APE", "Share of total"],
            rows: [
              ["Top 5%", "8,243", "₹12.4L", "38%"],
              ["Next 15%", "24,729", "₹4.2L", "29%"],
              ["Middle 40%", "65,944", "₹1.8L", "26%"],
              ["Bottom 40%", "65,945", "₹0.4L", "7%"],
            ],
          },
          actions: ["Launch top-5% loyalty programme", "Trigger retention protocol on 6 flagged top agents"],
        },
      },
      { label: "Channel Performance Map", icon: "🌍", detail: { headline: "Top 5 states drive 64% of APE", table: { cols: ["State", "Agents", "APE share"], rows: [["Maharashtra", "32,400", "21%"], ["Tamil Nadu", "21,800", "14%"], ["Karnataka", "18,200", "12%"], ["Gujarat", "16,400", "10%"], ["UP", "14,200", "7%"]] } } },
      {
        label: "Agent Attrition & Churn", icon: "📈", badge: "Tier",
        detail: {
          headline: "Agency Channel Attrition",
          narrative: "31.2% annualised · 2nd-best in peer set (LIC 38% · HDFC Life 29% · SBI Life 32%). New-agent washout in first 6 months is biggest lever — agents completing full onboarding curriculum have 41% lower washout.",
          table: {
            cols: ["Tenure", "Churn"],
            rows: [["0–6 months", "58% 🔴"], ["6–18 months", "22%"], ["18–36 months", "14%"], ["36+ months", "6%"]],
          },
          bullets: ["6 top-5% agents flagged for exit in last 30 days — retention protocol triggered."],
        },
      },
      { label: "IC-38 Certification Pipeline", icon: "🎓", detail: { headline: "11,200 agents in IC-38 pipeline · 68% on track", bullets: ["Avg time-to-certify: 38 days.", "Drop-off concentrated at pre-exam mock stage."] } },
    ],
  },
  {
    heading: "Direct Workforce",
    items: [
      {
        label: "Succession Tracker", icon: "👥",
        detail: {
          headline: "BALIC Succession · Business-Critical Roles",
          narrative: "Chief Agency vacant (search underway, expected fill 90 days) and Chief Bancassurance with no ready successor are the two continuity-blocking gaps. group governance requires KMP stability disclosure.",
          table: {
            cols: ["Role", "Current", "Successors", "Continuity Risk"],
            rows: [
              ["CEO", "Tarun Chugh · 4.2 yrs", "2 ready", "🟢"],
              ["Chief Agency Officer", "Vacant · search on", "0", "🔴 CRITICAL"],
              ["Chief Bancassurance", "Rohini Sharma · 1.1 yrs", "0", "🔴 CRITICAL"],
              ["Chief Actuary", "Suresh Nair · 2.8 yrs", "1 (partial)", "🟡"],
              ["CFO", "Arun Joshi · 3.4 yrs", "2 ready", "🟢"],
              ["Chief Risk Officer", "Meena Pillai · 2.1 yrs", "1 ready", "🟡"],
            ],
          },
          actions: ["Open succession board", "Brief Nomination Committee"],
        },
      },
      { label: "Leadership Pipeline", icon: "📈", badge: "HiPo", detail: { headline: "94 HiPos · 38% promotion-ready in 12 months", bullets: ["leadership-readiness module embedded in HiPo cohort.", "Diversity: 36% women."] } },
      {
        label: "Leadership Continuity", icon: "🎯",
        detail: {
          headline: "Leadership Bench Strength · People Lens",
          narrative: "Target window FY28. Governance layer 71% ready. If Chief Agency not hired by Oct 2026, group governance requirements may slip to Q3 FY27.",
          table: {
            cols: ["Check", "Status"],
            rows: [
              ["CEO contract renewed (3 yrs)", "✅"],
              ["Board composition · independent director ratio", "✅"],
              ["ESOP pool · 240 senior leaders granted", "✅"],
              ["Related party transaction policy", "🟡 pending HR sign-off"],
              ["Whistleblower policy upgrade", "🟡 draft ready"],
              ["Chief Agency Officer", "🔴 vacant"],
              ["ESOP comp benchmarking", "🔴 6% gap vs peer median"],
            ],
          },
          actions: ["Sign RPT policy", "Approve ESOP top-up", "Track Chief Agency search"],
        },
      },
      {
        label: "Post-Allianz Integration", icon: "🔁",
        detail: {
          headline: "Post-Allianz Integration · Bajaj Life View",
          narrative: "5 months post-exit. Brand renamed, portfolio rationalised, 6/8 leadership retained. Trust 6.8/10 ↑0.4 MoM. Finance function gap (6.1) requires deep-dive.",
          table: {
            cols: ["Function", "Trust", "Trend"],
            rows: [["Tech", "7.8", "↑0.4"], ["Agency", "7.1", "↑0.6"], ["HR", "7.2", "↑0.3"], ["Bancassurance", "6.4", "↑0.2"], ["Finance", "6.1", "↓0.1"]],
          },
          actions: ["Deep-dive Finance pulse", "Schedule town hall"],
        },
      },
      { label: "Direct Staff Attrition", icon: "📉", detail: { headline: "Direct staff attrition 14.6% · best in 3 years", bullets: ["Top 25 talent retention 96%.", "Regretted attrition 4.1%."] } },
      { label: "Comp vs Market", icon: "💸", detail: { headline: "Bajaj Life direct staff at 58th percentile · actuarial at 41st", bullets: ["Actuarial gap drives 60% of regretted exits.", "Banding refresh approved for Q2."] } },
    ],
  },
  {
    heading: "Training & Skills",
    items: [
      { label: "Bancassurance Training", icon: "🏫", detail: { headline: "Bancassurance training · 8,400 partner-bank staff certified", bullets: ["Partner banks: 14 active.", "Avg productivity uplift post-training: 22%."] } },
      { label: "Digital Insurance Skills", icon: "📚", detail: { headline: "Digital insurance skills coverage 62% · target 80%", bullets: ["LMS modules: 38 live.", "Top gap: claims automation tooling."] } },
      { label: "Cross-Sell Skill Tracker", icon: "🤝", detail: { headline: "Cross-sell readiness 54% · health + life pilot live", bullets: ["Joint training with Bajaj Finserv Health.", "Pilot APE uplift: 14%."] } },
      { label: "Actuary Pipeline", icon: "🧠", detail: { headline: "Actuary pipeline · 41 active · 0 ready-now for Appointed Actuary", bullets: ["IFoA / IAI exam support active.", "External hires: 4 senior actuaries shortlisted."] } },
      { label: "Leadership Dev Programme", icon: "🎓", detail: { headline: "Insurance Leaders Programme · cohort 6 of 38 leaders", bullets: ["Partner: ISB.", "Completion rate: 96%.", "Post-programme promotions: 41%."] } },
    ],
  },
  {
    heading: "Compliance & Governance",
    items: [
      { label: "Regulatory Calendar", icon: "⚖️", detail: { headline: "28 regulatory items next 90 days · 6 critical", table: { cols: ["Item", "Due"], rows: [["IRDAI quarterly return", "30 Jun"], ["POSH annual report", "30 Jun"], ["Solvency margin filing", "15 Jul"], ["AML training cycle", "Rolling"]] } } },
      { label: "Governance Strengthening", icon: "🏛️", detail: { headline: "Governance strengthening programme · 71% complete", bullets: ["Board composition refresh: 80% done.", "Related-party transaction framework: live.", "Whistleblower mechanism: refreshed."] } },
      { label: "POSH Tracker", icon: "🛡️", detail: { headline: "POSH · 12 cases YTD · 100% closed within timeline", bullets: ["IC coverage: 100% of locations.", "Awareness: 97% direct staff certified."] } },
      { label: "SEBI Disclosure Tracker", icon: "🔐", detail: { headline: "SEBI disclosures · 0 delays YTD · governance mock filings on track", bullets: ["group governance people section drafted v0.7.", "Insider trading window controls live."] } },
      { label: "DEI Index — Bajaj Life", icon: "📋", detail: { headline: "DEI composite 0.81 · highest in group", table: { cols: ["Dimension", "Score"], rows: [["Women in workforce", "38%"], ["Women in leadership", "27%"], ["PwD inclusion", "2.1%"]] } } },
    ],
  },
  {
    heading: "Reporting & AI",
    items: [
      { label: "MIS & HR Analytics", icon: "📊", detail: { headline: "42 live dashboards · self-serve for 240 managers", bullets: ["Real-time agent productivity feed.", "Attrition early-warning model accuracy: 86%."] } },
      { label: "Board HR Pack", icon: "📋", detail: { headline: "Q1 board HR pack · 88% drafted", bullets: ["Leadership bench strength section complete.", "Allianz integration section under finalisation."] } },
    ],
  },
];
