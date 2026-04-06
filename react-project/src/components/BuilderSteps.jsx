const steps = [
  {
    title: 'Choose a template',
    description: 'Start with a basic design and select the page style you want.',
  },
  {
    title: 'Edit the content',
    description: 'Change text, images, and sections using the visual editor.',
  },
  {
    title: 'Publish the site',
    description: 'Preview the result and make the website live when it is ready.',
  },
]

function BuilderSteps() {
  return (
    <section className="steps-section section-card" id="steps">
      <div className="section-heading">
        <p className="eyebrow">How it works</p>
        <h2>A simple 3-step workflow for building a website.</h2>
      </div>

      <div className="steps-grid">
        {steps.map((step, index) => (
          <article key={step.title} className="step-card">
            <span className="step-number">0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default BuilderSteps
