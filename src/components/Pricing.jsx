import React from 'react'

const checkIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

const plans = [
  {
    name: 'BASIC / STARTER',
    description: 'Ideal for weekend athletes and casual players',
    currency: 'INR',
    price: 'Free',
    amount: '0',
    period: '/ month',
    badge: null,
    features: [
      'Browse & search all 500+ turfs',
      'Instant slot booking (up to 3 per month)',
      'Join public tournaments & leagues',
      'Standard member gear discounts (5% off)',
      'Player profile & match history',
      'Community player chat'
    ],
    cta: 'Get Started Free',
    featured: false
  },
  {
    name: 'PRO ATHLETE',
    description: 'For competitive players & frequent teams',
    currency: 'INR',
    price: 'INR',
    amount: '499',
    period: '/ month',
    badge: 'MOST POPULAR',
    features: [
      'Unlimited turf & court bookings',
      'Priority peak-hour slot reservations',
      'Zero booking cancellation fees',
      'Organize up to 2 public tournaments/mo',
      'Pro gear discounts (15% off brand apparel)',
      'Detailed player analytics & win rates',
      'SMS & WhatsApp booking reminders'
    ],
    cta: 'Go Pro Now',
    featured: true
  },
  {
    name: 'CLUB & ENTERPRISE',
    description: 'For sports academies, teams & organizers',
    currency: 'INR',
    price: 'INR',
    amount: '1,499',
    period: '/ month',
    badge: 'TEAM CHOICE',
    features: [
      'Everything in Pro Athlete plan',
      'Full roster & squad management',
      'Automated tournament bracket builder',
      'Bulk slot booking discounts up to 25%',
      'Custom tournament branding & certificates',
      'Dedicated facility account manager',
      'Direct payout dashboard for ticket sales'
    ],
    cta: 'Upgrade Team',
    featured: false
  }
]

function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <div className="section-label">Membership & Plans</div>
          <h2 className="section-title">
            SIMPLE, <span className="highlight">TRANSPARENT</span> PRICING
          </h2>
          <p className="section-subtitle">
            Choose a plan tailored to your playing frequency. Upgrade, downgrade, or cancel anytime.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card fade-in ${plan.featured ? 'featured' : ''}`}
            >
              {plan.badge && (
                <div className="pricing-popular">{plan.badge}</div>
              )}
              <div className="pricing-plan-name">{plan.name}</div>
              <div className="pricing-plan-desc">{plan.description}</div>

              <div className="pricing-price">
                <span className="pricing-currency">
                  {plan.price === 'Free' ? '' : plan.currency}
                </span>
                <span className="pricing-amount">
                  {plan.price === 'Free' ? 'FREE' : plan.amount}
                </span>
                <span className="pricing-period">{plan.period}</span>
              </div>

              <div className="pricing-features">
                {plan.features.map((feature, i) => (
                  <div key={i} className="pricing-feature">
                    <span className="check-icon">{checkIcon}</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
