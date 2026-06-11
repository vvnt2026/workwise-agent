import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export function DemoBadges({ compact = false }: { compact?: boolean }) {
  const [openAbout, setOpenAbout] = useState(false);
  const [openInteg, setOpenInteg] = useState(false);
  const size = compact ? "text-[11px] px-2.5 py-1" : "text-[12px] px-3 py-1.5";

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setOpenAbout(true)}
        className={`${size} rounded-full bg-amber-400 text-[#1a1a1a] font-semibold hover:bg-amber-300 transition-colors`}
      >
        ⚠ Illustrative Demo
      </button>
      <button
        onClick={() => setOpenInteg(true)}
        className={`${size} rounded-full bg-[#0f172a] text-[#22c55e] border border-[#22c55e] font-semibold hover:bg-[#1e293b] transition-colors`}
      >
        🔌 How It Connects
      </button>

      <Dialog open={openAbout} onOpenChange={setOpenAbout}>
        <DialogContent className="max-w-2xl bg-[#0f172a] text-slate-100 border-slate-700 max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-white text-xl">About This Demo</DialogTitle>
            <DialogDescription className="text-slate-300">
              This prototype was built to show what an Agentic Workforce Platform looks like when it knows your business — before we build the real thing together.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-[13.5px] leading-relaxed text-slate-200">
            <section>
              <div className="text-[#22c55e] font-semibold mb-1">✅ What's Real</div>
              <p>Bajaj Finserv entity structure (BFL, BAGIC, BALIC, BAM, Bajaj Markets, Bajaj Housing Finance, Bajaj Finserv Health), workforce scale (~1,04,668 employees), business unit dynamics, IRDA compliance requirements, DST→RM progression structure, post-Allianz integration context, seasonal claim surge patterns, XLRI/TMTC learning culture.</p>
            </section>
            <section>
              <div className="text-[#22c55e] font-semibold mb-1">📊 What's Modelled</div>
              <p>All numbers, scores, risk flags, attrition figures, cost estimates, SLA breach counts, AI inferences, timelines, agent activity logs. These are illustrative — derived from industry benchmarks and public data, not live Bajaj Finserv systems.</p>
            </section>
            <p className="text-slate-400 italic">This demo was built in days. The 2-week engagement replaces every assumption with your reality.</p>
            <div className="flex justify-end pt-2">
              <button onClick={() => setOpenAbout(false)} className="px-4 py-1.5 rounded-md bg-[#22c55e] text-[#0f172a] font-semibold text-[13px]">
                Got it
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={openInteg} onOpenChange={setOpenInteg}>
        <DialogContent className="max-w-2xl bg-[#0f172a] text-slate-100 border-slate-700 max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-white text-xl">Integration Architecture</DialogTitle>
            <DialogDescription className="text-slate-300">
              How agents connect to your existing enterprise systems
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-[13px] leading-relaxed text-slate-200">
            <Section title="Core HR Systems">
              <li>Workday / SAP SuccessFactors / Oracle Fusion HCM — Employee master, org structure, performance, compensation</li>
              <li>Salesforce — Field sales activity, DST login data, target tracking, territory data</li>
              <li>Group LMS — Learning completion, certification status, skill assessments</li>
            </Section>
            <Section title="Compliance & Regulatory">
              <li>IRDA Agent Portal — Licence status, renewal calendar, exam completion</li>
              <li>IRDAI Turnaround Dashboards — Claims SLA tracking, breach flags</li>
              <li>PF/ESIC Portals — Statutory compliance monitoring</li>
            </Section>
            <Section title="Communication & Collaboration">
              <li>Microsoft Teams / Slack — Pulse signals, manager inputs, nudge delivery</li>
              <li>Email / SMS Gateway — Employee-facing notifications and alerts</li>
            </Section>
            <Section title="Data & Security">
              <li>Private tenant deployment — your data never leaves your environment</li>
              <li>PII masking at source — sensitive data anonymised before agent processing</li>
              <li>Role-based access control — each persona sees only their authorised data</li>
              <li>DPDP Act compliant — India data protection framework adherent</li>
            </Section>
            <div className="flex justify-end pt-2">
              <button onClick={() => setOpenInteg(false)} className="px-4 py-1.5 rounded-md bg-[#22c55e] text-[#0f172a] font-semibold text-[13px]">
                Close
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="text-[#22c55e] font-semibold uppercase tracking-wider text-[11px] mb-1.5">{title}</div>
      <ul className="list-disc list-inside space-y-1 marker:text-slate-500">{children}</ul>
    </section>
  );
}

export function IllustrativeBanner() {
  return (
    <div className="bg-[#0f172a] text-amber-300/90 text-[11.5px] text-center py-1.5 border-b border-amber-500/30">
      Illustrative Demo · Modelled on Bajaj Finserv's public profile · Not connected to live systems
    </div>
  );
}
