import "./styles/base.css";
import "./styles/components.css";

import {
  documentMeta,
  sections,
  objectArchitecture,
  journeyFlow,
  workflowNotes,
  workflowDiagrams,
  businessFlow
} from "./data";
import Section from "./components/Section";
import ObjectArchitecture from "./components/ObjectArchitecture";
import JourneyFlow from "./components/JourneyFlow";
import WorkflowNotes from "./components/WorkflowNotes";
import DiagramGallery from "./components/DiagramGallery";
import BusinessFlowSection from "./components/BusinessFlowSection";
import BusinessFlowEmbed from "./components/BusinessFlowEmbed";
import Footer from "./components/Footer";

// Composes the overall BRD layout using data-driven sections.
export default function App() {
  const navItems = [
    { id: "top", label: "Cover" },
    ...sections.map((section) => ({ id: section.id, label: section.title })),
    { id: "object-architecture", label: "Object Architecture" },
    { id: "journey-flow", label: "Journey Flow" },
    { id: "business-flow", label: "Business Flow" },
    { id: "business-flow-visual", label: "Business Flow Visual" },
    { id: "workflow-notes", label: "Workflow Notes" },
    { id: "diagram-gallery", label: "Workflow Diagrams" }
  ];

  return (
    <div>
      <header className="hero" id="top">
        <div className="container">
          <div className="hero-panel">
            <div className="hero-content">
              <div className="brand-bar">
                <div className="brand-group">
                  <img
                    className="brand-logo"
                    src="/assets/branding/superleap-logo.svg"
                    alt="Superleap"
                  />
                  <div className="brand-label">Superleap CRM</div>
                </div>
                <div className="brand-group">
                  <div className="brand-logo-wrap">
                    <img
                      className="brand-logo"
                      src="/assets/branding/medibuddy-logo.png"
                      alt="MediBuddy"
                    />
                  </div>
                </div>
              </div>
              <span className="eyebrow">Business Requirements Document</span>
              <h1 className="h1">
                {documentMeta.program}
                <br />
                {documentMeta.subtitle}
              </h1>
              <p className="subtext" style={{ color: "rgba(255,255,255,0.78)" }}>
                {documentMeta.confidentiality}
              </p>
              <div className="hero-meta">
                <span>Version: {documentMeta.version}</span>
                <span>Date: {documentMeta.date}</span>
                <span>Prepared by: {documentMeta.preparedBy}</span>
              </div>
              <div className="superleap-chip">Prepared by {documentMeta.preparedByOrg}</div>
              <div className="hero-tags">
                {documentMeta.tags.map((tag) => (
                  <span key={tag} className="hero-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="nav">
        <div className="container">
          <div className="nav-inner">
            {navItems.map((item) => (
              <a key={item.id} className="nav-link" href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {sections.map((section) => (
        <Section key={section.id} section={section} />
      ))}

      <ObjectArchitecture model={objectArchitecture} />
      <JourneyFlow flow={journeyFlow} />
      <BusinessFlowSection flow={businessFlow} />
      <BusinessFlowEmbed
        title="MediBuddy Business Flow (Detailed Visual)"
        subtitle="Full flow diagram as used in internal discussions, shared here for leadership context."
        src="/flows/medibuddy-business-flow.html"
      />
      <WorkflowNotes notes={workflowNotes} />
      <DiagramGallery diagrams={workflowDiagrams} />

      <Footer meta={documentMeta} />
    </div>
  );
}
