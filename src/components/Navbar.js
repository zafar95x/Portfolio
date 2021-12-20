import React from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'

function Navbar() {
    return (
        <div className='header'>
            <Link to='/'>Temporary</Link>
            <ul className='nav-menu'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/'>About Me</Link>
                </li>
                <li>
                    <Link to='/'>Projects</Link>
                </li>
                <li>
                    <Link to='/'>Contact</Link>
                </li>
            </ul>
            <div className='hamburger'>
                <FaBars size={20} style={{color:'black'}}/>
            </div>
        </div>
    )
}

export default Navbar
