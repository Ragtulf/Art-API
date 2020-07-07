import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const PersonDetails = () => {
  const { personId } = useParams()
  const [personInfo, setPersonInfo] = useState([])

  const apiKey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    fetch(`https://api.harvardartmuseums.org/object?person=${personId}&apikey=${apiKey}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setPersonInfo(json.records)
      })
  }, [])

  return (
    <div>
      <h2>{personInfo.displayname}</h2>
    </div>
  )
}