import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import MainNavigation from '../components/Navigation/MainNavigation';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import SplashMainLogo from '../assets/imgs/logo_splash_pg.png';
import ContentBgLogo from '../assets/imgs/content_bg.png';
import Wht_ico from '../assets/imgs/wht_ico.png';
import Blk_ico from '../assets/imgs/blk_ico.png';

import "./CompanyPage.css"

const RetreatPage = (props) => {

return (
  <div className="companyPage_maindiv mainDiv_events">
  <MainNavigation
  />
    <Row className="companyPageRow">
      <Col className='companyPageCol'>

        <Row className="companyPageSubRow1 desktop">

          <Col md={9} className="companyPage_topCol">
            <Row>
              <h1 className="companyPage_top_heading">
                Retreat
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
              <h1 className="companyPage_top_heading">
                Retreat
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
                <Image src={ContentBgLogo} className="content_bg_img" fluid />
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
                <Image src={ContentBgLogo} className="content_bg_img" fluid />
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
                <Image src={ContentBgLogo} className="content_bg_img" fluid />
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
                <Image src={ContentBgLogo} className="content_bg_img" fluid />
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
                <Image src={ContentBgLogo} className="content_bg_img" fluid />
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
                <Image src={ContentBgLogo} className="content_bg_img" fluid />
              </Row>
            </Col>
        </Row>
      </Col>
    </Row>

    <Row className="footerRow">
      <Col className="footerMainCol">
      <Row className="footer_topRow">
        <p className="footer_topRow_text">Stay in Touch</p>
      </Row>
        <Row className="footer_midRow">
          <Col md={3} className="footer_midCol">
            <ul className="footer_navList">
              <li className="footer_navListItem">
                <NavLink to="/home" className="navBar_link">Home</NavLink>
              </li>
              <li className="footer_navListItem">
                <NavLink to="/team" className="navBar_link">Team</NavLink>
              </li>
              <li className="footer_navListItem">
                <NavLink to="/path" className="navBar_link">The Path</NavLink>
              </li>
              <li className="footer_navListItem">
                <NavLink to="/socialMedia" className="navBar_link">Join the Joy</NavLink>
              </li>
              <li className="footer_navListItem">
                <NavLink to="/retreat" className="navBar_link">Retreat</NavLink>
              </li>
              <li className="footer_navListItem">
                <NavLink to="/contact" className="navBar_link">Contact</NavLink>
              </li>
            </ul>
          </Col>
          <Col md={6} className="footer_midCol">

          </Col>
          <Col md={3} className="footer_midCol">
            <ul className="footer_socialList">
              <li className="footer_socialListItem">
                <FontAwesomeIcon icon={faFacebookSquare} className="footerIcon"/>
              </li>
              <li className="footer_socialListItem">
                <FontAwesomeIcon icon={faTwitterSquare} className="footerIcon"/>
              </li>
              <li className="footer_socialListItem">
                <FontAwesomeIcon icon={faInstagram} className="footerIcon"/>
              </li>
              <li className="footer_socialListItem">
                <FontAwesomeIcon icon={faLinkedin} className="footerIcon"/>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="footer_copyrightRow">
          <p className="footer_copyrightRow_text"> copyright original people 10000 bc</p>
        </Row>
      </Col>
    </Row>

  </div>
)

}


export default RetreatPage;
