
import './landing.css'
import HeroSection from '../../sections/landing/HeroSection/heroSection';
// import { Form } from 'react-router-dom';
import FirstSection from '../../sections/landing/FirstSection/firstSection';
import SecondSection from '../../sections/landing/SecondSection/secondSection';
import ThirdSection from '../../sections/landing/ThirdSection/thirdSection';
import FourthSection from '../../sections/landing/FourthSection/fourthSection';
import Footer from '../../Components/Footer/footer';




const landing = () => {
  return (
    <div>
     <HeroSection/>
     <FirstSection/>
     <SecondSection/>
     <ThirdSection/>
     <FourthSection/>
     <Footer/>

    </div>
  )
}

export default landing