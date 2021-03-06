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
import location_1 from '../assets/imgs/location_1.jpg';
import location_2 from '../assets/imgs/location_2.jpg';
import location_3 from '../assets/imgs/location_3.jpg';
import location_4 from '../assets/imgs/location_4.jpg';
import location_5 from '../assets/imgs/location_5.jpg';
import location_6 from '../assets/imgs/location_6.jpg';

import "./ParallaxPage.css"

const RetreatPage = (props) => {

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
                The Experience
              </h1>
            </Row>
            <Row>
              <p className="topSubtitle">
                relax and rejuvenate” while you detox
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
                The Experience
              </h1>

              <p className="topSubtitle">
                relax and rejuvenate” while you detox
              </p>

          </Col>
        </Row>

        <Row className="parallaxSubRow2 desktop">

          <Row className="parallaxSubRow2_headRow">
              <h1 className="parallaxSubRow2_heading" >
                Our Purpose
              </h1>
          </Row>

          <Row className="parallaxSubRow2_gridRow">
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
              Soulful Joy began as a solution in response to the ever-increasing levels
              of stress that adults are experiencing every day.
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                The Path to this amazing Experience is based on Di I Dem
              </p>
            </Col>
          </Row>
          <Row className="parallaxSubRow2_gridRow">
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                Several of our friends who have been in the alternative wellness field for over 40 years each in various ways came together
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                and decided to offer a “relax and rejuvenate” while you detox retreat.
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                Inspire – Immerse – Invigorate – Improve - Incorporate
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
                Join us this October 8-11, 2020 in Negril Jamaica where we will take you on the Path to this amazing Experience.
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
          </Row>

        </Row>


        <Row className="parallaxSubRow2 mobile">

          <Row className="parallaxSubRow2_headRow">
              <h1 className="parallaxSubRow2_heading" >
                Our Purpose
              </h1>
          </Row>

          <Row className="parallaxSubRow2_gridRow">
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
              Soulful Joy began as a solution in response to
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
              ever-increasing levels of stress that adults are experiencing every day
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                The Path to this amazing Experience is based on Di I Dem
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
                Several of our friends who have been in the alternative wellness field
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                for over 40 years each in various ways came together
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                and decided to offer a “relax and rejuvenate” while you detox retreat.
              </p>
            </Col>
          </Row>

        </Row>
        <Row className="parallaxSubRow2 mobile">

          <Row className="parallaxSubRow2_headRow">
              <h1 className="parallaxSubRow2_heading" >
                Our Purpose
              </h1>
          </Row>

          <Row className="parallaxSubRow2_gridRow">
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
              .
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                Inspire – Immerse – Invigorate – Improve - Incorporate
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
                Join us this October 8-11, 2020
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                in Negril Jamaica where we will take you
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                on the Path to this amazing Experience.
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
            <h1 className="parallaxSubRow2_heading">
              Our Activities
            </h1>
          </Row>

          <Row className="parallaxSubRow2_gridRow">
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText" onClick={props.openDetailViewer.bind(this, {page: 'retreat', data:"four_day_outline"})}>
                Four-day Outline
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText" onClick={props.openDetailViewer.bind(this, {page: 'retreat', data:"packages"})}>
                Packages
              </p>
            </Col>
          </Row>
          <Row className="parallaxSubRow2_gridRow">
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText" onClick={props.openDetailViewer.bind(this, {page: 'retreat', data:"what_to_bring"})}>
                What to bring
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <Image src={Wht_ico} className="ParallaxPage_staffImg" fluid onClick={props.openDetailViewer.bind(this, {page: 'team', data:"team_2_ade"})}/>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText" onClick={props.openDetailViewer.bind(this, {page: 'retreat', data:"detox_rules"})}>
                Rules for the detox
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
              <p className="parallax_gridText" onClick={props.openDetailViewer.bind(this, {page: 'retreat', data:"other_activities"})}>
                Other activities
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
            <h1 className="parallaxSubRow2_heading">
              The Location
            </h1>
          </Row>

          <Row className="parallaxSubRow2_gridRow">
            <Col md={4} className="parallax_gridCol">
              <Image src={location_1} className="ParallaxPage_locatiomImg" fluid onClick={props.openDetailViewer.bind(this, {page: 'retreat', data:"location_1"})}/>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <Image src={location_2} className="ParallaxPage_locatiomImg" fluid onClick={props.openDetailViewer.bind(this, {page: 'retreat', data:"location_2"})}/>
            </Col>
          </Row>
          <Row className="parallaxSubRow2_gridRow">
            <Col md={4} className="parallax_gridCol">
              <Image src={location_3} className="ParallaxPage_locatiomImg" fluid onClick={props.openDetailViewer.bind(this, {page: 'retreat', data:"location_3"})}/>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <Image src={location_4} className="ParallaxPage_locatiomImg" fluid onClick={props.openDetailViewer.bind(this, {page: 'retreat', data:"location_4"})}/>
            </Col>
          </Row>
          <Row className="parallaxSubRow2_gridRow">
            <Col md={4} className="parallax_gridCol">
              <Image src={location_5} className="ParallaxPage_locatiomImg" fluid onClick={props.openDetailViewer.bind(this, {page: 'retreat', data:"location_5"})}/>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <Image src={location_6} className="ParallaxPage_locatiomImg" fluid onClick={props.openDetailViewer.bind(this, {page: 'retreat', data:"location_6"})}/>
            </Col>
          </Row>

        </Row>

        <Row className="parallaxSubRow2">

          <Row className="parallaxSubRow2_headRow">
            <h1 className="parallaxSubRow2_heading">
              Facilitators
            </h1>
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


export default RetreatPage;
