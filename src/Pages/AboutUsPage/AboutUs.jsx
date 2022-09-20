import React from 'react'
import ContactForm from '../../Components/ContactForm/ContactForm'
import Header from '../../Components/Header/Header'
import './AboutUs.css'
import Footer from '../../Components/Footer/footer'

const AboutUs = () => {
  return (
    <div>
      <section className="hero-circle">
        <div className="header">
          <Header/>
        </div>
      </section>
      <ContactForm/>
      <div className="footer">

      <Footer/>
      </div>

    </div>
  )
}

export default AboutUs