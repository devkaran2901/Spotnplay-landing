import React from 'react'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot"></span>
            Now Available in 50+ Cities
          </div>

          <h1>
            <span className="line">YOUR GAME,</span>
            <span className="line">YOUR <span className="italic-accent">RULES</span></span>
          </h1>

          <p className="hero-description">
            Book turfs near you, shop premium sports gear, and compete in
            tournaments -- all from one platform built for athletes who mean business.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 16 16 12 12 8"></polyline>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
              Book a Turf Now
            </button>
            <button className="btn btn-secondary">
              Explore Tournaments
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">
                500<span className="accent">+</span>
              </div>
              <div className="hero-stat-label">Turfs Available</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">
                50K<span className="accent">+</span>
              </div>
              <div className="hero-stat-label">Active Players</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">
                1.2K<span className="accent">+</span>
              </div>
              <div className="hero-stat-label">Tournaments Hosted</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">
                4.9<span className="accent">/5</span>
              </div>
              <div className="hero-stat-label">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

