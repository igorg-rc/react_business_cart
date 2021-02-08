import React from 'react'
import { Container, Col, Row, Form, TextInput, Textarea } from 'react-materialize'
import ScrollAnimation from 'react-animate-on-scroll'
import classes from './ContactUs.module.css'
import img from '../../img/dbs.png'

export default function ContactUs() {
  return (
    <div id="contactUs" className="teal white-text block">
      <div className="teal">
      <h1 className="block-title">Contact us</h1>
      <ScrollAnimation animateIn='fadeIn'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10678553.97279632!2d26.807337545423692!3d50.02254332946035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc673dfa85bb03%3A0x7e675cd9074d3f4a!2sZaporizhzhia%2C%20Zaporizhia%20Oblast%2C%2069000!5e0!3m2!1sen!2sua!4v1612466645224!5m2!1sen!2sua" 
          width="600" 
          height="450" 
          frameborder="0" 
          allowfullscreen="" 
          aria-hidden="false" 
          tabindex="0">
        </iframe>
        
      </ScrollAnimation>
      <Container>
        <h2 className="teal-text text-lighten-5">Get in touch</h2>
        <div className="row">
          <form>
            <div className="input-field s12 teal-text text-lighten-4">
              <input type="text" id="name" className="teal-text text-lighten-4" />
              <label for="name" className="teal-text text-lighten-4">Name</label>
            </div>
            <div className="input-field s12 teal-text text-lighten-4">
              <input type="text" id="email" className="teal-text text-lighten-4" />
              <label for="email" className="teal-text text-lighten-4">Email</label>
            </div>
            <div className="input-field text-lighten-4">
              <textarea id="message" className="teal-text text-lighten-4 materialize-textarea"></textarea>
              <label for="message" className="teal-text text-lighten-4">Message</label>
            </div>
            <a className="btn button teal teal-text text-lighten-4 left"><span>Send</span><i className="material-icons right">send</i></a>
          </form>
        </div>
      </Container>
      </div>
    </div>
  )
}
