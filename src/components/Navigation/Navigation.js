import React, { Component } from 'react'
import { Link } from 'react-scroll'
import { Container } from 'react-materialize'
import M from 'materialize-css/dist/js/materialize.min.js'
import classes from './Navigation.module.css'
import bgImg from '../../img/slider/1_.jpg'
import { ScrollAnimation } from 'react-animate-on-scroll'

export default class Navigation extends Component {
  componentDidMount() {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems, {edge:'right'});
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY < 20) {
      document.querySelector(".main-nav").style.backgroundColor = "transparent";
      
    } else if (window.scrollY < 100) {
      document.querySelector(".main-nav").style.backgroundColor = "#b2dfdb";
    }

    else if (window.scrollY < 200) {
      document.querySelector(".main-nav").style.backgroundColor = "#80cbc4";
    }

    else if (window.scrollY < 300) {
      document.querySelector(".main-nav").style.backgroundColor = "#4db6ac";
    }
    
    else {
      document.querySelector(".main-nav").style.backgroundColor = "#009688";
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
                <a href="#!" class="left">BonfireApps</a>
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
                className="sidedrawer-link" 
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
                className="sidedrawer-link" 
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
                className="sidedrawer-link" 
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
                className="sidedrawer-link" 
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
        
        <div className={classes.ImgContainer}>
          <img src={{bgImg}} className={classes.Img} />
        </div>
      </div>
    )
  }
}

