import React from 'react'
import './firstSection.css'

import Slack from '../../../asset/slack.svg'
import Netflix from '../../../asset/netflix.svg'
import Google from '../../../asset/google.svg'
import Airbnb from '../../../asset/airbnb.svg'
import Uber from '../../../asset/uber.svg'
import Parabolic from '../../../asset/parabolic.png'
import Iphone121 from '../../../asset/iphone12-1.png'
import Iphone122 from '../../../asset/iphone12-2.png'
const firstSection = () => {
  return (
    <div>
{/* SECTION 1 */}
<section className="section2">
<div className="patners">
  <div className="patners-logo">
    <img src={Slack} alt="Slack" />
  </div>
  <div class="patners-logo">
    <img src={Netflix} alt="Netflix" />         
  </div>
  <div className="patners-logo">
    <img src={Google} alt="Google" />
  </div>
  <div className="patners-logo">
    <img src={Airbnb} alt="Airbnb" />   
  </div>
  <div className="patners-logo">
    <img src={Uber} alt="Uber" />
  </div>
  
</div>
<section className="patners2">
  <article className="phone">
    <div className="parabolic">
    <img src={Parabolic} alt="parabolic"/>
    </div>
    <div className="phoneBox">

    <img className="phone-1"  src={Iphone121} alt="iphone12-1"/>
    <img className="phone-2" src={Iphone122} alt="iphone12-2"/>
    </div>
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