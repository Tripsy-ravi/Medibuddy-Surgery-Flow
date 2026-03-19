import PropTypes from "prop-types";

// Structured timeline for the opportunity journey.
export default function JourneyFlow({ flow }) {
  return (
    <section id="journey-flow" className="section">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">Flow</div>
          <h2 className="h2">{flow.title}</h2>
          <p className="subtext section-summary">{flow.subtitle}</p>
        </div>

        <div className="flow">
          {flow.phases.map((phase, idx) => (
            <div className="flow-phase" key={`${phase.title}-${idx}`}>
              <div className="flow-phase-header">
                <div className="flow-phase-title">{phase.title}</div>
                <div className="flow-phase-owner">{phase.owner}</div>
              </div>
              <ul className="flow-steps">
                {phase.steps.map((step, stepIdx) => (
                  <li key={stepIdx}>{step}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

JourneyFlow.propTypes = {
  flow: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    phases: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired,
        steps: PropTypes.arrayOf(PropTypes.string).isRequired
      })
    ).isRequired
  }).isRequired
};
