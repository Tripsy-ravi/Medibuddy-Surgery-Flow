import PropTypes from "prop-types";

// Supporting notes for workflow operational requirements.
export default function WorkflowNotes({ notes }) {
  return (
    <section id="workflow-notes" className="section">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">Notes</div>
          <h2 className="h2">Workflow Notes & Dependencies</h2>
          <p className="subtext section-summary">
            Key operational constraints that influence system design.
          </p>
        </div>

        <div className="card-grid">
          {notes.map((note) => (
            <div className="card-item" key={note.title}>
              <h4>{note.title}</h4>
              <p className="subtext">{note.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

WorkflowNotes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      detail: PropTypes.string.isRequired
    })
  ).isRequired
};
