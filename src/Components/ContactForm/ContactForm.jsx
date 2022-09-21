import React from 'react'
import './ContactForm.css'
import Locate from '../../asset/LocateIcon.png'
import Telephone from '../../asset/telIcon.png'
import Message from '../../asset/msgIcon.png'
import Youtube from '../../asset/Youtube.png'
import Twitter from '../../asset/Twitter.png'
import Instagram from '../../asset/Instagram.png'
import Facebook from '../../asset/Facebook.png'
import Location from '../../asset/location.png'
import Dot from '../../asset/dots.png'
import Blue from '../../asset/blue-design.png'
import Brown from '../../asset/brown-design.png'

const ContactForm = () => {
  return (
    <div>
     <section className="section2-container">
  <div class="section2">
   <p class="g">Get In Touch</p>
   {/* <article className="first"> */}
    <p className='leave'>
     Leave us a message
    </p>
   {/* </article> */}
  </div>
   <section className="sub-section2">
     <form action="" className="form">
       {/* First Name */}
      <label for="First_Name" class="first-name-label" id="first-name-label">Name</label>
      <input className="first-name" type="text" id="firstName" placeholder="First_Name_Last_Name"/>
      
        {/* Email */} 
      <input className="email" type="email" name="Email" id="email" placeholder="Email Address"/>
      
      {/* Text Here */}
      <input className="text-here" type="text" placeholder="Your Message" id="textHere"/>
      
      {/* Submit button */}
      <input className="submit" id="submit" type="submit" value="Send"/>
     </form>

    <article className="second">
     <div className="gg">
      <div className="icon">
       <img src={Locate} alt="Location"/>
      </div>
      <div className="cont">
       <p>
       Infomation technologies building, <br /> Victoria Island, Lagos, Nigeria.</p></div>
     </div>
     <div className="gg">
      <div className="icon"><img src={Telephone} alt="Telephone"/>
      </div>
      <div className="cont">
       <p>
        +234 081-1236-4568</p>
      </div>

     </div>
     <div className="gg">

      <div className="icon">
       <img src={Message} alt="Messsage Icon"/>
      </div>
      <div className="cont">
       <p>hello@info.com.ng</p>
      </div>
     </div>

     <div className="socialss">
     <img src={Youtube} alt="Youtube"/>
     <img src={Instagram} alt="Instagram"/>
     <img src={Facebook} alt="Facebook"/>
     <img src={Twitter} alt="Twitter"/>
     </div>
     
     <img src={Location} className='Location' alt="Location"/>
  

   <img className="dots2" src={Dot}alt="dots2"/>

   <img className="brown1" src={Brown} alt="brown-design"/>
  
   <img className="blue1" src={Blue} alt="blue-design"/>
</article>

 </section>

 </section>

    </div>
  )
}

export default ContactForm