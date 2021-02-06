import React from 'react'
import { Element } from 'react-scroll'
import ScrollAnimation from 'react-animate-on-scroll' 

import classes from './Industries.module.css'
import { industries } from './IndustriesData'

export default function Industries() {
  
  const industriesList = industries.map(industry => {
    return  <div className="col s12 l6">
              <div className="card teal darken-1" style={{ background: 'url:({industry.imgUrl})' }}>
                <div className={"card-content white-text"}>
                  <div className="card-image">
                    <img src={industry.imgUrl} alt={industry.title} /> 
                  </div> 
                  <h4>{industry.title}</h4>
                  <p className="lead">{industry.body}</p>
                </div>
              </div>
            </div> 
            
  });

  return (
    <div id="industries" className="grey darken-4" style={{padding: '20px 0'}}>
      <div className="container">
        <ScrollAnimation animateIn="fadeIn">
          <h3 className="white-text">Industries</h3>
          <div className="row">
            {industriesList}
          </div>
          </ScrollAnimation>
      </div>
    </div>
  )
}

{/* <div className="col s12 m6 l4">
              <div className="card blue-grey darken-1 z-depth-5" style={{ backgroundImage: 'url({industry.imgUrl})' }}>
                <div className={"card-content white-text".concat('', classes.Holder) }>
                  <div className={classes.ImgContainer}>
                    <img src={industry.imgUrl} alt={industry.title} className={classes.Img} /> 
                  </div> 
                  <span className="card-title">{industry.title}</span>
                  <p>{industry.body}</p>
                </div>
              </div>
            </div> */}

            // <div className="col s12 m6 l4">
            //   <div className={classes.Holder}>
            //     <img src={industry.imgUrl} alt="Snow" style={{width: "100%"}} />
            //     <div className={classes.ImgText}>
            //       <h4>{industry.title}</h4>
            //       <p style={{ paddingTop: '30%' }} className="text-white">{industry.body}</p>
            //     </div>
            //   </div>
            // </div>