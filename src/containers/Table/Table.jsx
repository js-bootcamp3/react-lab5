import React, { useState } from 'react'
import Select from '../../components/Select/Select';
import './Table.scss';

function Table(props) {
  const [filterClass, setFilterClass] = useState();

  const heroesRaw = [
    {name: 'Pudge', hp: '10000', class: 'Strength' },
    {name: 'Oracle', hp: '1000', class: 'Intelligence' },
    {name: 'Spirit Breaker', hp: '6000', class: 'Strength' },
    {name: 'Antimage', hp: '3000', class: 'Agility' },
    {name: 'Wraith King', hp: '5000', class: 'Strength' },
  ]

  const filterClassOptions = [
    {value: 'Strength', label: 'Strength'}, 
    {value: 'Intelligence', label: 'Intelligence'},
    {value: 'Agility', label: 'Agility'} 
  ]

  const handleFilterClass = (event) => {
    console.log('event.target.value', event.target.value)
    setFilterClass(event.target.value)  
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

      <div className="table-header">
        <div className="table-column">Name</div>
        <div className="table-column">Hit Points</div>
        <div className="table-column">Class</div>
      </div>

      {heroes.map((hero, index) => (
        <div key={hero.name} className="table-row">
          <div className="table-column">{hero.name}</div>
          <div className="table-column">{hero.hp}</div>
          <div className="table-column">{hero.class}</div>
        </div>
      ))}
    </div>
  )


}

export default Table
