/**
 * Footer.jsx
 */ 

import React, { useContext } from 'react'
import { PlanetContext } from '../contexts/PlanetContext'

export const Footer = (props) => {
  const { setIndex } = useContext(PlanetContext)

  const choosePlanet = ({ target }) => {
    setIndex(target.name)
  }

  return (
    <footer
      onClick={choosePlanet}
    >
      <button
        name="previous"
      >
        Previous
      </button>
      <button
        name="next"
      >
        Next
      </button>
    </footer>
  )
}