import React from 'react'

import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
import { links } from '../../data'
import { VscThreeBars } from 'react-icons/vsc'
import { VscClose } from 'react-icons/vsc'

import Logo from '../../images/logo.png'
const Navbar = () => {
    const [isNavShowing , setIsNavShowing] = React.useState(false)
    return (
        <nav>
            <div className="container nav_container">
                <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
                    <img src={Logo} alt="Navbar Logo" />
                    
                </Link>
                <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>{
                    links.map(({ name, path }, index) => {
                        return (
                            <li key = {index}> <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ""} onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink></li>

                        )

                    })
                }
                </ul>

                <button className="nav_toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                    {
                        isNavShowing ? <VscClose /> : <VscThreeBars />
                    }
                </button>
            </div>
        </nav>
    )
}

export default Navbar