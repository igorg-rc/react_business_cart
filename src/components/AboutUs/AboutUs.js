import React from 'react'
import { Parallax, Background } from 'react-parallax'
import ScrollAnimation from 'react-animate-on-scroll'

export default function AboutUs() {
  return (
    <div className="mb-5">
    <div id="aboutUs" className="mt-5 container" style={{ backgroundImage: 'img/layout/slider/1_.jpg' }}>
      <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
        <h1 className="display-3">Who We Are</h1>
        <p className="mt-2 lead text-justify">We are web development and IT consultancy company 
        which provides the process of development, testing and deployment of digital solutions for business. Our goal 
        is to clearly see the clients goals and to plan, build and deploy in real life application for their needs.</p>
        <p className="mt-2 lead text-justify">We are web development and IT consultancy company 
        which provides the process of development, testing and deployment of digital solutions for business. Our goal 
        is to clearly see the clients goals and to plan, build and deploy in real life application for their needs.</p>
        <p className="mt-2 lead text-justify">We are web development and IT consultancy company 
        which provides the process of development, testing and deployment of digital solutions for business. Our goal 
        is to clearly see the clients goals and to plan, build and deploy in real life application for their needs.</p>
      </ScrollAnimation>
    </div>
    <Parallax
      bgImage={'https://picsum.photos/1920/1080'}
      bgImageAlt="the dog"
      strength={200}
    >
      Put some text content here
      or even an empty div with fixed dimensions
      to have a height for the parallax.
      <div style={{ height: '300px' }} />
    </Parallax>
    <Parallax>
      <div className="text-white bg-danger d-flex justify-content-center">
        <h2 className="display-3 mt-4 mb-5">Section Divider</h2>        
      </div>
    </Parallax>
  </div>
  )
}
