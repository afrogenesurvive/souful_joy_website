import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import MainNavigation from '../components/Navigation/MainNavigation';
import { NavLink } from 'react-router-dom';

import "./HomePage.css"
import bg1 from "../assets/imgs/fullPage_bg_1.jpg";
import bg2 from "../assets/imgs/fullPage_bg_2.jpg";
import bg3 from "../assets/imgs/fullPage_bg_3.jpg";
import bg4 from "../assets/imgs/fullPage_bg_4.jpg";
import bg5 from "../assets/imgs/fullPage_bg_5.jpg";

const HomePage = () => {

return (

  <div className="homePage_maindiv">
  <MainNavigation
  />
  <Row className="homePageCarouselRow">

  <Carousel className="homePageCarousel" fade={true} controls={false}>
    <Carousel.Item className="homePageCarouselItem">
      <img
        className="mainPage_carousel_img d-block w-100"
        src={bg1}
        alt="1st slide"
      />

      <Carousel.Caption>
      <Row className="carousel_caption_row">
        <Col>
          <NavLink to="/company">
            <h1 className="carousel_caption_heading">Soulful Joy</h1>
          </NavLink>
          <ul className="carousel_caption_list">
            <li  className="carousel_caption_listItem">
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </li>
            <li className="carousel_caption_listItem">
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </li>
            <li className="carousel_caption_listItem">
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
        src={bg2}
        alt="2nd slide"
      />

      <Carousel.Caption>
      <Row className="carousel_caption_row">
        <Col>
          <NavLink to="/general">
            <h1 className="carousel_caption_heading">General</h1>
          </NavLink>
          <ul className="carousel_caption_list">
            <li  className="carousel_caption_listItem">
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </li>
            <li className="carousel_caption_listItem">
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </li>
            <li className="carousel_caption_listItem">
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
        src={bg3}
        alt="3rd slide"
      />
      <Carousel.Caption>
      <Row className="carousel_caption_row">
        <Col>
          <NavLink to="/socialMedia">
            <h1 className="carousel_caption_heading">Social Media</h1>
          </NavLink>
          <ul className="carousel_caption_list">
            <li  className="carousel_caption_listItem">
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </li>
            <li className="carousel_caption_listItem">
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </li>
            <li className="carousel_caption_listItem">
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
        src={bg4}
        alt="4th slide"
      />

      <Carousel.Caption>
      <Row className="carousel_caption_row">
        <Col>
          <NavLink to="/featuredEvent">
            <h1 className="carousel_caption_heading">Events</h1>
          </NavLink>
          <ul className="carousel_caption_list">
            <li  className="carousel_caption_listItem">
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </li>
            <li className="carousel_caption_listItem">
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </li>
            <li className="carousel_caption_listItem">
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
