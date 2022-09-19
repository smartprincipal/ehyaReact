import React from 'react'
import './heroSection.css'
import Header from '../../../Components/Header/Header'
import Vector from '../../../asset/Vector.png'
import HeroOverview from '../../../asset/overview.png'
import heroOverviewShape from '../../../asset/Shape.png'

const heroSection = () => {
  return (
    <div>
     <section className="hero-circle">
      <Header/>

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