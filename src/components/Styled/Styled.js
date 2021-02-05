import React from "react"
import bgImage from "../../img/slider/1_.jpg"
import { ScrollAnimation } from 'react-animate-on-scroll'

import classes from './Styled.module.css';

export default function Styled () {
  return (
    <div className={classes.Background} style={{ padding: '70px' }}>
      <div className="container">
        <div>
          <h1 className="white-text text-lighten-4">Bonfire<span className="teal-text text-lighten-2">Apps</span></h1>
        </div>
      </div>
    </div>
  );
}



