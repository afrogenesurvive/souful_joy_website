import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import MainNavigation from '../components/Navigation/MainNavigation';
import { NavLink } from 'react-router-dom';

import "./HomePage.css"
// import bg1 from "../assets/imgs/Team_1.jpg";
// import bg2 from "../assets/imgs/Process_1.jpg";
// import bg3 from "../assets/imgs/Retreat_1.jpg";
// import bg4 from "../assets/imgs/Splash1.jpg";
import carousel_1 from "../assets/imgs/carousel_1.png";
import carousel_2 from "../assets/imgs/carousel_2.jpg";
import carousel_3 from "../assets/imgs/carousel_3.jpg";
import carousel_4 from "../assets/imgs/carousel_4.jpg";
// import bg5 from "../assets/imgs/fullPage_bg_5.jpg";

const HomePage = (props) => {
  let location = props.location.pathname;
return (

  <div className="homePage_maindiv">
  <MainNavigation
    currentPage={location}
  />

  <Row className="homePageCarouselRow">

  <Carousel className="homePageCarousel" fade={true} controls={false}>

    <Carousel.Item>
      <img
        className="mainPage_carousel_img d-block w-100"
        src={carousel_1}
        alt="3rd slide"
      />
      <Carousel.Caption>
      <Row className="carousel_caption_row">
        <Col>
        <NavLink to="/retreat">
          <h1 className="carousel_caption_heading">The Experience</h1>
        </NavLink>

          <ul className="carousel_caption_list">
            <li  className="carousel_caption_listItem">
              <p>Soulful Joy A Special time and Place</p>
            </li>
          </ul>
        </Col>
      </Row>
      </Carousel.Caption>

    </Carousel.Item>

    <Carousel.Item className="homePageCarouselItem">
      <img
        className="mainPage_carousel_img d-block w-100"
        src={carousel_2}
        alt="1st slide"
      />

      <Carousel.Caption>
      <Row className="carousel_caption_row">
        <Col>
          <NavLink to="/team">
            <h1 className="carousel_caption_heading">The Team</h1>
          </NavLink>
          <ul className="carousel_caption_list">
            <li  className="carousel_caption_listItem">
              <p>Meet  our Soulful Joy team that will be guiding you on this inspirational journey.</p>
            </li>
          </ul>
        </Col>
      </Row>
      </Carousel.Caption>

    </Carousel.Item>

    <Carousel.Item>
      <img
        className="mainPage_carousel_img d-block w-100"
        src={carousel_3}
        alt="2nd slide"
      />

      <Carousel.Caption>
      <Row className="carousel_caption_row">
        <Col>
          <NavLink to="/path">
            <h1 className="carousel_caption_heading">Path</h1>
          </NavLink>
          <ul className="carousel_caption_list">
            <li  className="carousel_caption_listItem">
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </li>
          </ul>
        </Col>
      </Row>
      </Carousel.Caption>

    </Carousel.Item>

    <Carousel.Item>
      <img
        className="mainPage_carousel_img d-block w-100"
        src={carousel_4}
        alt="4th slide"
      />

      <Carousel.Caption>
      <Row className="carousel_caption_row">
        <Col>
        <NavLink to="/socialMedia">
          <h1 className="carousel_caption_heading">Join the Joy</h1>
        </NavLink>
          <ul className="carousel_caption_list">
            <li  className="carousel_caption_listItem">
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </li>
          </ul>
        </Col>
      </Row>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  </Row>
  </div>
)

}


export default HomePage;
