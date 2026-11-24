import React from 'react'

function AppDownload() {
  return (
    <section className="app-download section" id="download">
      <div className="container">
        <div className="app-content">
          <div className="app-info fade-in">
            <div className="section-label">Mobile App</div>
            <h2>
              PLAY ANYTIME,<br />
              <span className="highlight">ANYWHERE</span>
            </h2>
            <p>
              Take SpotNplay with you. Book turfs on the go, get real-time
              tournament updates, shop exclusive drops, and never miss a game.
              Available on iOS and Android.
            </p>
            <div className="app-buttons">
              <a href="#" className="app-store-btn">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="app-store-info">
                  <span className="small">Download on the</span>
                  <span className="store-name">App Store</span>
                </div>
              </a>
              <a href="#" className="app-store-btn">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.609-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.4l2.5 1.448a1 1 0 0 1 0 1.49l-2.5 1.448-2.699-2.693 2.699-2.693zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <div className="app-store-info">
                  <span className="small">Get it on</span>
                  <span className="store-name">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          <div className="app-visual fade-in">
            <div className="phone-glow"></div>
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="phone-header">spotNplay</div>

                <div className="phone-card">
                  <div className="phone-card-title">Nearby Turfs</div>
                  <div className="phone-card-text">
                    Green Field Arena -- 1.2 km away<br />
                    Available: 6 PM - 10 PM
                  </div>
                  <div className="phone-mini-btn">Book Now</div>
                </div>

                <div className="phone-card">
                  <div className="phone-card-title">Live Tournament</div>
                  <div className="phone-card-text">
                    City Football League 2024<br />
                    Quarter Finals -- 8 Teams Left
                  </div>
                  <div className="phone-mini-btn">View Bracket</div>
                </div>

                <div className="phone-card">
                  <div className="phone-card-title">New Arrivals</div>
                  <div className="phone-card-text">
                    Nike Phantom GX Elite FG<br />
                    Limited Stock Available
                  </div>
                  <div className="phone-mini-btn">Shop</div>
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

