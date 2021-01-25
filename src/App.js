import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import Services_slider from './components/Services_slider/Services_slider';
import Whoweare from './components/Whoweare/Whoweare';
import Technologies from './components/Technologies/Technologies';
import Industries from './components/Industries/Industries';

import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Services_slider />
      <Whoweare />
      <Technologies />
      <Industries />
    </div>
  );
}

export default App;
