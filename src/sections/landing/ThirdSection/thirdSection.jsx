import React from 'react'
import './thirdSection.css'
import Card from '../../../Components/Card/card'



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
      <Card content='Follow a hashtag growth total posts, videos and images.' head='Hashtag Growth'/>
      <Card content='Identify the most influential people posting with your hashtag.' head='Influencers by Hashtag'/>
      <Card content='See the most influential posts on hashtag you are following on.' head='Most Influential Post'/>
      <Card content='Visualize where people are posting using your hashtag made.' head='Hashtag Location'/>
      </div>
      </section>
      </div>
    )
  }

export default thirdSection