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


import "./CompanyPage.css"

const SocialMediaPage = (props) => {
  let location = props.location.pathname;
  // console.log(location);

return (
  <div className="companyPage_maindiv mainDiv_socialMedia">
  <MainNavigation
    currentPage={location}
  />

    <Row className="companyPageRow">
      <Col className='companyPageCol'>

        <Row className="companyPageSubRow1 desktop">

          <Col md={9} className="companyPage_topCol">
            <Row>
              <h1 className="companyPage_top_heading socialMedia_text">
                Join the Joy
              </h1>
            </Row>
            <Row>
              <p className="companyPage_top_subtitle">
                social media
              </p>
            </Row>
          </Col>
          <Col md={3} className="companyPage_topCol topCol2">
            <Image src={Wht_ico} className="CompanyPage_HeadLogo" fluid />
          </Col>

        </Row>
        <Row className="companyPageSubRow1 mobile">

          <Col sm={5} className="companyPage_topCol">
            <Row>
              <h1 className="companyPage_top_heading socialMedia_text">
                Join the Joy
              </h1>
            </Row>
            <Row>
              <p className="companyPage_top_subtitle">
                social media
              </p>
            </Row>
          </Col>
          <Col sm={5} className="companyPage_topCol topCol2">
            <Image src={Wht_ico} className="CompanyPage_HeadLogo" fluid />
          </Col>

        </Row>


        <Row className="companyPageSubRow2 desktop">
          <Row className="grid_topRow">
            <h1 className="companyPage_top_heading">
              Social
            </h1>
          </Row>

        <Row className="grid_mainRow">
          <Col className="companyPage_sectionCol">
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
              <a href="https://www.facebook.com/SoulfulJoy" target="_blank" rel="noopener noreferrer">
                <p className="content_section_grid_text">
                  facebook
                </p>
                </a>
              </Col>
              <Col md={4} className="content_section_grid_cell">

              </Col>
              <Col md={4} className="content_section_grid_cell">
              <a href="" target="_blank" rel="noopener noreferrer">
              <p className="content_section_grid_text">
                youtube
              </p>
              </a>
              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
              <a href="https://www.linkedin.com/company/soulfuljoy/" target="_blank" rel="noopener noreferrer">
              <p className="content_section_grid_text">
                linkedin
              </p>
              </a>
              </Col>
              <Col md={4} className="content_section_grid_cell">

              </Col>
              <Col md={4} className="content_section_grid_cell">
              <a href="https://www.instagram.com/soulfuljoyjamaica" target="_blank" rel="noopener noreferrer">
              <p className="content_section_grid_text">
                Instagram
              </p>
              </a>
              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">

              </Col>
              <Col md={4} className="content_section_grid_cell">

              </Col>
              <Col md={4} className="content_section_grid_cell">

              </Col>
            </Row>

          </Col>
            <Col className="main_content_section_background">
              <Row className="content_section_bg_row">
                <Image src={Wht_ico} className="content_bg_img" fluid />
              </Row>
            </Col>
          </Row>
        </Row>

        <Row className="companyPageSubRow2 desktop">
          <Row className="grid_topRow">
            <h1 className="companyPage_top_heading">
              Affiliates
            </h1>
          </Row>

        <Row className="grid_mainRow">
          <Col className="companyPage_sectionCol">
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
                <p className="content_section_grid_text">
                  affiliate_a
                </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                affiliate_b
              </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                affiliate_v
              </p>
              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                affiliate_s
              </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                affiliate_p
              </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                affiliate_x
              </p>
              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                affiliate_k
              </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">

              </Col>
              <Col md={4} className="content_section_grid_cell">

              </Col>
            </Row>

          </Col>
            <Col className="main_content_section_background">
              <Row className="content_section_bg_row">
                <Image src={Wht_ico} className="content_bg_img" fluid />
              </Row>
            </Col>
          </Row>
        </Row>

        <Row className="companyPageSubRow2 desktop">
          <Row className="grid_topRow">
            <h1 className="companyPage_top_heading">
              Sponsors
            </h1>
          </Row>

        <Row className="grid_mainRow">
          <Col className="companyPage_sectionCol">
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
                <p className="content_section_grid_text">
                  sponsor_a
                </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                sponsor_b
              </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                sponsor_v
              </p>
              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                sponsor_s
              </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                sponsor_p
              </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                sponsor_x
              </p>
              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                sponsor_k
              </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">

              </Col>
              <Col md={4} className="content_section_grid_cell">

              </Col>
            </Row>

          </Col>
            <Col className="main_content_section_background">
              <Row className="content_section_bg_row">
                <Image src={Wht_ico} className="content_bg_img" fluid />
              </Row>
            </Col>
          </Row>
        </Row>

        <Row className="companyPageSubRow2 mobile">
          <Col className="companyPage_sectionCol">

            <Row className="companyPage_section_row">
              <Col sm={12} className="content_section_grid_cell splinterCell">
                <p className="content_section_grid_text">
                  linkedin
                </p>

              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
                <p className="content_section_grid_text">
                  Instagram
                </p>

              </Col>
              <Col sm={6} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                Facebook
              </p>
              </Col>
            </Row>

            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">

              </Col>
              <Col sm={6} className="content_section_grid_cell">

              </Col>
            </Row>

          </Col>
            <Col className="main_content_section_background">
              <Row className="content_section_bg_row">
                <Image src={Wht_ico} className="content_bg_img" fluid />
              </Row>
            </Col>
        </Row>

        <Row className="companyPageSubRow2 mobile">
          <Col className="companyPage_sectionCol">
            <Row className="companyPage_section_row">
              <Col sm={12} className="content_section_grid_cell splinterCell">
              <h1 className="companyPage_top_heading">
                Affiliates
              </h1>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="companyPageSubRow2 mobile">
          <Col className="companyPage_sectionCol">

            <Row className="companyPage_section_row">
              <Col sm={12} className="content_section_grid_cell splinterCell">
                <p className="content_section_grid_text">
                  affiliate_a
                </p>

              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
                <p className="content_section_grid_text">
                  affiliate_b
                </p>

              </Col>
              <Col sm={6} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                affiliate_c
              </p>
              </Col>
            </Row>

            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                affiliate_d
              </p>
              </Col>
              <Col sm={6} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                affiliate_e
              </p>
              </Col>
            </Row>

          </Col>
            <Col className="main_content_section_background">
              <Row className="content_section_bg_row">
                <Image src={Wht_ico} className="content_bg_img" fluid />
              </Row>
            </Col>
        </Row>
        <Row className="companyPageSubRow2 mobile">
          <Col className="companyPage_sectionCol">
            <Row className="companyPage_section_row">
              <Col sm={12} className="content_section_grid_cell splinterCell">
              <h1 className="companyPage_top_heading">
                Sponsors
              </h1>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="companyPageSubRow2 mobile">
          <Col className="companyPage_sectionCol">

            <Row className="companyPage_section_row">
              <Col sm={12} className="content_section_grid_cell splinterCell">
                <p className="content_section_grid_text">
                  sponsor_a
                </p>

              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
                <p className="content_section_grid_text">
                  sponsor_b
                </p>

              </Col>
              <Col sm={6} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                sponsor_c
              </p>
              </Col>
            </Row>

            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                sponsor_d
              </p>
              </Col>
              <Col sm={6} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                sponsor_e
              </p>
              </Col>
            </Row>

          </Col>
            <Col className="main_content_section_background">
              <Row className="content_section_bg_row">
                <Image src={Wht_ico} className="content_bg_img" fluid />
              </Row>
            </Col>
        </Row>

      </Col>
    </Row>

    <Row className="footerRow">
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

  </div>
)

}


export default SocialMediaPage;
