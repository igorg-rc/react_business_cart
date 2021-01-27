import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';


export default function Styled() {
  return (
    <div>
      <ScrollAnimation animateIn='wobble'
        initiallyVisible={true}>
        <h1>
          initiallyVisible
        </h1>
      </ScrollAnimation>
      <h1 className="display-3">Technologies</h1>
      <p className="mt-2 lead text-justify">We are web development and IT consultancy company 
      which provides the process of development, testing and deployment of digital solutions for business. Our goal 
      is to clearly see the clients goals and to plan, build and deploy in real life application for their needs.</p>
      <p className="mt-2 lead text-justify">We are web development and IT consultancy company 
      which provides the process of development, testing and deployment of digital solutions for business. Our goal 
      is to clearly see the clients goals and to plan, build and deploy in real life application for their needs.</p>
      <p className="mt-2 lead text-justify">We are web development and IT consultancy company 
      which provides the process of development, testing and deployment of digital solutions for business. Our goal 
      is to clearly see the clients goals and to plan, build and deploy in real life application for their needs.</p>
      <p className="mt-2 lead text-justify">We are web development and IT consultancy company 
      which provides the process of development, testing and deployment of digital solutions for business. Our goal 
      is to clearly see the clients goals and to plan, build and deploy in real life application for their needs.</p>
      <p className="mt-2 lead text-justify">We are web development and IT consultancy company 
      which provides the process of development, testing and deployment of digital solutions for business. Our goal 
      is to clearly see the clients goals and to plan, build and deploy in real life application for their needs.</p>
      <p className="mt-2 lead text-justify">We are web development and IT consultancy company 
      which provides the process of development, testing and deployment of digital solutions for business. Our goal 
      is to clearly see the clients goals and to plan, build and deploy in real life application for their needs.</p>
      <p className="mt-2 lead text-justify">We are web development and IT consultancy company 
      which provides the process of development, testing and deployment of digital solutions for business. Our goal 
      is to clearly see the clients goals and to plan, build and deploy in real life application for their needs.</p>
      <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
        <h1>
          React Animate On Scroll
        </h1>
        <h2>
          Using:
        </h2>
      </ScrollAnimation>
      <ScrollAnimation animateIn='bounceInRight'
        animateOut='bounceOutLeft'>
        <h2>
          <a href='https://daneden.github.io/animate.css/'>
            Animate.css
          </a>
        </h2>
      </ScrollAnimation>
      <ScrollAnimation animateIn='wobble'
        initiallyVisible={true}>
        <h1>
          initiallyVisible
        </h1>
      </ScrollAnimation>
      <ScrollAnimation delay={4000}
        animateIn='tada'
        initiallyVisible={true}>
        <h1>
          delay
        </h1>
      </ScrollAnimation>
    </div>
  )
}
