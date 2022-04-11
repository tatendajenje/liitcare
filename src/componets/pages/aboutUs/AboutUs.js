import React from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import Services from '../home/Services'
import AdvertMessenger from './AdvertMessenger'
import Hero from './Hero'
import MeetTeam from './MeetTeam'
import OurStory from './OurStory'

const AboutUs = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <OurStory/>
        <MeetTeam/>
        <Services/>
        <AdvertMessenger/>
        <Footer/>
    </div>
  )
}

export default AboutUs