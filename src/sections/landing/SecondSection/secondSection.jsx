import React from 'react'
import './secondSection.css'
import Bullet from '../../../asset/Bullet.svg'
import Macbook from '../../../asset/Macbook.png'

const secondSection = () => {
  return (
    <div>
  <section className="section2">
    <article className="tt">
      <p className="sch">Schedule Your Post Whenever You Want</p>
      <p className="pub">
        Publish your content automatically to ensure that your content reaches the right people. Built-in features such as
      </p>
      <article className="bull">
        <p><img className="same" src={Bullet} alt="Bullet"/>Best Time to Post</p>
        <p><img className="same" src={Bullet} alt="Bullet"/>Geolocation</p>
        <p><img className="same" src={Bullet} alt="Bullet"/>User Tag</p>
        <p><img className="same" src={Bullet} alt="Bullet"/>Others benefit</p>
      </article>
      <a href=".#" className="lea">Learn about scheduled post →</a>
    </article>
    <article className="tt-image">
      <img src={Macbook} alt="Macbook-Pro"/>
    </article>
  </section>
    </div>
  )
}

export default secondSection