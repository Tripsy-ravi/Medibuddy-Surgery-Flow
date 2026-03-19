// Sections drive the table of contents and main narrative.
// Add, remove, or reorder sections here without touching the UI layer.
export const sections = [
  {
    id: "disclosure",
    eyebrow: "Disclosure",
    title: "Disclaimer & Document Control",
    summary:
      "This BRD captures the agreed scope for v1 of the MediBuddy × Superleap CRM implementation and will guide configuration and build.",
    blocks: [
      {
        type: "callout",
        tone: "neutral",
        title: "Document Governance",
        content:
          "This document supersedes prior notes where conflicts exist. Any changes require written approval from both MediBuddy and Superleap owners."
      },
      {
        type: "table",
        title: "Document History",
        columns: ["Date", "Version", "Change Log", "Author"],
        rows: [
          ["19 Mar 2026", "1.0", "Initial draft based on MOMs + flow reference", "Ravi, Jaydeep"]
        ]
      }
    ]
  },
  {
    id: "objective",
    eyebrow: "Objective",
    title: "Project Objective",
    summary:
      "Deliver a CRM backbone for MediBuddy Surgery that unifies lead intake, operational workflows, and reporting while preserving current business logic.",
    blocks: [
      {
        type: "list",
        title: "Primary Outcomes",
        items: [
          "Single source of truth for Surgery opportunities across teams",
          "Configurable deduplication and lead ownership rules",
          "Four-form architecture with intelligent auto-fill",
          "End-to-end visibility across CareBuddy, CST, Clinical Coordinator, Scheduling, and FinOps",
          "Automated reporting with hierarchy roll-up and category filters",
          "CRM data available for internal data lake or preferred connector"
        ]
      },
      {
        type: "callout",
        tone: "info",
        title: "Scope Guardrails",
        content:
          "This BRD focuses on Surgery. Additional workflows for Dental or other treatment types will be handled in a follow-on versions."
      }
    ]
  },
  {
    id: "program-snapshot",
    eyebrow: "Snapshot",
    title: "Program Snapshot (From SoW)",
    summary:
      "Key commercial and program facts to align expectations and leadership context.",
    blocks: [
      {
        type: "list",
        title: "Key Facts",
        items: [
          "Business model: B2C healthcare journeys (OPD, IPD, surgeries)",
          "Operating footprint: Pan‑India (HQ: Bengaluru)",
          "Seats at go‑live: 350",
          "Current tools being replaced: LeadSquared, Convin",
          "Target go‑live date: 5 May 2026",
          "Executive sponsor: Diwanshu Agarwal (Director – Category & Sales)",
          "Day‑to‑day PoC: Suman Joshi (Group Manager – Sales Ops, Surgery)"
        ]
      }
    ]
  },
  {
    id: "pain-points",
    eyebrow: "Pain Points",
    title: "What’s Broken Today & How Superleap Solves It",
    summary:
      "Pain points captured in the SoW are addressed directly in the CRM design and implementation.",
    blocks: [
      {
        type: "cards",
        title: "Pain Point → Superleap Response",
        items: [
          {
            title: "Fragmented opportunity management (Retool dependency)",
            description:
              "Superleap centralizes opportunity workflows with native forms, smart views, and configurable rules."
          },
          {
            title: "Manual coordination across teams",
            description:
              "Team-specific forms and task automation ensure clean handoffs with clear ownership and timelines."
          },
          {
            title: "Limited reporting and system visibility",
            description:
              "Automated dashboards, hierarchy roll-ups, and category filters provide leadership-level visibility."
          },
          {
            title: "System speed and ease of use",
            description:
              "Streamlined UI, fewer conditional fields, and focused workflows improve usability for large teams."
          },
          {
            title: "Call analysis limited by external tools (Convin cap)",
            description:
              "Superleap Voice AI and call analytics unify insights and remove external tool dependency."
          }
        ]
      }
    ]
  },
  {
    id: "success-criteria",
    eyebrow: "Success",
    title: "Definition of Success",
    summary:
      "The engagement is successful when leadership gains real-time visibility and teams ramp faster.",
    blocks: [
      {
        type: "list",
        title: "Success Outcomes",
        items: [
          "AI-native CRM with business-level visibility into ground operations",
          "Detailed Voice AI reports and analytics for call quality and insights",
          "Reduced ramp-up time for new agents (currently ~3 months)",
          "CRM data available for internal data lake or preferred connector"
        ]
      }
    ]
  },
  {
    id: "about",
    eyebrow: "Context",
    title: "About MediBuddy Surgery",
    summary:
      "MediBuddy’s Surgery business is operationally heavy and spans multi-team handoffs, pre-auth, and post-IPD follow-ups.",
    blocks: [
      {
        type: "cards",
        title: "Operating Realities",
        items: [
          {
            title: "High Corporate Mix",
            description:
              "~95% of volume is corporate/employee-based. Capturing Employee ID and corporate email is essential to unlock insurance workflows."
          },
          {
            title: "Distributed Teams",
            description:
              "CST, Clinical Coordinator, CareBuddy, Scheduling, and FinOps each execute distinct workflow segments and require separate work queues."
          },
          {
            title: "Automation-First",
            description:
              "WhatsApp and IVR messaging are trigger-driven. Manual outreach via WhatsApp is not currently required."
          }
        ]
      },
      {
        type: "list",
        title: "Key System Dependencies",
        items: [
          "MediBuddy backend is the only source of leads",
          "Distance calculation currently via Retool; to be migrated into Superleap",
          "Document storage currently in LSQ; future storage location is TBD"
        ]
      }
    ]
  },
  {
    id: "overview",
    eyebrow: "Process",
    title: "Process Overview",
    summary:
      "The opportunity journey starts with a chatbot lead and ends at discharge, with multiple decision points and handoffs.",
    blocks: [
      {
        type: "list",
        title: "Core Journey",
        items: [
          "Lead captured via MediBuddy website chatbot",
          "CareBuddy qualifies and captures intent + initial medical context",
          "Scheduling confirms appointment and updates hospital details",
          "FinOps executes insurance decoding and pre-auth",
          "Surgery completes; discharge and post-IPD follow-ups tracked"
        ]
      },
      {
        type: "callout",
        tone: "warning",
        title: "Pain Points to Resolve",
        content:
          "The current monolithic form is error-prone and lacks pre-fill for returning patients. The redesign introduces four team-specific forms with auto-fill and task triggers."
      }
    ]
  },
  {
    id: "lead-management",
    eyebrow: "Lead Management",
    title: "Lead Intake, Dedup & Ownership",
    summary:
      "Lead flows must preserve MediBuddy’s ownership model while enabling configurable deduplication controls.",
    blocks: [
      {
        type: "list",
        title: "Lead Sources",
        items: [
          "MediBuddy App & Web (chatbot)",
          "Backend enriches UTM source, banner, tracking params (TBC)",
          "Enquiry fields: Name, Phone, City (TBD)"
        ]
      },
      {
        type: "list",
        title: "Deduplication Logic",
        items: [
          "7-day cooling window per treatment enforced by backend",
          "CRM handles duplicates if prior treatment remains open after 7 days",
          "Proposed dedup key: Treatment + Phone + Source (TBD)",
          "Rules configurable by business owner without code changes"
        ]
      },
      {
        type: "list",
        title: "Lead Ownership",
        items: [
          "Auto-dialer assigns owner once answered",
          "Owner remains fixed for the full journey",
          "Other teams work via Smart Views without ownership changes"
        ]
      }
    ]
  },
  {
    id: "opportunity",
    eyebrow: "Opportunity",
    title: "Opportunity Definition",
    summary:
      "The Opportunity is the primary working object for all activities, stages, and updates.",
    blocks: [
      {
        type: "list",
        title: "Core Behaviors",
        items: [
          "Opportunity is created/updated via Webhook 1",
          "Closure criterion: Discharge Date (TBD)",
          "Opportunity stages trigger downstream tasks, updates, and reporting"
        ]
      },
      {
        type: "callout",
        tone: "info",
        title: "Future-Proofing",
        content:
          "While current scope is Surgery, the object model will support multiple opportunity types (e.g., Dental) with separate workflows to avoid rework later."
      }
    ]
  },
  {
    id: "forms",
    eyebrow: "Forms",
    title: "Four-Form Architecture",
    summary:
      "Each team gets a dedicated form to reduce complexity while preserving automation triggers.",
    blocks: [
      {
        type: "cards",
        title: "Team-Specific Forms",
        items: [
          {
            title: "CareBuddy Form",
            description:
              "Captures patient intent, hospital/doctor preferences, surgery info, and qualifying details."
          },
          {
            title: "Scheduling Form",
            description:
              "Confirms appointment details with the hospital and updates scheduling fields."
          },
          {
            title: "FinOps Form",
            description:
              "Captures insurance decoding, pre-auth, and required documentation."
          },
          {
            title: "Clinical Coordinator Form",
            description:
              "Extracts clinical details from prescription, confirms surgery eligibility, and updates medical data."
          }
        ]
      },
      {
        type: "list",
        title: "Form Design Principles",
        items: [
          "Auto-fill for returning patients wherever possible",
          "Task triggers on form submission to route work to next team",
          "Field visibility rules contained within each form to reduce complexity"
        ]
      }
    ]
  },
  {
    id: "communications",
    eyebrow: "Communications",
    title: "Channels & Messaging",
    summary:
      "All external communications are CRM-driven, with defined vendors per channel.",
    blocks: [
      {
        type: "list",
        title: "Channel Stack",
        items: [
          "WhatsApp via Gupshup (automated triggers)",
          "IVR via Exotel",
          "Email partner not yet finalized (TBD)",
          "All channels integrated into CRM activity timelines"
        ]
      },
      {
        type: "callout",
        tone: "neutral",
        title: "Current Limitation",
        content:
          "Manual WhatsApp messaging is not required in the current scope; only automated triggers will be configured."
      }
    ]
  },
  {
    id: "documents",
    eyebrow: "Documents",
    title: "Document Management",
    summary:
      "Opportunity-level document handling must move from manual processes to automated CRM consolidation.",
    blocks: [
      {
        type: "list",
        title: "Document Requirements",
        items: [
          "7–8 document types per opportunity (prescription, patient details, insurance card, approval letter, discharge letter, etc.)",
          "Current workflow: manual PDF merge then sent to insurance team",
          "Target: single-click PDF generation with automated consolidation"
        ]
      },
      {
        type: "callout",
        tone: "warning",
        title: "Storage Decision",
        content:
          "Current storage is in LSQ. Decision pending on MediBuddy-side vs Superleap-side storage."
      }
    ]
  },
  {
    id: "integrations",
    eyebrow: "Integration",
    title: "Webhook Architecture",
    summary:
      "Three webhooks form the backbone of the MediBuddy ↔ Superleap integration layer.",
    blocks: [
      {
        type: "cards",
        title: "Webhook Summary",
        items: [
          {
            title: "Webhook 1 — Lead & Opportunity Creation",
            description:
              "Creates or updates opportunities based on opportunity_id and dedup rules. Returns opportunity_id to MediBuddy."
          },
          {
            title: "Webhook 2 — Opportunity Updates",
            description:
              "Updates existing opportunities, including document uploads and stage changes. Bulk update capability required."
          },
          {
            title: "Webhook 3 — Lead History Lookup",
            description:
              "Returns opportunity history for a phone number. Lookback window managed inside Superleap."
          }
        ]
      },
      {
        type: "list",
        title: "Design Notes",
        items: [
          "Opportunity ID is generated by MediBuddy and passed into Superleap (no hash ID)",
          "Webhook 1 fallback creation if opportunity_id not found is under discussion",
          "Response schema for Webhooks 2 & 3 is TBD",
          "Webhook trigger stages for lookup are TBD"
        ]
      }
    ]
  },
  {
    id: "operations",
    eyebrow: "Operations",
    title: "Team Workflow Deep Dive",
    summary:
      "Detailed team handoffs ensure clinical and financial steps stay synchronized.",
    blocks: [
      {
        type: "list",
        title: "Operational Sequence",
        items: [
          "CST uploads prescription and triggers Clinical Coordinator task",
          "Clinical Coordinator extracts clinical details and determines surgery eligibility",
          "CareBuddy confirms IPD intent and patient journey details",
          "FinOps executes decoding and pre-auth; CareBuddy collects supporting documents",
          "Post-IPD follow-ups continue for up to 7 days as needed"
        ]
      },
      {
        type: "list",
        title: "Cab Booking (Out of CRM)",
        items: [
          "Automated email sends cab driver details upon confirmed appointment",
          "Driver is tagged on WhatsApp; patient/driver coordinate directly"
        ]
      }
    ]
  },
  {
    id: "analytics",
    eyebrow: "Reporting",
    title: "Reports, Dashboards & Insights",
    summary:
      "Reporting moves from manual Superset extraction to automated Superleap dashboards.",
    blocks: [
      {
        type: "list",
        title: "Core Reports",
        items: [
          "Funnel Report",
          "Daily Call Metrics Report",
          "Hierarchy Roll-up Report",
          "Category-wise Analysis"
        ]
      },
      {
        type: "list",
        title: "Analytics Requirements",
        items: [
          "Unified talk-time metric across Exotel + Ameyo, with source tagging",
          "Reports filterable by Category and Opportunity Type",
          "Hierarchy roll-up from executor to M1/M2 levels",
          "Call analysis and group-level sentiment analysis across the opportunity lifecycle"
        ]
      }
    ]
  },
  {
    id: "metrics",
    eyebrow: "TAT",
    title: "Turnaround Time Metrics",
    summary:
      "Two critical TAT metrics must be available for operational visibility.",
    blocks: [
      {
        type: "cards",
        title: "TAT Metrics",
        items: [
          {
            title: "TAT 1",
            description:
              "Time between opportunity creation and CareBuddy disposition form completion."
          },
          {
            title: "TAT 2",
            description:
              "Time between CareBuddy disposition (hospital + doctor details) and Scheduling confirmation."
          }
        ]
      }
    ]
  },
  {
    id: "open-items",
    eyebrow: "Open Items",
    title: "TBDs & Decision Log",
    summary:
      "Outstanding decisions and open items that impact scope or implementation timelines.",
    blocks: [
      {
        type: "table",
        title: "Open Items",
        columns: ["Item", "Owner", "Status"],
        rows: [
          ["Email partner finalization", "MediBuddy", "TBD"],
          ["Opportunity closure criterion (Discharge Date confirmation)", "MediBuddy", "TBD"],
          ["Storage decision for documents", "Joint", "TBD"],
          ["Webhook 2 document upload design", "Superleap", "In progress"],
          ["Webhook 3 trigger stages & response schema", "Joint", "TBD"],
          ["UTM/banner tracking params", "MediBuddy", "TBC"],
          ["City field requirement", "MediBuddy", "TBD"]
        ]
      }
    ]
  }
];
