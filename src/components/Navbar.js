import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'

function Navbar() {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='header'>
            <Link to='/'><h1>Temporary</h1></Link>
            <ul className='nav-menu'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
            <div className='hamburger'>
                <FaBars size={20} style={{color:'#fff'}}/>
            </div>
        </div>
    )
}

export default Navbar
