import type { ChartConfig } from "@/components/ui/chart";

type LabeledChartConfigEntry = ChartConfig[string] & { labelKey?: string };

type LabeledChartConfig = Record<string, LabeledChartConfigEntry>;

export function resolveChartConfig(config: LabeledChartConfig, t: (key: string) => string): ChartConfig {
  return Object.fromEntries(
    Object.entries(config).map(([key, entry]) => [
      key,
      entry.labelKey ? { ...entry, label: t(entry.labelKey) } : entry,
    ]),
  );
}

export const leadsChartData = [
  { date: "1-5", newLeads: 120, disqualified: 40 },
  { date: "6-10", newLeads: 95, disqualified: 30 },
  { date: "11-15", newLeads: 60, disqualified: 22 },
  { date: "16-20", newLeads: 100, disqualified: 35 },
  { date: "21-25", newLeads: 150, disqualified: 70 },
  { date: "26-30", newLeads: 110, disqualified: 60 },
];

export const leadsChartConfig = {
  newLeads: {
    label: "New Leads",
    labelKey: "newLeads",
    color: "var(--chart-1)",
  },
  disqualified: {
    label: "Disqualified",
    labelKey: "disqualified",
    color: "var(--chart-3)",
  },
  background: {
    color: "var(--primary)",
  },
} satisfies LabeledChartConfig;

export const proposalsChartData = [
  { date: "1-5", proposalsSent: 9 },
  { date: "6-10", proposalsSent: 16 },
  { date: "11-15", proposalsSent: 6 },
  { date: "16-20", proposalsSent: 18 },
  { date: "21-25", proposalsSent: 11 },
  { date: "26-30", proposalsSent: 14 },
];

export const proposalsChartConfig = {
  proposalsSent: {
    label: "Proposals Sent",
    labelKey: "proposalsSent",
    color: "var(--chart-1)",
  },
} satisfies LabeledChartConfig;

export const revenueChartData = [
  { month: "Jul 2024", revenue: 6700 },
  { month: "Aug 2024", revenue: 7100 },
  { month: "Sep 2024", revenue: 6850 },
  { month: "Oct 2024", revenue: 7500 },
  { month: "Nov 2024", revenue: 8000 },
  { month: "Dec 2024", revenue: 8300 },
  { month: "Jan 2025", revenue: 7900 },
  { month: "Feb 2025", revenue: 8400 },
  { month: "Mar 2025", revenue: 8950 },
  { month: "Apr 2025", revenue: 9700 },
  { month: "May 2025", revenue: 11200 },
  { month: "Jun 2025", revenue: 9500 },
];

export const revenueChartConfig = {
  revenue: {
    label: "Revenue",
    labelKey: "revenue",
    color: "var(--chart-1)",
  },
} satisfies LabeledChartConfig;

export const leadsBySourceChartData = [
  { source: "website", leads: 170, fill: "var(--color-website)" },
  { source: "referral", leads: 105, fill: "var(--color-referral)" },
  { source: "social", leads: 90, fill: "var(--color-social)" },
  { source: "cold", leads: 62, fill: "var(--color-cold)" },
  { source: "other", leads: 48, fill: "var(--color-other)" },
];

export const leadsBySourceChartConfig = {
  leads: {
    label: "Leads",
    labelKey: "leads",
  },
  website: {
    label: "Website",
    labelKey: "sourceWebsite",
    color: "var(--chart-1)",
  },
  referral: {
    label: "Referral",
    labelKey: "sourceReferral",
    color: "var(--chart-2)",
  },
  social: {
    label: "Social Media",
    labelKey: "sourceSocialMedia",
    color: "var(--chart-3)",
  },
  cold: {
    label: "Cold Outreach",
    labelKey: "sourceColdOutreach",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    labelKey: "sourceOther",
    color: "var(--chart-5)",
  },
} satisfies LabeledChartConfig;

