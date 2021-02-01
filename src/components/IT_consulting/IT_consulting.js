import React from 'react'
import { Parallax } from 'react-parallax'
import { Container } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll' 

export default function IT_consulting() {
  return (
    <div id="it_consulting">
        <Parallax
          bgImage={'https://picsum.photos/1920/750'}
          bgImageAlt="the dog"
          strength={300}
          id="overlayBG"
        >
          <div className="text-white bg-primary d-flex justify-content-center">
            <ScrollAnimation animateIn="fadeIn" duration="3">
              <h2 className="display-4">IT consulting</h2>
            </ScrollAnimation>
          </div>
          <div style={{ backgroundColor: 'rgba(0,0,0, 0.8)'}} className="d-flex justify-content-center">
            <Container id="overlayText">
              <ScrollAnimation animateIn="fadeIn" duration="3">
                <p className="lead text-white text-justify mx-1 pt-5">
                We provide all required information to simplify and improve customers workflow within digital solutions.</p>  
                <p className="lead text-white text-justify mt- mx-1">Identifing the problems of the existing information system and determine the best methods for solving them to improve the efficiency 
                of its activities. As a result is creation and provision of practical recommendations developed on the basis of audit of information 
                systems aimed at optimizing and improving of improve business efficiency.</p>
                <p className="lead text-white text-justify mt-1 mx-1">Depending on the goals facing the customer in relation to the use of information technology, 
                available systems and technical means, we conduct a detailed audit in the area of interest.</p>
                <p className="lead text-white text-justify mt-1 mb-5 mx-1">The results of the audit will allow the customer to assess the degree of IT 
                compliance with the business needs, the effectiveness and feasibility of investments in current solution, the efficiency of IT resources, etc.</p> 
              </ScrollAnimation>
            </Container> 
          </div>
        </Parallax>
    </div>
  )
}