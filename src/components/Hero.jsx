import React from 'react'
import basketballImg from '../assets/sports/basketball.jpg'
import cricketImg from '../assets/sports/cricket.jpg'
import footballImg from '../assets/sports/football.jpg'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-split-grid">
          {/* Left: Single Combined Multi-Sport Image Collage */}
          <div className="hero-split-visual">
            <div className="hero-collage-frame">
              <div className="hero-collage-left">
                <img src={basketballImg} alt="Basketball court action" />
              </div>
              <div className="hero-collage-right">
                <div className="hero-collage-tile">
                  <img src={cricketImg} alt="Cricket turf arena" />
                </div>
                <div className="hero-collage-tile">
                  <img src={footballImg} alt="Football turf match" />
                </div>
              </div>

              <a href="#download" className="hero-collage-download">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                <span>
                  DOWNLOAD
                  <br />
                  THE APP
                </span>
              </a>
            </div>
          </div>

          {/* Right: Site Intro */}
          <div className="hero-split-intro">
            <h1 className="hero-split-title">
              Discover nearby players, unlock premium grounds, and turn every day into game day.
            </h1>

            <div className="hero-split-actions">
              <a href="#live-now" className="btn btn-primary">
                Explore Live Arenas
              </a>
              <a href="#download" className="btn btn-secondary">
                Get the App
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