export const projectRevenueChartData = [
  { name: "MVP Development", actual: 82000, target: 90000 },
  { name: "Consultation", actual: 48000, target: 65000 },
  { name: "Framer Sites", actual: 34000, target: 45000 },
  { name: "DevOps Support", actual: 77000, target: 90000 },
  { name: "LLM Training", actual: 68000, target: 80000 },
  { name: "Product Launch", actual: 52000, target: 70000 },
].map((row) => ({
  ...row,
  remaining: Math.max(0, row.target - row.actual),
}));

export const projectRevenueChartConfig = {
  actual: {
    label: "Actual",
    labelKey: "actual",
    color: "var(--chart-1)",
  },
  remaining: {
    label: "Remaining",
    labelKey: "remaining",
    color: "var(--chart-2)",
  },
  label: {
    color: "var(--primary-foreground)",
  },
} satisfies LabeledChartConfig;

export const salesPipelineChartData = [
  { stage: "Leads", labelKey: "stageLeads", value: 680, fill: "var(--chart-1)" },
  { stage: "Qualified", labelKey: "stageQualified", value: 480, fill: "var(--chart-2)" },
  { stage: "Proposal Sent", labelKey: "stageProposalSent", value: 210, fill: "var(--chart-3)" },
  { stage: "Negotiation", labelKey: "stageNegotiation", value: 120, fill: "var(--chart-4)" },
  { stage: "Won", labelKey: "stageWon", value: 45, fill: "var(--chart-5)" },
];

export const salesPipelineChartConfig = {
  value: {
    label: "Leads",
    labelKey: "leads",
    color: "var(--chart-1)",
  },
  stage: {
    label: "Stage",
    labelKey: "stage",
  },
} satisfies LabeledChartConfig;

export const regionSalesData = [
  {
    region: "North America",
    labelKey: "regionNorthAmerica",
    sales: 37800,
    percentage: 31,
    growth: "-3.2%",
    isPositive: false,
  },
  {
    region: "Europe",
    labelKey: "regionEurope",
    sales: 40100,
    percentage: 34,
    growth: "+9.4%",
    isPositive: true,
  },
  {
    region: "Asia Pacific",
    labelKey: "regionAsiaPacific",
    sales: 30950,
    percentage: 26,
    growth: "+12.8%",
    isPositive: true,
  },
  {
    region: "Latin America",
    labelKey: "regionLatinAmerica",
    sales: 12200,
    percentage: 7,
    growth: "-1.7%",
    isPositive: false,
  },
  {
    region: "Middle East & Africa",
    labelKey: "regionMiddleEastAfrica",
    sales: 2450,
    percentage: 2,
    growth: "+6.0%",
    isPositive: true,
  },
];

export const actionItems = [
  {
    id: 1,
    title: "Send kickoff docs",
    desc: "Send onboarding documents and timeline",
    due: "Due today",
    dueLabelKey: "dueToday",
    priority: "High",
    priorityLabelKey: "priorityHigh",
    priorityColor: "bg-red-100 text-red-700",
    checked: false,
  },
  {
    id: 2,
    title: "Demo call for SaaS MVP",
    desc: "Book Zoom call with client",
    due: "Due tomorrow",
    dueLabelKey: "dueTomorrow",
    priority: "Medium",
    priorityLabelKey: "priorityMedium",
    priorityColor: "bg-yellow-100 text-yellow-700",
    checked: true,
  },
  {
    id: 3,
    title: "Update case study",
    desc: "Add latest LLM project",
    due: "Due this week",
    dueLabelKey: "dueThisWeek",
    priority: "Low",
    priorityLabelKey: "priorityLow",
    priorityColor: "bg-green-100 text-green-700",
    checked: false,
  },
];

