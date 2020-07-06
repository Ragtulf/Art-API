import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const List = () => {
  const [list, setList] = useState([])

  const apiKey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    fetch(`https://api.harvardartmuseums.org/technique?apikey=${apiKey}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setList(json.records)
      })
  }, [apiKey])

  return (
    <div>
      <h2>techniques:</h2>
      {list.map((item) => {
        return (
          <Link to={`/object/${item.id}`}>
            <h3 key={item.id}>{item.name}</h3>
          </Link>

        )
      })}
    </div>
  )
}