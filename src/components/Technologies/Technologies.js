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
      return  <div className="col s6 m4 center-align">
                <img src={technology.imgUrl} alt={technology.title} />
                <h4>{technology.title}</h4>
              </div>
    });

    const backendList = technologies.backend.map(technology => {
      return  <div className="col s6 m4 center-align">
                <img src={technology.imgUrl} alt={technology.title} />
                <h4>{technology.title}</h4>
              </div>
    });

    const toolsList = technologies.tools.map(technology => {
      return  <div className="col s6 m4 center-align">
                <img src={technology.imgUrl} alt={technology.title} />
                <h4>{technology.title}</h4>
              </div>
    });

    return (
      <div id="technologies" className="grey darken-4 white-text">
        <div className="container">
          <div class="row">
            <div class="col s12">
              <ul class="tabs grey darken-4 teal-text">
                <li class="tab col s12 m4"><a href="#test1" className="active">Frondend</a></li>
                <li class="tab col s12 m4"><a href="#test2">Backend</a></li>
                <li class="tab col s12 m4"><a href="#test3">Tools</a></li>
              </ul>
            </div>
            <div id="test1" style={{ paddingTop: '20px' }}>
              <div className="row">
                {frontendList}
              </div>
            </div>
            <div id="test2" class="col s12">
              <div className="row">
                {backendList}
              </div>
            </div>
            <div id="test3" class="col s12">
              <div className="row">
                {toolsList}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



/*
<ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
          <h2 className="display-4 block-title my-5">Technologies</h2>
          
            <Tab.Container id="left-tabs-example" defaultActiveKey="languages">
              <Row>
                <Nav variant="pills" className="flex-row w-100">
                  <Col lg={2} md={6} sm={12}>
                    <Nav.Item>
                      <Nav.Link eventKey="languages">LANGUAGES</Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Col lg={2} md={6} sm={12}>
                    <Nav.Item>
                      <Nav.Link eventKey="frameworks">FRAMEWORKS</Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Col lg={2} md={6} sm={12}>
                    <Nav.Item>
                      <Nav.Link eventKey="databases">DATABASES</Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Col lg={2} md={6} sm={12}>
                    <Nav.Item>
                      <Nav.Link eventKey="tools">TOOLS</Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Col lg={2} md={6} sm={12}>
                    <Nav.Item>
                      <Nav.Link eventKey="api">API</Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Col lg={2} md={6} sm={12}>
                    <Nav.Item>
                      <Nav.Link eventKey="libs">LIBRARIES</Nav.Link>
                    </Nav.Item>
                  </Col>
                </Nav>
              </Row>
              <Row>
                <Col sm={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey="languages">
                      <Row>
                        <Col>
                          <img src="https://img.icons8.com/color/100/000000/html-5.png"/>
                          <h3>HTML5</h3>
                        </Col>
                        <Col>
                          <img src="https://img.icons8.com/color/144/000000/css3.png"/>
                          <h3>CSS3</h3>
                        </Col>
                        <Col>
                          <img src="https://img.icons8.com/color/144/000000/javascript.png"/>
                          <h3>Javascript</h3>
                        </Col>
                        <Col>
                          <img src="https://img.icons8.com/color/144/000000/python.png"/>
                          <h3>Python</h3>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="frameworks">
                      <Row>
                        <Col>
                          <img src="https://img.icons8.com/color/144/000000/nodejs.png"/>
                          <h3>Node js</h3>
                        </Col>
                        <Col>
                          <img src="https://img.icons8.com/plasticine/144/000000/react.png"/>
                          <h3>React js</h3>
                        </Col>
                        <Col>
                          <img src="https://img.icons8.com/color/144/000000/bootstrap.png"/>
                          <h3>Bootstrap</h3>
                        </Col>
                        <Col>
                          <img src="https://img.icons8.com/color/144/000000/material-ui.png"/>
                          <h3>Material UI</h3>
                        </Col>
                        <Col>
                        <img src="https://img.icons8.com/ios-filled/144/000000/jquery.png"/>
                          <h3>jQuery</h3>
                        </Col>
                        <Col>
                          <img src="https://img.icons8.com/color/144/000000/django.png"/>
                          <h3>Django</h3>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="databases">
                      <Row>
                        <Col>
                          <img src="https://img.icons8.com/ios/144/000000/mysql-logo.png"/>
                          <h3>MySQL</h3>
                        </Col>
                        <Col>
                          <img src="https://img.icons8.com/color/144/000000/mongodb.png"/>
                          <h3>MongoDB</h3>
                        </Col>
                        <Col>
                          <img src="https://img.icons8.com/color/144/000000/postgreesql.png"/>
                          <h3>PosgreSQL</h3>
                        </Col>
                        <Col>
                          <img style={{ width: '80%', height: '144px' }} src="https://seekvectorlogo.com/wp-content/uploads/2019/07/sqlite-vector-logo.png" />
                          <h3>SQLite</h3>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tools">
                      <Row>
                        <Col>
                          <img src="https://img.icons8.com/color/144/000000/trello.png"/>
                          <h3>Trello</h3>
                        </Col>
                        <Col>
                        <img src="https://img.icons8.com/dusk/144/000000/postman-api.png"/>
                          <h3>Postman</h3>
                        </Col>
                        <Col>
                          <img src="https://img.icons8.com/color/144/000000/github.png"/>
                          <h3>Github</h3>
                        </Col>
                        <Col>
                          <img src="https://img.icons8.com/color/144/000000/npm.png"/>
                          <h3>NPM</h3>
                        </Col>
                        <Col>
                          <img src="https://img.icons8.com/dusk/144/000000/webpack.png"/>
                          <h3>Webpack</h3>
                        </Col>
                        <Col>
                        <img src="https://img.icons8.com/color/144/000000/sass.png"/>
                          <h3>Sass</h3>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="api">
                      <Row>
                        <Col>
                        <img src="https://img.icons8.com/cute-clipart/144/000000/google-logo.png"/>
                          <h3>Google</h3>
                        </Col>
                        <Col>
                        <img src="https://img.icons8.com/cute-clipart/144/000000/facebook-new.png"/>
                          <h3>Facebook</h3>
                        </Col>
                        <Col>
                        <img src="https://img.icons8.com/color/144/000000/firebase.png"/>
                          <h3>Firebase</h3>
                        </Col>
                        <Col>
                        <img src="https://img.icons8.com/ios/144/000000/wikipedia.png"/>
                          <h3>Wikipedia</h3>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="libs">
                      <Row>
                        <Col>
                        <img style={{ height: '146px', width: '100%' }} src="img/layout/technologies/libraries/next_js.png"/>
                          <h3>Next.js</h3>
                        </Col>
                        <Col>
                        <img style={{ width: '144px' }} src="img/layout/technologies/libraries/axios.png"/>
                          <h3>Axios</h3>
                        </Col>
                        <Col>
                        <img src="https://img.icons8.com/color/144/000000/graphql.png"/>
                          <h3>Graphql</h3>
                        </Col>
                        <Col>
                        <img style={{ height: '146px', width: '100%' }} src="img/layout/technologies/libraries/chart_js.png"/>
                          <h3>Chart.js</h3>
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </ScrollAnimation>
      </Container>

      <Container className="my-5">
        <ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>
        <h1 className="display-4 block-title">Our advantages</h1>
        <Row>
          <Col lg={4} md={12} sm-offset={2}>
            <Button 
              className="my-1" 
              variant="info" 
              size="lg" 
              block 
              onClick={this.firstCategoryHandler}>
              DEADLINE GUARANTEE
            </Button>
          </Col>
          <Col lg={4} md={12} sm-offset={2}>
            <Button 
              className="my-1" 
              variant="success" 
              size="lg" 
              block 
              onClick={this.secondCategoryHandler}>
              RESPONSIVITY
            </Button>
          </Col>
          <Col lg={4} md={12} sm-offset={2}>
            <Button 
              className="my-1" 
              variant="danger" 
              size="lg" 
              block 
              onClick={this.thirdCategoryHandler}>
              BUSINESS ANALYSIS
            </Button>
          </Col>
        </Row>
        
        <Row>
          <Col>
            <div className="my-2">
              <img className={ this.state.animated ? 'w-100 rounded'.concat(' ', classes.Img_animated) : 'w-100 rounded' } src={ this.state.imgUrl }></img>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="w-100 my-1">
              <div className="h1 bg-dark rounded text-white text-center p-2">
                <h4 className={ this.state.animated ? classes.Header_animated : null }>{this.state.body}</h4>
              </div>
            </div>
          </Col>
        </Row>
        </ScrollAnimation>
*/
