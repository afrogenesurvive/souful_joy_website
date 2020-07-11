import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
// import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

// import SplashMainLogo from '../assets/imgs/logo_splash_pg.png';
import Wht_ico from '../assets/imgs/wht_ico.png';
// import Blk_ico from '../assets/imgs/blk_ico.png';
import "./WelcomePage.css"

const WelcomePage = (props) => {
  let location = props.location.pathname;
  // props.setCurrentPage(location);

return (
  <div className="welcomePage_maindiv">
    <Row className="welcomePageRow">
      <Col className='welcomePageCol'>

        <Row className="welcomePageSubRow Row1">
          <Image src={Wht_ico} className="SplashMainLogo" fluid />
          <h1 className="welcomePageHeading">
            Soulful Joy
          </h1>
        </Row>

        <Row className="welcomePageSubRow Row2">
          <h3 className='welcomePageSubHeading'>A Special Time & Place...</h3>
          <NavLink to="/home">
            <Button variant="outline-light" size="lg" className="welcomePageEnterBtn" onClick={props.closeSplash}>Welcome</Button>
          </NavLink>
        </Row>

      </Col>
    </Row>
  </div>
)

}
// <h1 className='welcomePageHeading'> Soulful Joy </h1>

export default WelcomePage;
