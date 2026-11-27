import React, { useState, useRef } from 'react'
import footballImg from '../assets/sports/football.jpg'
import boxFootballImg from '../assets/sports/box-football.jpg'
import cricketImg from '../assets/sports/cricket.jpg'
import boxCricketImg from '../assets/sports/box-cricket.jpg'
import basketballImg from '../assets/sports/basketball.jpg'
import tennisImg from '../assets/sports/tennis.jpg'
import volleyballImg from '../assets/sports/volleyball.jpg'

const liveItems = [
  {
    id: 1,
    type: 'turf',
    sport: 'Football',
    image: footballImg,
    title: 'Apex Arena 7-a-side Turf',
    location: 'Bandra West, Mumbai • 1.4 km',
    description: 'FIFA-grade synthetic grass with stadium floodlights, dugouts, and locker rooms.',
    timing: 'Next slot: Today, 6:00 PM',
    rating: '4.9',
    status: 'Available Now',
    urgent: false,
    price: '₹1,200',
    unit: '/ hr',
    tags: ['7v7 FIFA Turf', 'Floodlights']
  },
  {
    id: 2,
    type: 'turf',
    sport: 'Box Cricket',
    image: boxCricketImg,
    title: 'Skyline Box Cricket & Nets',
    location: 'Koramangala, Bengaluru • 2.1 km',
    description: 'Rooftop netted arena with high-speed bowling machines and digital scoreboards.',
    timing: 'Next slot: Today, 7:30 PM',
    rating: '4.8',
    status: 'Fast Filling',
    urgent: true,
    price: '₹900',
    unit: '/ hr',
    tags: ['Box Cricket', 'Bowling Machine']
  },
  {
    id: 3,
    type: 'turf',
    sport: 'Box Football',
    image: boxFootballImg,
    title: 'TurfZone Cage Football Arena',
    location: 'Andheri East, Mumbai • 1.9 km',
    description: 'High-tempo 5v5 caged turf with shock-absorbing base and chilled hydration station.',
    timing: 'Next slot: Today, 8:00 PM',
    rating: '4.9',
    status: 'Available Now',
    urgent: false,
    price: '₹1,050',
    unit: '/ hr',
    tags: ['5v5 Cage', 'Free Parking']
  },
  {
    id: 4,
    type: 'turf',
    sport: 'Basketball',
    image: basketballImg,
    title: 'HoopHub Rooftop Court',
    location: 'HSR Layout, Bengaluru • 2.5 km',
    description: 'Pro-acrylic full court with tempered glass backboards and evening night lights.',
    timing: 'Next slot: Today, 6:30 PM',
    rating: '4.8',
    status: 'Available Now',
    urgent: false,
    price: '₹700',
    unit: '/ hr',
    tags: ['Full Court', 'Night Lights']
  },
  {
    id: 5,
    type: 'turf',
    sport: 'Tennis',
    image: tennisImg,
    title: 'Clay & Hardcourt Academy',
    location: 'Juhu, Mumbai • 2.8 km',
    description: 'ITF-standard clay and hardcourts with ball-boy service and equipment rental.',
    timing: 'Next slot: Tomorrow, 7:00 AM',
    rating: '4.7',
    status: '3 Slots Left',
    urgent: true,
    price: '₹800',
    unit: '/ hr',
    tags: ['Clay Court', 'Gear Rental']
  },
  {
    id: 6,
    type: 'turf',
    sport: 'Volleyball',
    image: volleyballImg,
    title: 'SmashPoint Sand & Court Arena',
    location: 'Koregaon Park, Pune • 1.6 km',
    description: 'Cushioned outdoor court and beach-sand pit ideal for 6v6 evening squad games.',
    timing: 'Next slot: Today, 5:30 PM',
    rating: '4.8',
    status: 'Available Now',
    urgent: false,
    price: '₹650',
    unit: '/ hr',
    tags: ['Pro Net', 'Sand Pit']
  },
  {
    id: 7,
    type: 'tournament',
    sport: 'Cricket',
    image: cricketImg,
    title: 'Winter Box Cricket Championship',
    location: 'South City Club, Delhi • Dec 8',
    description: '8-over knockout league with live streaming, umpires, and ₹25,000 cash prize.',
    timing: 'Starts: Dec 8 • 9:00 AM',
    rating: '4.9',
    status: 'Registration Open',
    urgent: false,
    price: '₹1,800',
    unit: '/ team',
    tags: ['Prize: ₹25K', 'Knockout']
  },
  {
    id: 8,
    type: 'tournament',
    sport: 'Football',
    image: footballImg,
    title: 'Inter-City Champions League',
    location: 'Central Stadium, Pune • Dec 2',
    description: '16-team 7v7 championship featuring group stages, trophies, and MVP awards.',
    timing: 'Starts: Dec 2 • 4:00 PM',
    rating: '5.0',
    status: 'Registration Open',
    urgent: false,
    price: '₹2,500',
    unit: '/ team',
    tags: ['Prize: ₹50K', '16 Teams']
  }
]

function LiveSection() {
  const [filter, setFilter] = useState('all')
  const carouselRef = useRef(null)

  const filteredItems = liveItems.filter((item) => {
    if (filter === 'all') return true
    return item.type === filter
  })

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return
    const step = 336
    carouselRef.current.scrollBy({
      left: direction === 'next' ? step : -step,
      behavior: 'smooth'
    })
  }

  return (
    <section className="section live-section" id="live-now">
      <div className="container">
        <div className="live-section-header">
          <div className="live-pill-badge">
            <span className="live-dot"></span>
            LIVE AVAILABILITY
          </div>
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
              Turfs & Arenas
            </button>
            <button
              className={`filter-tab ${filter === 'tournament' ? 'active' : ''}`}
              onClick={() => setFilter('tournament')}
            >
              Tournaments
            </button>
          </div>
        </div>

        <div className="live-carousel-wrap">
          <button
            type="button"
            className="live-carousel-nav prev"
            onClick={() => scrollCarousel('prev')}
            aria-label="Scroll arenas left"
          >
            ‹
          </button>

          <div className="live-cards-carousel" ref={carouselRef}>
            {filteredItems.map((item) => (
              <article key={item.id} className="live-arena-card">
                <div className="live-arena-media">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="live-arena-overlay"></div>
                  <span className="live-arena-sport-badge">{item.sport}</span>
                  <span className={`live-arena-status-badge ${item.urgent ? 'urgent' : ''}`}>
                    <span className="live-dot"></span>
                    {item.status}
                  </span>
                  <span className="live-arena-rating">★ {item.rating}</span>
                </div>

                <div className="live-arena-body">
                  <h3 className="live-arena-title">{item.title}</h3>
                  <p className="live-arena-location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{item.location}</span>
                  </p>

                  <p className="live-arena-desc">{item.description}</p>

                  <div className="live-arena-timing">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>{item.timing}</span>
                  </div>

                  <div className="live-card-tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="live-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="live-arena-footer">
                    <div className="live-arena-price">
                      <span className="price-amount">{item.price}</span>
                      <span className="price-unit">{item.unit}</span>
                    </div>
                    <button className="btn btn-primary live-arena-btn" type="button">
                      {item.type === 'tournament' ? 'Register' : 'Book Slot'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="live-carousel-nav next"
            onClick={() => scrollCarousel('next')}
            aria-label="Scroll arenas right"
          >
            ›
          </button>
        </div>

        <div className="live-section-cta">
          <button className="btn live-login-more-btn" type="button">
            Login to find more
          </button>
        </div>
      </div>
    </section>
  )
}

export default LiveSection
