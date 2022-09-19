import React from 'react'
import './firstSection.css'

import Slack from '../../../asset/slack.svg'
import Netflix from '../../../asset/netflix.svg'
import Google from '../../../asset/google.svg'
import Airbnb from '../../../asset/airbnb.svg'
import Uber from '../../../asset/uber.svg'
import Parabolic from '../../../asset/parabolic.png'
import Phones from '../../../asset/phones.png'


const firstSection = () => {
  return (
    <div>
{/* SECTION 1 */}
<section className="section2">
<div className="patners">
  <div className="patners-logo">
    <img src={Slack} alt="Slack" />
    <img src={Netflix} alt="Netflix" />         
    <img src={Google} alt="Google" />
    <img src={Airbnb} alt="Airbnb" />   
    <img src={Uber} alt="Uber" />
    </div>
  
</div>
<section className="patners2">
  <article className="phone">
    <img className='parabolic' src={Parabolic} alt="parabolic"/>
    <img className="phone1"  src={Phones} alt="iphone12"/>
  </article>

  <article className="patners2-content">
    <h3>
      Measure Impressions and Reach Post
    </h3>
    <p>
      Graphs displaying your performance for metrics like follower evolution, average engagement rate per post and reach and impressions to give you the insights.
    </p>
    <a className="ll" href=".#">
      Learn about graphs →
      </a>
  </article>
</section>
</section>
    </div>
  )
}

export default firstSection