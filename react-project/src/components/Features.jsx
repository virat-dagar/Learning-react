const features = [
  {
    title: 'Template Library',
    description: 'Choose a ready-made layout for portfolios, shops, blogs, and landing pages.',
  },
  {
    title: 'Drag and Drop Editor',
    description: 'Move sections around easily and build pages without writing code.',
  },
  {
    title: 'Responsive Design',
    description: 'Pages automatically adjust for desktop, tablet, and mobile screens.',
  },
  {
    title: 'Custom Colors',
    description: 'Update colors, buttons, and banners to match the style of the website.',
  },
  {
    title: 'Text and Image Tools',
    description: 'Edit headings, paragraphs, and images directly inside the page builder.',
  },
  {
    title: 'Quick Publish',
    description: 'Preview the final design and publish the website in a few simple steps.',
  },
]

function Features() {
  return (
    <section className="features-section section-card" id="features">
      <div className="section-heading">
        <p className="eyebrow">Main features</p>
        <h2>Everything needed to create a clean website in one place.</h2>
        <p>
          The layout is simple on purpose so the focus stays on React
          components, reusable sections, and clear structure.
        </p>
      </div>

      <div className="feature-grid">
        {features.map((feature) => (
          <article key={feature.title} className="feature-card">
            <span className="feature-icon">{feature.title.slice(0, 2)}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Features
