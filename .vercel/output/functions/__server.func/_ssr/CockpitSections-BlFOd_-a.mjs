import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { b as bajajLogo, D as DemoBadges, I as IllustrativeBanner, c as cn } from "./DemoBadges-Cdf7PGj2.mjs";
import { R as Root, P as Portal, C as Content, a as Close, T as Title, D as Description, O as Overlay } from "../_libs/radix-ui__react-dialog.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { b as Bell, c as Settings, S as Sparkles, d as Activity, C as CircleCheck, T as TriangleAlert, e as CircleAlert, M as MessageSquare, f as Bot, g as UserRound, h as Send, X } from "../_libs/lucide-react.mjs";
const anupamNav = [
  {
    heading: "Group Overview",
    items: [
      {
        label: "Control Tower",
        icon: "🏛️",
        detail: {
          headline: "Group control tower · live signals across 7 entities",
          narrative: "Real-time aggregation of headcount, attrition, hiring velocity, compliance and culture across Bajaj Finance, Bajaj Life, BAGIC, AMC, Alts, Health and Markets. Refreshed every 4 minutes from Workday, Darwinbox and agent telemetry.",
          table: {
            cols: ["Signal", "Status", "Owner"],
            rows: [
              ["Group attrition", "16.4% · healthy", "CHRO"],
              ["Leadership bench", "62% · warning", "CHRO + ExCo"],
              ["IRDAI licence lapse", "4,200 in 90d", "Priya"],
              ["Allianz integration", "Trust 6.8 · improving", "Priya + Sanjiv"]
            ]
          },
          bullets: [
            "Hiring velocity holding at 21-day TTF for Sales Officer, 38-day for RM.",
            "Compliance posture 98.4% across 412 establishments.",
            "Agentic interventions saved 1,840 FTE-equivalent hours last 30 days."
          ],
          actions: ["Export board snapshot", "Open governance log"]
        }
      },
      {
        label: "Entity Breakdown",
        icon: "📊",
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
              ["GROUP TOTAL", "1,04,708", "16.4%", "4,725", "🟡 Overall"]
            ]
          },
          bullets: [
            "AMC & Alts combined attrition (21.2%) is 5pp above group average. Niche skills scarcity is driving exits to Mirae, Nippon and WhiteOak.",
            "BFL remains group anchor — 53% of headcount, lowest attrition, highest hiring velocity.",
            "Bajaj Life Leadership bench strength people-score moved +9pp this quarter despite watch-zone label."
          ],
          actions: ["Drill by function", "Compare to FY25", "Brief ExCo on AMC retention"]
        }
      },
      {
        label: "Workforce Geography",
        icon: "🌍",
        detail: {
          headline: "Workforce Distribution · Pan India",
          narrative: "1,04,708 employees across 3,200 locations. West remains HQ-heavy; East rural-B2C ramp is 11 days behind onboarding benchmark and is the biggest geographic risk in FY26.",
          table: {
            cols: ["Region", "Headcount", "Key hubs", "Risk"],
            rows: [
              ["West (HQ)", "38,420", "Pune · Mumbai · Ahmedabad", "🟢 Stable"],
              ["North", "24,180", "Delhi NCR · Lucknow · Jaipur", "🟡 SO attrition watch"],
              ["South", "22,340", "Bengaluru · Chennai · Hyderabad", "🟢 Stable"],
              ["East", "19,768", "Kolkata · Bhubaneswar · Patna", "🟡 Rural ramp behind"]
            ]
          },
          bullets: [
            "Rural B2C expansion in East is 11 days behind benchmark. 340 SOs need cross-skilling into agri-finance before Kharif season.",
            "International footprint: 84 employees across Singapore, Dubai and London IRs.",
            "Top 5 cities account for 41% of total workforce."
          ],
          actions: ["Open East ramp plan", "Approve cross-skill cohorts"]
        }
      },
      {
        label: "Cost Intelligence",
        icon: "💰",
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
              ["Recruitment", "5%", "₹242 Cr"]
            ]
          },
          bullets: [
            "If group attrition reduces by 2pp (16.4% → 14.4%), estimated saving ₹67 Cr in replacement and ramp costs.",
            "BFL field force and BALIC agency channel are the highest-leverage points for cost optimisation.",
            "Learning ROI tracking at 3.2× spend — best-in-BFSI peer set."
          ],
          actions: ["Open cost optimisation pack", "Approve targeted retention spend"]
        }
      },
      {
        label: "Today's Actions",
        icon: "📅",
        badge: "5",
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
              ["🟢 Info", "Complete Board People Review pack", "Group", "Friday"]
            ]
          },
          actions: ["Brief Priya now", "Open succession board", "Approve AMC uplift", "Complete board pack"]
        }
      }
    ]
  },
  {
    heading: "Talent Strategy",
    items: [
      {
        label: "Succession Tracker",
        icon: "🎯",
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
              ["Chief Digital", "Group", "External hire · 0.4 yrs", "0", "🟡 Watch"]
            ]
          },
          bullets: [
            "Group governance will require disclosure of KMP stability. Chief Agency vacancy is the single biggest leadership-continuity timeline risk.",
            "External search engaged with Egon Zehnder on 6 roles, Spencer Stuart on 3 actuarial roles.",
            "Diversity slate adherence: 100% on all open searches."
          ],
          actions: ["Open succession board", "Commission external search", "Brief Nomination Committee"]
        }
      },
      {
        label: "Leadership Pipeline",
        icon: "📈",
        badge: "HiPo",
        detail: {
          headline: "HiPo Pipeline · Group",
          narrative: "284 HiPos identified across 3 readiness tiers. BALIC carries the highest HiPo concentration (38%) and also the highest HiPo flight-risk — 6 external offers in last 90 days.",
          table: {
            cols: ["Tier", "Count", "Status"],
            rows: [
              ["Ready Now (CXO-1)", "14", "9 active in rotational assignments"],
              ["Ready 12–18 months", "31", "22 enrolled in Leadership Excellence Programme"],
              ["Ready 2–3 years", "68", "Identified via manager + performance cohort analysis"]
            ]
          },
          bullets: [
            "Top 3 ready-now: Deepa Kulkarni (BFL), Rahul Saxena (BALIC), Meera Iyer (BAGIC).",
            "BALIC cohort 3 weeks delayed due to post-Allianz restructuring — restart approved.",
            "Diversity in HiPo pool: 32% women, target 40% by FY27."
          ],
          actions: ["Restart BALIC cohort", "Approve retention bonuses for top 6 BALIC HiPos"]
        }
      },
      {
        label: "Cross-Entity Mobility",
        icon: "🔄",
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
              ["AMC ← External", "67% of fills", "Internal mobility failing"]
            ]
          },
          bullets: [
            "Top blocker: manager reluctance to release talent (58% of cases).",
            "Comp band mismatch between entities blocks 31% of moves.",
            "Agent recommendation: launch cross-entity talent marketplace · 1.9pp mobility gain = 1,980 saved external hires = ~₹42 Cr saving."
          ],
          actions: ["Launch internal marketplace v2", "Standardise cross-entity bands"]
        }
      },
      {
        label: "Group Skills Index",
        icon: "🚀",
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
              ["Consumer Lending (EMI/PL/HL)", "12,000", "11,240", "🟢 6%"]
            ]
          },
          bullets: [
            "Digital underwriting gap blocks BALIC + BAGIC straight-through processing roadmap.",
            "Quant gap is Business-critical for AMC product launch FY27.",
            "Agri-finance gap timed against Kharif season — closeable in 60 days with rural cohort training."
          ],
          actions: ["Approve external hiring for quant", "Launch agri-finance bootcamp"]
        }
      },
      {
        label: "Comp Benchmarking",
        icon: "💸",
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
              ["RM (BFL)", "₹8.4L", "₹8.1L", "+4%", "🟢"]
            ]
          },
          actions: ["Approve off-cycle correction · AMC", "Approve off-cycle correction · Actuary"]
        }
      }
    ]
  },
  {
    heading: "Compliance & DEI",
    items: [
      {
        label: "Statutory Calendar",
        icon: "⚖️",
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
              ["🟢 Sep 30", "Annual POSH report", "All entities", "Template ready"]
            ]
          },
          actions: ["Resolve BFL East PF filing", "Escalate KYC overdue cohort"]
        }
      },
      {
        label: "DEI Index",
        icon: "👥",
        detail: {
          headline: "DEI Dashboard · Group",
          narrative: "Group women representation 34% overall, 18% in CXO+CXO-1. BFL and AMC are furthest from FY27 40% target — both field-heavy.",
          table: {
            cols: ["Entity", "Women %"],
            rows: [["Health", "48%"], ["BALIC", "41%"], ["BAGIC", "36%"], ["Markets", "31%"], ["BFL", "29%"], ["AMC", "28%"]]
          },
          bullets: [
            "PwD representation 0.8% · target 2% by FY28.",
            "LGBTQ+ inclusive policies live in 5 of 7 entities.",
            "Recommended: women-in-field hiring initiative in FY27 plan."
          ],
          actions: ["Approve women-in-field initiative"]
        }
      },
      {
        label: "SEBI / IRDAI Flags",
        icon: "🔐",
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
              ["🟢", "IRDAI", "Mis-selling complaints down 12% MoM · BAGIC", "Sunita team"]
            ]
          }
        }
      },
      {
        label: "POSH Tracker",
        icon: "🛡️",
        detail: { headline: "POSH · 47 cases YTD · 100% closed within timeline", bullets: ["Repeat offenders: 0.", "ICs functional across all 7 entities.", "Awareness coverage: 96% workforce."] }
      },
      {
        label: "Labour Law Register",
        icon: "📋",
        detail: { headline: "Labour compliance score 98.4% across 412 establishments", bullets: ["Contract labour: 18,400 — registers up to date.", "Minimum wage variations: 0 flagged.", "S&E registrations: 96% auto-renewed."] }
      }
    ]
  },
  {
    heading: "Transformation",
    items: [
      {
        label: "Transform Index",
        icon: "🚀",
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
              ["HR Ops Automation", "54/100", "🔴 drag"]
            ]
          },
          actions: ["Scale BFL West pilot to all entities"]
        }
      },
      {
        label: "Learning Academy",
        icon: "🎓",
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
              ["AMC/Alts Capability Framework", "🔴 0%", "Not started · 67 niche roles"]
            ]
          },
          actions: ["Commission AMC capability framework", "Restart BALIC leadership cohort"]
        }
      },
      {
        label: "Post-Allianz Integration",
        icon: "🔗",
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
              ["Finance", "6.1", "↓0.1 DECLINING"]
            ]
          },
          bullets: [
            "Brand transition (Bajaj Allianz → Bajaj Life/General): ✅ complete.",
            "Leadership alignment in progress.",
            "Recommended: Finance function pulse deep-dive and town hall within 30 days."
          ],
          actions: ["Schedule Finance town-hall", "Commission integration audit"]
        }
      }
    ]
  },
  {
    heading: "Reporting",
    items: [
      {
        label: "Board People Review",
        icon: "📋",
        badge: "81% ready",
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
              ["Compensation benchmarking insert", "🔴 not started"]
            ]
          },
          actions: ["Generate missing sections with AI", "Download current draft", "Send for review"]
        }
      },
      {
        label: "MIS & Analytics Hub",
        icon: "📊",
        detail: { headline: "238 live HR dashboards · 18 entity-level cuts", bullets: ["Workday + Darwinbox unified data layer live.", "Self-serve queries: 2,400/week from line managers.", "Predictive attrition model accuracy: 86%."] }
      }
    ]
  }
];
const rohitNav = [
  {
    heading: "Zone Overview",
    items: [
      {
        label: "Territory Dashboard",
        icon: "📍",
        detail: {
          headline: "West India Field Force · Territory View",
          narrative: "32,140 employees across MH, Goa and MP. Maharashtra is the engine; Nashik burnout cluster and MP rural ramp are the active risks.",
          table: {
            cols: ["State", "Headcount", "Branches", "Open Roles", "Attrition"],
            rows: [
              ["Maharashtra", "19,840", "247", "1,820", "13.8% 🟢"],
              ["Madhya Pradesh", "11,060", "147", "1,021", "17.1% 🟡"],
              ["Goa", "1,240", "18", "84", "11.2% 🟢"]
            ]
          },
          bullets: [
            "Pune zone hitting 92% target · Mumbai 96%.",
            "Watch: Nashik burnout cluster (42 SOs flagged).",
            "MP rural B2C ramp 11 days behind plan · Vidarbha expansion on track."
          ]
        }
      },
      {
        label: "District View (MH/Goa/MP)",
        icon: "🗺️",
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
              ["Jabalpur", "1,340", "18.9%", "79%", "🔴"]
            ]
          },
          actions: ["Coach managers · critical triangle", "Deploy HRBP to Nashik & Aurangabad"]
        }
      },
      {
        label: "Branch Performance",
        icon: "🏢",
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
              ["Bhopal North", "Anil S.", "84%", "17.4%", "+31 🟡"]
            ]
          },
          actions: ["Schedule manager coaching", "Send branch HRBP"]
        }
      },
      {
        label: "Today's Actions",
        icon: "📅",
        badge: "4",
        detail: {
          headline: "Rohit's Action List · Today",
          narrative: "4 items routed this morning — 2 critical (burnout + KYC training), 2 warnings (DST→RM + Pune town-hall).",
          table: {
            cols: ["Priority", "Action", "Context"],
            rows: [
              ["🔴", "Approve burnout intervention · 42 SOs", "Pune & Nashik · ₹2.2L vs ₹1.9 Cr inaction (recruitment + training + ramp)"],
              ["🔴", "Escalate KYC training overdue · 612 SOs", "RBI compliance risk"],
              ["🟡", "Review DST→RM progression · 184 candidates", "Pune · blocked by interview SLA"],
              ["🟡", "Schedule Pune cluster town hall", "Incentive fairness perception"]
            ]
          },
          actions: ["Approve burnout sprint", "Escalate KYC", "Unblock RM pipeline", "Schedule town hall"]
        }
      },
      {
        label: "Cost of Attrition",
        icon: "💰",
        detail: {
          headline: "Attrition Cost Intelligence · West India FY26",
          narrative: "At current 14.9% attrition, replacement cost ~₹21.4 Cr/year. Reducing to BFSI best-practice 12% would save ₹5.2 Cr/year. Manager-NPS fix in bottom 3 districts alone = ₹3.1 Cr annual saving.",
          table: {
            cols: ["Cluster", "Attrition", "Exits", "Annual cost"],
            rows: [
              ["Nashik", "22.1%", "371", "₹1.4 Cr"],
              ["Jabalpur", "23.2%", "311", "₹1.2 Cr"],
              ["Aurangabad", "21.4%", "304", "₹1.0 Cr"],
              ["Zone total", "14.9%", "4,789", "₹21.4 Cr"]
            ]
          },
          bullets: [
            "Cost per DST replacement: ₹38,000 (recruitment + training + 68-day ramp).",
            "Cost per SO/RM replacement: ₹62,000."
          ],
          actions: ["Approve manager coaching budget"]
        }
      }
    ]
  },
  {
    heading: "Field Force Intelligence",
    items: [
      {
        label: "Flight Risk List",
        icon: "⚠️",
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
              ["Dinesh Kale", "Aurangabad", "82", "Relocation fatigue · 3rd posting"]
            ]
          },
          bullets: ["+37 additional flight-risk employees beyond the top 5 shown."],
          actions: ["Trigger nudge campaign", "Brief managers", "Prep retention offers for top 5"]
        }
      },
      {
        label: "Burnout Monitor",
        icon: "🔥",
        badge: "Triple",
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
              ["Manager 1:1 cadence", "Once in 47 days (vs 14-day benchmark)"]
            ]
          },
          bullets: [
            "Week 1: Manager 1:1 for all 42 SOs.",
            "Week 2: Redistribute 3 geographies per SO.",
            "Week 3: 5-day reset leave for top 12 highest-risk.",
            "Week 4: Incentive slab review escalation to central HR."
          ],
          actions: ["Approve compulsory leave", "Open retention sprint"]
        }
      },
      {
        label: "Attrition Tracker",
        icon: "📈",
        detail: {
          headline: "Field Attrition · 12-Month Trend",
          narrative: "Improving YoY (17.1% → 14.9% · -2.2pp). Feb–May uptick coincides with competitor hiring sprint from Axis Finance, HDB Financial, L&T Finance.",
          table: {
            cols: ["Reason", "Share"],
            rows: [["Incentive structure", "34%"], ["Manager relationship", "28%"], ["Career stagnation", "22%"], ["Better offer", "16%"]]
          },
          bullets: ["12-month range: low 13.8% (Jan'26) · high 17.1% (Jul'25).", "Early warning: competitor pull-factor at SO and RM levels."]
        }
      },
      {
        label: "Performance Quintiles",
        icon: "🏆",
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
              ["Q5 Bottom 20%", "6,428", "41%", "34.1%", "Urgent intervention / exit"]
            ]
          }
        }
      },
      {
        label: "Ramp Tracker",
        icon: "⏱️",
        detail: {
          headline: "New Joiner Ramp Intelligence",
          narrative: "1,847 DSTs in current cohort (joined last 90 days). Current ramp 68 days vs benchmark 57. Top blocker: managers skipping Day-7 check-in.",
          table: {
            cols: ["Milestone", "Status"],
            rows: [
              ["Day 1–7: System access + buddy", "94% complete ✅"],
              ["Day 8–21: Product certification", "78% complete 🟡"],
              ["Day 22–45: First 5 disbursals", "61% on track 🟡"],
              ["Day 46–68: Ramp to productivity", "43% tracking 🔴"]
            ]
          },
          bullets: [
            "Top blocker: Manager not doing Day-7 check-in (38% skipped).",
            "Branch system access delay avg 2.3 days.",
            "IRDA cert pending — blocks full product sell."
          ]
        }
      },
      { label: "Target vs Actuals", icon: "🎯", detail: { headline: "Zone at 104% of disbursement · 96% of NPS target", table: { cols: ["Metric", "Target", "Actual"], rows: [["Disbursement", "₹14,200 Cr", "₹14,820 Cr"], ["NPS", "62", "59"], ["Cost / loan", "₹1,840", "₹1,920"]] } } }
    ]
  },
  {
    heading: "Hiring & Pipeline",
    items: [
      { label: "Open Roles", icon: "📋", detail: { headline: "2,925 open roles · 64% in rural B2C", table: { cols: ["Role", "Open", "Time-to-fill"], rows: [["Sales Officer", "1,840", "21 days"], ["Relationship Manager", "640", "38 days"], ["Branch Manager", "92", "62 days"], ["Collections", "353", "18 days"]] } } },
      { label: "Rural Expansion Pipeline", icon: "🌾", detail: { headline: "Vidarbha & MP Tier-3 ramp · 1,180 hires planned by Sep", bullets: ["Local sourcing partners: 14 engaged.", "Vernacular onboarding modules live.", "Branch lease pipeline: 38 sites cleared."] } },
      { label: "Campus Partnership Tracker", icon: "🎓", detail: { headline: "62 campus partners · 1,840 offers · 84% joining ratio", bullets: ["Top: Symbiosis, Welingkar, IBS Pune.", "New tie-ups: 8 rural management institutes."] } },
      { label: "New Joinee Monitor", icon: "👋", detail: { headline: "428 joinees in last 30 days · 12 at-risk in week-1", bullets: ["Buddy check-in compliance: 88%.", "Day-7 NPS: 7.6.", "First-90-day attrition: 6.2%."] } }
    ]
  },
  {
    heading: "People Operations",
    items: [
      { label: "Manager NPS", icon: "📊", detail: { headline: "Manager NPS +38 · up 6 pts YoY", bullets: ["Top driver: weekly 1:1 cadence.", "Bottom driver: career-path clarity for SOs."] } },
      { label: "Incentive Accuracy", icon: "💰", detail: { headline: "Incentive accuracy 99.2% · 38 disputes open", bullets: ["Avg dispute resolution: 4.1 days.", "Top dispute: target reset on territory transfer."] } },
      { label: "Recognition Board", icon: "🏅", detail: { headline: "1,240 peer recognitions this month · 86% branches active", bullets: ["Top recognised: Priya Joshi (Pune), Mahesh Patil (Nashik)."] } },
      { label: "Grievance", icon: "🤝", detail: { headline: "18 open grievances · 4 escalated", bullets: ["Avg resolution: 6.2 days vs SLA 7.", "Theme: incentive territory reassignment."] } },
      { label: "Learning Adoption", icon: "📚", detail: { headline: "Learning hours/employee 18.4 · target 24", bullets: ["GenAI module uptake lagging in rural cohort.", "Compliance refresh: 97% complete."] } }
    ]
  },
  {
    heading: "Compliance & Reporting",
    items: [
      {
        label: "PF / ESIC Tracker",
        icon: "⚖️",
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
              ["Overdue vendor licences", "2 · 18 days late"]
            ]
          },
          actions: ["Escalate to overdue vendors"]
        }
      },
      { label: "Contract Labour Register", icon: "📁", detail: { headline: "4,820 contract workers across 86 vendors", bullets: ["All vendors compliant on PF/ESIC pass-through.", "Audit cycle: monthly."] } }
    ]
  }
];
const priyaNav = [
  {
    heading: "Agency Force",
    items: [
      {
        label: "IRDAI Compliance",
        icon: "🛡️",
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
              ["Certificate issued", "847 (20%)", ""]
            ]
          },
          actions: ["Approve 18 additional training cohorts (West & South)", "Brief audit committee"]
        }
      },
      {
        label: "Licence Renewal Pipeline",
        icon: "🔄",
        detail: {
          headline: "IC-38 Renewal Pipeline",
          narrative: "East zone is the critical lag — only 12% completion vs South 31%. Recommended: regional manager escalation + dedicated exam centres in Kolkata & Patna.",
          table: {
            cols: ["Zone", "% Completed", "Note"],
            rows: [
              ["South", "31%", "🟢 fastest"],
              ["West", "24%", "🟡"],
              ["North", "18%", "🟡"],
              ["East", "12%", "🔴 critical lag · 504 of 1,260 booked"]
            ]
          },
          actions: ["Escalate East zone", "Open exam centres in Kolkata + Patna"]
        }
      },
      {
        label: "Agent Productivity (APE)",
        icon: "📊",
        detail: {
          headline: "Agent Productivity Intelligence",
          narrative: "Avg APE per active agent ₹2.1L YTD · target ₹2.4L · gap ₹494 Cr total. Concentration risk — top 5% drive 38% of APE. Loyalty programme and succession for top cohort critical pre-listing milestone.",
          table: {
            cols: ["Cohort", "Agents", "Avg APE", "Share of total"],
            rows: [
              ["Top 5%", "8,243", "₹12.4L", "38%"],
              ["Next 15%", "24,729", "₹4.2L", "29%"],
              ["Middle 40%", "65,944", "₹1.8L", "26%"],
              ["Bottom 40%", "65,945", "₹0.4L", "7%"]
            ]
          },
          actions: ["Launch top-5% loyalty programme", "Trigger retention protocol on 6 flagged top agents"]
        }
      },
      { label: "Channel Performance Map", icon: "🌍", detail: { headline: "Top 5 states drive 64% of APE", table: { cols: ["State", "Agents", "APE share"], rows: [["Maharashtra", "32,400", "21%"], ["Tamil Nadu", "21,800", "14%"], ["Karnataka", "18,200", "12%"], ["Gujarat", "16,400", "10%"], ["UP", "14,200", "7%"]] } } },
      {
        label: "Agent Attrition & Churn",
        icon: "📈",
        badge: "Tier",
        detail: {
          headline: "Agency Channel Attrition",
          narrative: "31.2% annualised · 2nd-best in peer set (LIC 38% · HDFC Life 29% · SBI Life 32%). New-agent washout in first 6 months is biggest lever — agents completing full onboarding curriculum have 41% lower washout.",
          table: {
            cols: ["Tenure", "Churn"],
            rows: [["0–6 months", "58% 🔴"], ["6–18 months", "22%"], ["18–36 months", "14%"], ["36+ months", "6%"]]
          },
          bullets: ["6 top-5% agents flagged for exit in last 30 days — retention protocol triggered."]
        }
      },
      { label: "IC-38 Certification Pipeline", icon: "🎓", detail: { headline: "11,200 agents in IC-38 pipeline · 68% on track", bullets: ["Avg time-to-certify: 38 days.", "Drop-off concentrated at pre-exam mock stage."] } }
    ]
  },
  {
    heading: "Direct Workforce",
    items: [
      {
        label: "Succession Tracker",
        icon: "👥",
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
              ["Chief Risk Officer", "Meena Pillai · 2.1 yrs", "1 ready", "🟡"]
            ]
          },
          actions: ["Open succession board", "Brief Nomination Committee"]
        }
      },
      { label: "Leadership Pipeline", icon: "📈", badge: "HiPo", detail: { headline: "94 HiPos · 38% promotion-ready in 12 months", bullets: ["leadership-readiness module embedded in HiPo cohort.", "Diversity: 36% women."] } },
      {
        label: "Leadership Continuity",
        icon: "🎯",
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
              ["ESOP comp benchmarking", "🔴 6% gap vs peer median"]
            ]
          },
          actions: ["Sign RPT policy", "Approve ESOP top-up", "Track Chief Agency search"]
        }
      },
      {
        label: "Post-Allianz Integration",
        icon: "🔁",
        detail: {
          headline: "Post-Allianz Integration · Bajaj Life View",
          narrative: "5 months post-exit. Brand renamed, portfolio rationalised, 6/8 leadership retained. Trust 6.8/10 ↑0.4 MoM. Finance function gap (6.1) requires deep-dive.",
          table: {
            cols: ["Function", "Trust", "Trend"],
            rows: [["Tech", "7.8", "↑0.4"], ["Agency", "7.1", "↑0.6"], ["HR", "7.2", "↑0.3"], ["Bancassurance", "6.4", "↑0.2"], ["Finance", "6.1", "↓0.1"]]
          },
          actions: ["Deep-dive Finance pulse", "Schedule town hall"]
        }
      },
      { label: "Direct Staff Attrition", icon: "📉", detail: { headline: "Direct staff attrition 14.6% · best in 3 years", bullets: ["Top 25 talent retention 96%.", "Regretted attrition 4.1%."] } },
      { label: "Comp vs Market", icon: "💸", detail: { headline: "Bajaj Life direct staff at 58th percentile · actuarial at 41st", bullets: ["Actuarial gap drives 60% of regretted exits.", "Banding refresh approved for Q2."] } }
    ]
  },
  {
    heading: "Training & Skills",
    items: [
      { label: "Bancassurance Training", icon: "🏫", detail: { headline: "Bancassurance training · 8,400 partner-bank staff certified", bullets: ["Partner banks: 14 active.", "Avg productivity uplift post-training: 22%."] } },
      { label: "Digital Insurance Skills", icon: "📚", detail: { headline: "Digital insurance skills coverage 62% · target 80%", bullets: ["LMS modules: 38 live.", "Top gap: claims automation tooling."] } },
      { label: "Cross-Sell Skill Tracker", icon: "🤝", detail: { headline: "Cross-sell readiness 54% · health + life pilot live", bullets: ["Joint training with Bajaj Finserv Health.", "Pilot APE uplift: 14%."] } },
      { label: "Actuary Pipeline", icon: "🧠", detail: { headline: "Actuary pipeline · 41 active · 0 ready-now for Appointed Actuary", bullets: ["IFoA / IAI exam support active.", "External hires: 4 senior actuaries shortlisted."] } },
      { label: "Leadership Dev Programme", icon: "🎓", detail: { headline: "Insurance Leaders Programme · cohort 6 of 38 leaders", bullets: ["Partner: ISB.", "Completion rate: 96%.", "Post-programme promotions: 41%."] } }
    ]
  },
  {
    heading: "Compliance & Governance",
    items: [
      { label: "Regulatory Calendar", icon: "⚖️", detail: { headline: "28 regulatory items next 90 days · 6 critical", table: { cols: ["Item", "Due"], rows: [["IRDAI quarterly return", "30 Jun"], ["POSH annual report", "30 Jun"], ["Solvency margin filing", "15 Jul"], ["AML training cycle", "Rolling"]] } } },
      { label: "Governance Strengthening", icon: "🏛️", detail: { headline: "Governance strengthening programme · 71% complete", bullets: ["Board composition refresh: 80% done.", "Related-party transaction framework: live.", "Whistleblower mechanism: refreshed."] } },
      { label: "POSH Tracker", icon: "🛡️", detail: { headline: "POSH · 12 cases YTD · 100% closed within timeline", bullets: ["IC coverage: 100% of locations.", "Awareness: 97% direct staff certified."] } },
      { label: "SEBI Disclosure Tracker", icon: "🔐", detail: { headline: "SEBI disclosures · 0 delays YTD · governance mock filings on track", bullets: ["group governance people section drafted v0.7.", "Insider trading window controls live."] } },
      { label: "DEI Index — Bajaj Life", icon: "📋", detail: { headline: "DEI composite 0.81 · highest in group", table: { cols: ["Dimension", "Score"], rows: [["Women in workforce", "38%"], ["Women in leadership", "27%"], ["PwD inclusion", "2.1%"]] } } }
    ]
  },
  {
    heading: "Reporting & AI",
    items: [
      { label: "MIS & HR Analytics", icon: "📊", detail: { headline: "42 live dashboards · self-serve for 240 managers", bullets: ["Real-time agent productivity feed.", "Attrition early-warning model accuracy: 86%."] } },
      { label: "Board HR Pack", icon: "📋", detail: { headline: "Q1 board HR pack · 88% drafted", bullets: ["Leadership bench strength section complete.", "Allianz integration section under finalisation."] } }
    ]
  }
];
function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
const BLUE = "#1a56db";
const TEAL = "#0d9488";
const GREEN = "#16a34a";
const aaravNav = [
  {
    heading: "My Cockpit",
    items: [
      {
        label: "My 90-day Journey",
        icon: "🛣️",
        detail: {
          headline: "Your 90-Day Roadmap, Aarav · Day 23 of 90 · on track",
          narrative: "You're ahead of 64% of your batch at Day 23. Top 10% are at 12 disbursals; you're at 8. The gap is closeable in the next 5 working days.",
          table: {
            cols: ["Phase", "Milestone", "Status"],
            rows: [
              ["Phase 1 · Days 1–30", "Day 1: System access & ID card", "✅ Done"],
              ["", "Day 3: Branch orientation with Vikram Singh", "✅ Done"],
              ["", "Day 7: Buddy assigned · Rajan Nair", "✅ Done"],
              ["", "Day 14: First product certification", "✅ Done"],
              ["", "Day 18: First 5 disbursals", "🏆 Done"],
              ["", "Day 23 (TODAY): 8 disbursals · target 14 by Day 30", "🟡 In progress"],
              ["Phase 2 · Days 31–60", "Day 35: IRDA product cert complete", "⬜ Upcoming"],
              ["", "Day 45: 25 disbursals milestone", "⬜ Upcoming"],
              ["", "Day 60: Mid-probation review", "⬜ Upcoming"],
              ["Phase 3 · Days 61–90", "Day 75: First cross-product sell", "⬜ Upcoming"],
              ["", "Day 90: Final probation review · target 35 disbursals", "⬜ Upcoming"]
            ]
          },
          actions: ["Book buddy 1:1", "Open learning plan"]
        }
      },
      {
        label: "My Learning",
        icon: "📚",
        detail: {
          headline: "Your Learning Path · 6 of 9 modules complete",
          narrative: "SOs who complete IRDA cert by Day 25 earn ₹2,400 more in average monthly incentive — it unlocks 3 additional products you can sell.",
          table: {
            cols: ["Module", "Status", "Notes"],
            rows: [
              ["BFL Welcome & Culture", "✅ Done", "Day 1"],
              ["Consumer Lending Basics", "✅ Done", "Day 3"],
              ["EMI Product Suite", "✅ Done", "Day 5"],
              ["Sales Process & CRM", "✅ Done", "Day 8"],
              ["KYC & Compliance Basics", "✅ Done", "Day 12"],
              ["Personal Loan Product", "✅ Done", "Day 16"],
              ["IRDA Product Certification", "🟡 2 of 5", "Due Friday · 60 mins remaining"],
              ["Home Loan Basics", "⬜", "Day 30"],
              ["Cross-Sell Fundamentals", "⬜", "Day 45"]
            ]
          },
          actions: ["Continue IRDA cert now"]
        }
      },
      {
        label: "My Incentives",
        icon: "💸",
        detail: {
          headline: "Your Incentive Calculator · ₹4,200 earned this month",
          narrative: "Vijay Sales Goregaon has 3 walk-in applications waiting today — visit them and you're at 11 disbursals. That's ₹6,600 this month.",
          table: {
            cols: ["Slab", "Per disbursal", "Hit by month-end"],
            rows: [
              ["1–5 disbursals", "₹500", "—"],
              ["6–14 disbursals", "₹600", "₹8,400 at 14"],
              ["15–24 disbursals", "₹720", "₹11,400 at 20"],
              ["25–34 disbursals", "₹900", "₹16,200 at 25"],
              ["35+ disbursals", "₹1,100", "₹27,500 at 35"]
            ]
          }
        }
      },
      {
        label: "My Documents",
        icon: "📂",
        detail: {
          headline: "Document Checklist · 2 pending (2 min each)",
          narrative: "Getting these done today means your first salary hits without any delay. Takes 4 minutes total.",
          table: {
            cols: ["Document", "Status"],
            rows: [
              ["Offer letter", "✅ uploaded Day 1"],
              ["Aadhar & PAN", "✅ verified"],
              ["Educational certificates", "✅"],
              ["Bank account", "✅ linked"],
              ["Form 16 (previous employer)", "✅"],
              ["PF nomination form", "🟡 pre-filled · upload photo ID"],
              ["Photo ID for branch records", "🟡 passport photo needed"]
            ]
          },
          actions: ["Upload PF nomination · 2 mins", "Upload photo ID"]
        }
      },
      {
        label: "My Buddy",
        icon: "🤝",
        detail: {
          headline: "Your Buddy · Rajan Nair · 3.2 yrs at BFL",
          narrative: "Rajan is free today 4:00–4:30 PM. He hit 14 disbursals in his first month. Ask him how he handles the Goregaon territory — he knows the Vijay Sales guys.",
          table: {
            cols: ["Profile", "Detail"],
            rows: [
              ["Role", "Senior Sales Officer"],
              ["Branch", "Andheri West"],
              ["Tenure", "3.2 years at BFL"],
              ["Last month disbursals", "28"],
              ["Last connected", "5 days ago"]
            ]
          },
          bullets: [
            "Ask: Which branches respond fastest to walk-ins?",
            "Ask: How do you handle IRDA cert while keeping disbursal pace up?",
            "Ask: What did your Day 30 review look like?"
          ],
          actions: ["WhatsApp Rajan", "Schedule a chai break"]
        }
      },
      {
        label: "Raise a Request",
        icon: "🎫",
        detail: {
          headline: "Raise a Request · all categories",
          narrative: "Pick a category and we'll route to the right team. Average resolution shown per category.",
          table: {
            cols: ["Category", "Examples", "Avg resolution"],
            rows: [
              ["🖥️ IT / System Issue", "Login · App · CRM access", "4 hours"],
              ["💰 Incentive Query", "Wrong calc · Missing payout · Slab", "2 business days"],
              ["📋 Document Help", "PF nomination · Certificate · ID", "1 business day"],
              ["🏥 Leave / Medical", "Emergency leave · Reimbursement", "Same day"],
              ["🗣️ Talk to HR", "Career · Manager · Team", "24 hours (Rohit Kapoor)"]
            ]
          }
        }
      }
    ]
  }
];
const sunitaNav = [
  {
    heading: "Operations",
    items: [
      {
        label: "SLA Monitor",
        icon: "⏱️",
        detail: {
          headline: "SLA Performance · Live · 94.3% overall (target 98%)",
          narrative: "Trend -1.2pp from yesterday. Cashless pre-auth is the breach hotspot. If 23 cashless breaches confirmed, IRDAI penalty exposure ~₹1.15L.",
          table: {
            cols: ["Claim type", "Compliance", "Status"],
            rows: [
              ["Cashless pre-auth (48 hr)", "91.2%", "🔴 14 breaches today · 23 at-risk by 2pm"],
              ["Health reimbursement (30 days)", "97.8%", "🟢 on track"],
              ["Motor OD (7 days)", "94.1%", "🟡 3 approaching deadline"],
              ["Motor TP (IRDAI mandate)", "98.4%", "🟢 on track"]
            ]
          },
          actions: ["Redistribute now to avoid penalty", "Page floor lead"]
        }
      },
      {
        label: "Case Queue · 847",
        icon: "📥",
        detail: {
          headline: "Live Case Queue · 847 Active",
          narrative: "23 cases above 47-hour age — breach risk by 2pm. Auto-redistribute available based on capacity.",
          table: {
            cols: ["Analyst", "Cases", "Capacity", "Status"],
            rows: [
              ["Prerna Joshi", "68", "—", "🔴 Overloaded"],
              ["Karan Mehta", "31", "+19 space", "🟢 Available"],
              ["Aisha Khan", "44", "+6 space", "🟡 Near limit"],
              ["Suresh Rao", "38", "+12 space", "🟢 Available"],
              ["Deepa Nair", "—", "Leave", "⬜"],
              ["Vijay More", "47", "+3 space", "🟡 Near limit"]
            ]
          },
          bullets: [
            "Queue by age: <24h: 312 · 24–36h: 284 · 36–47h: 228 · >47h: 23 (BREACH RISK)."
          ],
          actions: ["Auto-redistribute 23 at-risk", "Move 14 from Prerna to Karan"]
        }
      },
      {
        label: "Team Roster",
        icon: "👥",
        detail: {
          headline: "Team Roster · 15 present · 2 on leave · 1 in training",
          narrative: "Monsoon cover plan: expected +18% volume in 10 days, capacity gap of 6 additional analysts.",
          table: {
            cols: ["Status", "Names / Count"],
            rows: [
              ["Present (15)", "Prerna · Karan · Aisha · Suresh · Vijay · Rekha · Dinesh · Pooja · Arjun · Meena · Sahil · Lata · Tushar · Bhavna · Nisha"],
              ["On Leave (2)", "Deepa Nair (CL) · Ravi Kumar (Sick · day 3)"],
              ["In Training (1)", "Manish Desai · IRDAI refresher till 2pm"],
              ["Overtime risk", "4 analysts on 8th consecutive OT day"]
            ]
          },
          actions: ["Approve OT for Prerna & Suresh", "Request temporary staffing"]
        }
      },
      {
        label: "IRDAI Tracker",
        icon: "🛡️",
        detail: {
          headline: "IRDAI Compliance · Team",
          narrative: "Your cert validity: 47 days remaining. Deepa + Ravi must complete renewal before returning from leave — IRDAI mandates valid cert to process claims.",
          table: {
            cols: ["Bucket", "Count", "Note"],
            rows: [
              ["✅ Valid (>90 days)", "11 analysts", ""],
              ["🟡 Due within 90 days", "4 analysts", "Plan soon"],
              ["🔴 Due within 30 days", "2 analysts", "Deepa (18 days) · Ravi (22 days)"]
            ]
          },
          bullets: ["Streak: 84 days zero IRDAI-reportable breaches.", "TAT compliance 99.1% · grievance redressal within 14 days: 100%."],
          actions: ["Send reminder to Deepa & Ravi"]
        }
      },
      {
        label: "Escalations",
        icon: "🚨",
        detail: {
          headline: "Active Escalations · 3 in queue",
          narrative: "2 high-severity escalations require Sunita's intervention today. Ombudsman risk on Pandey case if not resolved by EOD.",
          table: {
            cols: ["Severity", "Case", "Owner", "Due"],
            rows: [
              ["🔴 HIGH", "Motor OD · Rajesh Pandey (Pune) · 52 days · IRDAI complaint filed", "Karan", "Today EOD"],
              ["🔴 HIGH", "Cashless pre-auth denied twice · Sunanda Iyer (Mumbai)", "Prerna", "4 hours"],
              ["🟡 MED", "Internal audit query · Claims reserve adequacy Q4", "Sunita", "Jun 10"]
            ]
          },
          actions: ["View Pandey case", "Override & approve Iyer", "Draft audit response"]
        }
      },
      {
        label: "My Career Path",
        icon: "🎯",
        detail: {
          headline: "Your Career Path · Deputy Manager · 71% ready (+3pp this month)",
          narrative: "You're on track. The Motor OD rotation in Q3 is your fastest path to the DM role. Neha (HRBP) can help you apply.",
          table: {
            cols: ["Readiness item", "Status"],
            rows: [
              ["IRDAI Advanced Certification", "✅"],
              ["Team leadership (18 direct reports)", "✅"],
              ["SLA management track record", "✅"],
              ["Leadership module (XLRI online)", "✅"],
              ["Cross-line exposure · Motor or Health", "🟡 Motor OD rotation Q3"],
              ["Financial P&L · Claims reserve module", "🟡 8 hours · not started"],
              ["Acting DM · 1 quarter", "⬜"]
            ]
          },
          actions: ["Express interest in Motor OD rotation", "Enroll in P&L module"]
        }
      }
    ]
  }
];
const sharedAgents = [
  { agent: "Attrition Agent", message: "Cohort risk model refreshed.", time: "04:55" },
  { agent: "Compliance Agent", message: "Regulatory calendar synced.", time: "03:01" },
  { agent: "Skills Agent", message: "Skill-gap heatmap updated.", time: "04:18" },
  { agent: "Sentiment Agent", message: "Pulse scores re-scored from text.", time: "03:42" }
];
const personaRegistry = {
  anupam: {
    slug: "anupam",
    initials: "AS",
    name: "Anupam Sirbhaiya",
    role: "Group CHRO",
    entity: "Bajaj Finserv Limited",
    location: "Pune",
    accent: BLUE,
    navGroups: anupamNav,
    prompts: [
      {
        q: "Show me CXO-1 succession coverage across all 7 entities",
        a: "8 of 14 CXO/CXO-1 roles have a ready-now successor (62%).\n\n• BFL: Chief Sales (3 ready) · Chief Risk (2) — 🟢 Covered\n• BALIC: CEO (2) 🟢 · Chief Agency (0) 🔴 · Chief Bancassurance (0) 🔴 · Chief Actuary (1) 🟡\n• BAGIC: Chief Risk (2) 🟢 · Head Claims (1) 🟡\n• AMC: CIO (0) 🔴\n• Group: Chief Digital (0) 🟡\n\nBusiness-critical gap: Chief Agency + Chief Bancassurance at BALIC. Recommend opening succession board and triggering external search via Egon Zehnder."
      },
      {
        q: "Which entity has the highest culture integration risk?",
        a: "Bajaj Life — post-Allianz culture integration at 6.4/10 (target 8.0 by Q4 FY27). Finance function declining (6.1 ↓0.1). Recommended: Finance function deep-dive + town hall within 30 days."
      },
      {
        q: "Draft a board update on Bajaj Life Leadership bench strength",
        a: "BOARD UPDATE — Bajaj Life Leadership Bench Strength · People Lens\n\n1. Governance uplift: 71% complete (↑9pp QoQ). Board composition refresh 80% done; ESOP pool granted to 240 senior leaders; RPT and whistleblower frameworks live.\n\n2. Succession gaps: Chief Agency Officer vacant (search with Egon Zehnder, 90-day fill expected) and Chief Bancassurance with zero ready-now successor. Both are group governance-disclosure-critical.\n\n3. ESOP & comp: 6% gap vs peer median on senior ESOP grants; off-cycle correction recommended pre-FY27.\n\n4. IRDAI compliance: 4,200 agent licences lapsing in next 90 days; renewal sprint at 61% — ₹14 Cr retention plan + 18 additional cohorts approved.\n\n5. Recommended ExCo action: approve external search budget, sign RPT policy, schedule Finance function town hall.\n\nReady to export as PDF or send to board secretary?"
      },
      {
        q: "How is our Learning Academy ROI tracking against FY26 targets?",
        a: "Compliance 91% (↑4pp), Leadership 67% (↓3pp due to BALIC cohort delay), DST onboarding 84% (2,847 certified). DSTs who finish onboarding show +23% 90-day productivity. Recommend restarting BALIC cohort and commissioning the AMC capability framework in Q2."
      }
    ],
    agents: sharedAgents
  },
  rohit: {
    slug: "rohit",
    initials: "RK",
    name: "Rohit Kapoor",
    role: "Zonal HRBP · West",
    entity: "Bajaj Finance Ltd",
    location: "Pune · MH / Goa / MP",
    accent: BLUE,
    navGroups: rohitNav,
    prompts: [
      {
        q: "Show me all 42 burnout-flagged SOs and their branches",
        a: "BURNOUT CLUSTER · 42 SOs across 5 branches\n\n• Pune Camp — 12 SOs · 18-day 10+ hr login streak · Manager NPS +24 · Action: compulsory leave + 1:1\n• Pune West — 9 SOs · incentive dispute + missed target 3M · Manager NPS +21 · Action: incentive review + 1:1\n• Nashik East — 8 SOs · 19.4% peer attrition anxiety · Manager NPS +18 · Action: stay conversation + workload rebalance\n• Pune Hadapsar — 7 SOs · territory expanded 14% · Manager NPS +27 · Action: redistribute geographies\n• Nashik Cidco — 6 SOs · leave untouched 90 days · Manager NPS +19 · Action: 5-day reset leave\n\n+37 additional flight-risk employees across the zone beyond these clusters."
      },
      {
        q: "Draft a manager 1:1 nudge for the Pune cluster",
        a: `WhatsApp draft to Pune branch managers:

"Hi team — our Attrition Agent has flagged 28 SOs in Pune in triple-signal burnout (10+ hr logins on 60% of days, missed targets 3 months running, no leave taken in 90 days). Please book a 30-min 1:1 with each flagged SO this week. I'll share the named list on Teams in the next 1 hour. The HR cost of inaction is ~₹1.4 Cr if half this cluster exits. The cost of doing the 1:1s is one calendar hour each. Thanks for moving fast on this. — Rohit"`
      },
      {
        q: "Who's at burnout risk in Pune and Nashik this week?",
        a: "42 Sales Officers in triple-signal burnout: 8+ working days, 11pm+ logins on 60% of days, leave balance untouched 90 days. Split: Pune 28 · Nashik 14. Recommend approving compulsory leave and a 4-week retention sprint (₹2.2L cost vs ₹1.9 Cr inaction cost)."
      },
      {
        q: "What's our hiring funnel for rural B2C right now?",
        a: "1,180 hires planned by Sep. Sourcing partners engaged in Vidarbha and MP. Offer-stage conversion: 64%. Time-to-fill 21 days for Sales Officer · 38 days for RM."
      }
    ],
    agents: sharedAgents
  },
  priya: {
    slug: "priya",
    initials: "PD",
    name: "Priya Deshmukh",
    role: "HR Head · Bajaj Life",
    entity: "Bajaj Life Insurance",
    location: "Pune · strategic growth agenda",
    accent: BLUE,
    navGroups: priyaNav,
    prompts: [
      {
        q: "Draft an Leadership bench strength people-narrative for the group governance",
        a: "group governance DRAFT · People · Bajaj Life Insurance\n\nThe Company has invested significantly in strengthening its people foundation in preparation for listing. Key Managerial Personnel stability is robust — the CEO contract has been renewed for a further three years, the CFO and Chief Risk Officer each have a defined ready-now successor, and Board composition meets independent director ratio requirements. An ESOP pool covering 240 senior leaders has been granted, with an off-cycle correction planned to bridge the 6% peer-median gap. The Company maintains active succession planning across 14 CXO/CXO-1 roles, with two roles — Chief Agency Officer and Chief Bancassurance — currently under external search via leading global firms. Compliance posture is strong: IRDAI quarterly returns, solvency margin filings, and POSH governance have been delivered without delay; an active renewal sprint covers 4,200 agent licences. The Company's post-Allianz culture pulse stands at 6.8/10 and trending upward across five of six functions. Together, these factors evidence the people readiness required for a successful public listing.\n\nReady to export to legal counsel?"
      },
      {
        q: "How many agent licences will lapse next 90 days?",
        a: "4,200 lapses projected · ₹340 Cr APE at risk. East zone is the critical lag (12% completion vs South 31%). West & South own 68% of total backlog. Renewal sprint at 61% — recommend approving 18 additional cohorts and opening dedicated exam centres in Kolkata & Patna."
      },
      {
        q: "What's our strategic growth governance readiness?",
        a: "71% ready · ↑9pp this quarter. Finance & Treasury 84% · Investor Relations 44% (gap) · Compliance 78% · Board composition refresh 80% complete. ESOP gap to peer median: 6%. Chief Agency vacancy is the single biggest group governance-disclosure risk."
      },
      {
        q: "Draft a culture pulse update post-Allianz",
        a: "Trust score 6.8/10 ↑0.4 MoM overall. Most settled: Tech (7.8) and Agency (7.1 ↑0.6 fastest improving). Watch zone: Bancassurance (6.4) and Finance (6.1 ↓0.1). Town-hall + Finance function audit scheduled within 30 days."
      }
    ],
    agents: sharedAgents
  },
  aarav: {
    slug: "aarav",
    initials: "AM",
    name: "Aarav Mehta",
    role: "Sales Officer · Consumer Lending",
    entity: "Bajaj Finance · Mumbai",
    location: "Andheri & Goregaon · Day 23 of 90",
    accent: GREEN,
    avatarColor: GREEN,
    navGroups: aaravNav,
    prompts: [
      {
        q: "What will I earn if I hit 20 disbursals?",
        a: "Hitting 20 disbursals this month = ₹11,400 incentive 🎉\n\nSlab breakdown that gets you there:\n• Disbursals 1–5: 5 × ₹500 = ₹2,500\n• Disbursals 6–14: 9 × ₹600 = ₹5,400\n• Disbursals 15–20: 6 × ₹720 = ₹4,320\nTOTAL = ₹12,220 (rounded benchmark ₹11,400 after quality adjustments)\n\n💡 Vijay Sales Goregaon has 3 walk-in applications waiting today — that gets you to 11 disbursals. You're already 55% of the way to ₹11,400."
      },
      {
        q: "How am I doing vs my probation goals?",
        a: "You're on track 🎯. 8 of 10 disbursals done · IRDA cert exam Friday · Day-7 NPS 8.4 · buddy check-ins on rhythm. You're ahead of 64% of your batch at Day 23. Top 10% are at 12 disbursals — closeable in 5 working days."
      },
      {
        q: "When will my next incentive payout hit?",
        a: "₹4,200 earned this month, projected ₹12,000 by month end. Payout hits with salary cycle on the last working day. Hit 12 disbursals to unlock the ₹6,000 milestone bonus on top."
      },
      {
        q: "Suggest a learning plan for the next 30 days",
        a: "Finish IRDA cert by Friday (unlocks 3 new product lines and +₹2,400/month avg incentive). Start Two-wheeler loans on Day 35 and Digital onboarding tools on Day 40 — each one expands what you can attach on every walk-in."
      }
    ],
    agents: [
      { agent: "Buddy Agent", message: "Reminded Rajan Nair about Tuesday 10am 1:1.", time: "07:15" },
      { agent: "Learning Agent", message: "Pushed IRDA mock exam to your phone.", time: "07:42" },
      { agent: "Incentive Agent", message: "Refreshed October payout projection.", time: "08:01" }
    ]
  },
  sunita: {
    slug: "sunita",
    initials: "SR",
    name: "Sunita Rao",
    role: "Claims Processing Lead",
    entity: "Bajaj General Insurance · HAT",
    location: "Pune · Team of 18 · 6 yrs tenure",
    accent: TEAL,
    avatarColor: TEAL,
    navGroups: sunitaNav,
    prompts: [
      {
        q: "How long until I'm eligible for Deputy Manager?",
        a: "You're at 71% readiness (+3pp this month) — 6 to 9 months out if you secure the Q3 Motor OD rotation. ✨\n\nWhat's done: IRDAI Advanced cert · 18-person team leadership · SLA track record · XLRI leadership module.\n\nWhat's pending: (1) Motor OD cross-exposure — rotation slot available in Q3, talk to Neha (HRBP) about applying; (2) Claims reserve / P&L module — 8 hours, not started.\n\nYou're closer than you think. The Motor OD rotation is the single biggest unlock — once you express interest, Neha can fast-track the nomination."
      },
      {
        q: "Draft a team appreciation message for last week's SLA",
        a: `WhatsApp draft for your team:

"Team — quick note before Monday morning kicks off. We held 98.2% SLA last week despite a 14% case spike, including the Friday surge. Special mention to Prerna (62 cases, zero defect) and Karan (steady absorber on Friday). Thank you for staying with it. The reason we don't get IRDAI grief is because of weeks like this. Coffee on me Tuesday 4pm — Sunita ☕"`
      },
      {
        q: "Who has bandwidth to absorb the SLA-risk queue?",
        a: "Karan has capacity for +19 cases · Suresh +12 · Aisha +6. Recommend moving 14 cashless pre-auths from Prerna (overloaded at 68) and Vijay (47 · near limit) to Karan and Suresh before 1pm. Auto-redistribute available — one click."
      },
      {
        q: "What's my team's overtime trend this month?",
        a: "4 analysts on 8th consecutive working day (Prerna · Suresh · Vijay · Rekha). OT logged: 38 hours week-to-date vs 22 last week. Burnout signal amber. HRBP Neha already notified."
      }
    ],
    agents: [
      { agent: "SLA Agent", message: "Flagged 23 cases approaching breach by 2pm.", time: "06:45" },
      { agent: "Workload Agent", message: "Rebalanced 14 cases overnight.", time: "05:18" },
      { agent: "IRDAI Agent", message: "Zero reportable breaches in last 84 days.", time: "04:02" },
      { agent: "Burnout Agent", message: "4 analysts on 8th consecutive day — amber.", time: "03:30" }
    ]
  }
};
function CockpitShell({
  persona,
  personaSlug,
  headerCenter,
  contextStrip,
  accent = "#1a56db",
  children
}) {
  const today = (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  const avatarBg = persona.avatarColor ?? accent;
  const renderItem = (item) => {
    const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      item.icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14px] leading-none", children: item.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 truncate", children: item.label }),
      item.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9.5px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-sidebar-accent text-sidebar-foreground/70", children: item.badge })
    ] });
    const cls = "w-full text-left px-3 py-2 text-[12.5px] rounded-md hover:bg-sidebar-accent transition-colors text-sidebar-foreground/85 flex items-center gap-2";
    if (personaSlug) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/cockpit/$persona/$section",
          params: { persona: personaSlug, section: slugify(item.label) },
          className: cls,
          activeProps: { className: cls + " bg-sidebar-accent text-sidebar-foreground" },
          children: inner
        },
        item.label
      );
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cls, children: inner }, item.label);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "fixed top-0 inset-x-0 h-14 bg-white border-b border-border z-30 flex items-center px-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: bajajLogo.url, alt: "Bajaj", className: "h-7 w-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline text-[12.5px] text-muted-foreground border-l border-border pl-3", children: "Agentic Workforce Platform" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] text-foreground font-medium", children: headerCenter }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden lg:inline text-[12px]", children: today }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-4 h-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "w-4 h-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DemoBadges, { compact: true })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed top-14 inset-x-0 h-9 z-20 flex items-center px-5 text-white text-[12.5px]",
        style: { background: accent },
        children: contextStrip
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed top-[92px] inset-x-0 z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IllustrativeBanner, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "fixed top-[120px] bottom-0 left-0 w-[260px] bg-sidebar text-sidebar-foreground z-10 overflow-y-auto border-r border-sidebar-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border-b border-sidebar-border", children: [
        personaSlug ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/cockpit/$persona", params: { persona: personaSlug }, className: "flex items-center gap-3 hover:opacity-90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-semibold",
              style: { background: avatarBg },
              children: persona.initials
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold truncate", children: persona.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-sidebar-foreground/60 truncate", children: persona.role })
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-semibold",
              style: { background: avatarBg },
              children: persona.initials
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-semibold truncate", children: persona.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-sidebar-foreground/60 truncate", children: persona.role })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-[11px] text-sidebar-foreground/70", children: persona.entity }),
        persona.location && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-sidebar-foreground/50", children: persona.location })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "p-3 space-y-3", children: persona.navGroups ? persona.navGroups.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-2 py-2 text-[10px] uppercase tracking-wider text-sidebar-foreground/40 font-semibold", children: g.heading }),
        g.items.map(renderItem)
      ] }, g.heading)) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-2 py-2 text-[10px] uppercase tracking-wider text-sidebar-foreground/40 font-semibold", children: "Navigate" }),
        (persona.navLinks ?? []).map(renderItem)
      ] }) }),
      persona.widgets && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 border-t border-sidebar-border", children: persona.widgets })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-[120px] pl-[260px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1400px] mx-auto p-6 space-y-6", children }) })
  ] });
}
const Sheet = Root;
const SheetPortal = Portal;
const SheetOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = reactExports.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Content, { ref, className: cn(sheetVariants({ side }), className), ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
    ] }),
    children
  ] })
] }));
SheetContent.displayName = Content.displayName;
const SheetHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props });
SheetHeader.displayName = "SheetHeader";
const SheetTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = Title.displayName;
const SheetDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = Description.displayName;
function isNonEmptyReactNode(v) {
  if (v === void 0 || v === null || v === false) return false;
  if (typeof v === "string") return v.trim().length > 0;
  return true;
}
function DrillSheet({
  open,
  onOpenChange,
  title,
  subtitle,
  detail,
  accent = "#1a56db"
}) {
  const d = detail ?? { headline: title };
  const headline = d.headline || title || "Agentic deep-dive";
  const ctx = `${title} ${subtitle ?? ""} ${headline}`.toLowerCase();
  const topic = /burnout|wellness|fatigue|overtime/.test(ctx) ? "burnout" : /attriti|exit|flight|regret/.test(ctx) ? "attrition" : /hir|open role|time-to-fill|requisition|ttf/.test(ctx) ? "hiring" : /comp|payout|incentive|salary|bonus|benchmark|pay/.test(ctx) ? "comp" : /compli|sebi|irdai|rbi|kyc|statutory|audit|regulator/.test(ctx) ? "compliance" : /successi|pipeline|leadership|bench|ready-now/.test(ctx) ? "succession" : /nps|engage|pulse|sentiment|culture/.test(ctx) ? "engagement" : /train|skill|learn|lms|certif/.test(ctx) ? "skills" : /productiv|target|attain|sla|cycle time|tat/.test(ctx) ? "performance" : /dei|diversity|gender|inclusion/.test(ctx) ? "dei" : /claim|fnol|underwrit|broker/.test(ctx) ? "claims" : /promot|progression|move|mobility/.test(ctx) ? "mobility" : "general";
  const numMatch = headline.match(/(₹?[\d.,]+\s*(?:Cr|L|%|d|h|bps|days|hrs)?)/i);
  const primaryNum = numMatch?.[1] ?? "";
  const TOPIC = {
    burnout: {
      signals: [
        primaryNum ? `${primaryNum} people now cross all three burnout thresholds (overtime + missed leave + sentiment drop).` : "Triple-trigger burnout signal: overtime + zero leave + sentiment drop.",
        "Intervention window closes in ~7 days before exit-risk doubles.",
        "Manager 1:1 cadence has slipped in the affected cluster."
      ],
      sources: ["Workday", "Login telemetry", "Pulse survey", "Leave system"],
      actions: ["Approve intervention plan", "Lock 5-day reset window", "Notify line managers"],
      evCols: ["Cluster", "People", "Avg overtime/day", "Last leave"],
      evRows: [
        ["Cluster A", "12", "11.4h", "72 days ago"],
        ["Cluster B", "9", "10.8h", "61 days ago"],
        ["Cluster C", "8", "11.1h", "68 days ago"]
      ]
    },
    attrition: {
      signals: [
        primaryNum ? `Current rate ${primaryNum} — variance vs benchmark is material.` : "Variance vs benchmark is material this quarter.",
        "Top driver: manager-1:1 gap, not pay (per exit-interview NLP).",
        "Highest concentration in 2 clusters — fixable, not structural."
      ],
      sources: ["HRMS exits", "Exit interview NLP", "Manager NPS"],
      actions: ["Open exit-interview themes", "Brief affected BUs", "Trigger stay-interview sprint"],
      evCols: ["Segment", "Rate", "Top reason", "Replacement cost"],
      evRows: [
        ["Tier-1 metro", "11.8%", "Career growth", "₹0.6 Cr"],
        ["Tier-3 cities", "19.4%", "Manager fit", "₹1.4 Cr"],
        ["High-perf cohort", "8.2%", "Comp / role", "₹2.1 Cr"]
      ]
    },
    hiring: {
      signals: [
        primaryNum ? `${primaryNum} on the headline metric — ramp impact is quantified.` : "Ramp impact is quantified against book plan.",
        "Bottleneck is interview-panel availability, not pipeline depth.",
        "RPO can add capacity within 2 weeks if greenlit."
      ],
      sources: ["ATS", "Workday req data", "RPO partner SLA"],
      actions: ["Open req review", "Push to RPO", "Approve panel expansion"],
      evCols: ["Role family", "Open", "TTF (days)", "SLA"],
      evRows: [
        ["Frontline sales", "1,840", "38", "30"],
        ["Relationship Mgmt", "612", "46", "35"],
        ["Branch leadership", "84", "62", "45"]
      ]
    },
    comp: {
      signals: [
        primaryNum ? `Headline figure: ${primaryNum}. Cross-checked against latest market cut.` : "Cross-checked against latest market benchmark cut.",
        "Perception gap (not accuracy) is the dominant complaint signal.",
        "A targeted town-hall closes 60–70% of perception risk at zero cost."
      ],
      sources: ["Mercer / AON cut", "Payout engine", "Pulse survey"],
      actions: ["Approve comp action", "Schedule town-hall", "Refresh slab comms"],
      evCols: ["Segment", "Variance to market", "Perception score", "Exit risk lift"],
      evRows: [
        ["Cohort A", "-4.2%", "27% unfair", "+1.6×"],
        ["Cohort B", "+1.1%", "8% unfair", "baseline"],
        ["Cohort C", "-2.8%", "18% unfair", "+1.2×"]
      ]
    },
    compliance: {
      signals: [
        primaryNum ? `${primaryNum} on the compliance metric — exposure is bounded but real.` : "Exposure is bounded but real — regulator window is short.",
        "Concentration in 2 clusters; targeted nudge resolves majority.",
        "Inspection cycle opens in ~6 weeks; closure must precede that."
      ],
      sources: ["LMS completion", "Statutory tracker", "Regulator filings"],
      actions: ["Force-push deadline", "Allocate paid time slot", "Notify compliance officer"],
      evCols: ["Module / filing", "Population", "Completion", "Risk"],
      evRows: [
        ["KYC refresher", "612", "38%", "High"],
        ["AML attestation", "412", "71%", "Medium"],
        ["POSH refresher", "1,840", "84%", "Low"]
      ]
    },
    succession: {
      signals: [
        primaryNum ? `Coverage at ${primaryNum} — depth varies by function.` : "Depth varies materially by function.",
        "Two critical roles have only 1 ready-now successor — concentration risk.",
        "Internal vs external fill ratio improving QoQ."
      ],
      sources: ["9-box", "Successor readiness scoring", "Career hub"],
      actions: ["Greenlight stretch assignments", "Open successor review", "Brief NomCom"],
      evCols: ["Critical role", "Ready now", "Ready 1-2y", "Gap"],
      evRows: [
        ["Function head A", "2", "3", "Low"],
        ["Function head B", "1", "1", "High"],
        ["Function head C", "3", "4", "Low"]
      ]
    },
    engagement: {
      signals: [
        primaryNum ? `Score: ${primaryNum}. Cluster spread is wider than usual.` : "Cluster spread is wider than usual this cycle.",
        "Coaching-cadence gap is the dominant explanatory variable.",
        "Recoverable inside one quarter with a focused manager sprint."
      ],
      sources: ["Pulse", "Manager NPS", "Glint / Peakon"],
      actions: ["Launch coaching sprint", "Share comparative read-out", "Open root-cause review"],
      evCols: ["Segment", "Score", "Δ vs LQ", "Driver"],
      evRows: [
        ["Tier-1", "+52", "+4", "Coaching"],
        ["Tier-2", "+34", "-1", "Comms"],
        ["Tier-3", "+12", "-4", "Manager fit"]
      ]
    },
    skills: {
      signals: [
        primaryNum ? `Coverage ${primaryNum} on the headline skill.` : "Coverage on the headline skill is below plan.",
        "Two high-impact roles concentrate the gap — narrow remediation works.",
        "Curated learning paths already mapped in the LMS — needs assignment."
      ],
      sources: ["LMS", "Skills graph", "Role architecture"],
      actions: ["Assign learning path", "Open skills heatmap", "Approve cross-skill bootcamp"],
      evCols: ["Skill", "Coverage", "Demand", "Gap"],
      evRows: [
        ["GenAI fluency", "31%", "78%", "-47 pts"],
        ["Credit underwriting", "68%", "75%", "-7 pts"],
        ["Agri-finance", "12%", "44%", "-32 pts"]
      ]
    },
    performance: {
      signals: [
        primaryNum ? `${primaryNum} on the headline KPI.` : "Headline KPI is tracking off plan.",
        "Variance concentrated in 2 clusters — not system-wide.",
        "Leading indicators suggest recovery if action is taken this week."
      ],
      sources: ["Operational MIS", "Telemetry", "Branch scorecards"],
      actions: ["Open variance review", "Approve target recalibration", "Brief operating committee"],
      evCols: ["Cluster", "Attainment", "Δ vs plan", "Trend"],
      evRows: [
        ["Cluster A", "104%", "+4 pts", "↑"],
        ["Cluster B", "88%", "-12 pts", "→"],
        ["Cluster C", "76%", "-24 pts", "↓"]
      ]
    },
    dei: {
      signals: [
        primaryNum ? `Headline ratio: ${primaryNum}.` : "Ratio is below stated commitment.",
        "Leadership-pipeline gap dominates — not entry-level intake.",
        "Two interventions (sponsorship + promotion calibration) move the number."
      ],
      sources: ["Workday diversity cut", "Promotion data", "Sponsorship program"],
      actions: ["Approve sponsorship cohort", "Open promotion calibration", "Brief DEI council"],
      evCols: ["Layer", "Representation", "Promotion rate", "Gap"],
      evRows: [
        ["Entry", "46%", "1.0×", "On-track"],
        ["Mid", "31%", "0.82×", "-9 pts"],
        ["Senior", "18%", "0.71×", "-14 pts"]
      ]
    },
    claims: {
      signals: [
        primaryNum ? `Headline: ${primaryNum} on the claims metric.` : "Cycle-time variance vs SLA is the main signal.",
        "Two adjuster pods carry most of the backlog.",
        "Automation rule update could remove 30–40% of repeat exceptions."
      ],
      sources: ["Claims platform", "Adjuster telemetry", "Broker portal"],
      actions: ["Approve rule update", "Rebalance adjuster pods", "Brief broker partners"],
      evCols: ["Pod", "Open claims", "Avg TAT (d)", "SLA breach %"],
      evRows: [
        ["Pod A", "412", "4.2", "6%"],
        ["Pod B", "684", "7.8", "18%"],
        ["Pod C", "298", "3.9", "4%"]
      ]
    },
    mobility: {
      signals: [
        primaryNum ? `${primaryNum} in the eligible pool — momentum is real.` : "Eligible pool is large enough to act on this week.",
        "Wait-time past eligibility is the dominant exit predictor for this cohort.",
        "Clearing the backlog needs panel time, not new policy."
      ],
      sources: ["HRMS pipeline", "Promotion criteria", "Exit cohort model"],
      actions: ["Schedule emergency panel", "Unblock interview SLA", "Brief affected managers"],
      evCols: ["Cohort", "Eligible", "Avg wait", "Exit lift if unmoved"],
      evRows: [
        ["DST → RM", "184", "47 d", "+2.3×"],
        ["RM → BM", "62", "38 d", "+1.7×"],
        ["Analyst → AM", "94", "41 d", "+1.9×"]
      ]
    },
    general: {
      signals: [
        primaryNum ? `Primary signal: ${headline}.` : `Primary signal: ${headline}.`,
        subtitle ? `Supporting context: ${subtitle}.` : "Cross-checked against the trailing 3-month baseline.",
        "No conflicting signals from adjacent systems in the last 24 hours."
      ],
      sources: ["Workday", "Salesforce", "LMS", "Pulse"],
      actions: ["Open full view", "Brief stakeholder", "Snooze 24h"],
      evCols: ["Source", "Signal", "Confidence"],
      evRows: [
        ["Workday / Darwinbox", headline, d.confidence ?? "High"],
        ["Pulse + telemetry", subtitle ?? "Trend within tolerance band", "Medium-High"],
        ["Agent telemetry", "Pattern matches 2 historical analogues", "High"]
      ]
    }
  };
  const pack = TOPIC[topic];
  const narrative = isNonEmptyReactNode(d.narrative) ? d.narrative : `${headline}${subtitle ? ` · ${subtitle}` : ""}. Agents surfaced this drill because the ${topic} signal is moving materially against your operating plan. The read below combines today's telemetry with the trailing benchmark window so you can act on it directly.`;
  const bullets = d.bullets && d.bullets.length > 0 ? d.bullets : pack.signals;
  const evidence = d.table ?? { cols: pack.evCols, rows: pack.evRows };
  const agenticRead = d.agenticRead ?? `Agents synthesised this view from the underlying ${topic} signal — ${headline}. Cross-system reconciliation completed across ${pack.sources.slice(0, 3).join(", ")}; human-in-the-loop approval is required before any irreversible action.${d.confidence ? ` Confidence ${d.confidence}.` : ""}`;
  const actions = d.actions && d.actions.length > 0 ? d.actions : pack.actions;
  const sources = d.sources ?? pack.sources;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open, onOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetContent, { className: "w-full sm:max-w-[680px] overflow-y-auto bg-gradient-to-br from-[#dbeafe] via-[#eff6ff] to-[#ecfeff] border-l-4 border-l-[#1a56db]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold uppercase tracking-wider mb-1", style: { color: accent }, children: "Drill-down · agentic deep-dive" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { className: "text-[18px]", children: title }),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(SheetDescription, { children: subtitle })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-5 pb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-lg p-4 shadow-md text-white",
          style: { background: `linear-gradient(135deg, ${accent}, ${accent}cc)` },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider opacity-80 font-semibold mb-1", children: "Headline" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[14.5px] font-semibold", children: headline })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/80 backdrop-blur border border-[#1a56db]/15 rounded-lg p-4 text-[13.5px] text-foreground leading-relaxed shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider font-semibold mb-2", style: { color: accent }, children: "Context" }),
        narrative
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/80 backdrop-blur border border-[#1a56db]/15 rounded-lg p-4 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider font-semibold mb-2", style: { color: accent }, children: "Key signals" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: bullets.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2 text-[13px] text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 w-1.5 h-1.5 rounded-full shrink-0", style: { background: accent } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/90 border border-[#1a56db]/15 rounded-lg overflow-hidden shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 text-[10px] uppercase tracking-wider font-semibold border-b border-[#1a56db]/10", style: { color: accent }, children: "Evidence" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-[12.5px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: evidence.cols.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left font-semibold px-3 py-2 text-muted-foreground uppercase text-[10.5px] tracking-wider", children: c }, c)) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: evidence.rows.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-t border-border", children: r.map((cell, j) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 tabular-nums", children: cell }, j)) }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/80 border border-[#1a56db]/15 rounded-lg p-4 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider font-semibold mb-2", style: { color: accent }, children: "Agentic read" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-foreground leading-relaxed", children: agenticRead }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex flex-wrap gap-1.5 text-[10.5px]", children: sources.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full bg-[#1a56db]/10 text-[#1a56db] font-medium", children: s }, s)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/80 border border-[#1a56db]/15 rounded-lg p-4 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider font-semibold mb-2", style: { color: accent }, children: "Recommended actions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: actions.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "px-3 py-1.5 text-[12px] rounded-md text-white font-medium hover:opacity-90",
            style: { background: accent },
            children: a
          },
          a
        )) })
      ] })
    ] })
  ] }) });
}
function MorningBriefing({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-to-br from-[#dbeafe] via-[#eff6ff] to-[#ecfeff] border border-[#1a56db]/30 rounded-lg p-5 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-[#1a56db] mb-2", children: "Morning briefing" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] leading-relaxed text-foreground", children })
  ] });
}
function ControlTower({ kpis, accent = "#1a56db" }) {
  const [activeIdx, setActiveIdx] = reactExports.useState(null);
  const toneClass = {
    critical: "text-critical",
    warning: "text-warning",
    healthy: "text-healthy",
    default: "text-foreground"
  };
  const active = activeIdx !== null ? kpis[activeIdx] : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-title mb-3", children: "Control Tower · click any tile to drill" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: kpis.map((k, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setActiveIdx(i),
        className: "bg-white border border-border rounded-lg p-4 text-left hover:border-primary/40 hover:shadow-sm transition-all group",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10.5px] text-muted-foreground uppercase tracking-wide font-medium", children: k.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-1.5 text-[13.5px] font-medium tabular-nums ${toneClass[k.tone ?? "default"]}`, children: k.value }),
          k.sub && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[11px] text-muted-foreground font-normal", children: k.sub }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[10.5px] font-semibold uppercase tracking-wider text-[#1a56db]", children: "Drill down →" })
        ]
      },
      k.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DrillSheet,
      {
        open: activeIdx !== null,
        onOpenChange: (v) => !v && setActiveIdx(null),
        title: active?.label ?? "",
        subtitle: active ? `${active.value}${active.sub ? " · " + active.sub : ""}` : "",
        detail: active?.detail,
        accent
      }
    )
  ] });
}
function AIInsight({
  title,
  body,
  confidence,
  sources,
  showDisagree = true,
  accent = "#1a56db",
  drill
}) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-white border border-border rounded-lg p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4", style: { color: accent } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-title m-0", children: "AI Insight" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[15px] font-semibold mb-2", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13.5px] text-muted-foreground leading-relaxed", children: body }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11.5px] text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Confidence: ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: confidence })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Sources: ",
        sources.join(" · ")
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setOpen(true),
          className: "px-3.5 py-1.5 text-[12.5px] font-medium rounded-md text-white",
          style: { background: accent },
          children: "Investigate"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setOpen(true),
          className: "px-3.5 py-1.5 text-[12.5px] font-medium rounded-md border border-border text-muted-foreground hover:text-foreground",
          children: "View evidence"
        }
      ),
      showDisagree && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-3.5 py-1.5 text-[12.5px] font-medium rounded-md border border-border text-muted-foreground hover:text-foreground", children: "Disagree" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DrillSheet,
      {
        open,
        onOpenChange: setOpen,
        title,
        subtitle: `Confidence ${confidence} · ${sources.join(", ")}`,
        detail: drill,
        accent
      }
    )
  ] });
}
function AgentActivity({ runs }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-white border border-border rounded-lg p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-4 h-4 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-title m-0", children: "Agent Activity · Overnight" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: runs.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-[13px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: r.agent }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
          " — ",
          r.message
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground shrink-0", children: r.time })
    ] }, i)) })
  ] });
}
function AttentionList({ items, accent = "#1a56db" }) {
  const [activeIdx, setActiveIdx] = reactExports.useState(null);
  const cfg = {
    critical: { label: "CRITICAL", color: "text-critical bg-red-50 border-red-200", icon: CircleAlert },
    warning: { label: "WARNING", color: "text-warning bg-amber-50 border-amber-200", icon: TriangleAlert },
    healthy: { label: "HEALTHY", color: "text-healthy bg-green-50 border-green-200", icon: CircleCheck }
  };
  const active = activeIdx !== null ? items[activeIdx] : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-white border border-border rounded-lg p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-title mb-4", children: "What Needs Your Attention · click row to drill" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border", children: items.map((it, i) => {
      const c = cfg[it.priority];
      const Icon = c.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-3 flex items-start gap-4 hover:bg-muted/30 -mx-2 px-2 rounded cursor-pointer", onClick: () => setActiveIdx(i), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-1 rounded border ${c.color} shrink-0`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3 h-3" }),
          c.label
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13.5px] font-medium text-foreground", children: it.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-muted-foreground mt-0.5", children: it.detail })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: (e) => {
              e.stopPropagation();
              setActiveIdx(i);
            },
            className: "px-3 py-1.5 text-[12px] font-semibold rounded-md text-white shrink-0 hover:opacity-90 transition-opacity",
            style: { background: "#1a56db" },
            children: [
              it.action,
              " →"
            ]
          }
        )
      ] }, i);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DrillSheet,
      {
        open: activeIdx !== null,
        onOpenChange: (v) => !v && setActiveIdx(null),
        title: active?.title ?? "",
        subtitle: active?.detail,
        detail: active ? active.drill ?? {
          headline: active.title,
          narrative: active.detail
        } : void 0,
        accent
      }
    )
  ] });
}
function HRCopilot({
  prompts,
  accent = "#1a56db",
  personaName = "you"
}) {
  const [messages, setMessages] = reactExports.useState([
    { role: "bot", text: `Hi ${personaName}, I'm your HR Copilot. Ask anything about your people, data, or actions — or pick a suggested prompt below.` }
  ]);
  const [input, setInput] = reactExports.useState("");
  const [typing, setTyping] = reactExports.useState(false);
  const endRef = reactExports.useRef(null);
  const lookup = reactExports.useMemo(() => {
    const m = /* @__PURE__ */ new Map();
    prompts.forEach((p) => m.set(p.q.toLowerCase().trim(), p.a));
    return m;
  }, [prompts]);
  reactExports.useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, typing]);
  function answerFor(q) {
    const key = q.toLowerCase().trim();
    if (lookup.has(key)) return lookup.get(key);
    let best = "";
    let bestScore = 0;
    const qWords = new Set(key.split(/\W+/).filter((w) => w.length > 3));
    for (const p of prompts) {
      const pWords = p.q.toLowerCase().split(/\W+/);
      const score = pWords.reduce((s, w) => qWords.has(w) ? s + 1 : s, 0);
      if (score > bestScore) {
        bestScore = score;
        best = p.a;
      }
    }
    if (bestScore >= 2) return best;
    const list = prompts.map((p, i) => `${i + 1}. ${p.q}`).join("\n");
    return `In the live system, I'd query your actual Workday, Salesforce, and LMS data to answer this in real time. This demo is illustrative — here are things I can answer right now:

${list}`;
  }
  function send(text) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { role: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    const reply = answerFor(trimmed);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: reply }]);
      setTyping(false);
    }, 550);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-white border border-border rounded-lg p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-4 h-4", style: { color: accent } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-title m-0", children: "HR Copilot" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-md bg-muted/20 h-[320px] overflow-y-auto p-3 space-y-3", children: [
      messages.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-start gap-2 ${m.role === "user" ? "justify-end" : ""}`, children: [
        m.role === "bot" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full flex items-center justify-center text-white shrink-0", style: { background: accent }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-3.5 h-3.5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `max-w-[80%] rounded-lg px-3 py-2 text-[13px] leading-relaxed whitespace-pre-wrap ${m.role === "user" ? "text-white" : "bg-white border border-border text-foreground"}`,
            style: m.role === "user" ? { background: accent } : void 0,
            children: m.text
          }
        ),
        m.role === "user" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full bg-muted flex items-center justify-center text-foreground shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UserRound, { className: "w-3.5 h-3.5" }) })
      ] }, i)),
      typing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full flex items-center justify-center text-white", style: { background: accent }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "w-3.5 h-3.5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border border-border rounded-lg px-3 py-2 text-[13px] text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block animate-pulse", children: "thinking…" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: endRef })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: prompts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => send(p.q),
        className: "text-left px-3 py-1.5 text-[12px] border border-border rounded-full hover:border-primary/40 hover:bg-accent text-foreground",
        children: p.q
      },
      p.q
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "form",
      {
        onSubmit: (e) => {
          e.preventDefault();
          send(input);
        },
        className: "mt-3 flex items-center gap-2 border border-border rounded-md px-3 py-2",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: input,
              onChange: (e) => setInput(e.target.value),
              className: "flex-1 bg-transparent outline-none text-[13px] placeholder:text-muted-foreground",
              placeholder: "Ask anything about your people, data, or actions…"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "text-white rounded-md p-1.5", style: { background: accent }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-3.5 h-3.5" }) })
        ]
      }
    )
  ] });
}
export {
  AIInsight as A,
  CockpitShell as C,
  HRCopilot as H,
  MorningBriefing as M,
  ControlTower as a,
  AgentActivity as b,
  AttentionList as c,
  anupamNav as d,
  personaRegistry as e,
  priyaNav as p,
  rohitNav as r,
  slugify as s
};
