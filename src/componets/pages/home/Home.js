import React from 'react'
import Navbar from '../../Navbar'
import Hero from './Hero'
import HowItWorks from './HowItWorks'
import Services from './Services'
import WhyLiitCare from './WhyLiitCare'
import ServiceProvider from './ServiceProvider'
import Footer from '../../Footer'
import MiddleSection from './MiddleSection'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Services/>
        <HowItWorks/>
        <WhyLiitCare/>
        <ServiceProvider/>
        <MiddleSection/>
        <Footer/>
    </div>
  )
}

export default Home