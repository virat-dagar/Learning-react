const stories = [
  {
    quote:
      'The new landing page gave our studio a premium feel and doubled the number of discovery calls in three weeks.',
    name: 'Aarav Mehta',
    role: 'Founder, PixelNest',
  },
  {
    quote:
      'Everything felt clean, organized, and easy to scan. The responsive design looked strong on every device we tested.',
    name: 'Naina Kapoor',
    role: 'Marketing Lead, SprintWave',
  },
  {
    quote:
      'We finally had a page that explained our offer clearly. Visitors stayed longer, clicked more, and trusted us faster.',
    name: 'Rhea Sethi',
    role: 'Owner, Bloom Avenue',
  },
]

function Testimonials() {
  return (
    <section className="testimonials-section" id="stories">
      <div className="about-panel">
        <p className="eyebrow">Why teams choose us</p>
        <h2>Modern UI, clean code, and a layout that knows what it needs to say.</h2>
        <p>
          This sample project follows a beginner-friendly React structure while
          still delivering a polished landing page with reusable components and
          separate styling.
        </p>

        <ul className="about-list">
          <li>Pure CSS styling with gradients, cards, and button interactions</li>
          <li>Responsive sections that stack smoothly on smaller screens</li>
          <li>Simple reusable React components with one clear responsibility</li>
        </ul>
      </div>

      <div className="testimonial-grid">
        {stories.map((story) => (
          <article key={story.name} className="testimonial-card">
            <p className="quote-mark">"</p>
            <p>{story.quote}</p>
            <div>
              <strong>{story.name}</strong>
              <span>{story.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
