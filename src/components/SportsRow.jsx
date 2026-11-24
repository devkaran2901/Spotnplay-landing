import React from 'react'

const sportsList = [
  {
    name: 'Football',
    count: '180+ Turfs',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
        <path d="M2 12h20"></path>
      </svg>
    )
  },
  {
    name: 'Cricket',
    count: '140+ Turfs',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="16"></line>
        <line x1="8" y1="12" x2="16" y2="12"></line>
      </svg>
    )
  },
  {
    name: 'Badminton',
    count: '95+ Courts',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z"></path>
        <path d="M12 6v12"></path>
      </svg>
    )
  },
  {
    name: 'Tennis',
    count: '60+ Courts',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <ellipse cx="12" cy="12" rx="4" ry="10"></ellipse>
      </svg>
    )
  },
  {
    name: 'Basketball',
    count: '45+ Arenas',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M4.93 4.93l14.14 14.14"></path>
        <path d="M19.07 4.93L4.93 19.07"></path>
      </svg>
    )
  },
  {
    name: 'Swimming',
    count: '30+ Pools',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h20"></path>
        <path d="M2 17h20"></path>
        <circle cx="12" cy="7" r="3"></circle>
      </svg>
    )
  },
  {
    name: 'Table Tennis',
    count: '50+ Tables',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2"></rect>
        <line x1="12" y1="6" x2="12" y2="18"></line>
      </svg>
    )
  },
  {
    name: 'Squash',
    count: '25+ Courts',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    )
  }
]

function SportsRow() {
  return (
    <div className="sports-row-section">
      <div className="container">
        <div className="sports-row-heading">
          <span className="sports-row-title">POPULAR SPORTS DISCIPLINES</span>
          <span className="sports-row-tag">EXPLORE BY CATEGORY</span>
        </div>
        <div className="sports-row-grid">
          {sportsList.map((sport) => (
            <div key={sport.name} className="sport-row-pill">
              <div className="sport-row-icon">{sport.icon}</div>
              <div className="sport-row-text">
                <span className="sport-row-name">{sport.name}</span>
                <span className="sport-row-count">{sport.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SportsRow
