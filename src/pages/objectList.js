import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const ObjectList = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?q=&isHighlight=true&hasImages=true')
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setList(json.objectIDs)
      })
  }, [])

  return (
    <div>
      <h2>Objects:</h2>
      {list.map((item, index) => {
        return (
          <Link key={index} to={`/object/${item}`}>
            <h3>{item}</h3>
          </Link>

        )
      })}
    </div>
  )
}