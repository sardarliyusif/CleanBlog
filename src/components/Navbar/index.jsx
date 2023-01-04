import React, { useState } from 'react'
import { FaGithub , FaBars } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import './style.scss'

export const Navbar = () => {
    const [toogle, setToogle] = useState(false)
    const handleClick = () => {
        setToogle(!toogle)
        console.log(toogle);
    }
  return (
    <nav className='navbar container-nav'>
        <div className="logo">
            <NavLink to='/'>Start Bootstrap</NavLink>
        </div>
        <ul className='menu'>
            <li>
                <NavLink to='/' >Home</NavLink>
            </li>
            <li>
                <NavLink to='about' >About</NavLink>
            </li>
            <li>
                <Link to="www.github.com" target='_blank'><FaGithub/></Link>
            </li>
        </ul>
        <FaBars className='hamburger' onClick={handleClick} />
        <ul onClick={handleClick} className={`mobile-menu ${toogle ? 'toggled' : ''}`}>
            <li>
                <NavLink to='/' >Home</NavLink>
            </li>
            <li>
                <NavLink to='about' >About</NavLink>
            </li>
            <li>
                <Link to="www.github.com" target='_blank'><FaGithub/></Link>
            </li>
        </ul>
    </nav>
  )
}

