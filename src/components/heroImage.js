import React from 'react'

const HeroImageContainer = ({imageUrl}) => (
  <div className="image-hero" style={{backgroundImage:`url(${imageUrl})`}}>
    <img src={imageUrl} alt="hero" style={{opacity: 0}} />
  </div>
)

export default HeroImageContainer
