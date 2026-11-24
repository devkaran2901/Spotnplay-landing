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
        <div className="app-content">
          <div className="app-info fade-in">
            <div className="section-label">Mobile Experience</div>
            <h2 className="section-title">
              PLAY FASTER ON <span className="highlight">ANDROID</span>
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
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.609-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.5 1.448a1 1 0 0 1 0 1.49l-2.5 1.448-2.699-2.693 2.699-2.693zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <div className="app-store-info">
                  <span className="small">GET IT ON</span>
                  <span className="store-name">Google Play</span>
                </div>
              </a>
              <a href="#download" className="app-store-btn">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="app-store-info">
                  <span className="small">DOWNLOAD ON THE</span>
                  <span className="store-name">App Store</span>
                </div>
              </a>
            </div>
          </div>

          <div className="app-visual fade-in">
            <div className="phone-glow"></div>
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="phone-header">
                  <div className="phone-header-brand">spot<span>N</span>play</div>
                  <span className="phone-header-city">Mumbai</span>
                </div>

                <div className="phone-card">
                  <div className="phone-card-title">Nearby Turf Confirmed</div>
                  <div className="phone-card-text">
                    Apex Sports Arena (Field 2)<br />
                    Today: 7:00 PM - 8:00 PM
                  </div>
                  <div className="phone-mini-btn">View Ticket</div>
                </div>

                <div className="phone-card">
                  <div className="phone-card-title">Live Tournament Match</div>
                  <div className="phone-card-text">
                    Mumbai Super League 2024<br />
                    Quarter Final (Starts 8:30 PM)
                  </div>
                  <div className="phone-mini-btn">Live Bracket</div>
                </div>

                <div className="phone-card">
                  <div className="phone-card-title">Store Drop</div>
                  <div className="phone-card-text">
                    Official Pro Match Cleats & Jerseys<br />
                    Flat 15% OFF for Pro Members
                  </div>
                  <div className="phone-mini-btn">Shop Now</div>
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
