
import './landing.css'
import HeroSection from '../../sections/landing/HeroSection/heroSection';
// import FirstSection from '../../sections/landing/FirstSection/firstSection';
// import SecondSection from '../../sections/landing/SecondSection/secondSection';
// import ThirdSection from '../../sections/landing/ThirdSection/thirdSection';
import FourthSection from '../../sections/landing/FourthSection/fourthSection';




const landing = () => {
  return (
    <div>
     <HeroSection/>
     {/* <FirstSection/> */}
     {/* <SecondSection/> */}
     {/* <ThirdSection/> */}
     <FourthSection/>

    </div>
  )
}

export default landing