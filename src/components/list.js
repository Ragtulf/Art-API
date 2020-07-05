import React, { useEffect, useState } from 'react'
import { Object } from './object'
// import styled from 'styled-components'

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
  }, [])

  return (
    <div>
      <h2>techniques:</h2>
      {list.map((item) => {
        return (
          <Object key={item.id} 
            name={item.name}/>
        )
      })}
    </div>
  )
}