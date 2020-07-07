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
  console.log(`
      x: ${props.mouseWheelDeltaY},
      y: ${props.overscrollTop},
      z: ${props.overscrollDir},
      mobile: ${props.mobile},
      height: ${props.viewHeight}
    `);
  let topMes = props.overscrollTop*.45+'rem';

  if (props.mobile === false && props.viewHeight === 'med') {
    if (props.overscrollTop <= -370) {
      console.log('lower limit');
      topMes = -370*.45+'rem';
    }
  }
  if (props.mobile === false && props.viewHeight === 'tall') {
    if (props.overscrollTop <= -450) {
      console.log('lower limit');
      topMes = -450*.45+'rem';
    }
  }
  // if (props.mobile === true) {
  //   let maxTop = -200/.4+'rem';
  //   if (props.overscrollTop <= -200) {z
  //     console.log('lower limit');
  //     topMes = maxTop;
  //   }
  // }

  if (props.overscrollTop >= -75 && props.viewHeight === 'med') {
    console.log('upper limit');
    topMes = -75*.45+'rem';
  }
  if (props.overscrollTop >= -90 && props.viewHeight === 'tall') {
    console.log('upper limit');
    topMes = -90*.45+'rem';
  }


  const style = {
    top: topMes,
  }
return (
  <div className="mainDiv_parallax">
  <MainNavigation />

    <Row className="parallaxRow1">
      <Col className="parallaxCol1">
        <Row className="parallaxSubRow1">
          <Col md={9} className="topCol">
            <Row>
              <h1 className="topHeading">
                The Path
              </h1>
            </Row>
            <Row>
              <p className="topSubtitle">
                We developed a 5 point system focused on
              </p>
            </Row>
          </Col>
          <Col md={3} className="topCol2">
            <Image src={Wht_ico} className="CompanyPage_HeadLogo" fluid />
          </Col>
        </Row>

        <Row className="parallaxFooterRow">
          <Col className="footerMainCol">
          <Row className="footer_topRow">
            <NavLink to="/content" className="footer_navBar_link">
              <p className="footer_topRow_text">Stay in touch</p>
            </NavLink>
          </Row>
            <Row className="footer_midRow">
              <Col md={3} className="footer_midCol">
                <ul className="footer_navList">
                  <li className="footer_navListItem">
                    <NavLink to="/home" className="footer_navBar_link">Home</NavLink>
                  </li>
                  <li className="footer_navListItem">
                    <NavLink to="/team" className="footer_navBar_link">Team</NavLink>
                  </li>
                  <li className="footer_navListItem">
                    <NavLink to="/path" className="footer_navBar_link">The Path</NavLink>
                  </li>
                  <li className="footer_navListItem">
                    <NavLink to="/socialMedia" className="footer_navBar_link">Join the Joy</NavLink>
                  </li>
                  <li className="footer_navListItem">
                    <NavLink to="/retreat" className="footer_navBar_link">Retreat</NavLink>
                  </li>
                </ul>
              </Col>
              <Col md={6} className="footer_midCol">

              </Col>
              <Col md={3} className="footer_midCol">
                <ul className="footer_socialList">
                  <li className="footer_socialListItem">
                  <a href="https://www.facebook.com/SoulfulJoy" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookSquare} className="footerIcon"/>
                  </a>
                  </li>
                  <li className="footer_socialListItem">
                  <a href="https://www.instagram.com/soulfuljoyjamaica" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="footerIcon"/>
                  </a>
                  </li>
                  <li className="footer_socialListItem">
                  <a href="https://www.linkedin.com/company/soulfuljoy/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="footerIcon"/>
                  </a>
                  </li>
                  <li className="footer_socialListItem">
                  <a href="https://www.facebook.com/SoulfulJoy" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} className="footerIcon"/>
                  </a>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row className="footer_copyrightRow">
            <a className="footer_copyrightRow_text" href="mailto:family@SoulfulJoy.com" target="_blank" rel="noopener noreferrer">
              <p > family@SoulfulJoy.com | Planet Earth | </p>
            </a>

            </Row>
          </Col>
        </Row>
      </Col>
    </Row>


    <Row style={style} className="parallaxRow2">

    </Row>

  </div>
)

}


export default ParallaxPage;
