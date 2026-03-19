import PropTypes from "prop-types";

// Renders a single BRD section with its content blocks.
export default function Section({ section }) {
  return (
    <section id={section.id} className="section">
      <div className="container">
        <div className="section-header">
          {section.eyebrow && <div className="eyebrow">{section.eyebrow}</div>}
          <h2 className="h2">{section.title}</h2>
          {section.summary && <p className="subtext section-summary">{section.summary}</p>}
        </div>
        <div className="section-grid">
          {section.blocks?.map((block, index) => (
            <BlockRenderer key={`${section.id}-${index}`} block={block} />
          ))}
        </div>
      </div>
    </section>
  );
}

Section.propTypes = {
  section: PropTypes.shape({
    id: PropTypes.string.isRequired,
    eyebrow: PropTypes.string,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    blocks: PropTypes.arrayOf(PropTypes.object)
  }).isRequired
};

function BlockRenderer({ block }) {
  switch (block.type) {
    case "text":
      return (
        <div className="card" style={{ padding: "18px" }}>
          {block.title && <h3 className="h3">{block.title}</h3>}
          <p className="subtext">{block.content}</p>
        </div>
      );
    case "list":
      return (
        <div className="card" style={{ padding: "18px" }}>
          {block.title && <h3 className="h3">{block.title}</h3>}
          <ul className="list">
            {block.items?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      );
    case "cards":
      return (
        <div className="card" style={{ padding: "18px" }}>
          {block.title && <h3 className="h3">{block.title}</h3>}
          <div className="card-grid" style={{ marginTop: "12px" }}>
            {block.items?.map((item, idx) => (
              <div className="card-item" key={idx}>
                <h4>{item.title}</h4>
                <p className="subtext">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    case "table":
      return (
        <div className="card" style={{ padding: "18px", overflowX: "auto" }}>
          {block.title && <h3 className="h3">{block.title}</h3>}
          <table className="table">
            <thead>
              <tr>
                {block.columns?.map((col, idx) => (
                  <th key={idx}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows?.map((row, rowIdx) => (
                <tr key={rowIdx}>
                  {row.map((cell, cellIdx) => (
                    <td key={cellIdx}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "callout":
      return (
        <div className={`callout ${block.tone || "neutral"}`}>
          {block.title && <h4>{block.title}</h4>}
          <p className="subtext">{block.content}</p>
        </div>
      );
    default:
      return null;
  }
}

BlockRenderer.propTypes = {
  block: PropTypes.shape({
    type: PropTypes.string.isRequired
  }).isRequired
};
