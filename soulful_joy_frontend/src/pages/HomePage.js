import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

import "./HomePage.css"

const HomePage = () => {

return (
  <div className="homePage_maindiv">
  <Container className="homePage_container">
    <Row className="homePageRow">
      <Col className='homePage_hero_col'>
        <h1 className='test'> Hero </h1>
      </Col>
    </Row>
  </Container>

  <Container className="homePage_container">
    <Row className="homePageRow">
      <Col className='homePage_col'>
        <h1 className='test'> General </h1>
        <p>How do you feel when you hear soulful joy</p>
      </Col>
    </Row>
  </Container>

  <Container className="homePage_container">
    <Row className="homePageRow">
      <Col className='homePage_col'>
        <h1 className='test'> Fetured Event </h1>
      </Col>
    </Row>
  </Container>

  <Container className="homePage_container">
    <Row className="homePageRow">
      <Col className='homePage_col'>
        <h1 className='test'> Facilitators </h1>
      </Col>
    </Row>
  </Container>

  <Container className="homePage_container">
    <Row className="homePageRow">
      <Col className='homePage_col'>
        <h1 className='test'> Summary Post </h1>
      </Col>
    </Row>
  </Container>

  <Container className="homePage_container">
    <Row className="homePageRow">
      <Col className='homePage_col'>
        <h1 className='test'> Social media</h1>
      </Col>
    </Row>
  </Container>

  <Container className="homePage_container_footer">
    <Row className="homePageRow">
      <Col className='homePage_col'>
        <h1 className='test'> Footer</h1>
      </Col>
    </Row>
  </Container>
  </div>
)

}


export default HomePage;
