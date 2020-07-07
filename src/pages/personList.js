import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const PersonList = () => {
  const [personList, setPersonList] = useState([])

  const apiKey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    fetch(`https://api.harvardartmuseums.org/person?size=40&apikey=${apiKey}`)
      .then((res) => res.json())
      .then((json) => {
        console.log('person json:', json)
        setPersonList(json.records)
      })
  }, [apiKey])

  return (
    <div>
      <h2>Persons:</h2>
      {personList.map((item) => {
        return (
          <Link key={item.personid} to={`/person/${item.personid}`}>
            <h3>{item.displayname}</h3>
          </Link>

        )
      })}
    </div>
  )
}