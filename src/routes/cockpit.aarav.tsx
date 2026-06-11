import { createFileRoute } from "@tanstack/react-router";
import { CockpitShell } from "@/components/cockpit/CockpitShell";
import { MorningBriefing, ControlTower, AIInsight, AgentActivity, AttentionList, HRCopilot } from "@/components/cockpit/CockpitSections";
import { Award } from "lucide-react";

export const Route = createFileRoute("/cockpit/aarav")({
  head: () => ({ meta: [{ title: "Aarav Mehta · Day 23 · Bajaj Finance" }] }),
  component: Page,
});

const GREEN = "#16a34a";

function ProbationRing({ day = 23, total = 90 }: { day?: number; total?: number }) {
  const pct = (day / total) * 100;
  const r = 32;
  const c = 2 * Math.PI * r;
  const dash = (pct / 100) * c;
  return (
    <div className="flex items-center gap-3">
      <svg width="80" height="80" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r={r} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="6" />
        <circle cx="40" cy="40" r={r} fill="none" stroke="#22c55e" strokeWidth="6" strokeLinecap="round" strokeDasharray={`${dash} ${c}`} transform="rotate(-90 40 40)" />
        <text x="40" y="44" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff">{day}</text>
      </svg>
      <div className="text-[11px] text-sidebar-foreground/70">
        <div className="font-semibold text-sidebar-foreground">Day {day} of {total}</div>
        <div>Probation tracker</div>
        <div className="text-healthy">On track</div>
      </div>
    </div>
  );
}

