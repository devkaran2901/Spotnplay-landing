import React, { useState } from 'react'

function PartnerSection() {
  const [facilityType, setFacilityType] = useState('Football / Multi-Sport Turf')

  return (
    <section className="partner-banner-section">
      <div className="container">
        <div className="partner-banner-card">
          <div className="partner-banner-top">
            <div className="partner-badge-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <div className="partner-banner-copy">
              <div className="partner-title-row">
                <h3>LIST YOUR TURF</h3>
                <span className="partner-free-badge">ZERO SETUP FEE</span>
              </div>
              <p>
                Get 10x more daily bookings, automated slot management, and instant payouts for your sports facility.
              </p>
            </div>
          </div>

          <div className="partner-controls-stack">
            <select
              className="partner-select"
              value={facilityType}
              onChange={(e) => setFacilityType(e.target.value)}
            >
              <option value="Football / Multi-Sport Turf">Football / Multi-Sport Turf</option>
              <option value="Box Cricket Arena">Box Cricket Arena</option>
              <option value="Badminton / Indoor Courts">Badminton / Indoor Courts</option>
              <option value="Tennis / Pickleball Club">Tennis / Pickleball Club</option>
            </select>

            <button className="btn partner-btn-primary">
              List Your Venue Now
            </button>
            <button className="btn partner-btn-soft">
              Open Partner Portal
            </button>
            <button className="btn partner-btn-muted">
              Download Partner Brochure
            </button>
          </div>

          <p className="partner-footer-note">
            Already a partner? <a href="#download">Manage bookings on the Partner App</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default PartnerSection
