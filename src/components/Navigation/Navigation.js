import React, { Component } from 'react'
import { Link } from 'react-scroll'
import M from 'materialize-css/dist/js/materialize.min.js'
import { ScrollAnimation } from 'react-animate-on-scroll'

import classes from './Navigation.module.css'

export default class Navigation extends Component {
  componentDidMount() {
    
  document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelector('.sidenav');
    let instance = M.Sidenav.init(elems, {edge: 'right', outDuration: 500});
  });
    
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY < 900) {
      document.querySelector(".main-nav").style.backgroundColor = "transparent";
    } else {
      document.querySelector(".main-nav").style.backgroundColor = "#00796b";
      document.querySelector(".main-nav").style.transition = "0.5s";
    }
  };

  render() {
    return (
      <div className={classes.Holder}>
        <div id="navigation">
          <div className="navbar-fixed">
            <nav className="main-nav">
              <div class="nav-wrapper">
                <div className="container">
                  <a href="#!" className="left">BonfireApps</a>
                  <a href="#" data-target="mobile-demo" class="sidenav-trigger right"><i class="material-icons">menu</i></a>
                  <ul class="right hide-on-med-and-down sidedrawer">
                    <li>
                      <Link 
                        href="#aboutUs"
                        to="aboutUs"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >About us
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="#aboutUs"
                        to="aboutUs"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >Industries
                      </Link>
                    </li>
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
            </nav>
          </div> 
          <ul class="sidenav grey darken-4" id="mobile-demo">
            <li className="">
              <span className="hover hover-3"></span>
              <Link 
                className="sidedrawer-link sidenav-close"
                href="#aboutUs"
                to="aboutUs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >About us
              </Link>
            </li>
            <li>
            <span className="hover hover-3"></span>
              <Link 
                className="sidedrawer-link sidenav-close" 
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
                className="sidedrawer-link sidenav-close" 
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
                className="sidedrawer-link sidenav-close" 
                href="#contactUs"
                to="contactUs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >Contact us
              </Link>
            </li>
          </ul> 
        </div>
      </div>
    )
  }
}

