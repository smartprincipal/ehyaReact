import Logo from '../LandingPage/Logo.svg';
import './landing.css'
import Vector from '../../asset/Vector.png'
const landing = () => {
  return (
    <div>
     <section className="hero-circle">

{/* Header Section With LOGO, NAVIGATION BAR AND BUTTON */}
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
 <li><a className='menu-list' href='.#'>Home</a></li>
 <li><a className='menu-list' href='.#'>Landings &#129091;</a>
 <ul id='sub-landing' className='landing-menu' >
    <li><a className='dropdown' href='.#'>Landing1</a></li>
    <li><a className='dropdown' href='.#'>Landing2</a></li>
    <li><a className='dropdown' href='.#'>Landing3</a></li>
    <li><a className='dropdown' href='.#'>Landing4</a></li>
  </ul>
 </li>
 <li><a className='menu-list' href='.#'>Pages &#129091;</a>
 <ul id='sub-pages' className='sub-pages'>
  <li><a className='dropdown' href='.#'>About Us</a></li>
  <li><a className='dropdown' href='.#' >Contact Us</a></li>
  <li><a className='dropdown' href='.#'>Direction</a></li>
  <li><a className='dropdown' href='.#'>All</a></li>
 </ul>
 </li>
 <li><a className='menu-list' href='.#'>Doc</a></li>
 <li><a className='menu-list' href='.#'>Contact Us</a></li>
 </ul>
 <button className='btn1' type='submit'>Login</button>
</nav>
 </header>
{/* HERO_ SECTION CONTENT AND IMAGE */}
 <section className='sub-hero-circle'>
  <article className='hero-content'>
 <h1>We help you <br />grow your business <br />faster</h1>
 <img src={Vector} alt="Vector" />
  </article>
 </section>

</section>
    </div>
  )
}

export default landing