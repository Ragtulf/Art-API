import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'

export const ObjectDetails = () => {
  const { objectId } = useParams()
  const history = useHistory()
  const [objectInfo, setObjectInfo] = useState([])

  useEffect(() => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setObjectInfo(json)
      })
  }, [])

  return (
    <div>
      <button type='button' onClick={() => {history.push('/')}}>Back</button>
      <h2>{objectInfo.title}</h2>
      <Artwork src={objectInfo.primaryImage} alt={objectInfo.title} />
      <h3>{objectInfo.artistDisplayName}</h3>
      <h4>{objectInfo.medium}</h4>
      {objectInfo.tags && objectInfo.tags.map((item, index) => (
        <h6 key={index}>{item.term}</h6>
      ))}
    </div>
  )
}

const Artwork = styled.img`
  width: 90%;
`