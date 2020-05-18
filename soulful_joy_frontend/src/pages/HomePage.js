import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import MainNavigation from '../components/Navigation/MainNavigation';
import { NavLink } from 'react-router-dom';

import "./HomePage.css"
import bg1 from "../assets/images/bg1.jpg";

const HomePage = () => {

return (

  <div className="homePage_maindiv">
  <MainNavigation
  />
  <Row className="homePageCarouselRow">

  <Carousel className="homePageCarousel" fade={true} controls={false}>
    <Carousel.Item className="homePageCarouselItem">
      <img
        className="d-block w-100"
        src={bg1}
        alt="1st slide"
      />
      <Carousel.Caption>
      <NavLink to="/company">
        <h3>Soulful Joy</h3>
      </NavLink>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={bg1}
        alt="2nd slide"
      />

      <Carousel.Caption>
      <NavLink to="/general">
        <h3>General</h3>
      </NavLink>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={bg1}
        alt="3rd slide"
      />

      <Carousel.Caption>
        <NavLink to="/featuredEvent">
          <h3>Featured Event</h3>
        </NavLink>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={bg1}
        alt="4th slide"
      />

      <Carousel.Caption>
        <NavLink to="/socialMedia">
          <h3>Social Media</h3>
        </NavLink>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  </Row>
  </div>
)

}


export default HomePage;
