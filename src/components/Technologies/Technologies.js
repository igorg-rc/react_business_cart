import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
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
      return  <div className="col s6 m4 l3 valign-wrapper tech-block">
                <img className="tech-img" src={technology.imgUrl} alt={technology.title} />
                <h5 className="tech-title center-align">{technology.title}</h5>
              </div>
    });

    const backendList = technologies.backend.map(technology => {
      return  <div className="col s6 m4 l3 valign-wrapper tech-block">
                <img className="tech-img" src={technology.imgUrl} alt={technology.title} />
                <h5 className="tech-title center-align">{technology.title}</h5>
              </div>
    });

    const toolsList = technologies.tools.map(technology => {
      return  <div className="col s6 m4 l3 valign-wrapper tech-block">
                <img className="tech-img" src={technology.imgUrl} alt={technology.title} />
                <h5 className="tech-title center-align">{technology.title}</h5>
              </div>
    });

    const apiList = technologies.api.map(technology => {
      return  <div className="col s6 m4 l3 valign-wrapper tech-block">
                <img className="tech-img" src={technology.imgUrl} alt={technology.title} />
                <h5 className="tech-title center-align">{technology.title}</h5>
              </div>
    });

    return (
      <div id="technologies" className="grey darken-4 white-text block">
        <div className="container">
        <ScrollAnimation animateIn="fadeIn">
            <h1 className="block-title">Technologies</h1>
            <ul class="tabs grey darken-4 teal-text row">
              <li class="tab col s3"><a href="#frontend">Frondend</a></li>
              <li class="tab col s3"><a href="#backend">Backend</a></li>
              <li class="tab col s3"><a href="#tools">Tools</a></li>
              <li class="tab col s3"><a href="#api">APi</a></li>
            </ul>
            <div id="frontend" className="tech-list">
              <div className="row">
                {frontendList}
              </div>
            </div>
            <div id="backend" className="tech-list">
              <div className="row">
                {backendList}
              </div>
            </div>
            <div id="tools" className="tech-list">
              <div className="row">
                {toolsList}
              </div>
            </div>
            <div id="api" className="tech-list">
              <div className="row">
                {apiList}
              </div>
            </div>
        </ScrollAnimation>
        </div>
      </div>
    )
  }
}

