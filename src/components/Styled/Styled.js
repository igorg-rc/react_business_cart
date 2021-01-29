import React from "react"
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { Col, Nav, Row, Container } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll' 

export default function Styled () {
  return (
    
    <div className="my-4">
      <Container>
      <ScrollAnimation animateIn="fadeIn">
      <h2 className="display-4 my-5">Technologies</h2>
      </ScrollAnimation>
      <ScrollAnimation animateIn='bounceInLeft' animateOut='bounceOutRight'>
      <Tab.Container id="left-tabs-example" defaultActiveKey="languages">
        <Row>
          <Nav variant="pills" className="flex-row w-100">
            <Col md={3} sm={12}>
              <Nav.Item>
                <Nav.Link eventKey="languages">LANGUAGES</Nav.Link>
              </Nav.Item>
            </Col>
            <Col md={3} sm={12}>
              <Nav.Item>
                <Nav.Link eventKey="frameworks">FRAMEWORKS</Nav.Link>
              </Nav.Item>
            </Col>
            <Col md={3} sm={12}>
              <Nav.Item>
                <Nav.Link eventKey="databases">DATABASES</Nav.Link>
              </Nav.Item>
            </Col>
            <Col md={3} sm={12}>
              <Nav.Item>
                <Nav.Link eventKey="tools">TOOLS</Nav.Link>
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
                    <img src="https://img.icons8.com/color/144/000000/html-5.png"/>
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
                    <img style={{ width: '100%', height: '77%' }} src="https://seekvectorlogo.com/wp-content/uploads/2019/07/sqlite-vector-logo.png" />
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
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      </ScrollAnimation>
      </Container>

    </div>
  );
}



