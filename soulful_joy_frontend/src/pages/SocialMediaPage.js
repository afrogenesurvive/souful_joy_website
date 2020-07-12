import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import MainNavigation from '../components/Navigation/MainNavigation';
import Image from 'react-bootstrap/Image';
import DetailViewer from '../components/DetailViewer/DetailViewer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
// import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import Wht_ico from '../assets/imgs/wht_ico.png';

import "./ParallaxPage.css"

const SocialMediaPage = (props) => {

  let location = props.location.pathname;
  let detailViewerOpen = props.detailViewerOpen;
  let detailViewerData = props.detailViewerData;

return (
  <div className="mainDiv_parallax">
  <MainNavigation
    currentPage={location}
  />

  {detailViewerOpen === true &&
     detailViewerData.page === 'retreat' && (
    <DetailViewer
      data={detailViewerData}
      closeDetailViewer={props.closeDetailViewer}
    />
  )}

    <Row className="parallaxRow1">
      <Col className="parallaxCol1">

        <Row className="parallaxSubRow1 desktop">
          <Col md={9} className="topCol">
            <Row className>
              <h1 className="topHeading">
                Join the Joy
              </h1>
            </Row>
            <Row>
              <p className="topSubtitle">
                ...
              </p>
            </Row>
          </Col>
          <Col md={3} className="topCol2">
            <Image src={Wht_ico} className="ParallaxPage_HeadLogo" fluid />
          </Col>
        </Row>

        <Row className="parallaxSubRow1 mobile">
          <Col className="topCol">
            <Image src={Wht_ico} className="ParallaxPage_HeadLogo" fluid />

              <h1 className="topHeading">
                Join the Joy
              </h1>

              <p className="topSubtitle">
                ...
              </p>

          </Col>
        </Row>

        <Row className="parallaxSubRow2">

          <Row className="parallaxSubRow2_headRow">
              <h1 className="parallaxSubRow2_heading" >
                Affiliates
              </h1>

          </Row>
          <p className="parallaxSubRow2_subheading">
            Follow our Ambassadors and Affiliates
          </p>

          <Row className="parallaxSubRow2_gridRow">
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
              .
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
          </Row>
          <Row className="parallaxSubRow2_gridRow">
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
          </Row>
          <Row className="parallaxSubRow2_gridRow">
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
          </Row>

        </Row>

        <Row className="parallaxSubRow2">

          <Row className="parallaxSubRow2_headRow">
              <h1 className="parallaxSubRow2_heading" >
                Sponsors
              </h1>
          </Row>
          <p className="parallaxSubRow2_subheading">
            A Special thanks to Our Investors and Sponsors.
          </p>

          <Row className="parallaxSubRow2_gridRow">
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
              .
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
          </Row>
          <Row className="parallaxSubRow2_gridRow">
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
          </Row>
          <Row className="parallaxSubRow2_gridRow">
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
          </Row>

        </Row>

        <Row className="parallaxSubRow2">

          <Row className="parallaxSubRow2_headRow">
              <h1 className="parallaxSubRow2_heading" >
                Social
              </h1>
          </Row>

          <Row className="parallaxSubRow2_gridRow">
            <Col md={4} className="parallax_gridCol">
              <a href="https://www.linkedin.com/company/soulfuljoy/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="socialPageGridIcon"/>
              </a>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <a href="https://www.instagram.com/soulfuljoyjamaica" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="socialPageGridIcon"/>
              </a>
            </Col>
          </Row>
          <Row className="parallaxSubRow2_gridRow">
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
          </Row>
          <Row className="parallaxSubRow2_gridRow">
            <Col md={4} className="parallax_gridCol">
              <a href="https://www.facebook.com/SoulfulJoyJa" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} className="socialPageGridIcon"/>
              </a>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
            <a href="https://www.facebook.com/SoulfulJoyJa" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookSquare} className="socialPageGridIcon"/>
            </a>
            </Col>
          </Row>

        </Row>

        <Row className="parallaxFooterRow">
          <Col className="footerMainCol">
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
                  <a href="https://www.facebook.com/SoulfulJoyJa" target="_blank" rel="noopener noreferrer">
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
                  <a href="https://www.facebook.com/SoulfulJoyJa" target="_blank" rel="noopener noreferrer">
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

  </div>
)

}


export default SocialMediaPage;
