import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
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

import Wht_ico from '../assets/imgs/wht_ico.png';
// import Blk_ico from '../assets/imgs/blk_ico.png';
// import SplashMainLogo from '../assets/imgs/logo_splash_pg.png';
// import ContentBgLogo from '../assets/imgs/content_bg.png';
import TeamImage1 from '../assets/imgs/test4.png'

import DetailViewer from '../components/DetailViewer/DetailViewer';


import "./CompanyPage.css"

const TeamPage = (props) => {

  let location = props.location.pathname;
  // console.log(location);

  let detailViewerOpen = props.detailViewerOpen;
  let detailViewerData = props.detailViewerData;

return (

  <div className="companyPage_maindiv mainDiv_team">
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
    <Row className="companyPageRow">
      <Col className='companyPageCol'>

        <Row className="companyPageSubRow1 desktop">

          <Col md={9} className="companyPage_topCol">
            <Row>
              <h1 className="companyPage_top_heading team_text">
                Our Team
              </h1>
            </Row>
            <Row>
              <p className="companyPage_top_subtitle">
                Meet The Soulful Joy Family
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
              <h1 className="companyPage_top_heading team_text">
                Our Team
              </h1>
            </Row>
            <Row>
              <p className="companyPage_top_subtitle">
                Meet The Soulful Joy Family
              </p>
            </Row>
          </Col>
          <Col sm={5} className="companyPage_topCol topCol2">
            <Image src={Wht_ico} className="CompanyPage_HeadLogo" fluid />
          </Col>

        </Row>

        {
        //   <p className="content_section_grid_text">
        //   3.c: Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
        // </p>
        // <Button variant="outline-warning" onClick={props.openDetailViewer.bind(this, "...it's free real estate...")}>more</Button>{' '}
        }

        <Row className="companyPageSubRow2 desktop">
          <Row className="grid_topRow">
            <h1 className="companyPage_top_heading">
              Our Mission
            </h1>
          </Row>

        <Row className="grid_mainRow">
          <Col className="companyPage_sectionCol">
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
              Soulful Joy exists to provide a unique residential experience where people who give of themselves a lot & often can rejuvenate & relax; while detoxing during a 4-day long retreat in lush tropical locations.
              </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">

              </Col>
              <Col md={4} className="content_section_grid_cell">

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
            Team
          </h1>
        </Row>

        <Row className="grid_mainRow">
          <Col className="companyPage_sectionCol">
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">

              </Col>
              <Col md={4} className="content_section_grid_cell">
                <Image src={TeamImage1} className="content_section_grid_cell_img" fluid />
                <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViewer.bind(this, {page: 'team', data:"kwayera"})}>
                  <p className="cell_image_caption">
                    Kwayera
                  </p>
                </Button>

              </Col>
              <Col md={4} className="content_section_grid_cell">

              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
                <Image src={TeamImage1} className="content_section_grid_cell_img" fluid />
                <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViewer.bind(this, {page: 'team', data:"khadijah"})}>
                  <p className="cell_image_caption">
                    Khadijah
                  </p>
                </Button>
              </Col>
              <Col md={4} className="content_section_grid_cell">

              </Col>
              <Col md={4} className="content_section_grid_cell">
                <Image src={TeamImage1} className="content_section_grid_cell_img" fluid />
                <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViewer.bind(this, {page: 'team', data:"ade"})}>
                  <p className="cell_image_caption">
                    Ade
                  </p>
                </Button>
              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
                <Image src={TeamImage1} className="content_section_grid_cell_img" fluid />
                <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViewer.bind(this, {page: 'team', data:"kwasa"})}>
                  <p className="cell_image_caption">
                    Kwasa
                  </p>
                </Button>
              </Col>
              <Col md={4} className="content_section_grid_cell">

              </Col>
              <Col md={4} className="content_section_grid_cell">
                <Image src={TeamImage1} className="content_section_grid_cell_img" fluid />
                <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViewer.bind(this, {page: 'team', data:"perdella"})}>
                  <p className="cell_image_caption">
                    Perdella
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

        <Row className="companyPageSubRow2 desktop">
          <Row className="grid_topRow">
          <h1 className="companyPage_top_heading">
            Our Vision
          </h1>
          <p className="content_section_grid_text">
            is to create a special time and place where you will follow the Path to an amazing Experience
          </p>
          </Row>

          <Row className="grid_mainRow">

          <Col className="companyPage_sectionCol">
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">



              </Col>
              <Col md={4} className="content_section_grid_cell">
                <NavLink to="/path" className="">
                <p className="content_section_grid_text is">
                  Inspire
                </p>
                </NavLink>

              </Col>
              <Col md={4} className="content_section_grid_cell">

              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
              <NavLink to="/path" className="">
              <p className="content_section_grid_text is">
                Invigorate
              </p>
              </NavLink>
              </Col>
              <Col md={4} className="content_section_grid_cell">

              </Col>
              <Col md={4} className="content_section_grid_cell">
              <NavLink to="/path" className="">
              <p className="content_section_grid_text is">
                Immerse
              </p>
              </NavLink>
              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
              <NavLink to="/path" className="">
              <p className="content_section_grid_text is">
                Improve
              </p>
              </NavLink>
              </Col>
              <Col md={4} className="content_section_grid_cell">

              </Col>
              <Col md={4} className="content_section_grid_cell">
              <NavLink to="/path" className="">
              <p className="content_section_grid_text is">
                Incorporate
              </p>
              </NavLink>
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
                Our Mission
              </h1>

              </Col>
            </Row>

            <Row className="companyPage_section_row">
              <Col sm={12} className="content_section_grid_cell splinterCell">
              <p className="content_section_grid_text">
                Soulful Joy exists to provide a unique residential experience where people who give of themselves a lot & often can rejuvenate & relax; while detoxing during a 4-day long retreat in lush tropical locations.
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
              <p className="cell_image_caption">
                Team
              </p>
            </Col>
          </Row>

            <Row className="companyPage_section_row">
              <Col sm={12} className="content_section_grid_cell splinterCell">
              <Image src={TeamImage1} className="content_section_grid_cell_img" fluid />
              <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViewer.bind(this, {page: 'team', data:"kwayera"})}>
                <p className="cell_image_caption">
                  Kwayera
                </p>
              </Button>
              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
                <Image src={TeamImage1} className="content_section_grid_cell_img" fluid />
                <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViewer.bind(this, {page: 'team', data:"khadijah"})}>
                  <p className="cell_image_caption">
                    Khadijah
                  </p>
                </Button>
              </Col>
              <Col sm={6} className="content_section_grid_cell">
                <Image src={TeamImage1} className="content_section_grid_cell_img" fluid />
                <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViewer.bind(this, {page: 'team', data:"ade"})}>
                  <p className="cell_image_caption">
                    Ade
                  </p>
                </Button>
              </Col>
            </Row>

            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
              <Image src={TeamImage1} className="content_section_grid_cell_img" fluid />
              <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViewer.bind(this, {page: 'team', data:"kwasa"})}>
                <p className="cell_image_caption">
                  Kwasa
                </p>
              </Button>
              </Col>
              <Col sm={6} className="content_section_grid_cell">
              <Image src={TeamImage1} className="content_section_grid_cell_img" fluid />
              <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViewer.bind(this, {page: 'team', data:"perdella"})}>
                <p className="cell_image_caption">
                  Perdella
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

        <Row className="companyPageSubRow2 mobile">
          <Col className="companyPage_sectionCol">

            <Row className="companyPage_section_row">
              <Col sm={12} className="content_section_grid_cell splinterCell">

              <h1 className="companyPage_top_heading">
                Our Vision
              </h1>

              </Col>
            </Row>

            <Row className="companyPage_section_row">
              <Col sm={12} className="content_section_grid_cell splinterCell">
              <p className="content_section_grid_text">
                is to create a special time and place where you will follow the Path to an amazing Experience
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
              <NavLink to="/path" className="navBar_link">
              <p className="content_section_grid_text is">
                Inspire
              </p>
              </NavLink>

              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
              <NavLink to="/path" className="navBar_link">
              <p className="content_section_grid_text is">
                Invigorate
              </p>
              </NavLink>

              </Col>
              <Col sm={6} className="content_section_grid_cell">
              <NavLink to="/path" className="navBar_link">
              <p className="content_section_grid_text is">
                Immersed
              </p>
              </NavLink>
              </Col>
            </Row>

            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
              <NavLink to="/path" className="navBar_link">
              <p className="content_section_grid_text is">
                Improved
              </p>
              </NavLink>
              </Col>
              <Col sm={6} className="content_section_grid_cell">
              <NavLink to="/path" className="navBar_link">
              <p className="content_section_grid_text is">
                Incorporate
              </p>
              </NavLink>
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


export default TeamPage;
