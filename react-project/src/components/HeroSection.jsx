const stats = [
  { value: '120+', label: 'ready sections' },
  { value: '18', label: 'starter templates' },
  { value: '5 min', label: 'to publish a page' },
]

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Website builder landing page</p>
        <h1>Build a website with simple tools and ready-made sections.</h1>
        <p className="hero-text">
          This demo website builder helps users create pages with templates,
          drag-and-drop blocks, and quick publishing. It is designed as a basic
          product landing page made with reusable React components.
        </p>

        <div className="hero-actions">
          <a className="primary-button" href="#templates">
            Explore Templates
          </a>
          <a className="secondary-button" href="#steps">
            See How It Works
          </a>
        </div>

        <div className="stat-row">
          {stats.map((item) => (
            <article key={item.label} className="stat-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </div>

      <div className="hero-preview" aria-label="Website builder preview">
        <div className="browser-card">
          <div className="browser-top">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="preview-layout">
            <aside className="sidebar-panel">
              <h3>Blocks</h3>
              <ul>
                <li>Hero</li>
                <li>Gallery</li>
                <li>Pricing</li>
                <li>Contact</li>
              </ul>
            </aside>

            <div className="canvas-panel">
              <div className="canvas-hero"></div>
              <div className="canvas-grid">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="canvas-footer"></div>
            </div>
          </div>
        </div>

        <div className="floating-note">
          <strong>Drag, drop, publish</strong>
          <p>No coding needed for the user. Everything is arranged visually.</p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
