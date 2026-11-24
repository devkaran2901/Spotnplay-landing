import React, { useState } from 'react'

const liveItems = [
  {
    id: 1,
    type: 'turf',
    sport: 'Football',
    title: 'Apex Arena 7-a-side Turf',
    location: 'Bandra West, Mumbai (1.4 km away)',
    timing: 'Next slot: Today, 6:00 PM',
    price: 'INR 1,200',
    unit: '/ hr',
    badge: 'Available Now',
    rating: '4.9 (124 reviews)'
  },
  {
    id: 2,
    type: 'turf',
    sport: 'Cricket',
    title: 'Skyline Box Cricket & Nets',
    location: 'Koramangala, Bengaluru (2.1 km away)',
    timing: 'Next slot: Today, 7:30 PM',
    price: 'INR 900',
    unit: '/ hr',
    badge: 'Fast Filling',
    rating: '4.8 (98 reviews)'
  },
  {
    id: 3,
    type: 'tournament',
    sport: 'Football',
    title: 'Inter-City Champions League 2024',
    location: 'Central Stadium, Pune',
    timing: 'Starts: Dec 2, 2024',
    price: 'INR 2,500',
    unit: '/ team',
    badge: 'Registration Open',
    rating: 'Prize: INR 50,000'
  },
  {
    id: 4,
    type: 'turf',
    sport: 'Badminton',
    title: 'ProSmash Indoor Badminton Court',
    location: 'Indiranagar, Bengaluru (3.0 km away)',
    timing: 'Next slot: Today, 5:00 PM',
    price: 'INR 450',
    unit: '/ hr',
    badge: 'Available Now',
    rating: '4.9 (210 reviews)'
  },
  {
    id: 5,
    type: 'turf',
    sport: 'Tennis',
    title: 'Clay & Hardcourt Tennis Academy',
    location: 'Juhu, Mumbai (2.8 km away)',
    timing: 'Next slot: Tomorrow, 7:00 AM',
    price: 'INR 800',
    unit: '/ hr',
    badge: '3 Slots Left',
    rating: '4.7 (76 reviews)'
  },
  {
    id: 6,
    type: 'tournament',
    sport: 'Cricket',
    title: 'Winter Box Cricket Championship',
    location: 'South City Sports Club, Delhi NCR',
    timing: 'Starts: Dec 8, 2024',
    price: 'INR 1,800',
    unit: '/ team',
    badge: 'Registration Open',
    rating: 'Prize: INR 25,000'
  }
]

function LiveSection() {
  const [filter, setFilter] = useState('all')

  const filteredItems = liveItems.filter((item) => {
    if (filter === 'all') return true
    return item.type === filter
  })

  return (
    <section className="section live-section" id="live-now">
      <div className="container">
        <div className="live-section-header">
          <div className="section-label">Live Availability</div>
          <h2 className="section-title">
            LIVE RIGHT <span className="highlight">NOW</span>
          </h2>
          <p className="section-subtitle">
            Book immediately available slots or secure your spot in ongoing city tournaments.
          </p>

          <div className="live-filter-tabs">
            <button
              className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Venues & Tournaments
            </button>
            <button
              className={`filter-tab ${filter === 'turf' ? 'active' : ''}`}
              onClick={() => setFilter('turf')}
            >
              Turfs & Courts
            </button>
            <button
              className={`filter-tab ${filter === 'tournament' ? 'active' : ''}`}
              onClick={() => setFilter('tournament')}
            >
              Tournaments
            </button>
          </div>
        </div>

        <div className="live-cards-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="live-card fade-in">
              <div className="live-card-top">
                <span className="live-sport-tag">{item.sport}</span>
                <span className={`live-status-pill ${item.badge === 'Fast Filling' ? 'urgent' : ''}`}>
                  <span className="live-blink-dot"></span>
                  {item.badge}
                </span>
              </div>

              <h3 className="live-card-title">{item.title}</h3>

              <div className="live-card-meta">
                <div className="meta-row">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>{item.location}</span>
                </div>
                <div className="meta-row">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>{item.timing}</span>
                </div>
              </div>

              <div className="live-card-bottom">
                <div className="live-card-price">
                  <span className="price-val">{item.price}</span>
                  <span className="price-unit">{item.unit}</span>
                </div>
                <button className="btn btn-primary btn-sm">
                  {item.type === 'tournament' ? 'Register Now' : 'Book Slot'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="live-section-cta">
          <button className="btn btn-secondary">
            View All 500+ Turfs & Tournaments
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default LiveSection
