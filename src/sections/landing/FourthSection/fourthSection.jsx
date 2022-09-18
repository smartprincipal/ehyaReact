import React from 'react'
import './fourthSection.css'

const fourthSection = () => {
  return (
    <div>
     <section className="section5">
      <section className="section5-1">
        <article className="sub-sec5">
          <h3>Powering the growth of 100+ business & retailers in Indonesia.</h3>
          <p className="from">From single store, startups, to large multi-store brands.</p>
        </article>
        <article className="sub-sec51">
          <div className="stars">
            <img src="/asset/quote.png" alt="quote"/>
            <img src="/asset/star.png" alt="star"/>
            <img src="/asset/star.png" alt=""/><img src="/asset/star.png" alt=""/><img src="/asset/star.png" alt=""/><img src="/asset/star.png" alt=""/>
          </div>
          <div className="review">
            <p>
              “With Ehya, we’re able to easily track our performance in full detail. It’s become an essential tool for us to grow and engage with our audience.”
            </p>
          </div>
      
            <div className="testimonial" >

             Full-width slides quotes
              <div class="mySlides">
                <div className="test">
                  <img src="/asset/Photo.png" alt="Photo"/>
                </div>
                <div className="name">
                  <h3>
                    Jaquon Hart
                  </h3>
                  <p>
                    Digital Marketing Executive, Hypebeast
                  </p>
                </div>
              </div>
            
              <div class="mySlides">
                <div className="testimonial-image">
                  <img src="/asset/Photo.png" alt="Photo"/>
                </div>
                <div className="name">
                  <h3>
                    Johnson Oluwayemi
                  </h3>
                  <p>
                    Front-end Engineer, Worldwyz
                  </p>
                </div>
              </div>
            
              <div class="mySlides">
                <div className="test">
                  <img src="/asset/Photo.png" alt="Photo"/>
                </div>
                <div className="name">
                  <h3>
                    Ahmed Yussuf
                  </h3>
                  <p>
                    Digital Marketing Executive, Ahmmedolly
                  </p>
                </div>
              
              </div>
            
              <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
              <a className="next" onclick="plusSlides(1)">&#10095;</a>
            </div>
            
            <div className="dot-container">
              <span class="dot" onclick="currentSlide(1)"></span>
              <span className="dot" onclick="currentSlide(2)"></span>
              <span class="dot" onclick="currentSlide(3)"></span>
              <span className="dot" onclick="currentSlide(3)"></span>
            </div>
          </div>
        </article>
      </section>
      <section className="sub-section5">
        <article class="sub-sub">
          <section className="sub51">
            <p class="gr">
              Grow your brand presence on social media
            </p>
            <p>
              Join with more 1200+ happy customers
            </p>
            <div className="immg">
              <div class="immmg">
                <img className="item" src="/asset/Item.png" alt="Item"/>
                <img class="item1" src="/asset/Item1.png" alt="Item1"/>
                <img className="item2" src="/asset/Item2.png" alt="Item2"/>
                <img class="item3" src="/asset/Item3.png" alt="Item3"/>
                <img className="item4" src="/asset/Item4.png" alt="Item4"/>
              </div>
              <div>
                <p className="an">and others</p>
              </div>
            </div>
          </section>
          <section class="sub52-btnc">
            <button className="sub52-btn">Get your trial now</button>
          </section>
        </article>
      </section>
    </div>
  )
}

export default fourthSection