import React from 'react'

function TrustBar() {
  const partners = [
    'DECATHLON',
    'NIKE',
    'PUMA',
    'ADIDAS',
    'YONEX',
    'CEAT'
  ]

  return (
    <section className="trust-bar">
      <div className="container">
        <p className="trust-bar-label">Trusted by leading sports brands</p>
        <div className="trust-logos">
          {partners.map((partner) => (
            <div key={partner} className="trust-logo">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar

