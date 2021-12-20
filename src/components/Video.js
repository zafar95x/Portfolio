import React from 'react'
import {Link} from 'react-router-dom'
import './Video.css'
import danceVideo from '../pictures/Dancer - 71834.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={danceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Design | Devise | Depict</h1>
                <p>From A to Z</p>
                <div>
                    <Link to='/projects' className='btn'>Our Designs</Link>
                    <Link to='/plans' className='btn btn-light'>Begin Work</Link>
                </div>
            </div>
        </div>
    )
}

export default Video
