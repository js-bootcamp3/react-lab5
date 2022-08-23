import React from 'react'
import './Table.scss';

function Table(props) {
  const heroes = [
    {name: 'Pudge', hp: '10000', class: 'Strength' },
    {name: 'Oracle', hp: '1000', class: 'Intelligence' },
    {name: 'Spirit Breaker', hp: '6000', class: 'Strength' },
    {name: 'Antimage', hp: '3000', class: 'Agility' },
    {name: 'Wraith King', hp: '5000', class: 'Strength' },
  ]

  return (
    <div className="table">
      <h1>Heroes</h1>

      <div className="table-row header">
        <div className="table-column">Name</div>
        <div className="table-column">Hit Points</div>
        <div className="table-column">Class</div>
      </div>

      {heroes.map(hero => (
        <div className="table-row">
          <div className="table-column">{hero.name}</div>
          <div className="table-column">{hero.hp}</div>
          <div className="table-column">{hero.class}</div>
        </div>
      ))}
    </div>
  )


}

export default Table
