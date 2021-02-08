import React from 'react'
import { Link } from 'react-scroll'
import classes from './Footer.css'
// import logo from '../../img/logo/index_2_white.jpg'

export default function Footer() {
  return (
    <div>
      <footer className="grey darken-4">
          <div className="container">
            <div class="row">
              <div className="col right s12 l2 right">
                <h5 className="white-text left-align">Call us</h5>
                <div className={classes.Links}>
                  <ul>
                    <li><a className="teal-text text-lighten-2" href="#!">Telegram</a></li>
                    <li><a className="teal-text text-lighten-2" href="#!">Viber</a></li>
                    <li><a className="teal-text text-lighten-2" href="#!">Skype</a></li>
                  </ul>
                </div>
              </div>
              <div className="col right s12 l2">
                <h5 className="white-text left-align">Links</h5>
                <div className={classes.Links}>
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
              <div className="col right s12 l8 white-text">
              <div class="col l6 s12">
                <h5 class="white-text">Bonfire<span className="teal-text text-lighten-2">Apps</span></h5>
                <p class="grey-text text-lighten-4 center-align">Make your future today. Let the bonfire outflame.</p>
                <p className="center-align">&copy; 2021, BonfireApps. All rights reserved.</p>
              </div>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}
