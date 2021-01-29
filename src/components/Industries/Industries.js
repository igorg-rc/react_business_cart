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
                  <Card.Title>{industry.title}</Card.Title>
                  <Card.Text>
                    {industry.body}
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
  });

  return (
    <div id="industries">
      <Container>
        <ScrollAnimation animateIn="fadeIn">
          <h3 className="display-3 mb-5">Industries</h3>
          <Row>
            {industriesList}
          </Row>
          </ScrollAnimation>
      </Container>
      
    </div>
  )
}
