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
                <h1>XXXXX</h1>
                <p>XXXXX</p>
                <div>
                    <Link to='/projects' className='btn'>Temp Button</Link>
                    <Link to='/contact' className='btn btn-light'>Temp Button</Link>
                </div>
            </div>

        </div>
    )
}

export default Video
