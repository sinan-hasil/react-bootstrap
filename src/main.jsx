import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Navbar from './Sections/navbar.jsx'
import HeroSection from './Sections/HeroSection.jsx'
import Card from './Sections/card.jsx'
import Footer from './Sections/footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <HeroSection />
    <Card />
    <Footer />
  </React.StrictMode>
)
