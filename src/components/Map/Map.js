import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll' 

export default function Map() {
  return (
      <div className="teal">
        <ScrollAnimation animateIn='fadeIn'>
          <div id="map">
          <h2 className="block-subtitle teal-text text-lighten-5">Where are we from</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10678553.97279632!2d26.807337545423692!3d50.02254332946035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc673dfa85bb03%3A0x7e675cd9074d3f4a!2sZaporizhzhia%2C%20Zaporizhia%20Oblast%2C%2069000!5e0!3m2!1sen!2sua!4v1612466645224!5m2!1sen!2sua" 
              width="600" 
              height="450" 
              frameborder="0" 
              allowfullscreen="" 
              aria-hidden="false" 
              tabindex="0">
            </iframe>
          </div>
        </ScrollAnimation>
      </div>
  )
}