import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LiveSection from './components/LiveSection'
import SportsRow from './components/SportsRow'
import CoachFormSection from './components/CoachFormSection'
import PartnerSection from './components/PartnerSection'
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

        {/* Join as Coach Registration Form */}
        <CoachFormSection />

        {/* Volunteer & Tournament Organizers */}
        <VolunteerSection />

        {/* Simple, Transparent Pricing */}
        <Pricing />

        {/* List Your Turf Partner Section */}
        <PartnerSection />

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
