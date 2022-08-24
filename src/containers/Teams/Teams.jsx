import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './Teams.scss'
const URL = "https://v3.football.api-sports.io/standings?league=39&season=2019"

function Teams(props) {
  const [standings, setStandings] = useState([])
  const [league, setLeague] = useState()
  const [currentTeam, setCurrentTeam] = useState(null)

  useEffect(() => {
    fetchTeams()
  }, [])

  useEffect(() => {
    // fetchTeam(currentTeam)
    console.log('current', currentTeam)
    // setCurrentTeam({})
  }, [currentTeam])

  const fetchTeams = async () =>  {
    const requestOptions = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "",
        "x-rapidapi-host": "v3.football.api-sports.io"
      },
      redirect: "follow",
    };

    try {
      const response = await axios.get(URL, requestOptions);
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
    setCurrentTeam(team)
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
            <div
              key={item.rank} 
              className="standings-item" 
              onClick={() => handleClickTeam(item.team)}
            >
              <div>{item.rank}</div>
              <div>
                <img src={item.team.logo} alt="" />
              </div>
              <div>{item.team.name}</div>
              
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Teams
