import React from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import { ContactUsDetails } from './ContactUsDetails'
import Hero from './Hero'

const ContactUs = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <ContactUsDetails/>
        <Footer/>
    </div>
  )
}

export default ContactUs