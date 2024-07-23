import React from 'react'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav>
          <img className='logo' src={Logo} />
          <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/about'>About</a></li>
              <li><a href='portfolio'>Portfolio</a></li>
              <li><a href='/contact'>Contact</a></li>
          </ul>
      </nav>
  )
}

export default Navbar