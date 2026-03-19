import PropTypes from "prop-types";

// Footer with references and document metadata.
export default function Footer({ meta }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <strong>{meta.program}</strong> — {meta.subtitle}
        </div>
        <div>Version: {meta.version} · Date: {meta.date}</div>
        <div>
          <span className="subtext">Prepared by: {meta.preparedBy}</span>
        </div>
        <div className="badge-row">
          <span className="reference-link">Superleap CRM · Official BRD</span>
          <span className="reference-link">Confidential — Internal Use</span>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  meta: PropTypes.shape({
    program: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    preparedBy: PropTypes.string.isRequired
  }).isRequired
};
