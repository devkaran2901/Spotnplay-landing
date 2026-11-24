import React from 'react'

function PartnerBanner() {
  return (
    <div className="partner-banner-section">
      <div className="container">
        <div className="partner-banner-card">
          <div className="partner-banner-left">
            <div className="partner-badge-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <div className="partner-banner-copy">
              <div className="partner-mini-label">TURF OWNERS & FACILITY MANAGERS</div>
              <h3>LIST YOUR TURF ON SPOTNPLAY</h3>
              <p>
                Get 10x more daily bookings, automated slot management, instant payouts,
                and zero upfront setup fees.
              </p>
            </div>
          </div>
          <div className="partner-banner-actions">
            <button className="btn btn-primary">
              List Your Venue
            </button>
            <button className="btn btn-secondary">
              Partner Portal
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartnerBanner
