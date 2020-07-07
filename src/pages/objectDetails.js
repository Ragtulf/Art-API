import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const ObjectDetails = () => {
  const { objectId } = useParams()
  const [objectInfo, setObjectInfo] = useState([])

  const apiKey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    fetch(`https://api.harvardartmuseums.org/object/${objectId}?apikey=${apiKey}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setObjectInfo(json)
      })
  }, [])

  return (
    <div>
      <h2>{objectInfo.title}</h2>
      {objectInfo.colors && objectInfo.colors.map((item) => (
        <svg>
          <circle cx={100} cy={100} r={40} fill={item.color} />
        </svg>
      ))}
      <img src={objectInfo.primaryimageurl} alt={objectInfo.technique} />
      {objectInfo.people && objectInfo.people.map((item) => (
        <h4>{item.name}</h4>
      ))}
    </div>
  )
}