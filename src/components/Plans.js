import React from 'react'
import {Link} from 'react-router-dom'
import './Plans.css'

const Plans = () => {
    return (
        <div className='plans'>
            <div className='card-container'>
                <div className='card'>
                <h3>- Package 1 -</h3>
                    <span className='bar'></span>
                    <p className='eth'>1 ETH</p>
                    <p>- text -</p>
                    <p>- text -</p>
                    <p>- text -</p>
                    <p>- text -</p>
                    <Link to='/contact' className='btn'>Buy</Link>
                </div>
                <div className='card'>
                    <h3>- Package 2 -</h3>
                    <span className='bar'></span>
                    <p className='eth'>2 ETH</p>
                    <p>- text -</p>
                    <p>- text -</p>
                    <p>- text -</p>
                    <p>- text -</p>
                    <Link to='/contact' className='btn'>Buy</Link>
                </div>
                <div className='card'>
                    <h3>- Package 3 -</h3>
                    <span className='bar'></span>
                    <p className='eth'>3 ETH</p>
                    <p>- text -</p>
                    <p>- text -</p>
                    <p>- text -</p>
                    <p>- text -</p>
                    <Link to='/contact' className='btn'>Buy</Link>
                </div>
            </div>
        </div>
    )
}

export default Plans
