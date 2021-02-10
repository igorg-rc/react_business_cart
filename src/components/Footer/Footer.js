import React from 'react'
import { Link } from 'react-scroll'
import classes from './Footer.css'
// import logo from '../../img/logo/index_2_white.jpg'

export default function Footer() {
  return (
    <div className="grey darken-4">
      <footer className="grey darken-4">
          <div className="container">
            <div id="footer-content" class="row">
              <div className="col copyright s12 m7 l4 white-text left">
                <h5 class="white-text left-align">Bonfire<span className="teal-text text-lighten-2">Apps</span></h5>
                <p class="grey-text text-lighten-4 left-align">Make your future today. Let the bonfire outflame.</p>
                <p className="left-align">&copy; 2021, BonfireApps. All rights reserved.</p>
              </div>
              <div className="col s12 m2 offset-m1 l3 offset-l1">
                <h5 className="white-text left-align">Call us</h5>
                <div className="links">
                  <ul>
                    <li>
                      <Link 
                        href="#telegram"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >Telegram
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="#whatsapp"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >WhatsApp
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="#skype"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="links"
                      >Skype
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col s12 m2 l3">
                <h5 className="white-text left-align">Links</h5>
                <div className="links">
                  <ul>
                    <li>
                      <Link 
                        href="#technologies"
                        to="technologies"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >Technologies
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="#industries"
                        to="industries"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >Industries
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="#contactUs"
                        to="contactUs"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="links"
                      >Contact us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </footer>
    </div>
  )
}
