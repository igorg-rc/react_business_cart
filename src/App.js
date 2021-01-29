import logo from './logo.svg';
import './App.css';
// import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

import Navigation from './components/Navigation/Navigation';
import Services_slider from './components/Services_slider/Services_slider';
import AboutUs from './components/AboutUs/AboutUs';
import Technologies from './components/Technologies/Technologies';
import Industries from './components/Industries/Industries';
import ContactUs from './components/ContactUs/ContactUs';
import Styled from './components/Styled/Styled';
import Button from './components/Button/Button';
import ScrollButton from './components/UIutils/ScrollButton/ScrollButton';


function App() {
  return (
    <div className="App">
      <ScrollButton />
      <Navigation />
      <Services_slider />
      <AboutUs />
      <Technologies />
      <Industries />
      <ContactUs />
    </div>
  );
}

export default App;
