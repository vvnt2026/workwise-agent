import type { ReactNode } from "react";

export type DetailTable = { cols: string[]; rows: (string | number)[][] };

export type KPI = {
  label: string;
  value: string;
  sub?: string;
  trend?: string;
  tone?: "default" | "critical" | "warning" | "healthy";
  detail?: DrillDetail;
};

export type AttentionItem = {
  priority: "critical" | "warning" | "healthy";
  title: string;
  detail: string;
  action: string;
  drill?: DrillDetail;
};

export type AgentRun = { agent: string; message: string; time: string };

export type CopilotPrompt = { q: string; a: string };

export type AIInsightDetail = {
  title: string;
  body: string;
  confidence: string;
  sources: string[];
  drill?: DrillDetail;
};

export type DrillDetail = {
  headline: string;
  narrative?: ReactNode;
  bullets?: string[];
  table?: DetailTable;
  actions?: string[];
  agenticRead?: string;
  sources?: string[];
  confidence?: string;
  // Optional overrides used by the dynamic section page
  kpiOverrides?: KPI[];
  aiInsight?: AIInsightDetail;
  attentionOverrides?: AttentionItem[];
  agentRuns?: AgentRun[];
};
