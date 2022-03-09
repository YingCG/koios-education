import React from 'react'
import { Link } from 'react-router-dom'

import Nav from './Nav'

export default function Header () {
  return (
    <header className="header">
      <div className="flex-container container">
        <Link to="/">
          <div className="logo-container">
            <img src='/images/KoiosLogo.svg' alt="koioslogo" className='logo-image' />
          </div>
        </Link>
        <Nav />
      </div>
    </header>
  )
}
