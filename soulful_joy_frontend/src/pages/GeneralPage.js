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

import "./CompanyPage.css"

const GeneralPage = (props) => {

return (
  <div className="companyPage_maindiv mainDiv_general">
  <MainNavigation
  />
    <Row className="companyPageRow">
      <Col className='companyPageCol'>

        <Row className="companyPageSubRow1">

          <Col md={9} className="companyPage_topCol">
            <Row>
              <h1 className="companyPage_top_heading">
                General
              </h1>
            </Row>
            <Row>
              <p className="companyPage_top_subtitle">
                Major Mango 1st Class!
              </p>
            </Row>
          </Col>
          <Col md={3} className="companyPage_topCol topCol2">
            <Image src={SplashMainLogo} className="CompanyPage_HeadLogo" fluid />
          </Col>

        </Row>


        <Row className="companyPageSubRow2">
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

        <Row className="companyPageSubRow2">
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

        <Row className="companyPageSubRow2">
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
          <p className="footer_topRow_text">Kiss mi foot(er)-back</p>
        </Row>
        <Row className="footer_midRow">
          <Col md={3} className="footer_midCol">
            <ul className="footer_navList">
              <li className="footer_navListItem">
                <NavLink to="/home" className="navBar_link">Home</NavLink>
              </li>
              <li className="footer_navListItem">
                <NavLink to="/company" className="navBar_link">Company</NavLink>
              </li>
              <li className="footer_navListItem">
                <NavLink to="/general" className="navBar_link">General</NavLink>
              </li>
              <li className="footer_navListItem">
                <NavLink to="/socialMedia" className="navBar_link">Social</NavLink>
              </li>
              <li className="footer_navListItem">
                <NavLink to="/featuredEvent" className="navBar_link">Events</NavLink>
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


export default GeneralPage;
