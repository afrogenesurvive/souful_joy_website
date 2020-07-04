import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import MainNavigation from '../components/Navigation/MainNavigation';
// import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
// import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

// import SplashMainLogo from '../assets/imgs/logo_splash_pg.png';
// import ContentBgLogo from '../assets/imgs/content_bg.png';
import Wht_ico from '../assets/imgs/wht_ico.png';
// import Blk_ico from '../assets/imgs/blk_ico.png';

import "./ParallaxPage.css"

const ParallaxPage = (props) => {
  // console.log('boop',window.scrollY);
  // console.log('x',props.location);
  if (props.scrollPos > 175) {
    console.log('Erika!!');
  }
return (
  <div className="mainDiv_parallax">
  <MainNavigation />

    <Row className="parallaxRow1">
    </Row>

    <Row className="parallaxFooterRow">
    </Row>

    <Row className="parallaxRow2">
    </Row>

  </div>
)

}


export default ParallaxPage;
