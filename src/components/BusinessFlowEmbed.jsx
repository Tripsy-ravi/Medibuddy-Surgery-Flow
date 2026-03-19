import PropTypes from "prop-types";

// Embeds the original HTML flow as a visual section.
export default function BusinessFlowEmbed({ title, subtitle, src }) {
  return (
    <section id="business-flow-visual" className="section">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">MediBuddy Business Flow</div>
          <h2 className="h2">{title}</h2>
          <p className="subtext section-summary">{subtitle}</p>
        </div>

        <div className="flow-embed card">
          <iframe title={title} src={src} className="flow-iframe" />
        </div>
      </div>
    </section>
  );
}

BusinessFlowEmbed.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};
