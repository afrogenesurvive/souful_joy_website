import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
// import MainNavigation from '../components/Navigation/MainNavigation';
// import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';


// import SplashMainLogo from '../assets/imgs/logo_splash_pg.png';
// import ContentBgLogo from '../assets/imgs/content_bg.png';
import Wht_ico from '../assets/imgs/wht_ico.png';
// import Blk_ico from '../assets/imgs/blk_ico.png';

import StyleLogo from '../assets/imgs/stylelogo.png'

import DetailViewer from '../components/DetailViewer/DetailViewer';


import "./CompanyPage.css"

const RetreatPage = (props) => {

  let detailViewerOpen = props.detailViewerOpen;
  let detailViewerData = props.detailViewerData;

return (
  <div className="companyPage_maindiv mainDiv_retreat">

  {detailViewerOpen === true &&
     detailViewerData.page === 'retreat' && (
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
              <h1 className="companyPage_top_heading retreat_text">
                The Experience
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
              <h1 className="companyPage_top_heading retreat_text">
                The Experience
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
          <Row className="grid_topRow">
            <h1 className="companyPage_top_heading">
              Introduction
            </h1>
            <p className="content_section_grid_text">
              Our Purpose
            </p>
          </Row>

        <Row className="grid_mainRow">
          <Col className="companyPage_sectionCol">
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
                <p className="content_section_grid_text">
                  The Path to this amazing Experience is based on Di I Dem
                </p>

              </Col>
              <Col md={4} className="content_section_grid_cell">

              </Col>
              <Col md={4} className="content_section_grid_cell">

              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                Inspire – Immerse – Invigorate – Improve - Incorporate
              </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">

              </Col>
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                .
              </p>
              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">

              </Col>
              <Col md={4} className="content_section_grid_cell">

              </Col>
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                Join us this October 8-11, 2020 in Negril Jamaica where we will take you on the Path to this amazing Experience.
              </p>
              </Col>
            </Row>

          </Col>
            <Col className="main_content_section_background">
              <Row className="content_section_bg_row">
                <Image src={StyleLogo} className="content_bg_img" fluid />
              </Row>
            </Col>
          </Row>
        </Row>
        <Row className="companyPageSubRow2 desktop">
          <Row className="grid_topRow">
            <h1 className="companyPage_top_heading">
              Itinerary
            </h1>
          </Row>

        <Row className="grid_mainRow">
          <Col className="companyPage_sectionCol">
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
                <p className="content_section_grid_text">
                -Travel to Jamaica guide
                -4 day retreat outline
                -What to bring
                -Rules for the detox
                -Other activities
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
              <p className="content_section_grid_text">
              -Packages -- you will not be hungry!
                --Beginner- Vegan food
                --Intermediate- Live food
                --Advanced- Juice cleanse( Liquids only)
              </p>
              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">

              </Col>
              <Col md={4} className="content_section_grid_cell">
              <Button variant="outline-light" size="lg" className="">
                Book Now
              </Button>
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
              Location
            </h1>
          </Row>

        <Row className="grid_mainRow">
          <Col className="companyPage_sectionCol">
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
                <p className="content_section_grid_text">
                  Negril TreeHouse, Negril Jamaica
                </p>

              </Col>
              <Col md={4} className="content_section_grid_cell">

              </Col>
              <Col md={4} className="content_section_grid_cell">

              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
              -Booking options
                  --Single/ Double Occupancy
              </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">

              </Col>
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                Video Link from Gail the owner
              </p>
              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
              <Button variant="outline-light" size="lg" className="">
                Location Website
              </Button>
              </Col>
              <Col md={4} className="content_section_grid_cell">

              </Col>
              <Col md={4} className="content_section_grid_cell">
              <Button variant="outline-light" size="lg" className="">
                Book Now
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
            <h3 className="content_section_grid_text">
              Location Images
            </h3>
          </Row>

        <Row className="grid_mainRow">
          <Col className="companyPage_sectionCol">
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
                <Image src={Wht_ico} className="facilitator_img" fluid />

              </Col>
              <Col md={4} className="content_section_grid_cell">
              <Image src={Wht_ico} className="facilitator_img" fluid />
              </Col>
              <Col md={4} className="content_section_grid_cell">
                <Image src={Wht_ico} className="facilitator_img" fluid />
              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
              <Image src={Wht_ico} className="facilitator_img" fluid />
              </Col>
              <Col md={4} className="content_section_grid_cell">
              <Image src={Wht_ico} className="facilitator_img" fluid />
              </Col>
              <Col md={4} className="content_section_grid_cell">
              <Image src={Wht_ico} className="facilitator_img" fluid />
              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
              <Image src={Wht_ico} className="facilitator_img" fluid />
              </Col>
              <Col md={4} className="content_section_grid_cell">
              <Image src={Wht_ico} className="facilitator_img" fluid />
              </Col>
              <Col md={4} className="content_section_grid_cell">
              <Image src={Wht_ico} className="facilitator_img" fluid />
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
            Facilitators
          </h1>
        </Row>

        <Row className="grid_mainRow">
          <Col className="companyPage_sectionCol">
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
              <Image src={Wht_ico} className="facilitator_img" fluid />
              <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViwer.bind(this, {page: 'retreat', data:"kwayera"})}>
                <p className="cell_image_caption">
                  Kwayera
                </p>
              </Button>
              </Col>
              <Col md={4} className="content_section_grid_cell">
                <Image src={Wht_ico} className="facilitator_img" fluid />
                <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViwer.bind(this, {page: 'retreat', data:"kwayera"})}>
                  <p className="cell_image_caption">
                    Kwayera
                  </p>
                </Button>

              </Col>
              <Col md={4} className="content_section_grid_cell">
              <Image src={Wht_ico} className="facilitator_img" fluid />
              <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViwer.bind(this, {page: 'retreat', data:"kwayera"})}>
                <p className="cell_image_caption">
                  Kwayera
                </p>
              </Button>
              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
                <Image src={Wht_ico} className="facilitator_img" fluid />
                <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViwer.bind(this, {page: 'retreat', data:"khadijah"})}>
                  <p className="cell_image_caption">
                    Khadijah
                  </p>
                </Button>
              </Col>
              <Col md={4} className="content_section_grid_cell">
              <Image src={Wht_ico} className="facilitator_img" fluid />
              <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViwer.bind(this, {page: 'retreat', data:"kwayera"})}>
                <p className="cell_image_caption">
                  Kwayera
                </p>
              </Button>
              </Col>
              <Col md={4} className="content_section_grid_cell">
                <Image src={Wht_ico} className="facilitator_img" fluid />
                <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViwer.bind(this, {page: 'retreat', data:"ade"})}>
                  <p className="cell_image_caption">
                    Ade
                  </p>
                </Button>
              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
                <Image src={Wht_ico} className="facilitator_img" fluid />
                <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViwer.bind(this, {page: 'retreat', data:"kwasa"})}>
                  <p className="cell_image_caption">
                    Kwasa
                  </p>
                </Button>
              </Col>
              <Col md={4} className="content_section_grid_cell">
              <Image src={Wht_ico} className="facilitator_img" fluid />
              <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViwer.bind(this, {page: 'retreat', data:"kwayera"})}>
                <p className="cell_image_caption">
                  Kwayera
                </p>
              </Button>
              </Col>
              <Col md={4} className="content_section_grid_cell">
                <Image src={Wht_ico} className="facilitator_img" fluid />
                <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViwer.bind(this, {page: 'retreat', data:"perdella"})}>
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


        <Row className="companyPageSubRow2 mobile">
          <Col className="companyPage_sectionCol">

            <Row className="companyPage_section_row">
              <Col sm={12} className="content_section_grid_cell splinterCell">

              <h1 className="companyPage_top_heading">
                Introduction
              </h1>
              <p className="content_section_grid_text">
                Our Purpose
              </p>
              </Col>
            </Row>

            <Row className="companyPage_section_row">
              <Col sm={12} className="content_section_grid_cell splinterCell">
              <p className="content_section_grid_text">
              Soulful Joy began as a solution in response to the ever-increasing levels
              of stress that adults are experiencing every day.
              Several of our friends who have been in the alternative wellness field for over 40 years each in various ways came together and decided to offer a “relax and rejuvenate” while you detox retreat.
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
                  The Path to this amazing Experience is based on Di I Dem
                </p>

              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
                <p className="content_section_grid_text">
                  Inspire – Immerse – Invigorate – Improve - Incorporate
                </p>

              </Col>
              <Col sm={6} className="content_section_grid_cell">

              </Col>
            </Row>

            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">

              </Col>
              <Col sm={6} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                Join us this October 8-11, 2020 in Negril Jamaica where we will take you on the Path to this amazing Experience
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
                Itinerary
              </h1>
              </Col>
            </Row>

          </Col>

        </Row>

        <Row className="companyPageSubRow2 mobile">
          <Col className="companyPage_sectionCol">

            <Row className="companyPage_section_row">
              <Col sm={12} className="content_section_grid_cell splinterCell">

              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
                <p className="content_section_grid_text">
                -Travel to Jamaica guide
                -4 day retreat outline
                -What to bring
                -Rules for the detox
                -Other activities
                </p>

              </Col>
              <Col sm={6} className="content_section_grid_cell">
              <p className="content_section_grid_text">
              -Packages -- you will not be hungry!
              --Beginner- Vegan food
              --Intermediate- Live food
              --Advanced- Juice cleanse( Liquids only)
              </p>
              </Col>
            </Row>

            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
              <Button variant="outline-light" size="lg" className="">
                Book Now
              </Button>

              </Col>
              <Col sm={6} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                x
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
                Location
              </h1>
              <p className="content_section_grid_text">
                Negril TreeHouse, Negril Jamaica
              </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="companyPageSubRow2 mobile">
          <Col className="companyPage_sectionCol">

            <Row className="companyPage_section_row">
              <Col sm={12} className="content_section_grid_cell splinterCell">


              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
                <p className="content_section_grid_text">
                  -Booking options
	                 --Single/ Double Occupancy
                </p>

              </Col>
              <Col sm={6} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                - Video Link from Gail the owner
              </p>
              </Col>
            </Row>

            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
              <Button variant="outline-light" size="lg" className="">
                Website
              </Button>
              </Col>
              <Col sm={6} className="content_section_grid_cell">
              <Button variant="outline-light" size="lg" className="">
                Book Now
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
              <Col sm={6} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                -Pictures and information about the space
              </p>
              </Col>
              <Col sm={6} className="content_section_grid_cell">
              <Image src={Wht_ico} className="facilitator_img" fluid />
              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
                <Image src={Wht_ico} className="facilitator_img" fluid />

              </Col>
              <Col sm={6} className="content_section_grid_cell">
              <Image src={Wht_ico} className="facilitator_img" fluid />
              </Col>
            </Row>

            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
              <Image src={Wht_ico} className="facilitator_img" fluid />
              </Col>
              <Col sm={6} className="content_section_grid_cell">
              <Image src={Wht_ico} className="facilitator_img" fluid />
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
                Facilitators
              </h1>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="companyPageSubRow2 mobile">
          <Col className="companyPage_sectionCol">

            <Row className="companyPage_section_row">
              <Col sm={12} className="content_section_grid_cell splinterCell">
              <Image src={Wht_ico} className="facilitator_img" fluid />
              <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViwer.bind(this, {page: 'retreat', data:"facilitator_a"})}>
                <p className="cell_image_caption">
                  facilitator_a
                </p>
              </Button>
              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
                <Image src={Wht_ico} className="facilitator_img" fluid />
                <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViwer.bind(this, {page: 'retreat', data:"facilitator_b"})}>
                  <p className="cell_image_caption">
                    facilitator_b
                  </p>
                </Button>
              </Col>
              <Col sm={6} className="content_section_grid_cell">
                <Image src={Wht_ico} className="facilitator_img" fluid />
                <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViwer.bind(this, {page: 'retreat', data:"facilitator_c"})}>
                  <p className="cell_image_caption">
                    facilitator_c
                  </p>
                </Button>
              </Col>
            </Row>

            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
              <Image src={Wht_ico} className="facilitator_img" fluid />
              <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViwer.bind(this, {page: 'retreat', data:"facilitator_d"})}>
                <p className="cell_image_caption">
                  facilitator_d
                </p>
              </Button>
              </Col>
              <Col sm={6} className="content_section_grid_cell">
              <Image src={Wht_ico} className="facilitator_img" fluid />
              <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViwer.bind(this, {page: 'retreat', data:"facilitator_e"})}>
                <p className="cell_image_caption">
                  facilitator_e
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
              <Image src={Wht_ico} className="facilitator_img" fluid />
              <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViwer.bind(this, {page: 'retreat', data:"facilitator_a"})}>
                <p className="cell_image_caption">
                  facilitator_a
                </p>
              </Button>
              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
                <Image src={Wht_ico} className="facilitator_img" fluid />
                <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViwer.bind(this, {page: 'retreat', data:"facilitator_b"})}>
                  <p className="cell_image_caption">
                    facilitator_b
                  </p>
                </Button>
              </Col>
              <Col sm={6} className="content_section_grid_cell">
                <Image src={Wht_ico} className="facilitator_img" fluid />
                <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViwer.bind(this, {page: 'retreat', data:"facilitator_c"})}>
                  <p className="cell_image_caption">
                    facilitator_c
                  </p>
                </Button>
              </Col>
            </Row>

            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
              <Image src={Wht_ico} className="facilitator_img" fluid />
              <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViwer.bind(this, {page: 'retreat', data:"facilitator_d"})}>
                <p className="cell_image_caption">
                  facilitator_d
                </p>
              </Button>
              </Col>
              <Col sm={6} className="content_section_grid_cell">
              <Image src={Wht_ico} className="facilitator_img" fluid />
              <Button variant="outline-light" className="cell_team_btn" onClick={props.openDetailViwer.bind(this, {page: 'retreat', data:"facilitator_e"})}>
                <p className="cell_image_caption">
                  facilitator_e
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
                <FontAwesomeIcon icon={faYoutube} className="footerIcon"/>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="footer_copyrightRow">
          <p className="footer_copyrightRow_text"> family@SoulfulJoy.com | Planet Earth | </p>
        </Row>
      </Col>
    </Row>

  </div>
)

}


export default RetreatPage;
