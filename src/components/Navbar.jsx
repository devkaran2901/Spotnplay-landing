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
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="nav-logo">
          <div className="nav-logo-icon">S</div>
          <div className="nav-logo-text">
            spot<span>N</span>play
          </div>
        </a>

        {/* Desktop & Mobile Navigation Links */}
        <div className={`nav-links ${mobileOpen ? 'mobile-visible' : ''}`}>
          <a href="#live-now" onClick={() => setMobileOpen(false)}>Live Arenas</a>
          <a href="#popular-sports" onClick={() => setMobileOpen(false)}>Sports</a>
          <a href="#join-coach" onClick={() => setMobileOpen(false)}>Coaches</a>
          <a href="#volunteer" onClick={() => setMobileOpen(false)}>Volunteer</a>
          <a href="#pricing" onClick={() => setMobileOpen(false)}>Pricing</a>
          <a href="#download" onClick={() => setMobileOpen(false)}>Get App</a>
          <a href="#backed" onClick={() => setMobileOpen(false)}>Partners</a>
          
          {/* Mobile action buttons inside drawer */}
          <div className="nav-mobile-actions">
            <button className="btn btn-secondary" onClick={() => setMobileOpen(false)}>Log In</button>
            <a href="#live-now" className="btn btn-primary" onClick={() => setMobileOpen(false)}>Book Now</a>
          </div>
        </div>

        {/* Desktop actions */}
        <div className="nav-actions">
          <button className="btn btn-secondary">Log In</button>
          <a href="#live-now" className="btn btn-primary">Book Now</a>
        </div>

        {/* Mobile hamburger button */}
        <button
          className={`mobile-toggle ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
