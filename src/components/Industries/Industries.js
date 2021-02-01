import React from 'react'
import { Element } from 'react-scroll'
import { Container, Card, Row, Col } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll' 

import { industries } from './IndustriesData'

export default function Industries() {
  
  const industriesList = industries.map(industry => {
    return  <Col xl={4} md={6} sm={12} key={industry.title}>
              <Card className="bg-dark text-white mb-4">
                <Card.Img src={industry.imgUrl} alt={industry.title} />
                <Card.ImgOverlay>
                  <Card.Title>
                    <h4>{industry.title}</h4>
                  </Card.Title>
                  <Card.Text>
                    <p className="lead">
                      {industry.body}
                    </p>
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
  });

  return (
    <div id="industries">
      <Container>
        <ScrollAnimation animateIn="fadeIn">
          <h3 className="display-3 my-3">Industries</h3>
          <Row>
            {industriesList}
          </Row>
          </ScrollAnimation>
      </Container>
      
    </div>
  )
}
