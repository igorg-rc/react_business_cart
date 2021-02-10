import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll' 

import classes from './Industries.module.css'
import { industries } from './IndustriesData'

export default function Industries() {
  
  const industriesList = industries.map(industry => {
    return  <div className="col s12 m6 l4 center-align">
              <div className={classes.Holder}>
                <img src={industry.imgUrl} alt={industry.title} className={classes.Img} />
                <div>
                  <h5 className={classes.LayerText}>{industry.title}</h5>
                </div>
                <div className={classes.Overlay}>
                  <h5 className={classes.OverlayText}>{industry.title}</h5>
                </div>
              </div>
            </div>
  });

  return (
    <div id="industries" className="grey darken-4 block">
      <ScrollAnimation animateIn="fadeIn">
          <div className="container">
            <h1 className="white-text block-title">Industries</h1>
            <div className="row">
              {industriesList}
            </div>
          </div>
      </ScrollAnimation>
    </div>
  )
}
