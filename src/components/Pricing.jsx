import React from 'react'

const checkIcon = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for individuals and small organizations just getting started.',
    amount: 'FREE',
    period: '',
    badge: null,
    features: [
      'Up to 3 events',
      'Basic event pages',
      'Registration management',
      'Simple tournament brackets',
      'Email support'
    ],
    cta: 'Get Started',
    featured: false
  },
  {
    name: 'Growth',
    description: 'For growing organizations with regular events.',
    amount: '5%',
    period: 'of event revenue',
    badge: 'MOST POPULAR',
    features: [
      'Unlimited events',
      'Custom event pages',
      'Advanced registration',
      'Full fixture creation',
      'Live event hosting',
      'Priority support'
    ],
    cta: 'Choose Growth',
    featured: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with complex requirements.',
    amount: 'CUSTOM',
    period: '',
    badge: null,
    features: [
      'Unlimited events',
      'White-labeled solution',
      'API access',
      'Custom integrations',
      'Dedicated account manager',
      '24/7 premium support'
    ],
    cta: 'Contact Sales',
    featured: false
  }
]

function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <div className="amber-eyebrow-line centered">CLEAR FROM DAY ONE</div>
          <h2 className="section-title">
            SIMPLE, TRANSPARENT PRICING
          </h2>
          <p className="section-subtitle">
            Start for free and only pay when your events grow.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.featured ? 'featured' : ''}`}
            >
              {plan.badge && (
                <div className="pricing-popular">{plan.badge}</div>
              )}
              <div className="pricing-plan-name">{plan.name}</div>
              <div className="pricing-plan-desc">{plan.description}</div>

              <div className="pricing-price">
                <span className="pricing-amount">{plan.amount}</span>
                {plan.period && <span className="pricing-period">{plan.period}</span>}
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
                className={`btn ${plan.featured ? 'btn-amber' : 'btn-muted'}`}
                type="button"
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
