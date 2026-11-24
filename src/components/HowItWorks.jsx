import React from 'react'

const steps = [
  {
    number: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
    title: 'Create Account',
    description: 'Sign up in seconds with your email or phone number and set up your player profile.'
  },
  {
    number: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    ),
    title: 'Discover',
    description: 'Find turfs, gear, and tournaments near you using smart filters and location-based search.'
  },
  {
    number: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
        <line x1="1" y1="10" x2="23" y2="10"></line>
      </svg>
    ),
    title: 'Book & Pay',
    description: 'Reserve your spot or place your order with secure payments and instant confirmation.'
  },
  {
    number: '04',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
    title: 'Play & Win',
    description: 'Show up, play your heart out, and track your stats and achievements over time.'
  }
]

function HowItWorks() {
  return (
    <section className="how-it-works section">
      <div className="container">
        <div className="section-label">How It Works</div>
        <h2 className="section-title">
          GET STARTED IN <span className="highlight">4 STEPS</span>
        </h2>
        <p className="section-subtitle">
          From sign-up to game day -- getting on the field has never been simpler.
        </p>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card fade-in">
              <div className="step-number">{step.number}</div>
              <div className="step-icon-wrapper">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

