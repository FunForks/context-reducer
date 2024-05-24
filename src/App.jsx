/**
 * src/App.jsx
 */


import React from 'react'
import { PlanetProvider } from './contexts/PlanetContext'
import {
  Header,
  Page,
  Footer
} from './components'


export const App = () => {

  return (
    <PlanetProvider>
      <Header />
      <Page />
      <Footer />
    </PlanetProvider>
  )
}