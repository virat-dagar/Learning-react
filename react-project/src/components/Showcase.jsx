const templates = [
  { name: 'Business', detail: 'For services and company websites' },
  { name: 'Portfolio', detail: 'For creators and student projects' },
  { name: 'Store', detail: 'For simple product showcases' },
]

function Showcase() {
  return (
    <section className="showcase-section section-card" id="templates">
      <div className="showcase-copy">
        <p className="eyebrow">Template showcase</p>
        <h2>Start with a layout, then customize it your own way.</h2>
        <p>
          These sample cards represent different website templates a user could
          choose inside a website builder platform.
        </p>
      </div>

      <div className="template-grid">
        {templates.map((template) => (
          <article key={template.name} className="template-card">
            <div className="template-preview">
              <span className="template-bar"></span>
              <span className="template-banner"></span>
              <span className="template-columns"></span>
            </div>
            <h3>{template.name}</h3>
            <p>{template.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Showcase
