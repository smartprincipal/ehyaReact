import React from 'react'
import './fourthSection.css'
import Quote from '../../../asset/quote.png'
import Star from '../../../asset/star.png'
import SmallImage1 from '../../../asset/smallImage1.png'
import SmallImage2 from '../../../asset/smallImage2.png'
import SmallImage3 from '../../../asset/smallImage3.png'
import SmallImage4 from '../../../asset/smallImage4.png'
import SmallImage5 from '../../../asset/smallImage5.png'

const fourthSection = () => {
  return (
    <div>
     <section className="section4">
      <section className="section4-1">
        <article className="sub-sec4">
          <h3>Powering the growth of 100+ business & retailers in Indonesia.</h3>
          <p className="from">From single store, startups, to large multi-store brands.</p>
        </article>
        <article className="sub-sec41">
          <div className="stars">
            <img src={Quote} alt="quote"/>
            <img src={Star} alt="star"/>
            <img src={Star} alt="star"/><img src={Star} alt="star"/><img src={Star} alt=""/><img src={Star} alt="star"/>
          </div>
          <div className="review">
            <p>
              “With Ehya, we’re able to easily track our performance in full detail. It’s become an essential tool for us to grow and engage with our audience.”
            </p>
          </div>
      
            {/* <div className="testimonial" >

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
            </div> */}
            
            {/* <div className="dot-container">
              <span class="dot" onclick="currentSlide(1)"></span>
              <span className="dot" onclick="currentSlide(2)"></span>
              <span class="dot" onclick="currentSlide(3)"></span>
              <span className="dot" onclick="currentSlide(3)"></span>
            </div> */}
        </article>
      </section>
      <section className="sub-section4">
        <article class="sub-sub">
          <section className="sub41">
            <p class="gr">
              Grow your brand presence on social media
            </p>
            <p>
              Join with more 1200+ happy customers
            </p>
            <div className="immg">
              <div class="immmg">
                <img className="smallImage1" src={SmallImage1} alt="smallImage1"/>
                <img class="smallImage2" src={SmallImage2} alt="smallImage2"/>
                <img className="smallImage3" src={SmallImage3} alt="smallImage3"/>
                <img class="smallImage4" src={SmallImage4} alt="smallImage4"/>
                <img className="smallImage5" src={SmallImage5} alt="smallImage5"/>
              </div>
              <div>
                <a href='.#' className="an">and others</a>
              </div>
            </div>
          </section>
          <section class="sub42-btnc">
            <button className="sub42-btn">Get your trial now</button>
          </section>
        </article>
      </section>
    </section>
    </div>
  )
}

export default fourthSection