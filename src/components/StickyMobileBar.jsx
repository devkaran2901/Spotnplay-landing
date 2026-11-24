import React from 'react'

function StickyMobileBar() {
  return (
    <div className="sticky-mobile-bar">
      <div className="mobile-bar-brand">
        <div className="mobile-bar-logo">S</div>
        <div className="mobile-bar-text">
          <span className="mobile-bar-title">spotNplay</span>
          <span className="mobile-bar-sub">Mobile App</span>
        </div>
      </div>
      <div className="mobile-bar-actions">
        <a href="#download" className="mobile-bar-btn-secondary">
          Get App
        </a>
        <a href="#live-now" className="mobile-bar-btn-primary">
          Book Turf
        </a>
      </div>
    </div>
  )
}

export default StickyMobileBar

