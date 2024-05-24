/**
 * src/components/Page.jsx
 */


import React, { useContext } from 'react'
import { PlanetContext } from '../contexts/PlanetContext'


export const Page = () => {
  const { src, name } = useContext(PlanetContext)

  return (
    <img src={src} alt={name} />
  )
}