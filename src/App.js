import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import Table from './containers/Table/Table';
import Teams from './containers/Teams/Teams';
import TeamDetails from './containers/Teams/TeamDetails';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to={'/teams'}>Teams</Link>
          <Link to={'/heroes'}>Heroes</Link> 
        </nav>
      </header>
      <Routes>  
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:id" element={<TeamDetails />} />
        <Route path="/heroes" element={<Table />} />
      </Routes>
    </div>
  );
}

export default App;
