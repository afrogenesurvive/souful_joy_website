import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import MainNavigation from '../components/Navigation/MainNavigation';
// import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import DetailViewer from '../components/DetailViewer/DetailViewer';

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

  let location = props.location.pathname;
  let detailViewerOpen = props.detailViewerOpen;
  let detailViewerData = props.detailViewerData;

  console.log(`
      x: ${props.mouseWheelDeltaY},
      y: ${props.overscrollTop},
      z: ${props.overscrollDir},
      mobile: ${props.mobile},
      height: ${props.viewHeight}
    `);
  // let topMes = props.overscrollTop/.3+'em';
  // let topMes = props.overscrollTop/.35+'em';
  // let topMes = props.overscrollTop/.45+'em';
  // let topMes = props.overscrollTop/.4+'em';
  // let topMes = props.overscrollTop/.55+'em';
  // let topMes = props.overscrollTop/.5+'em';
  // let topMes = props.overscrollTop/.6+'em';
  // let topMes = props.overscrollTop/.65+'em';
  let topMes = props.overscrollTop/.7+'em';
  // let topMes = props.overscrollTop/.75+'em';

  if (props.mobile === false && props.viewHeight === 'med') {
    if (props.overscrollTop <= -136) {
      console.log('lower limit');
      topMes = -136/.7+'em';
    }
  }
  if (props.mobile === false && props.viewHeight === 'tall') {
    if (props.overscrollTop <= -165) {
      console.log('lower limit');
      topMes = -165/.7+'em';
    }
  }
  // if (props.mobile === true) {
  //   let maxTop = -200/.4+'rem';
  //   if (props.overscrollTop <= -200) {z
  //     console.log('lower limit');
  //     topMes = maxTop;
  //   }
  // }

  if (props.overscrollTop >= -26 && props.viewHeight === 'med') {
    console.log('upper limit');
    topMes = -26/.7+'em';
  }
  if (props.overscrollTop >= -30 && props.viewHeight === 'tall') {
    console.log('upper limit');
    topMes = -30/.7+'em';
  }


  const style = {
    top: topMes,
  }
return (
  <div className="mainDiv_parallax">
  <MainNavigation
    currentPage={location}
  />

  {detailViewerOpen === true &&
     detailViewerData.page === 'parallax' && (
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
            <Image src={Wht_ico} className="ParallaxPage_HeadLogo" fluid />
          </Col>
        </Row>

        <Row className="parallaxSubRow1 mobile">
          <Col className="topCol">
            <Image src={Wht_ico} className="ParallaxPage_HeadLogo" fluid />

              <h1 className="topHeading">
                The Path
              </h1>

              <p className="topSubtitle">
                We developed a 5 point system focused on
              </p>

          </Col>
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

      <Row className="parallaxSubRow2">

        <Row className="parallaxSubRow2_headRow">
            <h1 className="parallaxSubRow2_heading" >
              First
            </h1>
            <Button variant="outline-light" onClick={props.openDetailViewer.bind(this, {page: 'parallax', data:"test"})}>
            </Button>
        </Row>

        <Row className="parallaxSubRow2_gridRow">
          <Col md={4} className="parallax_gridCol">
            <p className="parallax_gridText">
              x
            </p>
          </Col>
          <Col md={4} className="parallax_gridCol">
            <p className="parallax_gridText">
              x
            </p>
          </Col>
          <Col md={4} className="parallax_gridCol">
            <p className="parallax_gridText">
              x
            </p>
          </Col>
        </Row>
        <Row className="parallaxSubRow2_gridRow">
          <Col md={4} className="parallax_gridCol">
            <p className="parallax_gridText">
              x
            </p>
          </Col>
          <Col md={4} className="parallax_gridCol">
            <p className="parallax_gridText">
              x
            </p>
          </Col>
          <Col md={4} className="parallax_gridCol">
            <p className="parallax_gridText">
              x
            </p>
          </Col>
        </Row>
        <Row className="parallaxSubRow2_gridRow">
          <Col md={4} className="parallax_gridCol">
            <p className="parallax_gridText">
              x
            </p>
          </Col>
          <Col md={4} className="parallax_gridCol">
            <p className="parallax_gridText">
              x
            </p>
          </Col>
          <Col md={4} className="parallax_gridCol">
            <p className="parallax_gridText">
              x
            </p>
          </Col>
        </Row>

      </Row>

      <Row className="parallaxSubRow2">

        <Row className="parallaxSubRow2_headRow">
          <h1 className="parallaxSubRow2_heading">
            Second
          </h1>
        </Row>

        <Row className="parallaxSubRow2_gridRow">
          <Col md={4} className="parallax_gridCol">
            <p className="parallax_gridText">
              x
            </p>
          </Col>
          <Col md={4} className="parallax_gridCol">
            <p className="parallax_gridText">
              x
            </p>
          </Col>
          <Col md={4} className="parallax_gridCol">
            <p className="parallax_gridText">
              x
            </p>
          </Col>
        </Row>
        <Row className="parallaxSubRow2_gridRow">
          <Col md={4} className="parallax_gridCol">
            <p className="parallax_gridText">
              x
            </p>
          </Col>
          <Col md={4} className="parallax_gridCol">
            <p className="parallax_gridText">
              x
            </p>
          </Col>
          <Col md={4} className="parallax_gridCol">
            <p className="parallax_gridText">
              x
            </p>
          </Col>
        </Row>
        <Row className="parallaxSubRow2_gridRow">
          <Col md={4} className="parallax_gridCol">
            <p className="parallax_gridText">
              x
            </p>
          </Col>
          <Col md={4} className="parallax_gridCol">
            <p className="parallax_gridText">
              x
            </p>
          </Col>
          <Col md={4} className="parallax_gridCol">
            <p className="parallax_gridText">
              x
            </p>
          </Col>
        </Row>

      </Row>

      <Row className="parallaxSubRow2">

        <Row className="parallaxSubRow2_headRow">
          <h1 className="parallaxSubRow2_heading">
            Third
          </h1>
        </Row>

        <Row className="parallaxSubRow2_gridRow">
          <Col md={4} className="parallax_gridCol">
            <p className="parallax_gridText">
              x
            </p>
          </Col>
          <Col md={4} className="parallax_gridCol">
            <p className="parallax_gridText">
              x
            </p>
          </Col>
          <Col md={4} className="parallax_gridCol">
            <p className="parallax_gridText">
              x
            </p>
          </Col>
        </Row>
        <Row className="parallaxSubRow2_gridRow">
          <Col md={4} className="parallax_gridCol">
            <p className="parallax_gridText">
              x
            </p>
          </Col>
          <Col md={4} className="parallax_gridCol">
            <p className="parallax_gridText">
              x
            </p>
          </Col>
          <Col md={4} className="parallax_gridCol">
            <p className="parallax_gridText">
              x
            </p>
          </Col>
        </Row>
        <Row className="parallaxSubRow2_gridRow">
          <Col md={4} className="parallax_gridCol">
            <p className="parallax_gridText">
              x
            </p>
          </Col>
          <Col md={4} className="parallax_gridCol">
            <p className="parallax_gridText">
              x
            </p>
          </Col>
          <Col md={4} className="parallax_gridCol">
            <p className="parallax_gridText">
              x
            </p>
          </Col>
        </Row>

      </Row>

    </Row>

  </div>
)

}


export default ParallaxPage;
