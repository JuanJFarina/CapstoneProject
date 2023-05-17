import React from 'react'
import Hero from "../components/Hero.js"
import Specials from '../components/Specials.js'
import CustomersSay from '../components/CustomersSay.js'

const HomePage = () => {
  return (
    <main className="container-fluid">
      <Hero />
      <Specials />
      <CustomersSay />
    </main>
  )
}

export default HomePage;