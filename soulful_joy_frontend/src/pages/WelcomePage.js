import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'

import "./WelcomePage.css"

const WelcomePage = (props) => {

return (
  <div className="welcomePage_maindiv">
    <Row className="welcomePageRow">
      <Col className='welcomePageCol'>

        <Row className="welcomePageRow_1">
          <h1 className='welcomePageHeading'> Welcome to soulful joy </h1>
        </Row>
        <NavLink to="/home">
          <Button variant="outline-primary" className="welcomePageEnterBtn" onClick={props.closeSplash}>Enter</Button>
        </NavLink>
      </Col>
    </Row>
  </div>
)

}


export default WelcomePage;
