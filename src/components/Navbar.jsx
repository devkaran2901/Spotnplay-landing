import React, { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
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

        <div className={`nav-links ${mobileOpen ? 'mobile-visible' : ''}`}>
          <a href="#live-now" onClick={() => setMobileOpen(false)}>Live Turfs</a>
          <a href="#volunteer" onClick={() => setMobileOpen(false)}>Volunteer</a>
          <a href="#pricing" onClick={() => setMobileOpen(false)}>Pricing</a>
          <a href="#download" onClick={() => setMobileOpen(false)}>Mobile App</a>
          <a href="#backed" onClick={() => setMobileOpen(false)}>Endorsements</a>
        </div>

        <div className="nav-actions">
          <button className="btn btn-secondary">Log In</button>
          <a href="#live-now" className="btn btn-primary">Book Now</a>
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
