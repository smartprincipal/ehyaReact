
import './App.css';
// import Landing from './Pages/LandingPage/landing'
import AboutUs from './Pages/AboutUsPage/AboutUs'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AboutUs/>}/>
        {/* <Route path='AboutUs' element={<AboutUs/>}/> */}
      </Routes>
      
    </div>
  );
}

export default App;
