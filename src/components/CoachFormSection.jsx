import React, { useState } from 'react'

function CoachFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    sport: '',
    qualification: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="coach-form-section" id="join-coach">
      <div className="container">
        <div className="coach-form-card">
          <div className="section-label">JOIN AS COACH</div>

          <h2 className="coach-form-title">
            TRAIN &amp; COACH ATHLETES ON SPOTNPLAY
          </h2>
          <p className="coach-form-subtitle">
            Are you a sports trainer or certified coach? Join spotNplay to list your training programs, build your player roster, and get booked.
          </p>

          <form onSubmit={handleSubmit} className="coach-form">
            <div className="coach-form-grid">
              <div className="form-group">
                <label htmlFor="coach-name">
                  Name <span className="required-star">*</span>
                </label>
                <input
                  id="coach-name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="coach-email">
                  Mail ID <span className="required-star">*</span>
                </label>
                <input
                  id="coach-email"
                  name="email"
                  type="email"
                  required
                  placeholder="coach@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="coach-mobile">
                  Mobile Number <span className="required-star">*</span>
                </label>
                <input
                  id="coach-mobile"
                  name="mobile"
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="coach-sport">
                  Sports <span className="required-star">*</span>
                </label>
                <select
                  id="coach-sport"
                  name="sport"
                  required
                  value={formData.sport}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select Primary Sport</option>
                  <option value="Football">Football</option>
                  <option value="Box Football">Box Football</option>
                  <option value="Cricket">Cricket</option>
                  <option value="Box Cricket">Box Cricket</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Tennis">Tennis</option>
                  <option value="Volleyball">Volleyball</option>
                </select>
              </div>
            </div>

            <div className="form-group coach-qualification-group">
              <label htmlFor="coach-qualification">
                Qualification <span className="required-star">*</span>
              </label>
              <textarea
                id="coach-qualification"
                name="qualification"
                rows="3"
                required
                placeholder="e.g. NIS Certified, B.P.Ed, State Level Medallist, 5+ years coaching experience"
                value={formData.qualification}
                onChange={handleChange}
              />
            </div>

            <div className="coach-form-footer">
              <p className="coach-form-note">
                Certified coaches get priority listings and verified badges.
              </p>
              <button type="submit" className="btn btn-primary coach-submit-btn">
                {submitted ? 'Application Submitted ✓' : 'Join as Coach →'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CoachFormSection

