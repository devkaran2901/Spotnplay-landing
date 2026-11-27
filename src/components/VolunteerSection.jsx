import React from 'react'

const volunteerRoles = [
  {
    title: 'MATCH-DAY CREW',
    summary: 'Check-ins, courts and keeping the day on time.'
  },
  {
    title: 'LIVE SCORING',
    summary: 'Score courtside and push every point live.'
  },
  {
    title: 'MEDIA & SOCIALS',
    summary: 'Photos, reels and stories from the sidelines.'
  }
]

function VolunteerSection() {
  return (
    <section className="section volunteer-section" id="volunteer">
      <div className="container">
        <div className="volunteer-split-grid">
          <div className="volunteer-left">
            <div className="amber-eyebrow-line">JOIN THE CREW</div>
            <h2 className="volunteer-title">
              VOLUNTEER WITH
              <br />
              SPOTNPLAY.
            </h2>
            <p className="volunteer-desc">
              Every tournament runs on people who love the game. Help at the desk, keep score courtside, or run the day with us — and get closer to the sport in your city.
            </p>
            <button type="button" className="btn volunteer-cta-pill">
              Become a volunteer →
            </button>
          </div>

          <div className="volunteer-roles-stack">
            {volunteerRoles.map((role) => (
              <div key={role.title} className="volunteer-card">
                <h3>{role.title}</h3>
                <p className="volunteer-card-summary">{role.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VolunteerSection
