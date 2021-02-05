import React from "react"
import bgImage from "../../img/slider/1_.jpg"
import { ScrollAnimation } from 'react-animate-on-scroll'

import classes from './Styled.module.css';

export default function Styled () {
  return (
    <div className={classes.Background} style={{ padding: '70px' }}>
      <div className="container">
        <div style={{ backgroundColor: 'red', width: '500px', height: '500px' }}>RED</div>
      </div>
    </div>
  );
}



