import React from 'react'

const starIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
)

const testimonials = [
  {
    name: 'Arjun Mehta',
    role: 'Football Enthusiast',
    initials: 'AM',
    text: 'SpotNplay completely changed how we organize our weekend matches. Booking a turf used to take hours of calling around -- now it takes under a minute.',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    role: 'State-Level Badminton Player',
    initials: 'PS',
    text: 'The tournament feature is incredible. I discovered three local competitions I never knew existed, and the bracket tracking keeps everything transparent.',
    rating: 5
  },
  {
    name: 'Rohan Kapoor',
    role: 'Cricket Team Captain',
    initials: 'RK',
    text: 'Our entire team switched to SpotNplay for bookings and gear. The team plan pays for itself with the bulk booking discounts alone.',
    rating: 5
  }
]

function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <div className="section-label">Testimonials</div>
          <h2 className="section-title">
            BACKED BY <span className="highlight">REAL PLAYERS</span>
          </h2>
          <p className="section-subtitle">
            Hear from athletes and teams who made SpotNplay their go-to sports platform.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card fade-in">
              <div className="testimonial-stars">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i}>{starIcon}</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonial.initials}
                </div>
                <div className="testimonial-author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

