import React from 'react'
import {Carousel} from 'react-bootstrap'

export default function Services_slider() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/layout/slider/1_.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>Web development</h2>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/layout/slider/2_.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h2>IT consulting</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/layout/slider/3_.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h2>IT support</h2>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
