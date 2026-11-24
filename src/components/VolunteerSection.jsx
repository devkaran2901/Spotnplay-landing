import React, { useState } from 'react'

function VolunteerSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const items = [
    {
      title: 'FULL EVENT MANAGEMENT',
      summary: 'Complete digital toolkit for organizing football, cricket & racquet tournaments',
      details:
        'Create single or double elimination brackets, round-robin leagues, dynamic fixtures, and live scoreboards. Send automatic SMS/WhatsApp alerts to captains and track payments seamlessly.'
    },
    {
      title: 'REFER & EARN REWARDS',
      summary: 'Earn direct cash rewards & credits every time a friend or team books',
      details:
        'Share your personalized referral code with sports clubs, colleges, or colleagues. Get up to INR 500 cashback per turf booking and exclusive merchandise drops.'
    },
    {
      title: 'OFFICIAL CERTIFICATES & MERCH',
      summary: 'Verified credentials for volunteer coordinators & event managers',
      details:
        'Boost your sports management profile with official SpotNplay volunteer certificates, letters of recommendation, and complimentary athlete apparel kit.'
    }
  ]

  return (
    <section className="section volunteer-section" id="volunteer">
      <div className="container">
        <div className="volunteer-header">
          <div className="section-label">Community & Organizers</div>
          <h2 className="section-title">
            VOLUNTEER WITH <span className="highlight">SPOTNPLAY</span>
          </h2>
          <p className="section-subtitle">
            Want to organize high-energy tournaments in your city or gain hands-on sports management experience? Join our nationwide community of passionate sports leaders.
          </p>

          <div className="volunteer-action-wrap">
            <button className="btn btn-primary">
              Join as Organizer / Volunteer
            </button>
          </div>
        </div>

        <div className="volunteer-accordions">
          {items.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`volunteer-card ${isOpen ? 'open' : ''}`}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <div className="volunteer-card-header">
                  <div className="volunteer-card-title-group">
                    <span className="volunteer-bar-indicator"></span>
                    <div>
                      <h3>{item.title}</h3>
                      <p className="volunteer-card-summary">{item.summary}</p>
                    </div>
                  </div>
                  <div className="volunteer-expand-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                      }}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>

                {isOpen && (
                  <div className="volunteer-card-body">
                    <p>{item.details}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default VolunteerSection

