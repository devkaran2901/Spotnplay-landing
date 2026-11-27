import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LiveSection from './components/LiveSection'
import SportsRow from './components/SportsRow'
import CoachFormSection from './components/CoachFormSection'
import VolunteerSection from './components/VolunteerSection'
import Pricing from './components/Pricing'
import AppDownload from './components/AppDownload'
import BackedByBest from './components/BackedByBest'
import Footer from './components/Footer'
import StickyMobileBar from './components/StickyMobileBar'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <LiveSection />
        <SportsRow />
        <CoachFormSection />
        <VolunteerSection />
        <Pricing />
        <AppDownload />
        <BackedByBest />
      </main>
      <Footer />
      <StickyMobileBar />
    </div>
  )
}

export default App
