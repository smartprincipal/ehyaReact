import React, { useState } from 'react'
import './Header.css'
import Logo from '../../asset/Logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  // function eventHandler(){
  //   const menuIcon = document.querySelector(".hamburger");
  //   const navBar = document.querySelector(".menu");
  //   const times = document.getElementById("close");
    
  //   menuIcon.addEventListener("click", () => {
  //       menuIcon.classList.toggle("deactive");
  //     navBar.classList.toggle("show-menu");
  //     times.classList.toggle("show-close");
  //   });
    
  // }
  // function eventClose() {
  //   const menuIcon = document.querySelector(".hamburger");
  //   const navBar = document.querySelector(".menu");
  //   const times = document.getElementById("close");
    
  //   times.addEventListener("click", () => {
  //     navBar.classList.toggle("show-menu");
  //     menuIcon.classList.toggle("deactive")
  //     times.classList.toggle("show-close");
      
  //   });
    
  // }
  // function eventLanding(){
  //   let landings = document.getElementById("landings");
  //   let subLanding = document.getElementById("sub-landing");
    
  //   landings.addEventListener("click", () => {
  //     subLanding.classList.toggle("landing-menu");
  //     subLanding.classList.toggle("sub-landing");
  //   });
    
    
  // }
  
  // function eventPages(){
    
  //   let pages = document.getElementById("pages");
  //   let subPages = document.getElementById("sub-pages");
    
  //   pages.addEventListener("click", () => {
  //     subPages.classList.toggle("pages-menu");
  //     subPages.classList.toggle("sub-pages");
  //   });
  // }

const [toggle, setToggle] = useState(false)

// const [onmouseover, setOnMouseOver] = useState(false)

const handleToggle = () => {
  return setToggle(prevToggle =>!prevToggle)
}

// const handleMouse =() => {
//   return setOnMouseOver(prevMouse => !prevMouse)
// }



  return (
    <div>
        <header>

        <div className="logo">
        <img src={Logo} alt="Logo" />
        </div>

        <div className="hamburger" id="hamburger" onClick={handleToggle}>
        {toggle ? <span>&times;</span> : <span>&#9776;</span>}
        </div>

        {/* <div className='close' id="close" onclick={eventClose}>  </div> */}

        <nav className='navBar'>
        <ul className={toggle ? 'menu-drop': 'menu'}>
        {/* // {toggle ? 'menu': 'deactive'} */}
        <li><Link to='/' className='menu-list'>Home</Link></li>
        <li><Link to='./' className='menu-list'>Landings &#129091;</Link>
        <ul id='sub-landing'>
        <li><Link to='./' className='dropdown'>Landing1</Link></li>
          <li><Link to='./' className='dropdown'>Landing2</Link></li>
          <li><Link to='./' className='dropdown'>Landing3</Link></li>
          <li><Link to='./' className='dropdown'>Landing4</Link></li>
          </ul>
        </li>
        <li><Link to='./' className='menu-list'>Pages &#129091;</Link>
        <ul id='sub-pages' className='sub-pages'>
          <li><Link to='./' className='dropdown'>About Us</Link></li>
          <li><Link to='./' className='dropdown'>Contact Us</Link></li>
          <li><Link to='./' className='dropdown'>Direction</Link></li>
          <li><Link to='./' className='dropdown'>All</Link></li>
        </ul>
        </li>
        <li><Link to='./' className='menu-list'>Doc</Link></li>
        <li><Link to='/AboutUs' className='menu-list'>Contact Us</Link></li>

        <button className='btn1' type='submit'>Login</button>
    
    
        </ul>
        </nav>
        </header>
    </div>
  )
}

export default Header