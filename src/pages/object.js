import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const ObjectDetails = () => {
  const { objectId } = useParams()
  const [objectInfo, setObjectInfo] = useState([])

  const apiKey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    fetch(`https://api.harvardartmuseums.org/technique/${objectId}?apikey=${apiKey}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setObjectInfo(json)
        console.log(objectInfo)
      })
  }, [])

  return (
    <div>
      <h3>Hey there!</h3>
      <h3>{objectInfo.name}</h3>
    </div>
  )
}