function Page() {
  return (
    <CockpitShell
      accent={GREEN}
      persona={{
        initials: "AM",
        name: "Aarav Mehta",
        role: "Sales Officer · Consumer Lending",
        entity: "Bajaj Finance · Mumbai",
        location: "Andheri & Goregaon · Day 23 of 90",
        navLinks: [
          { label: "My 90-day Journey" },
          { label: "My Learning" },
          { label: "My Incentives" },
          { label: "My Documents" },
          { label: "My Buddy" },
          { label: "Raise a Request" },
        ],
        widgets: <ProbationRing day={23} total={90} />,
      }}
      personaSlug="aarav"
      headerCenter="Aarav Mehta · Sales Officer · BFL Mumbai · Day 23"
      contextStrip="Good morning, Aarav — Day 23. You have 67 days to show your best. Let's win today."
    >
      <MorningBriefing>
        Good morning, Aarav! Day 23 — you're in the zone where the best performers start pulling ahead. You
        have 8 disbursals so far this month. Vijay Sales Goregaon has 3 walk-in applications waiting since
        yesterday — visiting them first thing could put you at 11 by noon. Your IRDA cert is 2 modules away —
        finishing it this week unlocks 3 more products you can sell. Rajan (your buddy) suggested the Andheri
        West territory has strong walk-in conversion on Fridays. Today is your day — let's go.
      </MorningBriefing>

      <ControlTower
        accent={GREEN}
        kpis={[
          { label: "My disbursals this month", value: "8", sub: "Ahead of 64% of your batch", tone: "healthy" },
          { label: "My incentive earned so far", value: "₹4,800", sub: "Hit 14 → ₹8,400 this month" },
          { label: "My IRDA cert progress", value: "5 / 7", sub: "2 modules left · 60 mins total", tone: "warning" },
          { label: "My pending documents", value: "2", sub: "Quick wins for today", tone: "warning" },
          { label: "Buddy last connected", value: "5 days ago", sub: "Rajan is free today 4–4:30pm" },
          { label: "Next milestone", value: "Day 30 review", sub: "7 days away · target 14 disbursals", tone: "healthy" },
        ]}
      />

      <section className="bg-gradient-to-r from-amber-50 to-white border border-amber-200 rounded-lg p-5 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center text-white">
          <Award className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="text-[14px] font-semibold">First 5 disbursals — Day 18!</div>
          <div className="text-[12.5px] text-muted-foreground">You're ahead of 64% of new SOs at this point. Keep going.</div>
        </div>
      </section>

      <AIInsight
        accent={GREEN}
        showDisagree={false}
        title="3 applications waiting at Vijay Sales Goregaon — visiting today puts you in a new incentive tier"
        body={`Your agent tracked 3 walk-in loan applications at Vijay Sales Goregaon that came in yesterday afternoon. Based on the application profiles, 2 of the 3 are likely to convert (salaried, clean bureau, within product eligibility).

You're currently at 8 disbursals. Converting these 2 puts you at 10. 4 more after that (by month end) tips you into the ₹720/disbursal slab — that's ₹2,880 more for the same effort.

The branch is 2.3 km from where you are now. Best time to visit: before 11am when the owner is available. Rajan visited this branch on his Day 22 and converted 2 of 3 applications. He can give you a quick brief before you go.`}
        confidence="High"
        sources={["Branch pipeline · Goregaon", "Cohort conversion model", "Rajan's playbook"]}
      />

      <AIInsight
        accent={GREEN}
        showDisagree={false}
        title="Your IRDA cert is 60 minutes away — and it unlocks ₹2,400 more per month"
        body={`You have 2 modules left in your IRDA cert — Module 6 (32 mins) and Module 7 (28 mins). Total: 60 minutes.

Once certified, you unlock 3 additional products: Home Loan cross-sell, Personal Loan Gold, and Consumer Durable Loan.

SOs who get certified by Day 25 earn ₹2,400 more in average monthly incentive than those who complete it after Day 40 — simply because they sell more products earlier in the month.

You have 7 days before your Day 30 review. Your manager will ask about your cert progress. Finishing it today means you go into that review with a ✅ not a 🟡.

Recommended: Do Module 6 during your commute to Goregaon this morning.`}
        confidence="High"
        sources={["BFL Learning Path", "Batch earnings data", "Product unlock matrix"]}
      />

      <AIInsight
        accent={GREEN}
        showDisagree={false}
        title="You're 7 days from your first performance review — here is exactly what matters"
        body={`Your Day 30 review with your branch manager will look at 4 things:

1. Disbursal count (target: 14 by Day 30)
2. IRDA cert complete (yes/no)
3. CRM usage — are you logging every customer interaction?
4. Pending documents cleared (yes/no)

You're at 8 disbursals with 7 days to go — 14 is absolutely reachable. The cert is 60 minutes away. Your CRM login streak is strong (22 of 23 days — top 15% of your batch). The only open item: 2 pending documents that take 4 minutes each.

If you clear those today, you walk into Day 30 with 3 of 4 boxes checked before you even hit the disbursal target.

Smart move: do the documents tonight.`}
        confidence="High"
        sources={["Day 30 review criteria", "Your CRM activity", "Batch ranking model"]}
      />

      <AgentActivity
        runs={[
          { agent: "Your Performance Agent", message: "Vijay Sales Goregaon · 3 walk-ins waiting · 2 high conversion probability.", time: "06:30" },
          { agent: "Your Learning Agent", message: "IRDA Module 6 queued for your commute · 32 mins · audio-friendly.", time: "06:45" },
          { agent: "Your Incentive Agent", message: "At 14 disbursals: ₹8,400 · at 20: ₹13,800 · slab jump at 15.", time: "07:00" },
          { agent: "Your Buddy Agent", message: "Rajan is free 4:00–4:30pm today · calendar invite ready to send.", time: "07:10" },
          { agent: "Your Documents Agent", message: "PF nomination + branch photo: 8 mins total · clears salary risk.", time: "07:15" },
        ]}
      />

      <AttentionList
        accent={GREEN}
        items={[
          {
            priority: "healthy",
            title: "Visit Vijay Sales Goregaon before 11am",
            detail: "3 applications waiting · 2 likely to convert · 2.3 km away",
            action: "Open",
          },
          {
            priority: "healthy",
            title: "Do IRDA Module 6 on your commute",
            detail: "32 mins · audio-friendly · unlocks 3 new products",
            action: "Start",
          },
          {
            priority: "healthy",
            title: "Upload PF nomination + branch photo tonight",
            detail: "8 minutes total · clears salary risk · ✅ box for Day 30 review",
            action: "Upload",
          },
          {
            priority: "healthy",
            title: "Message Rajan to confirm 4pm today",
            detail: "Ask him about Goregaon branch + relationship territory tips",
            action: "Message",
          },
        ]}
      />

      <HRCopilot
        accent={GREEN}
        personaName="Aarav"
        prompts={[
          {
            q: "What will I earn if I hit 20 disbursals?",
            a: "Hitting 20 disbursals this month = ₹11,400 incentive 🎉\n\nSlab breakdown:\n• Disbursals 1–5: 5 × ₹500 = ₹2,500\n• Disbursals 6–14: 9 × ₹600 = ₹5,400\n• Disbursals 15–20: 6 × ₹720 = ₹4,320\nTOTAL = ₹12,220 (rounded benchmark ₹11,400 after quality adjustments)\n\n💡 Vijay Sales Goregaon has 3 walk-ins waiting today — that gets you to 11. You're already 55% of the way to ₹11,400.",
          },
          {
            q: "How am I doing vs my probation goals?",
            a: "You're on track 🎯. 8 disbursals at Day 23 · IRDA cert 60 mins away · CRM streak 22 of 23 days (top 15% of batch) · Day-16 manager check-in positive. You're ahead of 64% of your batch. Top 10% are at 12 disbursals — closeable in 5 working days with Goregaon + Croma pipelines.",
          },
          {
            q: "When will my next incentive payout hit?",
            a: "₹4,800 earned so far this month · projected ₹8,400 at 14 disbursals · payout hits with salary cycle on the last working day. Hit 15 to unlock the higher ₹720 slab — that one extra disbursal makes every one after worth more.",
          },
          {
            q: "Suggest a learning plan for the next 30 days",
            a: "Finish IRDA cert by Friday (Module 6 today on commute, Module 7 tonight) — unlocks 3 new product lines and +₹2,400/month avg incentive. Start Home Loan Basics Day 30 and Cross-Sell Fundamentals Day 45 — each one expands what you can attach on every walk-in.",
          },
        ]}
      />
    </CockpitShell>
  );
}
