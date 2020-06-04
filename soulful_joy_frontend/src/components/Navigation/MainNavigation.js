import React from 'react';
import { NavLink } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

import AuthContext from '../../context/auth-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faAdobe } from '@fortawesome/free-solid-svg-icons';

import './MainNavigation.css';
import SplashMainLogo from '../../assets/imgs/logo_splash_pg.png';


const mainNavigation = props => (
  <AuthContext.Consumer>
    {context => {
      return (
        <Navbar className="navbarMaster" variant="dark" expand="lg" fixed="top">
          <Navbar.Brand>
          <Image src={SplashMainLogo} className="navbarBrandLogo" fluid />
          <p className="navbar_brand_text">
            Soulful Joy
          </p>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="navbar_item">
                <NavLink to="/home" className="navBar_link">Home</NavLink>
              </Nav.Link>
              <Nav.Link className="navbar_item">
                <NavLink to="/company" className="navBar_link">Company</NavLink>
              </Nav.Link>
              <Nav.Link className="navbar_item">
                <NavLink to="/general" className="navBar_link">General</NavLink>
              </Nav.Link>

              <NavDropdown title="..." id="basic-nav-dropdown">

                <NavDropdown.Item href="#action/3.1">
                  <Nav.Link className="navbar_item">
                    <NavLink to="/socialMedia" className="navBar_link">Social</NavLink>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <Nav.Link className="navbar_item">
                    <NavLink to="/featuredEvent" className="navBar_link">Events</NavLink>
                  </Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className="navbar_divider">
              </Nav.Link>
              <Nav.Link className="navbar_item_social" href="">
                <FontAwesomeIcon icon={faFacebookSquare} className="navbar_socialIcon"/>
              </Nav.Link>
              <Nav.Link className="navbar_item_social" href="">
                <FontAwesomeIcon icon={faTwitterSquare} className="navbar_socialIcon"/>
              </Nav.Link>
              <Nav.Link className="navbar_item_social" href="">
                <FontAwesomeIcon icon={faInstagram} className="navbar_socialIcon"/>
              </Nav.Link>
              <Nav.Link className="navbar_item_social" href="">
                <FontAwesomeIcon icon={faLinkedin} className="navbar_socialIcon"/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }}
  </AuthContext.Consumer>
);

export default mainNavigation;
