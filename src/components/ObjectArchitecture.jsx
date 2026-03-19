import PropTypes from "prop-types";

// Visual summary of CRM objects and relationships.
export default function ObjectArchitecture({ model }) {
  return (
    <section id="object-architecture" className="section">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">Data Model</div>
          <h2 className="h2">Object Architecture</h2>
          <p className="subtext section-summary">{model.overview}</p>
        </div>

        <div className="card" style={{ padding: "18px" }}>
          <h3 className="h3">Core Objects</h3>
          <div className="card-grid" style={{ marginTop: "12px" }}>
            {model.objects.map((obj) => (
              <div className="card-item" key={obj.name}>
                <h4>{obj.name}</h4>
                <p className="subtext">{obj.description}</p>
                <div style={{ marginTop: "10px" }}>
                  <strong style={{ fontSize: "0.8rem" }}>Key Fields</strong>
                  <ul className="list" style={{ marginTop: "6px" }}>
                    {obj.keyFields.map((field, idx) => (
                      <li key={idx}>{field}</li>
                    ))}
                  </ul>
                </div>
                {obj.relationships && (
                  <div style={{ marginTop: "10px" }}>
                    <strong style={{ fontSize: "0.8rem" }}>Relationships</strong>
                    <ul className="list" style={{ marginTop: "6px" }}>
                      {obj.relationships.map((rel, idx) => (
                        <li key={idx}>{rel}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="section-grid" style={{ marginTop: "18px" }}>
          <div className="card" style={{ padding: "18px" }}>
            <h3 className="h3">Relationship Notes</h3>
            <ul className="list" style={{ marginTop: "8px" }}>
              {model.relationships.map((note, idx) => (
                <li key={idx}>{note}</li>
              ))}
            </ul>
          </div>

          <div className="card" style={{ padding: "18px" }}>
            <h3 className="h3">Primary Fields Stored</h3>
            <p className="subtext" style={{ marginBottom: "10px" }}>
              A compact view of the most important data captured for leadership visibility.
            </p>
            <div className="badge-row">
              {model.primaryFields.map((field) => (
                <span key={field} className="reference-link">
                  {field}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

ObjectArchitecture.propTypes = {
  model: PropTypes.shape({
    overview: PropTypes.string.isRequired,
    objects: PropTypes.arrayOf(PropTypes.object).isRequired,
    relationships: PropTypes.arrayOf(PropTypes.string).isRequired,
    primaryFields: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};
