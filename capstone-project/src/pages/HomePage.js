import React from 'react'
import Hero from "../components/Hero.js"
import Specials from '../components/Specials.js'

const HomePage = () => {
  return (
    <main className="container-fluid">
      <Hero />
      <Specials />
    </main>
  )
}

export default HomePage;