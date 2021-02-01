import React from 'react'
import { Parallax } from 'react-parallax'
import { Container } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll' 

import classes from './Web_development.module.css'

export default function Web_development() {
  return (
    <div id="web_development">
      
        <Parallax
          bgImage={'https://picsum.photos/1920/800'}
          bgImageAlt="the dog"
          strength={300}
          id="overlayBG"
        >
         
          <div className="text-white bg-danger d-flex justify-content-center">
            <ScrollAnimation animateIn="fadeIn" duration="3">
              <h2 className="display-4">Web development</h2>
            </ScrollAnimation>
          </div>
          <div style={{ backgroundColor: 'rgba(0,0,0, 0.8)'}} className="d-flex justify-content-center">
            <Container id="overlayText">
              <ScrollAnimation animateIn="fadeIn" duration="3">
                <p className="lead text-white text-justify mx-1 pt-5">
                The development process includes all possible necessary steps to be implemented within the project.</p>  
                
                <p className="lead text-justify pb-5">
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