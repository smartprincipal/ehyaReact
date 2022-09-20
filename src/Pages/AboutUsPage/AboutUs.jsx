import React from 'react'
import ContactForm from '../../Components/ContactForm/ContactForm'
import Header from '../../Components/Header/Header'
import './AboutUs.css'
import Footer from '../../Components/Footer/footer'
// import Logo from '../../../asset/Logo.svg'

const AboutUs = () => {
  return (
    <div>
      <section className="hero-circle">
        <div className="header">
          <Header/>
        </div>
      </section>
      <ContactForm/>
      <Footer/>

    </div>
  )
}

export default AboutUs