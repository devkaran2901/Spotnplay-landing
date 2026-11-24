import React from 'react'

const checkIcon = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for casual players',
    price: 'Free',
    amount: '0',
    period: '',
    features: [
      'Browse and search turfs',
      'Basic booking (up to 3/month)',
      'Access public tournaments',
      'Standard gear catalog',
      'Community chat access'
    ],
    cta: 'Get Started Free',
    featured: false
  },
  {
    name: 'Pro Player',
    description: 'For serious athletes',
    price: 'INR',
    amount: '499',
    period: '/mo',
    features: [
      'Unlimited turf bookings',
      'Priority time slot access',
      'Create & manage tournaments',
      'Exclusive gear discounts (15% off)',
      'Performance stats dashboard',
      'Free cancellation anytime'
    ],
    cta: 'Go Pro',
    featured: true,
    popular: true
  },
  {
    name: 'Team',
    description: 'Built for clubs and teams',
    price: 'INR',
    amount: '1,499',
    period: '/mo',
    features: [
      'Everything in Pro Player',
      'Team roster management',
      'Bulk booking discounts',
      'Dedicated team page',
      'Priority support line',
      'Custom tournament branding'
    ],
    cta: 'Contact Sales',
    featured: false
  }
]

function Pricing() {
  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <div className="section-label">Pricing</div>
          <h2 className="section-title">
            SIMPLE, <span className="highlight">TRANSPARENT</span> PRICING
          </h2>
          <p className="section-subtitle">
            No hidden fees. No surprise charges. Pick a plan that matches your game.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card fade-in ${plan.featured ? 'featured' : ''}`}
            >
              {plan.popular && (
                <div className="pricing-popular">Most Popular</div>
              )}
              <div className="pricing-plan-name">{plan.name}</div>
              <div className="pricing-plan-desc">{plan.description}</div>
              <div className="pricing-price">
                {plan.price !== 'Free' && (
                  <span className="pricing-currency">{plan.price}</span>
                )}
                <span className="pricing-amount">
                  {plan.price === 'Free' ? 'Free' : plan.amount}
                </span>
                {plan.period && (
                  <span className="pricing-period">{plan.period}</span>
                )}
              </div>
              <div className="pricing-features">
                {plan.features.map((feature, i) => (
                  <div key={i} className="pricing-feature">
                    <span className="check-icon">{checkIcon}</span>
                    {feature}
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

