import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';

import { BASE_URL, requestOptions } from '../../constants/api';

function TeamDetails() {
  const [details, setDetails] = useState(null)
  
  const { id } = useParams();

  useEffect(() => {
    fetchTeam();
  }, [])

  const fetchTeam = async () => {
    try {
      const url = `${BASE_URL}/teams?id=${id}`
      const response = await axios.get(url, requestOptions)
      setDetails(response.data.response[0])  
    } catch (error) {
      alert('error', error)  
    }
    
  }

  console.log('details', details)
  //Если есть English return English, иначе первый.
  const langs = [
    {deu: 'German', en: 'English'},
    {rom: 'Roman'},
    {fr: 'French', rom: 'Roman'},
    {fr: 'French', en: 'English', rom: 'Roman'},
    {ru: 'Russian', rom: 'Roman'}
  ]
  
  const filtered = langs.reduce((acc, item) => {
    const keys = Object.keys(item)

    if (keys.includes('en')) {
      acc.push({en: item['en']})
    } else {
      acc.push( {[keys[0]]: item[keys[0]]})
    }
    return acc
  }, [])
  
  if (!details) return null;
  return (
    <div>
      <h1>{details.team.name}</h1>
      <div>
        <h2>Languages</h2>
       {filtered.map(item => (
          <div>
            {Object.keys(item).map(key => 
              <div>{item[key]}</div>
            )}
          </div>
       ))}
      </div>
      <div>
        <img src={details.team.logo} alt="" />
        <span>Years of founded {details.team.founded}</span>
      </div>
      <h2>Stadium</h2>
      <div>
        <div>
          <div>Country: <span>{details.team.country}</span></div>
          City: <span>{details.venue.city}</span>
          Address: <span>{details.venue.address}</span>
          Capacity: <span>{details.venue.capacity}</span>
          Name: <span>{details.venue.name}</span>
        </div>
      </div>

    </div>
  )
}


export default TeamDetails
