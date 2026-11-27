import React from 'react'
import footballImg from '../assets/sports/football.jpg'
import boxFootballImg from '../assets/sports/box-football.jpg'
import cricketImg from '../assets/sports/cricket.jpg'
import boxCricketImg from '../assets/sports/box-cricket.jpg'
import basketballImg from '../assets/sports/basketball.jpg'
import tennisImg from '../assets/sports/tennis.jpg'
import volleyballImg from '../assets/sports/volleyball.jpg'

const sportsList = [
  { name: 'Football', count: '180+ Turfs', image: footballImg },
  { name: 'Box Football', count: '90+ Arenas', image: boxFootballImg },
  { name: 'Cricket', count: '140+ Turfs', image: cricketImg },
  { name: 'Box Cricket', count: '110+ Nets', image: boxCricketImg },
  { name: 'Basketball', count: '45+ Arenas', image: basketballImg },
  { name: 'Tennis', count: '60+ Courts', image: tennisImg },
  { name: 'Volleyball', count: '40+ Courts', image: volleyballImg }
]

function SportsRow() {
  const marqueeItems = [...sportsList, ...sportsList]

  return (
    <section className="sports-row-section" id="popular-sports">
      <div className="container">
        <div className="sports-row-heading">
          <h2 className="sports-row-title">POPULAR SPORTS</h2>
          <p className="sports-row-subtitle">Pick your discipline and book nearby courts</p>
        </div>
      </div>

      <div className="sports-marquee-viewport">
        <div className="sports-marquee-track">
          {marqueeItems.map((sport, index) => (
            <div key={`${sport.name}-${index}`} className="sport-marquee-card">
              <div className="sport-marquee-img-wrap">
                <img src={sport.image} alt={sport.name} loading="lazy" />
              </div>
              <div className="sport-marquee-info">
                <span className="sport-row-name">{sport.name}</span>
                <span className="sport-row-count">{sport.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SportsRow
