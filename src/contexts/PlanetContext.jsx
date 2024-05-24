/**
 * PlanetContext.jsx
 *
 * description
 */

import React, {
  createContext,
  useEffect,
  useReducer
} from 'react'
import { initialState, reducer } from './PlanetReducer'
const BASE = "/context-reducer"



export const PlanetContext = createContext()



export const PlanetProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  const {
    src,
    name
  } = state
  

  const setJSON = json => {
    dispatch({
      type: "SET_JSON",
      payload: json
    })
  }


  const setIndex = direction => {
    dispatch({
      type: "SET_INDEX",
      payload: direction
    })
  }


  const loadPlanetData = () => {
    const callback = (error, json) => {
      if (error) {
        return console.log("fetch error:", error);     
      }

      json = json.map( planetData => {
        planetData.src = `${BASE}/${planetData.src}`
        return planetData
      })
      
      // Initialize the data to be stored by the Reducer
      setJSON(json)

      // Choose a random planet to show
      const random = Math.floor(Math.random() * json.length)
      setIndex(random)
    }

    fetch(`${BASE}/planets.json`)
    .then(response => response.json())
    .then(json => callback(null, json))
    .catch(callback)
  }


  useEffect(loadPlanetData, [])
  

  return (
    <PlanetContext.Provider
      value ={{
        setIndex,
        src,
        name
      }}
    >
      {children}
    </PlanetContext.Provider>
  )
}