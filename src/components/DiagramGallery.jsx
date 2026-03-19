import PropTypes from "prop-types";

// Displays workflow diagrams with captions.
export default function DiagramGallery({ diagrams }) {
  return (
    <section id="diagram-gallery" className="section">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">Visuals</div>
          <h2 className="h2">Integration Workflow Diagrams</h2>
          <p className="subtext section-summary">
            Reference diagrams from stakeholder discussions; replace or update images in
            the data file when newer versions arrive.
          </p>
        </div>

        <div className="diagram-grid">
          {diagrams.map((diagram) => (
            <div className="diagram-card" key={diagram.title}>
              <img src={diagram.image} alt={diagram.title} />
              <div className="diagram-card-content">
                <strong>{diagram.title}</strong>
                <span className="subtext">{diagram.description}</span>
                <span className="subtext" style={{ fontSize: "0.75rem" }}>
                  {diagram.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

DiagramGallery.propTypes = {
  diagrams: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      caption: PropTypes.string
    })
  ).isRequired
};
