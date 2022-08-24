import React from 'react'

const HeroDetails = ({currentHero}) => {
  return (
    <div>
      <h2>DETAILS: {currentHero.name}</h2>
      Hero Class: {currentHero.class}
      {currentHero.skills && <div>SKILLS: {currentHero.skills.join(', ')}</div>}
    </div>
  )
}

export default HeroDetails