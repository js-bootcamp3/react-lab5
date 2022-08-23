import React, { useState } from 'react'
import Select from '../../components/Select/Select';
import './Table.scss';

function Table(props) {
  const [filterClass, setFilterClass] = useState();
  const [currentHero, setCurrentHero] = useState(null);

  const heroesRaw = [
    {name: 'Pudge', hp: '10000', class: 'Strength', skills: ['a', 'b', 'c', 'd'] },
    {name: 'Oracle', hp: '1000', class: 'Intelligence', skills: ['e', 'f', 'g', 'h'] },
    {name: 'Spirit Breaker', hp: '6000', class: 'Strength', skills: ['q', 'w', 'e', 'r'] },
    {name: 'Antimage', hp: '3000', class: 'Agility' },
    {name: 'Wraith King', hp: '5000', class: 'Strength' },
  ]

  const filterClassOptions = [
    {value: 'Strength', label: 'Strength'}, 
    {value: 'Intelligence', label: 'Intelligence'},
    {value: 'Agility', label: 'Agility'} 
  ]

  const handleFilterClass = (event) => {
    setFilterClass(event.target.value)  
  }

  const handleHero = (hero) => {
    setCurrentHero(hero)
  }
  const heroes = !filterClass || filterClass === 'all'
    ? heroesRaw 
    : heroesRaw.filter(hero => hero.class === filterClass);

  return (
    <div className="table">
      <h1>Heroes</h1>
      <div className="table-filters">
        <Select 
          name="filter-class" 
          label="Filter by Hero Class: " 
          options={filterClassOptions}
          onSelect={handleFilterClass}
        />
      </div>

      {currentHero && 
        <div>
          <h2>DETAILS: {currentHero.name}</h2>
          Hero Class: {currentHero.class}
          {currentHero.skills && <div>SKILLS: {currentHero.skills.join(', ')}</div>}
        </div>
      }

      <div className="table-header">
        <div className="table-column">Name</div>
        <div className="table-column">Hit Points</div>
        <div className="table-column">Class</div>
      </div>

      {heroes.map((hero) => (
        <div key={hero.name} className="table-row" onClick={() => handleHero(hero)}>
          <div className="table-column">{hero.name}</div>
          <div className="table-column">{hero.hp}</div>
          <div className="table-column">{hero.class}</div>
        </div>
      ))}
    </div>
  )


}

export default Table
