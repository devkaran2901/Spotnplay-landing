import React from 'react'

function BackedByBest() {
  return (
    <section className="section backed-section" id="backed">
      <div className="container">
        <div className="backed-header">
          <div className="amber-eyebrow-line centered">ON THE SIDELINES</div>
          <h2 className="section-title">BACKED BY THE BEST</h2>
          <p className="section-subtitle">
            Grateful for the partners and institutions powering spotNplay tournaments and university sports communities.
          </p>
        </div>

        <div className="backed-partner-card">
          <div className="backed-logo-box">
            <svg
              width="76"
              height="76"
              viewBox="0 0 120 120"
              role="img"
              aria-label="Lovely Professional University Logo"
            >
              <circle cx="60" cy="60" r="56" fill="#FFFFFF" stroke="#111827" strokeWidth="2.5" />
              <circle cx="60" cy="60" r="41" fill="#F97316" stroke="#111827" strokeWidth="2" />
              <g fill="#111827">
                <polygon points="60,22 52,60 68,60" />
                <polygon points="88,33 56,57 67,67" />
                <polygon points="99,60 60,54 60,66" />
                <polygon points="32,33 53,67 64,57" />
                <polygon points="21,60 60,66 60,54" />
                <polygon points="40,91 64,61 52,55" />
                <polygon points="80,91 68,55 56,61" />
              </g>
              <circle cx="60" cy="60" r="41" fill="none" stroke="#111827" strokeWidth="2" />
              <defs>
                <path id="lpuTopArc" d="M 16,60 A 44,44 0 1,1 104,60" />
                <path id="lpuBottomArc" d="M 22,74 A 42,42 0 0,0 98,74" />
              </defs>
              <text fontSize="7.4" fontWeight="800" fill="#111827" letterSpacing="0.8">
                <textPath href="#lpuTopArc" startOffset="50%" textAnchor="middle">
                  LOVELY PROFESSIONAL UNIVERSITY
                </textPath>
              </text>
              <text fontSize="7.2" fontWeight="800" fill="#111827" letterSpacing="0.9">
                <textPath href="#lpuBottomArc" startOffset="50%" textAnchor="middle">
                  PUNJAB (INDIA)
                </textPath>
              </text>
            </svg>
          </div>

          <div className="backed-campus-badge">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21h18"></path>
              <path d="M5 21V7l7-4 7 4v14"></path>
              <path d="M9 21v-6h6v6"></path>
            </svg>
            <span>PREMIER CAMPUS PARTNER</span>
          </div>

          <h3 className="backed-partner-title">LOVELY PROFESSIONAL UNIVERSITY</h3>

          <p className="backed-partner-desc">
            Powering campus arena bookings, inter-college tournaments &amp; student athlete communities in Punjab, India.
          </p>

          <div className="backed-partner-links">
            <a href="#live-now" className="backed-link-primary">
              Explore LPU Grounds →
            </a>
            <span className="backed-link-dot">•</span>
            <a href="#join-coach" className="backed-link-muted">
              Student Verification
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BackedByBest
