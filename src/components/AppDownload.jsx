import React from 'react'

function AppDownload() {
  const appPills = [
    {
      title: 'Instant Turf Booking',
      desc: 'Lock slots in under 30 seconds'
    },
    {
      title: 'Live Match Scoring',
      desc: 'Real-time tournament scoreboards'
    },
    {
      title: 'Split Bills With Squad',
      desc: 'Automatic UPI share payment link'
    },
    {
      title: 'Exclusive App Discounts',
      desc: 'Save up to 20% on off-peak hours'
    }
  ]

  return (
    <section className="section app-download" id="download">
      <div className="container">
        <div className="app-download-box">
          <div className="app-content">
            <div className="app-info">
              <div className="live-pill-badge">MOBILE EXPERIENCE</div>
              <h2 className="section-title">
                PLAY FASTER <span className="highlight">ON ANDROID</span>
              </h2>
              <p className="section-subtitle">
                Take the complete SpotNplay experience onto the field. Get real-time turf alerts, match reminders, and team roster coordination directly on your smartphone.
              </p>

              <div className="app-feature-pills-grid">
                {appPills.map((pill, idx) => (
                  <div key={idx} className="app-pill-card">
                    <div className="pill-check-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h5>{pill.title}</h5>
                      <p>{pill.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="app-buttons">
                <a href="#download" className="app-store-btn primary-store-btn">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.609-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.5 1.448a1 1 0 0 1 0 1.49l-2.5 1.448-2.699-2.693 2.699-2.693zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                  </svg>
                  <span>Download on Google Play</span>
                </a>
              </div>

              <div className="app-meta-badges">
                <span>★ 4.9 Rating</span>
                <span>• Free Download</span>
                <span>• Android 8.0+</span>
              </div>
            </div>

            <div className="app-visual">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="phone-app-icon">S</div>
                  <div className="phone-app-title">spotNplay</div>
                  <div className="phone-app-sub">Your Turf. Your Squad.</div>

                  <div className="phone-action-row">
                    <div className="phone-dark-tile">
                      <span>Book Turf</span>
                      <small>500+ nearby</small>
                    </div>
                    <div className="phone-green-tile">
                      <span>Join Match</span>
                      <small>Live today</small>
                    </div>
                  </div>

                  <div className="phone-bottom-tabs">
                    <span>Home</span>
                    <span>Bookings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppDownload
