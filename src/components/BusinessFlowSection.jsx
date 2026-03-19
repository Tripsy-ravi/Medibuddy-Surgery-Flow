import PropTypes from "prop-types";

// Business flow rendered as a readable section with cards.
export default function BusinessFlowSection({ flow }) {
  return (
    <section id="business-flow" className="section">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">Business Flow</div>
          <h2 className="h2">{flow.title}</h2>
          <p className="subtext section-summary">{flow.subtitle}</p>
        </div>

        <div className="card-grid">
          {flow.nodes.map((node, index) => (
            <div className="card-item" key={`${node.title}-${index}`}>
              <h4>{index + 1}. {node.title}</h4>
              <p className="subtext" style={{ marginTop: "6px" }}>{node.summary}</p>
              <div className="subtext" style={{ marginTop: "8px", fontSize: "0.8rem" }}>
                Owner: {node.owner}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

BusinessFlowSection.propTypes = {
  flow: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    nodes: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};
