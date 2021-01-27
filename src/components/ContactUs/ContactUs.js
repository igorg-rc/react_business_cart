import React from 'react'
import { Container, Col, Row, InputGroup, FormControl, Button } from 'react-bootstrap'

export default function ContactUs() {
  return (
    <div id="contactUs" className="bg-primary text-white">
      <div className="container">
        <h1 className="display-3">Contact Us</h1>
        <p className="mt-2 lead text-justify">We are web development and IT consultancy company 
        which provides the process of development, testing and deployment of digital solutions for business. Our goal 
        is to clearly see the clients goals and to plan, build and deploy in real life application for their needs.</p>
        
      </div>

      <div className="container"> 
        <Row>
          <Col lg={6} md={12}>
            <h2 class="display-4">Location</h2>
            <iframe 
              title="locationMap"
              class="mt-2"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26636652.586642344!2d30.661705765522342!3d46.74099959511458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc673dfa85bb03%3A0x7e675cd9074d3f4a!2sZaporizhzhia%2C%20Zaporizhia%20Oblast%2C%2069000!5e0!3m2!1sen!2sua!4v1611686163206!5m2!1sen!2sua" 
              style={{ width: '100%', height: '20rem', frameborder: 0}} 
              allowfullscreen="" 
              aria-hidden="false" 
              tabindex="0">
            </iframe>
            <p className="mt-2 lead text-justify">Address:Soborny Ave 1, Zaporzhzhya, Ukraine.</p>
            <p className="mt-2 lead text-justify">email: bonfire_apps@gmail.com.</p>
            <p className="mt-2 lead text-justify">Skype: Bonfire Apps.</p>
            <p className="mt-2 lead text-justify">Telegram: Bonfire Apps.</p>
          </Col>
          <Col lg={6} md={12}>
            <p className="display-4">Contact form</p>
            <div>
              <InputGroup className="mb-3">
                <FormControl as="input" for="firstname" name="firstname" placeholder="Firstname" />
              </InputGroup>
              <InputGroup className="mb-3">
                <FormControl as="input" for="lastname" name="lastname" placeholder="Lastname" />
              </InputGroup>
              <InputGroup className="mb-3">
                <FormControl as="input" for="email" name="email" placeholder="Email" />
              </InputGroup>
              <InputGroup className="mb-3">
                <FormControl as="input" for="subject" name="subject" placeholder="Subject" />
              </InputGroup>
              <InputGroup className="mb-3">
                <FormControl as="textarea" for="message" name="message" aria-label="With textarea" placeholder="Your message" rows="10" />
              </InputGroup>
              <InputGroup className="mb-3">
                <Button variant="success" size="lg" block>Send</Button>
              </InputGroup>
            </div>
          </Col>
        </Row>
      </div> 
    </div>
  )
}
