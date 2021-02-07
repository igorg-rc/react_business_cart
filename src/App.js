import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation/Navigation';
// import Services_slider from './components/Services_slider/Services_slider';
import Whoweare from './components/Whoweare/Whoweare';
// import IT_consulting from './components/IT_consulting/IT_consulting';
import Technologies from './components/Technologies/Technologies';
// import IT_support from './components/IT_support/IT_support';
// import Web_development from './components/Web_development/Web_development';
import Industries from './components/Industries/Industries';
import ContactUs from './components/ContactUs/ContactUs';
import Styled from './components/Styled/Styled';
import ScrollButton from './components/UIutils/ScrollButton/ScrollButton';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Styled />
      <Technologies />
      {/* <Whoweare /> */}
      <Industries />
      <ContactUs />
      {/* <ScrollButton /> */}
      {/* <Services_slider />
      <Web_development />
      
      <IT_consulting />
      
      <IT_support /> */}
    </div>
  );
}

export default App;
