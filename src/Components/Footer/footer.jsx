import './footer.css'
import Logo from '../../asset/Logo.svg'
import GoogleSocial from '../../asset/google-social.svg'
import TwitterSocial from '../../asset/twitter-social.svg'
import InstagramSocial from '../../asset/instagram-social.svg'
import LinkedinSocial from '../../asset/linkedin-social.svg'
import Heart from '../../asset/Heart.svg'


const footer = () => {
  return (
   <div>
    {/* FOOTER SECTION */}
    <footer>
      <section className="footer1">

        <article className="foot">
          <div className="logo">
           <img src={Logo} alt="Logo" />     
           </div>
           <p className="fot1">
             Build a modern and creative <br /> website with crealand
          </p>
          <div className="social-handles">
            <img src={GoogleSocial} alt="google-social"/>
            <img src={TwitterSocial} alt="twitter-social"/>
            <img src={InstagramSocial} alt="instagram-social"/>
            <img src={LinkedinSocial} alt="linkedin-social"/>
          </div>
  
        </article>
        <article className="foot">
          <a className="foote" href=".#">Product</a>
          <a className="fot" href=".#">LandingPage</a>
          <a className="fote" href=".#">Feature</a>
          <a className="fote" href=".#">Documentation</a>
          <a className="fote" href=".#">Referral Program</a>
          <a className="fote" href=".#">Pricing</a>
  
        </article>
        <article className="foot">
          <a className="foote" href=".#">Services</a>
          <a className="fote" href=".#">Documentation</a>
            <a className="fote" href=".#">Design</a>
            <a className="fote" href=".#">Themes</a>
            <a className="fote" href=".#">Ilustration</a>
          
            <a className="fote" href=".#">UI Kits</a>
  
        </article>
        <article className="foot">
          <a className="foote" href=".#">Company</a>
          <a className="fot" href=".#">About</a>
          <a className="fote" href=".#">Terms</a>
            <a className="fote" href=".#">Privacy Policy</a>
            <a className="fote" href=".#">Careers</a>
  
        </article>
        <article className="foot">
          <a className="foote" href=".#">More</a>
          <a className="fot" href=".#">Documentation</a>
            <a className="fote" href=".#">Licence</a>
            <a className="fote" href=".#">Change Log</a>
      
  
        </article>
      </section>

      <section className="footer2">
          <img src={Heart} alt="Heart"/>
          <p>Copyright &copy; 2021. Crafted with love.</p>
      </section>
    </footer>
   </div>
  )
}

export default footer