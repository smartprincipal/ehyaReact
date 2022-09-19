import React from 'react'
import './thirdSection.css'
import Card from '../../../Components/Card/card'
import cardImage1 from '../../../asset/cardImage1.png'
import cardImage2 from '../../../asset/cardImage2.png'
import cardImage3 from '../../../asset/cardImage3.png'
import cardImage4 from '../../../asset/cardImage4.png'



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
    <div className="cardContainer">
      <Card content='Follow a hashtag growth total posts, videos and images.' head='Hashtag Growth' Img = {cardImage1}/>
      <Card content='Identify the most influential people posting with your hashtag.' head='Influencers by Hashtag' Img = {cardImage2}/>
      <Card content='See the most influential posts on hashtag you are following on.' head='Most Influential Post' Img = {cardImage3}/>
      <Card content='Visualize where people are posting using your hashtag made.' head='Hashtag Location' Img = {cardImage4}/>
      </div>
      </section>
      </div>
    )
  }

export default thirdSection