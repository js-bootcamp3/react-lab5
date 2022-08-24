import React, { useState } from 'react'
import Select from '../../components/Select/Select';
import HeroDetails from '../HeroDetails/HeroDetails';
import './Table.scss';
import TableRow from './TableRow';

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

  const tableHeader = {name: 'Name', hp: 'Hit Points', class: 'Class'}

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
        <HeroDetails currentHero={currentHero}/>
      }
    
      {/* Table Header */}
      <TableRow 
        hero={tableHeader}
        className="table-header"
      />

      {heroes.map((hero) => (
        <TableRow
          key={hero.name}
          hero={hero}
          className="table-row"
          onClick={() => handleHero(hero)}
        />
      ))}
    </div>
  )


}

export default Table
