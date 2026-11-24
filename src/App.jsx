import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Sports from './components/Sports'
import Pricing from './components/Pricing'
import AppDownload from './components/AppDownload'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
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
      <Hero />
      <TrustBar />
      <Features />
      <HowItWorks />
      <Sports />
      <Pricing />
      <AppDownload />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App

