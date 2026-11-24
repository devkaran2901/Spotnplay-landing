import React, { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="nav-logo">
          <div className="nav-logo-icon">S</div>
          <div className="nav-logo-text">
            spot<span>N</span>play
          </div>
        </a>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#sports">Sports</a>
          <a href="#pricing">Pricing</a>
          <a href="#download">Download</a>
          <a href="#testimonials">Reviews</a>
        </div>

        <div className="nav-actions">
          <button className="btn btn-secondary">Log In</button>
          <button className="btn btn-primary">Get Started</button>
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar

