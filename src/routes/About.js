import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Plans from '../components/Plans'

const About = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='ABOUT' text='Choose your plan'/>
            <Plans />
            <Footer />
        </div>
    )
}

export default About
