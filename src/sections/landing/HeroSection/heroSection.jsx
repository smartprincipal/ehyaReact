import React from 'react'
import './heroSection.css'
import Logo from '../../../asset/Logo.svg'
import Vector from '../../../asset/Vector.png'
import HeroOverview from '../../../asset/overview.png'
import heroOverviewShape from '../../../asset/Shape.png'

const heroSection = () => {
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
 <img className='vector' src={Vector} alt="Vector" />
 <p className="ehya">
      Ehya is the Instagram analytics platform teams use to stay focused on the goals, track engagement for report your business .
     </p>
     <div className="fl">
      <form action="">
       <input className="btn-fl" type="button" value="See how it works "/>
      </form>
       <a className="col" href=".#">Get a free demo → </a>
      </div>
  </article>
{/* Second Section of the HEro SECTION THAT WAS FLEXED{THE IMAGE SECTION OF HERO} */}
  <article className='hero-img'>
    <img className='heroOverview' src={HeroOverview} alt="Overview" />
    <img className='heroOverviewShape' src={heroOverviewShape} alt="OverviewShape" />
  </article>
 </section>

</section>
    </div>
  )
}

export default heroSection