import React, { useState } from 'react'

function Hero() {
  const [activeCategory, setActiveCategory] = useState('turfs')
  const [city, setCity] = useState('Mumbai')
  const [sport, setSport] = useState('Football')
  const [date, setDate] = useState('2024-11-25')
  const [timeSlot, setTimeSlot] = useState('Evening (6 PM - 10 PM)')

  const categories = [
    {
      id: 'turfs',
      title: 'Book Turfs',
      subtitle: '500+ Turfs Nearby',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
          <path d="M2 12h20"></path>
        </svg>
      )
    },
    {
      id: 'tournaments',
      title: 'Find Tournaments',
      subtitle: 'Compete & Win',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    },
    {
      id: 'clothing',
      title: 'Sports Clothing',
      subtitle: 'Pro Gear & Apparel',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path>
        </svg>
      )
    },
    {
      id: 'community',
      title: 'Join Community',
      subtitle: '50k+ Athletes',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    }
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    const target = document.getElementById('live-now')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-top-brand">
          <div className="hero-logo-mark">
            <div className="hero-logo-icon">S</div>
            <div className="hero-logo-title">
              spot<span>N</span>play
            </div>
          </div>
          <p className="hero-brand-tagline">
            Your all-in-one destination to book turfs, buy pro gear, and compete in tournaments
          </p>
        </div>

        {/* 4 Category Quick Selection Cards */}
        <div className="hero-category-cards">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`category-card ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <div className="category-card-icon">{cat.icon}</div>
              <div className="category-card-content">
                <h4>{cat.title}</h4>
                <p>{cat.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats Strip */}
        <div className="hero-quick-stats">
          <div className="quick-stat-pill">
            <span className="stat-number">500+</span>
            <span className="stat-text">Verified Turfs</span>
          </div>
          <div className="stat-separator">/</div>
          <div className="quick-stat-pill">
            <span className="stat-number">50K+</span>
            <span className="stat-text">Active Players</span>
          </div>
          <div className="stat-separator">/</div>
          <div className="quick-stat-pill">
            <span className="stat-number">50+</span>
            <span className="stat-text">Cities Covered</span>
          </div>
        </div>

        {/* Search & Booking Engine Widget */}
        <div className="search-widget-container">
          <div className="search-widget-header">
            <div className="widget-label">
              <span className="live-dot"></span>
              FIND & BOOK INSTANTLY
            </div>
            <span className="widget-tag">REAL-TIME AVAILABILITY</span>
          </div>

          <form onSubmit={handleSearch} className="search-form-grid">
            <div className="form-group">
              <label>Select City / Area</label>
              <div className="input-with-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <select value={city} onChange={(e) => setCity(e.target.value)}>
                  <option value="Mumbai">Mumbai (All Zones)</option>
                  <option value="Delhi">Delhi NCR</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Pune">Pune</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Chennai">Chennai</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Sport</label>
              <div className="input-with-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
                <select value={sport} onChange={(e) => setSport(e.target.value)}>
                  <option value="Football">Football</option>
                  <option value="Cricket">Cricket (Box / Turf)</option>
                  <option value="Badminton">Badminton</option>
                  <option value="Tennis">Tennis</option>
                  <option value="Basketball">Basketball</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Date</label>
              <div className="input-with-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Preferred Slot</label>
              <div className="input-with-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <select value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)}>
                  <option value="Morning (6 AM - 10 AM)">Morning (6 AM - 10 AM)</option>
                  <option value="Afternoon (10 AM - 4 PM)">Afternoon (10 AM - 4 PM)</option>
                  <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                  <option value="Night (8 PM - 12 AM)">Night (8 PM - 12 AM)</option>
                </select>
              </div>
            </div>

            <div className="form-action-col">
              <button type="submit" className="btn btn-primary widget-search-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                Search Turfs
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Hero
