// Journey flow and workflow notes are configured here for easy updates.
export const journeyFlow = {
  title: "Surgery Opportunity Journey",
  subtitle: "End-to-end flow across teams and stages",
  phases: [
    {
      title: "Lead Intake",
      owner: "System / CareBuddy",
      steps: [
        "Lead captured from MediBuddy chatbot",
        "Webhook 1 creates/updates Lead + Opportunity using MediBuddy Opportunity ID",
        "Auto-dialer assigns owner on first successful pickup"
      ]
    },
    {
      title: "Qualification",
      owner: "CareBuddy",
      steps: [
        "Initial call and intent qualification",
        "CareBuddy form submission triggers Scheduling task",
        "If not interested, mark disposition and close"
      ]
    },
    {
      title: "Clinical Review",
      owner: "CST / Clinical Coordinator",
      steps: [
        "CST collects prescription and uploads to CRM",
        "Clinical Coordinator reviews and fills clinical details",
        "Eligibility decision captured in opportunity"
      ]
    },
    {
      title: "Scheduling",
      owner: "Scheduling Team",
      steps: [
        "Hospital follow-up and appointment confirmation",
        "Scheduling form submission triggers FinOps task"
      ]
    },
    {
      title: "Insurance & Pre-Auth",
      owner: "FinOps",
      steps: [
        "Decode insurance policy and eligible claim amount",
        "Collect supporting documents from CareBuddy",
        "Pre-auth approval request and tracking"
      ]
    },
    {
      title: "Surgery & Discharge",
      owner: "Operations",
      steps: [
        "Surgery completed",
        "Discharge documents uploaded",
        "Post-IPD follow-up (up to 7 days)"
      ]
    }
  ]
};

export const workflowNotes = [
  {
    title: "Task Automation",
    detail:
      "Form submission by each team creates tasks in the next team’s Smart View."
  },
  {
    title: "Reschedule Timeline",
    detail:
      "Superleap Activities will capture reschedule events with pre-reschedule status."
  },
  {
    title: "Distance Calculation",
    detail:
      "Hospital-patient distance will be owned and computed by Superleap (migrated from Retool)."
  },
  {
    title: "Call + Sentiment Analytics",
    detail:
      "Call analysis and group-level sentiment trends are required across the patient journey."
  }
];

export const workflowDiagrams = [
  {
    title: "Webhook 1 — Lead & Opportunity Creation",
    description:
      "Inbound creation + dedup logic handling for new opportunities.",
    image: "/assets/diagrams/webhook-1.png",
    caption: "Reference diagram shared in MOM (Mar 2026)."
  },
  {
    title: "Webhook 2 — Opportunity Updates",
    description:
      "Update flow for stage changes, fields, and document uploads.",
    image: "/assets/diagrams/webhook-2.png",
    caption: "Reference diagram shared in MOM (Mar 2026)."
  },
  {
    title: "Webhook 3 — Lead History Lookup",
    description:
      "Phone-based lookup for prior opportunity history.",
    image: "/assets/diagrams/webhook-3.png",
    caption: "Reference diagram shared in MOM (Mar 2026)."
  }
];

export const businessFlow = {
  title: "MediBuddy Business Flow (Surgery)",
  subtitle:
    "Core journey every opportunity follows, aligned to current operational reality.",
  nodes: [
    {
      title: "A Patient Arrives",
      owner: "System / CareBuddy",
      summary: "Opportunity created with basic details and assigned to CareBuddy."
    },
    {
      title: "The First Call",
      owner: "CareBuddy",
      summary: "Initial contact, disposition capture, and intent qualification."
    },
    {
      title: "Booking the OPD Appointment",
      owner: "Scheduling",
      summary: "Appointment confirmation with hospital and preliminary scheduling updates."
    },
    {
      title: "The OPD Visit",
      owner: "CareBuddy / Clinical Coordinator",
      summary: "OPD visit details captured; clinical data updated."
    },
    {
      title: "Post OPD, Decoding & Pre-Auth",
      owner: "FinOps",
      summary: "Insurance decoding, document collection, and pre-auth coordination."
    },
    {
      title: "Surgery, Admission & Discharge",
      owner: "Operations",
      summary: "Surgery completion, discharge documentation, and post-IPD follow-up."
    }
  ]
};
