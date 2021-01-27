import React from 'react'
import { Element } from 'react-scroll'
import { Container, Card, Row, Col } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll' 

export default function Industries() {
  return (
    <div id="industries">
      <Container>
        <ScrollAnimation animateIn="fadeIn">
          <h3 className="display-3 mb-5">Industries</h3>
          <Row>
            <Col xl={4} md={6} sm={12}>
              <Card className="bg-dark text-white mb-4">
                <Card.Img src="img/layout/industries/eCommerse_.jpg" alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>eCommerse</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>

            <Col xl={4} md={6} sm={12}>
              <Card className="bg-dark text-white mb-4">
                <Card.Img src="img/layout/industries/booking_.jpg" alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>Booking</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>


            <Col xl={4} md={6} sm={12}>
              <Card className="bg-dark text-white mb-4">
                <Card.Img src="img/layout/industries/healthcare_.jpg" alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>Healthcare</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>

            <Col xl={4} md={6} sm={12}>
              <Card className="bg-dark text-white mb-4">
                <Card.Img src="img/layout/industries/education_.jpg" alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>Education</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>

            <Col xl={4} md={6} sm={12}>
              <Card className="bg-dark text-white mb-4">
                <Card.Img src="img/layout/industries/finance_trading_.jpg" alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>Finance & trading</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>

            <Col xl={4} md={6} sm={12}>
              <Card className="bg-dark text-white mb-4">
                <Card.Img src="img/layout/industries/influence_.jpg" alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>Influence</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>

            <Col xl={4} md={6} sm={12}>
              <Card className="bg-dark text-white mb-4">
                <Card.Img src="img/layout/industries/eCommerse_.jpg" alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>Real estate</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>

            <Col xl={4} md={6} sm={12}>
              <Card className="bg-dark text-white mb-4">
                <Card.Img src="img/layout/industries/CRM_EM_.jpg" alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>CRM & Enterprise Management</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
          </ScrollAnimation>
      </Container>
      
    </div>
  )
}
