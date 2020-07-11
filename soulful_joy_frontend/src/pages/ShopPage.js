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

const ShopPage = (props) => {

  let location = props.location.pathname;
return (
  <div className="companyPage_maindiv mainDiv_shop">
  <MainNavigation
    currentPage={location}
  />

    <Row className="companyPageRow">
      <Col className='companyPageCol'>

        <Row className="companyPageSubRow1 desktop">

          <Col md={9} className="companyPage_topCol">
            <Row>
              <h1 className="companyPage_top_heading shop_text">
                Shop
              </h1>
            </Row>
            <Row>
              <p className="companyPage_top_subtitle">
                ...
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
              <h1 className="companyPage_top_heading shop_text">
                Shop
              </h1>
            </Row>
            <Row>
              <p className="companyPage_top_subtitle">
                ...
              </p>
            </Row>
          </Col>
          <Col sm={5} className="companyPage_topCol topCol2">
            <Image src={Wht_ico} className="CompanyPage_HeadLogo" fluid />
          </Col>

        </Row>


        <Row className="companyPageSubRow2 desktop">
          <Col className="companyPage_sectionCol">
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
                <p className="content_section_grid_text">
                  1.a: Lorem Ipsum - это текст-"
                </p>

              </Col>
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                1.b: Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
              </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">
                <p className="content_section_grid_text">
                  1.c: Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
                </p>
              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                2.a:Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
              </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                2.b: Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
              </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                2.c: Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
              </p>
              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                3.a: Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
              </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                3.b: Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
              </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                3.c: Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
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
                <p className="content_section_grid_text">
                  1.a: Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
                </p>

              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
                <p className="content_section_grid_text">
                  2.a: Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
                </p>

              </Col>
              <Col sm={6} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                2.b: Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
              </p>
              </Col>
            </Row>

            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                3.a: Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
              </p>
              </Col>
              <Col sm={6} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                3.b: Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
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
                <p className="content_section_grid_text">
                  1.a:
                </p>

              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
                <p className="content_section_grid_text">
                  2.a:
                </p>

              </Col>
              <Col sm={6} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                2.b:
              </p>
              </Col>
            </Row>

            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                3.a:
              </p>
              </Col>
              <Col sm={6} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                3.b:
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
                <p className="content_section_grid_text">
                  1.a:
                </p>

              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
                <p className="content_section_grid_text">
                  2.a:
                </p>

              </Col>
              <Col sm={6} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                2.b:
              </p>
              </Col>
            </Row>

            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                3.a:
              </p>
              </Col>
              <Col sm={6} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                3.b:
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

        <Row className="companyPageSubRow2 desktop">
          <Col className="companyPage_sectionCol">
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
                <p className="content_section_grid_text">
                  1.a:
                </p>

              </Col>
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                1.b: Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
              </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">
                <p className="content_section_grid_text">
                  1.c:
                </p>
              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                2.a:Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
              </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                2.b:
              </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                2.c:
              </p>
              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                3.a:
              </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                3.b:
              </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                3.c: Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
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

        <Row className="companyPageSubRow2 desktop">
          <Col className="companyPage_sectionCol">
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
                <p className="content_section_grid_text">
                  1.a:
                </p>

              </Col>
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                1.b: Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
              </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">
                <p className="content_section_grid_text">
                  1.c:
                </p>
              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                2.a:Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
              </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                2.b:
              </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                2.c:
              </p>
              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                3.a:
              </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                3.b:
              </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                3.c: Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
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

  </div>
)

}


export default ShopPage;
