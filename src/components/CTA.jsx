import React from 'react'

function CTA() {
  return (
    <section className="section cta-section" id="ready-to-play">
      <div className="container">
        <div className="cta-box fade-in">
          <div className="cta-sports-cross-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>

          <h2 className="cta-headline">
            READY TO <span className="highlight">PLAY?</span>
          </h2>
          <p className="cta-subtitle">
            Find your nearby turf, gear up with premium kits, or register your team for the next championship in minutes.
          </p>

          <div className="cta-button-group">
            <a href="#live-now" className="btn btn-primary">
              Book a Turf Now
            </a>
            <a href="#volunteer" className="btn btn-secondary">
              Organize Tournament
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
