import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header.js'
import HomePage from './pages/HomePage.js'
import BookingPage from './pages/BookingPage.js'
import ConfirmedBooking from './pages/ConfirmedBooking.js'
import { Footer } from './components/Footer.js'

const App = () => {

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;