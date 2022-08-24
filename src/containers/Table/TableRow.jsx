import React from 'react'

function TableRow({hero, className, onClick}) {
  return (
    <div className={className} onClick={onClick}>
      <div className="table-column">{hero.name}</div>
      <div className="table-column">{hero.hp}</div>
      <div className="table-column">{hero.class}</div>
    </div>
  )
}

export default TableRow
