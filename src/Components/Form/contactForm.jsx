import React from 'react'
import './contactForm.css'

const contactForm = () => {
  return (
    <div>
     <section className="section2-container">
  <div class="section2">
   <p class="g">Get In Touch</p>
   <article className="first">
    <p>
     Leave us a message
    </p>
   </article>
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

    </article>
    <article className="second">
     <div className="gg">
      <div className="icon">
       <img src="/pages/asset/1.png" alt="1"/>
      </div>
      <div className="cont">
       <p>
       Infomation technologies building, <br /> Victoria Island, Lagos, Nigeria.</p></div>
     </div>
     <div className="gg">
      <div className="icon"><img src="/pages/asset/tel.png" alt="1"/>
      </div>
      <div className="cont">
       <p>
        +234 081-1236-4568</p>
      </div>

     </div>
     <div className="gg">

      <div className="icon">
       <img src="/pages/asset/msg.png" alt="1"/>
      </div>
      <div className="cont">
       <p>hello@info.com.ng</p>
      </div>
     </div>

     <div className="socialss">
     <img src="/pages/asset/Youtube.png" alt="Youtube"/>
     <img src="/pages/asset/Instagram.png" alt="Instagram"/>
     <img src="/pages/asset/Facebook.png" alt="Facebook"/>
     <img src="/pages/asset/Twitter.png" alt="Twitter"/>
     </div>
     <img src="/pages/asset/location.png" alt=""/>
   </section>

   <img className="dots2" src="/pages/asset/dots.png" alt="dots2"/>

   <img className="brown1" src="/pages/asset/brown-design.png" alt="brown-design"/>
  
   <img className="blue1" src="/pages/asset/blue-design.png" alt="blue-design"/>

 </section>
    </div>
  )
}

export default contactForm