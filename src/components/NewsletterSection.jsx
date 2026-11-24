import React, { useState } from 'react'

function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <div className="newsletter-section">
      <div className="container">
        <div className="newsletter-box fade-in">
          <div className="newsletter-content">
            <div className="section-label">COMMUNITY UPDATES</div>
            <h3>STAY IN THE GAME</h3>
            <p>
              Get notified first when new turfs open in your neighborhood, registration for major city tournaments opens, or limited edition sports gear arrives.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="newsletter-form">
            {submitted ? (
              <div className="newsletter-success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>You are on the roster! Watch your inbox.</span>
              </div>
            ) : (
              <div className="newsletter-input-group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewsletterSection
