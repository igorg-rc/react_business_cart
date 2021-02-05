import React from 'react'
import { Element } from 'react-scroll'
import ScrollAnimation from 'react-animate-on-scroll' 

import classes from './Industries.module.css'
import { industries } from './IndustriesData'

export default function Industries() {
  
  const industriesList = industries.map(industry => {
    return  <div className="col s12 m6 l4">
              <div className="card blue-grey darken-1" style={{ background: 'url(industry.imgUrl)' }}>
                <div className={"card-content white-text".concat('', classes.Holder) }>
                  <div className={classes.ImgContainer}>
                    <img src={industry.imgUrl} alt={industry.title} className={classes.Img} /> 
                  </div>
                  
                  <span className="card-title">{industry.title}</span>
                  <p>{industry.body}</p>
                </div>
              </div>
            </div>
   
  });

  return (
    <div id="industries">
      <div className="container">
        <ScrollAnimation animateIn="fadeIn">
          <h3 className="display-3 my-3">Industries</h3>
          <div className="row">
            {industriesList}
          </div>
          </ScrollAnimation>
      </div>
      
    </div>
  )
}
