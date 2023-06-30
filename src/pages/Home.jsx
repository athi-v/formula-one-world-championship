import React from 'react'
import Footer from '../components/Footer'
import HomeComponents from '../components/HomeComponents'
import Navbar from '../components/Navbar'
import Results from '../components/Results'


const Home = () => {
  return (
    <div>
    <Navbar />
    <HomeComponents />
    <Results />
    <Footer />
    </div>
  )
}

export default Home