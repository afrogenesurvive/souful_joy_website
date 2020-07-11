import React, {useEffect} from 'react';
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
import team_1 from '../assets/imgs/team_1_kwayera.jpeg';
import team_2 from '../assets/imgs/team_2_ade.jpg';
import team_3 from '../assets/imgs/team_3_khadijah.jpg';
import team_4 from '../assets/imgs/team_4_kwasausya.jpg';
import team_5 from '../assets/imgs/team_5_perdella.jpg';
// import Blk_ico from '../assets/imgs/blk_ico.png';

import "./ParallaxPage.css"

const TeamPage = (props) => {

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

  // if (props.mobile !== true) {
  //   topMes = props.overscrollTop/.7+'em';
  // }
  // if (props.mobile === true) {
  //   topMes = props.overscrollTop/1.7+'em';
  // }
  // // let topMes = props.overscrollTop/.75+'em';
  //
  // if (props.mobile === false && props.viewHeight === 'med') {
  //   if (props.overscrollTop <= -142) {
  //     // props.setLowerLimit()
  //     console.log('med lower limit');
  //     topMes = -142/.7+'em';
  //   }
  // }
  // if (props.mobile === false && props.viewHeight === 'tall') {
  //   if (props.overscrollTop <= -162) {
  //     // props.setLowerLimit()
  //     console.log('tall lower limit');
  //     topMes = -162/.7+'em';
  //   }
  // }
  // // if (props.mobile === true) {
  // //   if (props.overscrollTop <= -340) {
  // //     console.log('lower limit mobile');
  // //     topMes = -340/1.7+'em';
  // //   }
  // // }
  //
  // if (props.overscrollTop >= -26 && props.viewHeight === 'med') {
  //   console.log('med upper limit');
  //   topMes = -26/.7+'em';
  // }
  // if (props.overscrollTop >= -30 && props.viewHeight === 'tall') {
  //   console.log('tall upper limit');
  //   topMes = -30/.7+'em';
  // }
  // if (props.mobile === true) {
  //   if (props.overscrollTop >= -65) {
  //     console.log('upper limit mobile');
  //     topMes = -65/1.7+'em';
  //   }
  // }
  // const style = {
  //   top: topMes,
  // }


return (
  <div className="mainDiv_parallax">
  <MainNavigation
    currentPage={location}
  />

  {detailViewerOpen === true &&
     detailViewerData.page === 'team' && (
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
              <h1 className="topHeading" onClick={props.resetOverscrollTop}>
                Our Team
              </h1>
            </Row>
            <Row>
              <p className="topSubtitle">
                Meet  our Soulful Joy team! We come with over 40 years of experience in wellness modalities.
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
                Our Team
              </h1>

              <p className="topSubtitle">
                Meet  our Soulful Joy team! We come with over 40 years of experience in wellness modalities.
              </p>

          </Col>
        </Row>

        <Row className="parallaxSubRow2">

          <Row className="parallaxSubRow2_headRow">
              <h1 className="parallaxSubRow2_heading" >
                Our Mission
              </h1>
          </Row>

          <Row className="parallaxSubRow2_gridRow">
            <Col md={4} className="parallax_gridCol">
            <p className="parallax_gridText">
              Soulful Joy exists to provide a unique residential experience where people who give of themselves a lot & often
            </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
                </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                can rejuvenate & relax; while detoxing during a 4-day long retreat in lush tropical locations.
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
            <h1 className="parallaxSubRow2_heading">
              Team
            </h1>
          </Row>

          <Row className="parallaxSubRow2_gridRow">
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <Image src={team_1} className="ParallaxPage_staffImg" fluid onClick={props.openDetailViewer.bind(this, {page: 'team', data:"team_1_kwayera"})}/>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
          </Row>
          <Row className="parallaxSubRow2_gridRow">
            <Col md={4} className="parallax_gridCol">
              <Image src={team_2} className="ParallaxPage_staffImg" fluid onClick={props.openDetailViewer.bind(this, {page: 'team', data:"team_2_ade"})}/>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <Image src={team_3} className="ParallaxPage_staffImg" fluid onClick={props.openDetailViewer.bind(this, {page: 'team', data:"team_3_khadijah"})}/>
            </Col>
          </Row>
          <Row className="parallaxSubRow2_gridRow">
            <Col md={4} className="parallax_gridCol">
              <Image src={team_4} className="ParallaxPage_staffImg" fluid onClick={props.openDetailViewer.bind(this, {page: 'team', data:"team_4_kwasausya"})}/>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <p className="parallax_gridText">
                .
              </p>
            </Col>
            <Col md={4} className="parallax_gridCol">
              <Image src={team_5} className="ParallaxPage_staffImg" fluid onClick={props.openDetailViewer.bind(this, {page: 'team', data:"team_5_perdella"})}/>
            </Col>
          </Row>

        </Row>

        <Row className="parallaxSubRow2">

          <Row className="parallaxSubRow2_headRow">
            <h1 className="parallaxSubRow2_heading">
              Our Vision:
            </h1>
          </Row>

          <p className="parallaxSubRow2_subheading">
            is to create A special time and place where you will follow the Path to an amazing Experience
          </p>

          <Row className="parallaxSubRow2_gridRow">
            <Col md={4} className="parallax_gridCol">

            </Col>
            <Col md={4} className="parallax_gridCol">
              <NavLink to="/path">
                <p className="parallax_gridText fiveIs">
                  Inspire
                </p>
              </NavLink>
            </Col>
            <Col md={4} className="parallax_gridCol">

            </Col>
          </Row>
          <Row className="parallaxSubRow2_gridRow">
            <Col md={4} className="parallax_gridCol">
            <NavLink to="/path">
              <p className="parallax_gridText fiveIs">
                Immerse
              </p>
            </NavLink>
            </Col>
            <Col md={4} className="parallax_gridCol">

            </Col>
            <Col md={4} className="parallax_gridCol">
            <NavLink to="/path">
              <p className="parallax_gridText fiveIs">
                Invigorate
              </p>
            </NavLink>
            </Col>
          </Row>
          <Row className="parallaxSubRow2_gridRow">
            <Col md={4} className="parallax_gridCol">
            <NavLink to="/path">
              <p className="parallax_gridText fiveIs">
                Improve
              </p>
            </NavLink>
            </Col>
            <Col md={4} className="parallax_gridCol">

            </Col>
            <Col md={4} className="parallax_gridCol">
            <NavLink to="/path">
              <p className="parallax_gridText fiveIs">
                Incorporate
              </p>
            </NavLink>
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

    {
      // <Row style={style} className="parallaxRow2">
      //   <Row className="parallaxSubRow2">
      //
      //     <Row className="parallaxSubRow2_headRow">
      //         <h1 className="parallaxSubRow2_heading" >
      //           Our Mission
      //         </h1>
      //     </Row>
      //
      //     <Row className="parallaxSubRow2_gridRow">
      //       <Col md={4} className="parallax_gridCol">
      //       <p className="parallax_gridText">
      //         Soulful Joy exists to provide a unique residential experience where people who give of themselves a lot & often
      //       </p>
      //       </Col>
      //       <Col md={4} className="parallax_gridCol">
      //         <p className="parallax_gridText">
      //           .
      //           </p>
      //       </Col>
      //       <Col md={4} className="parallax_gridCol">
      //         <p className="parallax_gridText">
      //           can rejuvenate & relax; while detoxing during a 4-day long retreat in lush tropical locations.
      //         </p>
      //       </Col>
      //     </Row>
      //     <Row className="parallaxSubRow2_gridRow">
      //       <Col md={4} className="parallax_gridCol">
      //       <p className="parallax_gridText">
      //         .
      //       </p>
      //       </Col>
      //       <Col md={4} className="parallax_gridCol">
      //       <p className="parallax_gridText">
      //         .
      //       </p>
      //       </Col>
      //       <Col md={4} className="parallax_gridCol">
      //         <p className="parallax_gridText">
      //           .
      //         </p>
      //       </Col>
      //     </Row>
      //     <Row className="parallaxSubRow2_gridRow">
      //       <Col md={4} className="parallax_gridCol">
      //         <p className="parallax_gridText">
      //           .
      //         </p>
      //       </Col>
      //       <Col md={4} className="parallax_gridCol">
      //         <p className="parallax_gridText">
      //           .
      //         </p>
      //       </Col>
      //       <Col md={4} className="parallax_gridCol">
      //         <p className="parallax_gridText">
      //           .
      //         </p>
      //       </Col>
      //     </Row>
      //
      //   </Row>
      //   <Row className="parallaxSubRow2">
      //
      //     <Row className="parallaxSubRow2_headRow">
      //       <h1 className="parallaxSubRow2_heading">
      //         Team
      //       </h1>
      //     </Row>
      //
      //     <Row className="parallaxSubRow2_gridRow">
      //       <Col md={4} className="parallax_gridCol">
      //         <p className="parallax_gridText">
      //           .
      //         </p>
      //       </Col>
      //       <Col md={4} className="parallax_gridCol">
      //         <Image src={team_5} className="ParallaxPage_staffImg" fluid onClick={props.openDetailViewer.bind(this, {page: 'team', data:"team_1_kwayera"})}/>
      //       </Col>
      //       <Col md={4} className="parallax_gridCol">
      //         <p className="parallax_gridText">
      //           .
      //         </p>
      //       </Col>
      //     </Row>
      //     <Row className="parallaxSubRow2_gridRow">
      //       <Col md={4} className="parallax_gridCol">
      //         <Image src={team_2} className="ParallaxPage_staffImg" fluid onClick={props.openDetailViewer.bind(this, {page: 'team', data:"team_2_ade"})}/>
      //       </Col>
      //       <Col md={4} className="parallax_gridCol">
      //         <p className="parallax_gridText">
      //           .
      //         </p>
      //       </Col>
      //       <Col md={4} className="parallax_gridCol">
      //         <Image src={team_3} className="ParallaxPage_staffImg" fluid onClick={props.openDetailViewer.bind(this, {page: 'team', data:"team_3_khadijah"})}/>
      //       </Col>
      //     </Row>
      //     <Row className="parallaxSubRow2_gridRow">
      //       <Col md={4} className="parallax_gridCol">
      //         <Image src={team_4} className="ParallaxPage_staffImg" fluid onClick={props.openDetailViewer.bind(this, {page: 'team', data:"team_4_kwasausya"})}/>
      //       </Col>
      //       <Col md={4} className="parallax_gridCol">
      //         <p className="parallax_gridText">
      //           .
      //         </p>
      //       </Col>
      //       <Col md={4} className="parallax_gridCol">
      //         <Image src={team_5} className="ParallaxPage_staffImg" fluid onClick={props.openDetailViewer.bind(this, {page: 'team', data:"team_5_perdella"})}/>
      //       </Col>
      //     </Row>
      //
      //   </Row>
      //   <Row className="parallaxSubRow2">
      //
      //     <Row className="parallaxSubRow2_headRow">
      //       <h1 className="parallaxSubRow2_heading">
      //         Our Vision:
      //       </h1>
      //     </Row>
      //
      //     <p className="parallaxSubRow2_subheading">
      //       is to create A special time and place where you will follow the Path to an amazing Experience
      //     </p>
      //
      //     <Row className="parallaxSubRow2_gridRow">
      //       <Col md={4} className="parallax_gridCol">
      //
      //       </Col>
      //       <Col md={4} className="parallax_gridCol">
      //         <NavLink to="/path">
      //           <p className="parallax_gridText fiveIs">
      //             Inspire
      //           </p>
      //         </NavLink>
      //       </Col>
      //       <Col md={4} className="parallax_gridCol">
      //
      //       </Col>
      //     </Row>
      //     <Row className="parallaxSubRow2_gridRow">
      //       <Col md={4} className="parallax_gridCol">
      //       <NavLink to="/path">
      //         <p className="parallax_gridText fiveIs">
      //           Immerse
      //         </p>
      //       </NavLink>
      //       </Col>
      //       <Col md={4} className="parallax_gridCol">
      //
      //       </Col>
      //       <Col md={4} className="parallax_gridCol">
      //       <NavLink to="/path">
      //         <p className="parallax_gridText fiveIs">
      //           Invigorate
      //         </p>
      //       </NavLink>
      //       </Col>
      //     </Row>
      //     <Row className="parallaxSubRow2_gridRow">
      //       <Col md={4} className="parallax_gridCol">
      //       <NavLink to="/path">
      //         <p className="parallax_gridText fiveIs">
      //           Improve
      //         </p>
      //       </NavLink>
      //       </Col>
      //       <Col md={4} className="parallax_gridCol">
      //
      //       </Col>
      //       <Col md={4} className="parallax_gridCol">
      //       <NavLink to="/path">
      //         <p className="parallax_gridText fiveIs">
      //           Incorporate
      //         </p>
      //       </NavLink>
      //       </Col>
      //     </Row>
      //
      //   </Row>
      // </Row>
    }

  </div>
)

}


export default TeamPage;
