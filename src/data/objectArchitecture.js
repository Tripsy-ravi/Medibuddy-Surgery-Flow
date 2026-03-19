// Data model overview used in the Object Architecture section.
export const objectArchitecture = {
  overview:
    "Superleap CRM will revolve around the Opportunity object, with Leads, Contacts, Activities, Tasks, and Documents as supporting entities.",
  objects: [
    {
      name: "Lead",
      description:
        "Represents the initial enquiry captured from MediBuddy channels before qualification.",
      keyFields: ["Name", "Phone", "City (TBD)", "Source", "UTM Params (TBC)"],
      relationships: ["1 Lead → 1+ Opportunities", "1 Lead → 1 Primary Contact"]
    },
    {
      name: "Opportunity",
      description:
        "Primary working object for all activities, updates, and reporting across the surgery journey.",
      keyFields: [
        "MediBuddy Opportunity ID",
        "Opportunity Name",
        "Product / Treatment",
        "Stage",
        "Owner",
        "Follow-up Date",
        "Origin",
        "Department",
        "Surgery Source"
      ],
      relationships: [
        "1 Opportunity → 1 Lead",
        "1 Opportunity → 1 Primary Contact",
        "1 Opportunity → 1 Hospital",
        "1 Opportunity → 1 Doctor",
        "1 Opportunity → Many Activities",
        "1 Opportunity → Many Documents",
        "1 Opportunity → Many Tasks"
      ]
    },
    {
      name: "Hospital",
      description:
        "Facility entity used for scheduling, distance calculation, and operational reporting.",
      keyFields: ["Hospital Name", "Hospital City", "Hospital Location", "Hospital Link"],
      relationships: ["1 Hospital → Many Opportunities"]
    },
    {
      name: "Doctor",
      description:
        "Treating doctor reference linked to appointment, eligibility, and patient preferences.",
      keyFields: ["Doctor Name", "Doctor Type", "External Doctor Flag"],
      relationships: ["1 Doctor → Many Opportunities"]
    },
    {
      name: "Contact (Patient)",
      description:
        "Patient-level details used across opportunities and communications.",
      keyFields: ["Name", "Phone", "Email", "Employee ID", "Insurance Details"],
      relationships: ["1 Contact → Many Opportunities"]
    },
    {
      name: "Activity",
      description:
        "Captures calls, messages, and system events for auditability and analytics.",
      keyFields: ["Activity Type", "Timestamp", "Owner", "Source (Exotel/Ameyo)"]
    },
    {
      name: "Task",
      description:
        "Work items triggered by form submissions or stage changes and routed to Smart Views.",
      keyFields: ["Task Type", "Assigned Team", "Due Date", "Status"]
    },
    {
      name: "Document",
      description:
        "Opportunity-level medical and insurance documents consolidated for pre-auth and discharge.",
      keyFields: [
        "Prescription",
        "Insurance Card",
        "Approval Letter",
        "Discharge Letter",
        "Final Bill"
      ]
    }
  ],
  relationships: [
    "Lead is created from MediBuddy backend and linked to an Opportunity.",
    "Opportunity is the anchor for Activities, Tasks, and Documents.",
    "Contacts can own multiple Opportunities across time.",
    "Hospital and Doctor objects normalize facility and provider data."
  ],
  primaryFields: [
    "Opportunity Name",
    "MediBuddy Opportunity ID",
    "Product / Treatment",
    "Stage",
    "Owner",
    "Follow-up Date",
    "Origin",
    "Department",
    "Surgery Source",
    "Proper Surgery Name",
    "Surgery Location (City)",
    "Hospital Name",
    "Hospital City",
    "Hospital Location",
    "Hospital Link",
    "Doctor Name",
    "Doctor Type",
    "Prescription",
    "Insurance Card / Policy Copy",
    "Approval Letter",
    "Discharge Summary",
    "Pre-Auth Time",
    "Decoding Time",
    "IPD Day Activity",
    "Post-Discharge Activity",
    "Surgery Case ID",
    "Distance (KM)"
  ]
};
