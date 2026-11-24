import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LiveSection from './components/LiveSection'
import SportsRow from './components/SportsRow'
import PartnerBanner from './components/PartnerBanner'
import VolunteerSection from './components/VolunteerSection'
import Pricing from './components/Pricing'
import AppDownload from './components/AppDownload'
import BackedByBest from './components/BackedByBest'
import CTA from './components/CTA'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-in').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main>
        {/* Top Hero with Category Cards & Booking Engine */}
        <Hero />

        {/* Live Right Now Venues & Tournaments */}
        <LiveSection />

        {/* Sports Categories Strip */}
        <SportsRow />

        {/* List Your Turf Partner Banner */}
        <PartnerBanner />

        {/* Volunteer & Organize Tournaments */}
        <VolunteerSection />

        {/* Simple, Transparent Pricing */}
        <Pricing />

        {/* Mobile App Section */}
        <AppDownload />

        {/* Backed By The Best Endorsement */}
        <BackedByBest />

        {/* Ready to Play CTA */}
        <CTA />

        {/* Newsletter Signup Box */}
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
