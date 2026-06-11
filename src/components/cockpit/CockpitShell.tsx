import { Link } from "@tanstack/react-router";
import { Bell, Settings } from "lucide-react";
import { type ReactNode } from "react";
import bajajLogo from "@/assets/bajaj-logo.svg.asset.json";
import type { DrillDetail } from "./types";
import { slugify } from "./personaRegistry";
import { DemoBadges, IllustrativeBanner } from "./DemoBadges";

export type NavItem = {
  label: string;
  icon?: string;
  badge?: string;
  detail?: DrillDetail;
  href?: string;
};

export type NavGroup = {
  heading: string;
  items: NavItem[];
};

export type Persona = {
  initials: string;
  name: string;
  role: string;
  entity: string;
  location?: string;
  avatarColor?: string;
  navLinks?: NavItem[];
  navGroups?: NavGroup[];
  widgets?: ReactNode;
};

export function CockpitShell({
  persona,
  personaSlug,
  headerCenter,
  contextStrip,
  accent = "#1a56db",
  children,
}: {
  persona: Persona;
  personaSlug?: string;
  headerCenter: string;
  contextStrip: string;
  accent?: string;
  children: ReactNode;
}) {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const avatarBg = persona.avatarColor ?? accent;

  const renderItem = (item: NavItem) => {
    const inner = (
      <>
        {item.icon && <span className="text-[14px] leading-none">{item.icon}</span>}
        <span className="flex-1 truncate">{item.label}</span>
        {item.badge && (
          <span className="text-[9.5px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-sidebar-accent text-sidebar-foreground/70">
            {item.badge}
          </span>
        )}
      </>
    );
    const cls =
      "w-full text-left px-3 py-2 text-[12.5px] rounded-md hover:bg-sidebar-accent transition-colors text-sidebar-foreground/85 flex items-center gap-2";
    if (personaSlug) {
      return (
        <Link
          key={item.label}
          to="/cockpit/$persona/$section"
          params={{ persona: personaSlug, section: slugify(item.label) }}
          className={cls}
          activeProps={{ className: cls + " bg-sidebar-accent text-sidebar-foreground" }}
        >
          {inner}
        </Link>
      );
    }
    return (
      <div key={item.label} className={cls}>
        {inner}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 inset-x-0 h-14 bg-white border-b border-border z-30 flex items-center px-5">
        <Link to="/" className="flex items-center gap-3">
          <img src={bajajLogo.url} alt="Bajaj" className="h-7 w-auto" />
          <span className="hidden md:inline text-[12.5px] text-muted-foreground border-l border-border pl-3">
            Agentic Workforce Platform
          </span>
        </Link>
        <div className="flex-1 flex justify-center">
          <span className="text-[13px] text-foreground font-medium">{headerCenter}</span>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <span className="hidden lg:inline text-[12px]">{today}</span>
          <button className="hover:text-foreground"><Bell className="w-4 h-4" /></button>
          <button className="hover:text-foreground"><Settings className="w-4 h-4" /></button>
          <DemoBadges compact />
        </div>
      </header>

      <div
        className="fixed top-14 inset-x-0 h-9 z-20 flex items-center px-5 text-white text-[12.5px]"
        style={{ background: accent }}
      >
        {contextStrip}
      </div>

      <div className="fixed top-[92px] inset-x-0 z-20">
        <IllustrativeBanner />
      </div>

      <aside className="fixed top-[120px] bottom-0 left-0 w-[260px] bg-sidebar text-sidebar-foreground z-10 overflow-y-auto border-r border-sidebar-border">
        <div className="p-5 border-b border-sidebar-border">
          {personaSlug ? (
            <Link to="/cockpit/$persona" params={{ persona: personaSlug }} className="flex items-center gap-3 hover:opacity-90">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                style={{ background: avatarBg }}
              >
                {persona.initials}
              </div>
              <div className="min-w-0">
                <div className="text-[13px] font-semibold truncate">{persona.name}</div>
                <div className="text-[11px] text-sidebar-foreground/60 truncate">{persona.role}</div>
              </div>
            </Link>
          ) : (
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                style={{ background: avatarBg }}
              >
                {persona.initials}
              </div>
              <div className="min-w-0">
                <div className="text-[13px] font-semibold truncate">{persona.name}</div>
                <div className="text-[11px] text-sidebar-foreground/60 truncate">{persona.role}</div>
              </div>
            </div>
          )}
          <div className="mt-3 text-[11px] text-sidebar-foreground/70">{persona.entity}</div>
          {persona.location && (
            <div className="text-[11px] text-sidebar-foreground/50">{persona.location}</div>
          )}
        </div>

        <nav className="p-3 space-y-3">
          {persona.navGroups
            ? persona.navGroups.map((g) => (
                <div key={g.heading}>
                  <div className="px-2 py-2 text-[10px] uppercase tracking-wider text-sidebar-foreground/40 font-semibold">
                    {g.heading}
                  </div>
                  {g.items.map(renderItem)}
                </div>
              ))
            : (
              <div>
                <div className="px-2 py-2 text-[10px] uppercase tracking-wider text-sidebar-foreground/40 font-semibold">
                  Navigate
                </div>
                {(persona.navLinks ?? []).map(renderItem)}
              </div>
            )}
        </nav>
        {persona.widgets && <div className="p-4 border-t border-sidebar-border">{persona.widgets}</div>}
      </aside>

      <main className="pt-[120px] pl-[260px]">
        <div className="max-w-[1400px] mx-auto p-6 space-y-6">{children}</div>
      </main>
    </div>
  );
}
