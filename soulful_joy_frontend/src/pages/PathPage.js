import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import MainNavigation from '../components/Navigation/MainNavigation';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import DetailViewer from '../components/DetailViewer/DetailViewer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import SplashMainLogo from '../assets/imgs/logo_splash_pg.png';
import ContentBgLogo from '../assets/imgs/content_bg.png';
import Wht_ico from '../assets/imgs/wht_ico.png';
import Blk_ico from '../assets/imgs/blk_ico.png';

import "./CompanyPage.css"

const PathPage = (props) => {

  let detailViewerOpen = props.detailViewerOpen;
  let detailViewerData = props.detailViewerData;

return (
  <div className="companyPage_maindiv mainDiv_path">
  <MainNavigation
  />

  {detailViewerOpen === true &&
    detailViewerData.page === 'path' && (
    <DetailViewer
      data={detailViewerData}
      closeDetailViewer={props.closeDetailViewer}
    />
  )}

    <Row className="companyPageRow">
      <Col className='companyPageCol'>

        <Row className="companyPageSubRow1 desktop">

          <Col md={9} className="companyPage_topCol">
            <Row>
              <h1 className="companyPage_top_heading path_text">
                The Path
              </h1>
            </Row>
            <Row>
              <p className="companyPage_top_subtitle">
                We developed a 5 point system focused on
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
              <h1 className="companyPage_top_heading path_text">
                The Path
              </h1>
            </Row>
            <Row>
              <p className="companyPage_top_subtitle">
                We developed a 5 point system focused on
              </p>
            </Row>
          </Col>
          <Col sm={5} className="companyPage_topCol topCol2">
            <Image src={Wht_ico} className="CompanyPage_HeadLogo" fluid />
          </Col>

        </Row>



        <Row className="companyPageSubRow2 desktop">
        <Row className="grid_topRow">
        <p className="content_section_grid_text marginText">
          Our Research has shown that people don’t want to experience a detox or cleanse alone, nor do
          they want to be in an uninspiring environment.
          As a result, we came together and created a high-quality experience, reasonably priced,
          promising an unforgettable experience within an awe-inspiring Environment.
        </p>
        </Row>

        <Row className="grid_mainRow">
          <Col className="companyPage_sectionCol">
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">

              </Col>
              <Col md={4} className="content_section_grid_cell">
              <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViwer.bind(this, {page: 'path', data:"inspire"})}>
                <p className="content_section_grid_text is">
                  Inspire
                </p>
              </Button>
              </Col>
              <Col md={4} className="content_section_grid_cell">

              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
              <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViwer.bind(this, {page: 'path', data:"invigorate"})}>
              <p className="content_section_grid_text is">
                Invigorate
              </p>
              </Button>
              </Col>
              <Col md={4} className="content_section_grid_cell">

              </Col>
              <Col md={4} className="content_section_grid_cell">
              <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViwer.bind(this, {page: 'path', data:"immerse"})}>
              <p className="content_section_grid_text is">
                Immersed
              </p>
              </Button>
              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
              <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViwer.bind(this, {page: 'path', data:"improve"})}>
              <p className="content_section_grid_text is">
                Improved
              </p>
              </Button>
              </Col>
              <Col md={4} className="content_section_grid_cell">

              </Col>
              <Col md={4} className="content_section_grid_cell">
              <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViwer.bind(this, {page: 'path', data:"incorporate"})}>
              <p className="content_section_grid_text is">
                Incorporate
              </p>
              </Button>
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

              <h1 className="companyPage_top_heading">
                The Path
              </h1>

              </Col>
            </Row>

            <Row className="companyPage_section_row">
              <Col sm={12} className="content_section_grid_cell splinterCell">
              <p className="content_section_grid_text">
              Our Research has shown that people don’t want to experience a detox or cleanse alone, nor do
              they want to be in an uninspiring environment.
              As a result, we came together and created a high-quality experience, reasonably priced,
              promising an unforgettable experience within an awe-inspiring Environment.
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
              <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViwer.bind(this, {page: 'path', data:"inspire"})}>
              <p className="content_section_grid_text is">
                Inspire
              </p>
              </Button>

              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
              <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViwer.bind(this, {page: 'path', data:"invigorate"})}>
              <p className="content_section_grid_text is">
                Invigorate
              </p>
              </Button>

              </Col>
              <Col sm={6} className="content_section_grid_cell">
              <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViwer.bind(this, {page: 'path', data:"immerse"})}>
              <p className="content_section_grid_text is">
                Immersed
              </p>
              </Button>
              </Col>
            </Row>

            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
              <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViwer.bind(this, {page: 'path', data:"imporve"})}>
              <p className="content_section_grid_text is">
                Improved
              </p>
              </Button>
              </Col>
              <Col sm={6} className="content_section_grid_cell">
              <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViwer.bind(this, {page: 'path', data:"incorporate"})}>
              <p className="content_section_grid_text is">
                Incorporate
              </p>
              </Button>
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
        <NavLink to="/content" className="navBar_link">
          <p className="footer_topRow_text">Stay in touch</p>
        </NavLink>
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
              <li className="footer_socialListItem">
                <FontAwesomeIcon icon={faEnvelope} className="footerIcon"/>
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


export default PathPage;
