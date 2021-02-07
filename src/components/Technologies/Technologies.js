import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Parallax } from 'react-parallax'
import M from 'materialize-css/dist/js/materialize.min.js'

import { technologies } from './TechnologiesData';
import classes from './Technologies.module.css'

export default class Technologies extends Component {

  componentDidMount() {
    let el = document.querySelector(".tabs");
    let instance = M.Tabs.init(el, {});
  }
  
  render() {
    const frontendList = technologies.frontend.map(technology => {
      return  <div className="col xs12 s6 m4 center-align">
                <img className="tech-img" src={technology.imgUrl} alt={technology.title} />
                <h5 className="tech-title">{technology.title}</h5>
              </div>
    });

    const backendList = technologies.backend.map(technology => {
      return  <div className="col xs12 s6 m4 center-align">
                <img className="tech-img" src={technology.imgUrl} alt={technology.title} />
                <h5 className="tech-title">{technology.title}</h5>
              </div>
    });

    const toolsList = technologies.tools.map(technology => {
      return  <div className="col xs12 s6 m4 center-align">
                <img className="tech-img" src={technology.imgUrl} alt={technology.title} />
                <h5 className="tech-title">{technology.title}</h5>
              </div>
    });

    const apiList = technologies.api.map(technology => {
      return  <div className="col xs12 s6 m4 center-align">
                <img className="tech-img" src={technology.imgUrl} alt={technology.title} />
                <h5 className="tech-title">{technology.title}</h5>
              </div>
    });

    return (
      <div id="technologies" className="grey darken-4 white-text">
        <div className="container">
            <ul class="tabs grey darken-4 teal-text row">
              <li class="tab col s12 m3"><a href="#frontend">Frondend</a></li>
              <li class="tab col s12 m3"><a href="#backend">Backend</a></li>
              <li class="tab col s12 m3"><a href="#tools">Tools</a></li>
              <li class="tab col s12 m3"><a href="#api">APi</a></li>
            </ul>
            <div id="frontend" style={{ paddingTop: '30px' }}>
              <div className="row">
                {frontendList}
              </div>
            </div>
            <div id="backend" style={{ paddingTop: '30px' }}>
              <div className="row">
                {backendList}
              </div>
            </div>
            <div id="tools" style={{ paddingTop: '30px' }}>
              <div className="row">
                {toolsList}
              </div>
            </div>
            <div id="api" style={{ paddingTop: '30px' }}>
              <div className="row">
                {apiList}
              </div>
            </div>
          
        </div>
      </div>
    )
  }
}

