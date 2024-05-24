/**
 * src/components/Header.jsx
 */


import React, { useContext } from 'react'
import { PlanetContext } from '../contexts/PlanetContext'


export const Header = () => {
  const { name } = useContext(PlanetContext)

  return (
    <header>
      <h1>{name}</h1>
    </header>
  )
}