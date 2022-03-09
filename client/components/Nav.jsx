import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

// React-Icons Import
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

export default function Nav () {
  const [open, setOpen] = useState(false)
  const { logout, loginWithRedirect } = useAuth0()

  function handleRegister (event) {
    event.preventDefault()
    loginWithRedirect({
      redirectUri: `${window.location.origin}/register`
    })
  }

  function handleLogin (event) {
    event.preventDefault()
    loginWithRedirect()
  }

  function handleLogoff (event) {
    event.preventDefault()
    logout()
  }

  const toggleMenu = () => {
    setOpen(!open)
  }

  return (
    <>
      <nav className="nav">
        {open && <div className='nav-menu-toggle' onClick={toggleMenu}>
          <Link to="/" className='nav-link home-nav-link'>Home</Link>
          {/* Hamburger Menu : */}
          <IfAuthenticated>
            <Link to='/about' className='nav-link'>About Us</Link>
            <Link to='/subjects' className='nav-link'>Subjects</Link>
            <Link to='/data' className='nav-link'>Data</Link>
            <Link to='/myclass' className='nav-link'>My Study Space</Link>
            <Link to="/profile" className='nav-link'>My Profile</Link>
            <Link to="/" onClick={handleLogoff} className='nav-link'>Log out</Link>
          </IfAuthenticated>
          <IfNotAuthenticated>
            <Link to='/about' className='nav-link'>About Us</Link>
            <Link to='/data' className='nav-link'>Data</Link>
            <Link to="/" onClick={handleLogin} className='nav-link'>Sign in</Link>
            <Link to="/" onClick={handleRegister} className='nav-link'>Register</Link>
          </IfNotAuthenticated>
          <div className='close-btn' onClick={toggleMenu} ><IoClose/></div>
        </div>
        }
        {/* Hamburger Menu Ends */}

        {!open && <div className='nav-menu'>
          <Link to='/' className='nav-link home-nav-link'>Home</Link>
          <IfAuthenticated>
            <Link to='/about' className='nav-link'>About Us</Link>
            <Link to='/subjects' className='nav-link'>Subjects</Link>
            <Link to='/data' className='nav-link'>Data</Link>
            <Link to='/myclass' className='nav-link'>My Study Space</Link>
            <Link to='/profile' className='nav-link'>My Profile</Link>
            <Link to='/' onClick={handleLogoff} className='nav-link'>Log out</Link>
          </IfAuthenticated>
          <IfNotAuthenticated>
            <Link to='/about' className='nav-link'>About Us</Link>
            <Link to='/data' className='nav-link'>Data</Link>
            <Link to='/' onClick={handleLogin} className='nav-link home-nav-link'>Sign in</Link>
            <Link to='/' onClick={handleRegister} className='nav-link home-nav-link register-button'>Register</Link>
          </IfNotAuthenticated>
          <div className='hamburger' onClick={toggleMenu} ><GiHamburgerMenu/></div>
        </div>
        }
      </nav>
    </>
  )
}
