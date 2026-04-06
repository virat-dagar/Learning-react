const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Steps', href: '#steps' },
  { label: 'Templates', href: '#templates' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#home">
        <span className="brand-mark">WB</span>
        <span>
          Website Builder
          <small>Simple classroom landing page</small>
        </span>
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="nav-cta" href="#contact">
        Start Free
      </a>
    </header>
  )
}

export default Navbar
