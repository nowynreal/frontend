import type { UserRole } from "@/types/database";

type MarketingNavLink = {
  label: string;
  href: string;
};

type MarketingNavItem = MarketingNavLink & {
  children?: MarketingNavLink[];
};

type ReferenceLogo = {
  type: "text" | "image";
  label: string;
  href?: string;
  src?: string;
  sizeClass?: string;
  caseStudySlug?: string;
};

export const marketingNav: MarketingNavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About", href: "/about" },
      
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Services", href: "/services" },
      { label: "Process", href: "/services#process" },
      { label: "Operations", href: "/services#operations" },
      { label: "Supplier Qualification", href: "/services#supplier-qualification" },
      { label: "Industries", href: "/services#industries" },
    ],
  },
  {
    label: "References",
    href: "/references",
    children: [
      { label: "References", href: "/references" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "Case Studies", href: "/case-studies" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const marketingNavFooter: MarketingNavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/#process" },
  { label: "References", href: "/references" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export const portalNav = [
  { label: "Dashboard", href: "/portal" },
  { label: "Projects", href: "/portal/projects" },
  { label: "Documents", href: "/portal/documents" },
  { label: "Tasks", href: "/portal/tasks" },
  { label: "Messages", href: "/portal/messages" },
  { label: "Reports", href: "/portal/reports" },
  { label: "Profile", href: "/portal/profile" },
];

export const adminNav = [
  { label: "CRM Dashboard", href: "/admin" },
  { label: "Leads", href: "/admin/leads" },
  { label: "Companies", href: "/admin/companies" },
  { label: "Projects", href: "/admin/projects" },
  { label: "Documents", href: "/admin/documents" },
  { label: "Tasks", href: "/admin/tasks" },
  { label: "Messages", href: "/admin/messages" },
  { label: "Reports", href: "/admin/reports" },
  { label: "Team", href: "/admin/team" },
  { label: "Settings", href: "/admin/settings" },
];

export const referenceLogos: ReferenceLogo[] = [
  {
    type: "text",
    label: "Anatolian Harvest",
    caseStudySlug: "anatolian-harvest",
  },
  { type: "text", label: "Bosporus Beauty" },
  {
    type: "text",
    label: "Ephesus Botanics",
    caseStudySlug: "ephesus-botanics",
  },
  {
    type: "image",
    label: "AKBOR",
    src: "/akbor.png",
    href: "http://www.akbor.com.tr",
    sizeClass: "h-24",
  },
  {
    type: "image",
    label: "OVA UN",
    src: "/ova-un-logo.png",
    href: "https://www.ovaun.com.tr",
    sizeClass: "h-24",
  },
  {
    type: "image",
    label: "MAXIMUM MARKET",
    src: "/maximum-logo.webp",
    href: "https://maximumgrocery.square.site",
    sizeClass: "h-9",
  },
  {
    type: "text",
    label: "Marmara Naturals",
    caseStudySlug: "marmara-naturals",
  },
  { type: "text", label: "Ankara Textiles" },
  { type: "text", label: "Izmir Home" },
];

export const trustCards = [
  {
    title: "U.S. compliance clarity",
    description:
      "We translate FDA, labeling, and documentation rules into clear action steps.",
  },
  {
    title: "Market entry readiness",
    description:
      "Position your products for buyers, distributors, and marketplaces with confidence.",
  },
  {
    title: "On-the-ground execution",
    description:
      "Launch with U.S. partners, retail outreach, and operational follow-through.",
  },
];

export const services = [
  {
    title: "U.S. Market Entry Roadmap",
    description:
      "A structured plan covering compliance, positioning, and go-to-market milestones.",
    includes: [
      "Entry strategy workshop",
      "Compliance gap analysis",
      "Competitive landscape overview",
      "Timeline and budget planning",
    ],
    idealFor: "Export-ready brands preparing for their first U.S. launch.",
    cta: "Book roadmap session",
  },
  {
    title: "FDA & Compliance Preparation",
    description:
      "Ensure packaging, labeling, and documentation meet U.S. regulatory standards.",
    includes: [
      "Label review and claims audit",
      "Registration readiness checklist",
      "Importer requirements briefing",
      "Compliance documentation support",
    ],
    idealFor: "Food, cosmetics, and supplement brands needing U.S. compliance support.",
    cta: "Request compliance review",
  },
  {
    title: "Amazon USA Launch Support",
    description:
      "Launch or relaunch on Amazon with localized positioning and ops readiness.",
    includes: [
      "Listing and A+ content guidance",
      "FBA/3PL setup coordination",
      "Pricing and promotion plan",
      "U.S. customer service playbook",
    ],
    idealFor: "Brands targeting direct-to-consumer growth in the U.S.",
    cta: "Plan Amazon launch",
  },
  {
    title: "Retail & Distributor Outreach",
    description:
      "Open conversations with U.S. retailers, distributors, and buyers.",
    includes: [
      "Go-to-market materials",
      "Buyer outreach strategy",
      "Pitch coaching",
      "Distributor shortlist building",
    ],
    idealFor: "Manufacturers seeking shelf placement or distribution partners.",
    cta: "Start outreach",
  },
  {
    title: "Full U.S. Expansion Partnership",
    description:
      "Ongoing collaboration covering compliance, launch, and growth operations.",
    includes: [
      "Dedicated account lead",
      "Monthly strategic reporting",
      "Cross-border operations support",
      "Retail and channel expansion",
    ],
    idealFor: "Growth-focused exporters ready for long-term U.S. presence.",
    cta: "Discuss partnership",
  },
];

export const industries = [
  "Food & Beverage",
  "Cosmetics & Personal Care",
  "Supplements",
  "Textile & Fashion",
  "Home Goods",
  "Specialty Turkish Products",
];

export const processSteps = [
  "Discovery Call",
  "Product & Company Review",
  "Compliance Checklist",
  "Documentation Preparation",
  "Market Research",
  "Outreach / Launch Support",
  "Reporting & Next Steps",
];

export const proofStrip = [
  {
    title: "Compliance package",
    detail: "Label review, claims check, ingredient file, importer notes",
  },
  {
    title: "Market entry assets",
    detail: "Buyer-ready deck, pricing sheet, channel positioning",
  },
  {
    title: "Launch ops",
    detail: "3PL onboarding, CBP coordination, shipment readiness",
  },
];

export const operationalCoverage = [
  {
    title: "U.S. presence",
    detail: "Local coordination across U.S. time zones and partners.",
  },
  {
    title: "Cross-border execution",
    detail: "Bridge Turkish production teams with U.S. buyers and brokers.",
  },
  {
    title: "Documentation control",
    detail: "Centralized compliance files, HS codes, and shipment checklists.",
  },
];

export const deliverables = [
  {
    title: "Compliance readiness",
    bullets: [
      "FDA label and claims audit",
      "Ingredient and COA file assembly",
      "Importer-of-record briefing",
    ],
  },
  {
    title: "Commercial launch",
    bullets: [
      "Buyer outreach list and CRM notes",
      "Channel pricing and margin model",
      "U.S. product positioning summary",
    ],
  },
  {
    title: "Operational rollout",
    bullets: [
      "3PL/FBA readiness checklist",
      "Shipment documentation pack",
      "Monthly execution reporting",
    ],
  },
];

export const industryNotes = [
  {
    industry: "Food & Beverage",
    note: "FDA facility registration, nutrition labeling, prior notice.",
  },
  {
    industry: "Cosmetics & Personal Care",
    note: "INCI labeling, MoCRA readiness, claims substantiation.",
  },
  {
    industry: "Supplements",
    note: "Dietary supplement facts, structure/function review.",
  },
  {
    industry: "Textile & Fashion",
    note: "HS code mapping, fiber content labels, duty planning.",
  },
  {
    industry: "Home Goods",
    note: "Safety documentation, packaging compliance, retailer specs.",
  },
  {
    industry: "Specialty Turkish Products",
    note: "Customs classification, cultural positioning, retail storytelling.",
  },
];

export const caseStudies = [
  {
    slug: "anatolian-harvest",
    company: "Anatolian Harvest",
    sector: "Specialty food exporter",
    focus: "FDA readiness and distribution launch",
    summary:
      "Compliance pack and first regional distributor secured in 12 weeks.",
    challenge:
      "Needed FDA-ready labeling, importer coordination, and a first U.S. distribution partner.",
    result:
      "Completed compliance documentation and secured a regional distributor within 12 weeks.",
    highlights: [
      "Label and claims audit",
      "Importer-of-record coordination",
      "Distributor outreach shortlist",
    ],
  },
  {
    slug: "ephesus-botanics",
    company: "Ephesus Botanics",
    sector: "Cosmetics and personal care",
    focus: "MoCRA compliance and packaging refresh",
    summary: "MoCRA-ready documentation with retail-ready packaging updates.",
    challenge:
      "Required MoCRA readiness, ingredient documentation, and localized packaging claims.",
    result:
      "Delivered compliance file and retail-ready packaging refresh for U.S. buyers.",
    highlights: [
      "MoCRA checklist and file build",
      "INCI and claims review",
      "Retail readiness briefing",
    ],
  },
  {
    slug: "marmara-naturals",
    company: "Marmara Naturals",
    sector: "Supplements manufacturer",
    focus: "FBA onboarding and documentation pack",
    summary: "FBA onboarding plus FDA documentation pack delivered.",
    challenge:
      "Needed FBA onboarding, importer coordination, and a complete FDA documentation set.",
    result:
      "Coordinated 3PL setup, documentation pack, and launch timeline delivery.",
    highlights: [
      "FBA/3PL onboarding",
      "FDA documentation pack",
      "Launch timeline coordination",
    ],
  },
];

export const caseStudiesPreview = caseStudies.map((study) => ({
  company: study.company,
  focus: study.sector,
  outcome: study.summary,
}));

export const serviceOptions = services.map((service) => service.title);
export const industryOptions = industries;
export const stageOptions = [
  "Exploring U.S. market",
  "Preparing compliance documents",
  "Ready to launch",
  "Active in the U.S. market",
];

export const sampleClientDashboard = {
  companyName: "Marmara Naturals",
  activeProject: "FDA & Compliance Preparation",
  currentPhase: "Documentation Preparation",
  status: "On track",
  nextAction: "Upload ingredient certificates",
  missingDocuments: ["Ingredient specs", "GMP certificates"],
  recentUpdates: [
    "Label audit completed and shared with your team.",
    "Importer of record options sent for review.",
  ],
};

export const sampleProjects = [
  {
    id: "proj-01",
    serviceType: "FDA & Compliance Preparation",
    status: "compliance_review",
    currentPhase: "Documentation Preparation",
    startDate: "2026-04-05",
    dueDate: "2026-06-15",
    progress: 62,
  },
  {
    id: "proj-02",
    serviceType: "Retail & Distributor Outreach",
    status: "market_research",
    currentPhase: "Market Research",
    startDate: "2026-05-01",
    dueDate: "2026-08-10",
    progress: 28,
  },
];

export const sampleDocuments = [
  {
    id: "doc-01",
    name: "Label artwork v3",
    type: "Packaging",
    uploadedBy: "Client",
    uploadDate: "2026-05-04",
    status: "needs_revision",
    clientNotes: "Update net weight in ounces.",
    internalNotes: "FDA statement missing.",
  },
  {
    id: "doc-02",
    name: "GMP certificate",
    type: "Compliance",
    uploadedBy: "Client",
    uploadDate: "2026-05-08",
    status: "approved",
    clientNotes: "Approved for submission.",
    internalNotes: "Valid until 2027-03.",
  },
];

export const sampleTasks = [
  {
    id: "task-01",
    title: "Share ingredient list",
    description: "Provide ingredient list with percentages for FDA review.",
    dueDate: "2026-05-20",
    status: "in_progress",
    assignedTo: "Client",
    projectId: "proj-01",
  },
  {
    id: "task-02",
    title: "Confirm U.S. warehousing option",
    description: "Select preferred 3PL partner from shortlist.",
    dueDate: "2026-05-28",
    status: "todo",
    assignedTo: "Client",
    projectId: "proj-02",
  },
];

export const sampleMessages = [
  {
    id: "msg-01",
    project: "FDA & Compliance Preparation",
    from: "Consulting Team",
    preview: "We reviewed the new label artwork and added notes.",
    date: "2026-05-10",
  },
  {
    id: "msg-02",
    project: "Retail & Distributor Outreach",
    from: "Client",
    preview: "Can we prioritize premium grocery chains in the Midwest?",
    date: "2026-05-12",
  },
];

export const sampleReports = [
  {
    id: "rep-01",
    title: "Week 4 Market Entry Report",
    summary: "Compliance checklist is 70% complete; outreach prep underway.",
    createdDate: "2026-05-09",
    project: "FDA & Compliance Preparation",
  },
];

export const crmMetrics = [
  { label: "New leads", value: 18 },
  { label: "Active clients", value: 12 },
  { label: "Active projects", value: 9 },
  { label: "Documents to review", value: 6 },
  { label: "Tasks due soon", value: 11 },
];

export const sampleLeads = [
  {
    id: "lead-01",
    fullName: "Selin Aydin",
    companyName: "Ephesus Botanics",
    email: "selin@ephesusbotanics.com",
    phone: "+90 212 555 8899",
    country: "Turkey",
    industry: "Cosmetics & Personal Care",
    website: "https://ephesusbotanics.com",
    productType: "Natural skincare",
    desiredService: "FDA & Compliance Preparation",
    stage: "Preparing compliance documents",
    status: "contacted" as const,
    assignedTo: "Cem Koc",
    createdAt: "2026-05-03",
  },
  {
    id: "lead-02",
    fullName: "Ahmet Yilmaz",
    companyName: "Anatolian Harvest",
    email: "ahmet@anatolianharvest.com",
    phone: "+90 232 555 3322",
    country: "Turkey",
    industry: "Food & Beverage",
    website: "https://anatolianharvest.com",
    productType: "Gourmet preserves",
    desiredService: "U.S. Market Entry Roadmap",
    stage: "Exploring U.S. market",
    status: "new" as const,
    assignedTo: "Unassigned",
    createdAt: "2026-05-11",
  },
];

export const sampleCompanies = [
  {
    id: "comp-01",
    name: "Marmara Naturals",
    industry: "Supplements",
    country: "Turkey",
    website: "https://marmaranaturals.com",
    contactPerson: "Ece Kaya",
    contactEmail: "ece@marmaranaturals.com",
    phone: "+90 216 555 2288",
    status: "active",
  },
];

export const sampleAdminProjects = [
  {
    id: "proj-01",
    company: "Marmara Naturals",
    serviceType: "FDA & Compliance Preparation",
    status: "compliance_review",
    currentPhase: "Documentation Preparation",
    progress: 62,
    startDate: "2026-04-05",
    dueDate: "2026-06-15",
  },
  {
    id: "proj-02",
    company: "Ephesus Botanics",
    serviceType: "Retail & Distributor Outreach",
    status: "market_research",
    currentPhase: "Market Research",
    progress: 28,
    startDate: "2026-05-01",
    dueDate: "2026-08-10",
  },
];

export const sampleTeam = [
  {
    id: "team-01",
    name: "Cem Koc",
    role: "Senior Market Entry Lead",
    email: "cem@anatoliabridge.com",
    territory: "U.S. East Coast",
  },
  {
    id: "team-02",
    name: "Derya Erdem",
    role: "Compliance Specialist",
    email: "derya@anatoliabridge.com",
    territory: "Regulatory",
  },
];

export const roleLabels: Record<UserRole, string> = {
  admin: "Admin",
  team_member: "Team Member",
  client: "Client",
};
