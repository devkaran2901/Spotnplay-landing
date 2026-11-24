import React from 'react'

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
    title: 'Book Turfs Nearby',
    description: 'Find and reserve sports turfs near your location with real-time availability, instant confirmations, and flexible time slots across 50+ cities.',
    link: '#'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
      </svg>
    ),
    title: 'Shop Sports Gear',
    description: 'Browse curated collections of premium sports clothing, footwear, and equipment from top brands -- delivered right to your doorstep.',
    link: '#'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
    title: 'Join Tournaments',
    description: 'Compete in local and national tournaments, or organize your own events. Track brackets, scores, and standings in real-time.',
    link: '#'
  }
]

function Features() {
  return (
    <section className="features section" id="features">
      <div className="container">
        <div className="section-label">What We Offer</div>
        <h2 className="section-title">
          EVERYTHING YOU NEED<br />
          TO <span className="highlight">PLAY</span>
        </h2>
        <p className="section-subtitle">
          One platform. Three powerful services. Zero compromises.
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card fade-in">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <a href={feature.link} className="learn-more">
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

