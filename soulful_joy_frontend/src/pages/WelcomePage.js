import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

import SplashMainLogo from '../assets/imgs/logo_splash_pg.png';
import Wht_ico from '../assets/imgs/wht_ico.png';
import Blk_ico from '../assets/imgs/blk_ico.png';
import "./WelcomePage.css"

const WelcomePage = (props) => {

return (
  <div className="welcomePage_maindiv">
    <Row className="welcomePageRow">
      <Col className='welcomePageCol'>

        <Row className="welcomePageSubRow Row1">
          <Image src={Wht_ico} className="SplashMainLogo" fluid />

        </Row>

        <Row className="welcomePageSubRow Row2">
          <h5 className='welcomePageSubHeading'> SOULFUL...a special Time and Place...</h5>
          <NavLink to="/home">
            <Button variant="outline-light" className="welcomePageEnterBtn" onClick={props.closeSplash}>Enter</Button>
          </NavLink>
        </Row>

      </Col>
    </Row>
  </div>
)

}
// <h1 className='welcomePageHeading'> Soulful Joy </h1>

export default WelcomePage;
