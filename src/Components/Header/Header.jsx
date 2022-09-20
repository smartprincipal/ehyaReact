import React from 'react'
import './Header.css'
import Logo from '../../asset/Logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header>

        <div className="logo">
        <img src={Logo} alt="Logo" />
        </div>

        <div className="hamburger" id="hamburger">
        &#9776;
        </div>
        <div className='close' id="close"> &times; </div>

        <nav className='navBar'>
        <ul className='menu'>
          <li><Link to= "./" className='menu-list'>Home</Link></li>
        <li><a href='./' className='menu-list'>Home</a></li>
        <li><Link to='./' className='menu-list'>Landings &#129091;</Link>
        <ul id='sub-landing' className='landing-menu' >
        <li><Link to='./' className='dropdown'>Landing1</Link></li>
          <li><Link to='./' className='dropdown'>Landing2</Link></li>
          <li><Link to='./' className='dropdown'>Landing3</Link></li>
          <li><Link to='./' className='dropdown'>Landing4</Link></li>
          </ul>
        </li>
        <li><a className='menu-list'>Pages &#129091;</a>
        <ul id='sub-pages' className='sub-pages'>
          <li><Link to='./' className='dropdown'>About Us</Link></li>
          <li><Link to='./' className='dropdown'>Contact Us</Link></li>
          <li><Link to='./' className='dropdown'>Direction</Link></li>
          <li><Link to='./' className='dropdown'>All</Link></li>
        </ul>
        </li>
        <li><Link to='./' className='menu-list'>Doc</Link></li>
        <li><Link to='./' className='menu-list'>Contact Us</Link></li>
        </ul>
        <button className='btn1' type='submit'>Login</button>
        </nav>
        </header>
    </div>
  )
}

export default Header