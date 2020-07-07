import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const ObjectList = () => {
  const [list, setList] = useState([])

  const apiKey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    fetch(`https://api.harvardartmuseums.org/object?color=any&hasimage=1&size=40&apikey=${apiKey}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setList(json.records)
      })
  }, [apiKey])

  return (
    <div>
      <h2>Objects:</h2>
      {list.map((item) => {
        return (
          <Link key={item.id} to={`/object/${item.id}`}>
            <h3>{item.title}</h3>
          </Link>

        )
      })}
    </div>
  )
}