import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll' 

import classes from './Industries.module.css'
import { industries } from './IndustriesData'

export default function Industries() {
  
  const industriesList = industries.map(industry => {
    return    <div class="wrapper">
                <div class="zoom-effect-container">
                  <div class="image-card">
                    <img src={industry.imgUrl} style={{ width: '100%' }} />
                  </div>
                </div>
              </div>
            
  });

  return (
    <div id="industries" className="grey darken-4 block">
      <ScrollAnimation animateIn="fadeIn">
        <div className="container">
          {industriesList}
          <h1 className="white-text block-title">Industries</h1>
          <div className="row">
            {industriesList}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  )
}
