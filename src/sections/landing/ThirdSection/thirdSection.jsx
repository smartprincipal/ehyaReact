import React from 'react'
import './thirdSection.css'
import cardImage1 from "../../../asset/cardImage1.png"
import cardImage2 from "../../../asset/cardImage2.png"
import cardImage3 from "../../../asset/cardImage3.png"
import cardImage4 from "../../../asset/cardImage4.png"

const thirdSection = () => {
  return (
    <div>
  <section className="section3">
    <article>
      <h2>
        Track any hashtag(s) Performance
      </h2>
      <p>
        Don’t waste time on search manual tasks. Let Automation do it for you. <br /> Simplify workflows, reduce errors, and save time.
      </p>
    </article>
    <div clasNames="flexx">
      <div className="flexxx">
        <img src={cardImage1} alt='cardImage'/>
        <h4 className="flex-tit">Hashtag Growth</h4>
        <p className="flex-p">Follow a hashtag growth total posts, videos and images.</p>
      </div>
      <div class="flexxx">
        <img src={cardImage2} alt="cardImage"/>
        <h4 className="flex-tit">Influencers by Hashtag</h4>
        <p className="flex-p">Identify the most influential people posting with your hashtag.</p>
      </div>
      <div className="flexxx">
        <img src={cardImage3} alt="cardImage"/>
        <h4 className="flex-tit">Most Influential Post</h4>
        <p className="flex-p">See the most influential posts on hashtag you
          are following on.</p>
      </div>
      <div className="flexxx">
        <img src={cardImage4} alt="cardImage"/>
        <h4 className="flex-tit">Hashtag Location</h4>
        <p className="flex-p">Visualize where people are posting using your
          hashtag made.</p>
      </div>
    </div>
    </section>
    </div>
  )
}

export default thirdSection