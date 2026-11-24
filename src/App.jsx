import React from 'react'
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
import StickyMobileBar from './components/StickyMobileBar'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        {/* Mobile-First Hero with App Highlights & Instant Search */}
        <Hero />

        {/* Live Right Now Venues & Tournaments */}
        <LiveSection />

        {/* Popular Sports Disciplines Carousel */}
        <SportsRow />

        {/* List Your Turf Partner Banner */}
        <PartnerBanner />

        {/* Volunteer & Tournament Organizers */}
        <VolunteerSection />

        {/* Simple, Transparent Pricing with Plain White Cards */}
        <Pricing />

        {/* Mobile App Section & Feature Breakdown */}
        <AppDownload />

        {/* Backed By The Best Endorsement Card */}
        <BackedByBest />

        {/* Ready to Play CTA */}
        <CTA />

        {/* Stay In The Game Newsletter */}
        <NewsletterSection />
      </main>
      <Footer />

      {/* Floating Bottom Navigation Bar for Mobile Screen Users */}
      <StickyMobileBar />
    </div>
  )
}

export default App
