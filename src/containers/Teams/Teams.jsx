import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { BASE_URL, requestOptions } from '../../constants/api';
import './Teams.scss'

function Teams(props) {
  const [standings, setStandings] = useState([])
  const [league, setLeague] = useState()
  

  useEffect(() => {
    fetchTeams()
  }, [])

  const fetchTeams = async () =>  {
    const url = `${BASE_URL}/standings?league=39&season=2019`    

    try {
      const response = await axios.get(url, requestOptions);
      const league = response.data.response[0].league;

      const data = {
        country: league.country,
        flag: league.flag,
        logo: league.logo,
        name: league.name,
        season: league.season,
      }
      setLeague(data)
      setStandings(league.standings[0])
    } catch (error) {
      console.error(error);
    }
  }

  const handleClickTeam = (team) => {

  }

  if (!league) return 'Loading...'

  return (
    <div>
      <h1>{league.country}: {league.name} - {league.season}</h1>
      <div>
        <img src={league.logo} alt="" />
        <img width='160' src={league.flag} alt="flag" />
      </div>

      <div className="standings">
        {standings.map((item) => {
          return (
            <Link
              to={`/teams/${item.team.id}`}
              key={item.rank} 
              className="standings-item" 
            >
              <div>{item.rank}</div>
              <div>
                <img src={item.team.logo} alt="" />
              </div>
              <div>{item.team.name}</div>
              
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Teams
