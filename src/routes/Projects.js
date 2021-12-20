import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Work from '../components/Work'

const Projects = () => {
    return (
        <div>
            <Navbar/>
            <HeroImage heading='Projects' text='View our work'/>
            <Work />
            <Footer />
        </div>
    )
}

export default Projects
