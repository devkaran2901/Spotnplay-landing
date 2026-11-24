import React from 'react'

function BackedByBest() {
  return (
    <section className="section backed-section" id="backed">
      <div className="container">
        <div className="backed-header">
          <div className="section-label">Endorsements & Partners</div>
          <h2 className="section-title">
            BACKED BY <span className="highlight">THE BEST</span>
          </h2>
          <p className="section-subtitle">
            Trusted by premier sports academies, university athletic boards, and professional players across the country.
          </p>
        </div>

        <div className="backed-card-wrapper">
          <div className="backed-highlight-card fade-in">
            <div className="backed-sports-emblem">
              <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M4.93 4.93l14.14 14.14"></path>
                <path d="M19.07 4.93L4.93 19.07"></path>
              </svg>
            </div>

            <div className="backed-rating-stars">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>

            <h3 className="backed-quote-title">
              "SpotNplay managed over 45+ tournament brackets and 1,200 matches across 14 sports complexes flawlessly."
            </h3>

            <p className="backed-quote-body">
              The automated fixture generation and live score tracking solved our biggest logistics headache. Players love having real-time stats and immediate online booking confirmations.
            </p>

            <div className="backed-person-meta">
              <div className="backed-avatar-initials">VK</div>
              <div>
                <h4>Vikramaditya Kulkarni</h4>
                <p>Head of Sports Operations, Western India Youth League</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BackedByBest
