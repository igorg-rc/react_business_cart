import React from 'react'
import { Parallax } from 'react-parallax'
import { Container } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll' 

import classes from './IT_support.module.css'

export default function IT_support() {
  return (
    <div id="it_support">
      <Parallax
        bgImage={'https://picsum.photos/1920/750'}
        bgImageAlt="the dog"
        strength={300}
        id="overlayBG"
      >
        <div className="text-white bg-success d-flex justify-content-center">
          <ScrollAnimation animateIn="fadeIn" duration="3">
            <h2 className="display-4">IT support</h2>
          </ScrollAnimation>
        </div>
        <div style={{ backgroundColor: 'rgba(0,0,0, 0.8)'}} className="d-flex justify-content-center">
          <Container id="overlayText">
            <ScrollAnimation animateIn="fadeIn" duration="3">
              {/* <p className="lead text-white text-justify mx-1 pt-5">
              The development process includes all possible necessary steps to be implemented within the project.</p>   */}
              <p className="lead text-white text-justify mt-5 mx-1">Identifing the problems of the existing information system and determine the best methods for solving them to improve the efficiency 
              of its activities. As a result is creation and provision of practical recommendations developed on the basis of audit of information 
              systems aimed at optimizing and improving of improve business efficiency.</p>
              <p className="lead text-white text-justify mt-1 mx-1">Depending on the goals facing the customer in relation to the use of information technology, 
              available systems and technical means, we conduct a detailed audit in the area of interest.</p>
              <p className="lead text-white text-justify mt-1 mb-5 mx-1">The results of the audit will allow the customer to assess the degree of IT 
              compliance with the business needs, the effectiveness and feasibility of investments in current solution, the efficiency of IT resources, etc.</p> 
              <p className="lead text-primary text-justify pb-5">
                  <ul className="list-group">
                    <li className={ "list-group-item bg-transparent".concat(" ", classes.ListItem)}>Creating a site design concept;</li>
                    <li className={ "list-group-item bg-transparent".concat(" ", classes.ListItem)}>Creating page layouts;</li>
                    <li className={ "list-group-item bg-transparent".concat(" ", classes.ListItem)}>Creation of multimedia and FLASH-elements;</li>
                    <li className={ "list-group-item bg-transparent".concat(" ", classes.ListItem)}>Layout of pages and templates;</li>
                    <li className={ "list-group-item bg-transparent".concat(" ", classes.ListItem)}>Programming (development of functional tools) or integration into a content management system (CMS);</li>
                    <li className={ "list-group-item bg-transparent".concat(" ", classes.ListItem)}>Optimization and placement site materials;</li>
                    <li className={ "list-group-item bg-transparent".concat(" ", classes.ListItem)}>Testing and making adjustments;</li>
                    <li className={ "list-group-item bg-transparent".concat(" ", classes.ListItem)}>Opening of the project on a public platform;</li>
                    <li className={ "list-group-item bg-transparent".concat(" ", classes.ListItem)}>Maintenance of a working site or its software basis;</li>
                    <li className={ "list-group-item bg-transparent".concat(" ", classes.ListItem)}>SEO-Optimization.</li>
                  </ul>
                </p>
            </ScrollAnimation>
          </Container> 
        </div>
      </Parallax>
    </div>
  )
}