export const recentLeadsData = [
  {
    id: "L-1012",
    name: "Guillermo Rauch",
    company: "Vercel",
    status: "Qualified",
    statusLabelKey: "stageQualified",
    source: "Website",
    sourceLabelKey: "sourceWebsite",
    lastActivity: "30m ago",
  },
  {
    id: "L-1018",
    name: "Nizzy",
    company: "Mail0",
    status: "Qualified",
    statusLabelKey: "stageQualified",
    source: "Website",
    sourceLabelKey: "sourceWebsite",
    lastActivity: "35m ago",
  },
  {
    id: "L-1005",
    name: "Sahaj",
    company: "Tweakcn",
    status: "Negotiation",
    statusLabelKey: "stageNegotiation",
    source: "Website",
    sourceLabelKey: "sourceWebsite",
    lastActivity: "1h ago",
  },
  {
    id: "L-1001",
    name: "Shadcn",
    company: "Shadcn/ui",
    status: "Qualified",
    statusLabelKey: "stageQualified",
    source: "Website",
    sourceLabelKey: "sourceWebsite",
    lastActivity: "2h ago",
  },
  {
    id: "L-1003",
    name: "Sam Altman",
    company: "OpenAI",
    status: "Proposal Sent",
    statusLabelKey: "stageProposalSent",
    source: "Social Media",
    sourceLabelKey: "sourceSocialMedia",
    lastActivity: "4h ago",
  },
  {
    id: "L-1008",
    name: "Michael Andreuzza",
    company: "Lexington Themes",
    status: "Contacted",
    statusLabelKey: "statusContacted",
    source: "Social Media",
    sourceLabelKey: "sourceSocialMedia",
    lastActivity: "5h ago",
  },
  {
    id: "L-1016",
    name: "Skyleen",
    company: "Animate UI",
    status: "Proposal Sent",
    statusLabelKey: "stageProposalSent",
    source: "Referral",
    sourceLabelKey: "sourceReferral",
    lastActivity: "7h ago",
  },
  {
    id: "L-1007",
    name: "Arham Khan",
    company: "Weblabs Studio",
    status: "Won",
    statusLabelKey: "stageWon",
    source: "Website",
    sourceLabelKey: "sourceWebsite",
    lastActivity: "6h ago",
  },
  {
    id: "L-1011",
    name: "Sebastian Rindom",
    company: "Medusa",
    status: "Proposal Sent",
    statusLabelKey: "stageProposalSent",
    source: "Referral",
    sourceLabelKey: "sourceReferral",
    lastActivity: "10h ago",
  },
  {
    id: "L-1014",
    name: "Fred K. Schott",
    company: "Astro",
    status: "Contacted",
    statusLabelKey: "statusContacted",
    source: "Social Media",
    sourceLabelKey: "sourceSocialMedia",
    lastActivity: "12h ago",
  },
  {
    id: "L-1010",
    name: "Peer Richelsen",
    company: "Cal.com",
    status: "New",
    statusLabelKey: "statusNew",
    source: "Other",
    sourceLabelKey: "sourceOther",
    lastActivity: "8h ago",
  },
  {
    id: "L-1002",
    name: "Ammar Khnz",
    company: "BE",
    status: "Contacted",
    statusLabelKey: "statusContacted",
    source: "Referral",
    sourceLabelKey: "sourceReferral",
    lastActivity: "1d ago",
  },
  {
    id: "L-1015",
    name: "Toby",
    company: "Shadcn UI Kit ",
    status: "Negotiation",
    statusLabelKey: "stageNegotiation",
    source: "Other",
    sourceLabelKey: "sourceOther",
    lastActivity: "2d ago",
  },
  {
    id: "L-1006",
    name: "David Haz",
    company: "React Bits",
    status: "Qualified",
    statusLabelKey: "stageQualified",
    source: "Referral",
    sourceLabelKey: "sourceReferral",
    lastActivity: "2d ago",
  },
  {
    id: "L-1004",
    name: "Erşad",
    company: "Align UI",
    status: "New",
    statusLabelKey: "statusNew",
    source: "Cold Outreach",
    sourceLabelKey: "sourceColdOutreach",
    lastActivity: "3d ago",
  },
];
