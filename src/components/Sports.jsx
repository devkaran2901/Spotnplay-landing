import React from 'react'

const sportsList = [
  {
    name: 'Football',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
        <path d="M2 12h20"></path>
      </svg>
    )
  },
  {
    name: 'Cricket',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="16"></line>
        <line x1="8" y1="12" x2="16" y2="12"></line>
      </svg>
    )
  },
  {
    name: 'Basketball',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M4.93 4.93l14.14 14.14"></path>
        <path d="M19.07 4.93L4.93 19.07"></path>
      </svg>
    )
  },
  {
    name: 'Tennis',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <ellipse cx="12" cy="12" rx="4" ry="10"></ellipse>
      </svg>
    )
  },
  {
    name: 'Badminton',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z"></path>
        <path d="M12 6v12"></path>
      </svg>
    )
  },
  {
    name: 'Hockey',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 12h8"></path>
        <path d="M12 8v8"></path>
      </svg>
    )
  }
]

const checkIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

const featureItems = [
  'Real-time turf availability across all sports',
  'Verified ratings and reviews from real players',
  'Flexible booking with free cancellation options',
  'Premium gear at exclusive member prices'
]

function Sports() {
  return (
    <section className="sports section" id="sports">
      <div className="container">
        <div className="sports-showcase">
          <div className="sports-visual fade-in">
            <div className="sports-grid-visual">
              {sportsList.map((sport) => (
                <div key={sport.name} className="sport-tile">
                  <div className="sport-tile-icon">{sport.icon}</div>
                  <div className="sport-tile-name">{sport.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="sports-info fade-in">
            <div className="section-label">Sports We Cover</div>
            <h2>
              EVERY <span className="highlight">SPORT</span>,<br />
              ONE PLATFORM
            </h2>
            <p>
              Whether you are into football, cricket, basketball, or any
              racquet sport -- SpotNplay has the turfs, gear, and competitive
              scene ready for you.
            </p>

            <div className="sports-features-list">
              {featureItems.map((item, index) => (
                <div key={index} className="sports-feature-item">
                  <div className="sports-feature-check">{checkIcon}</div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sports

