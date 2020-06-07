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
import Wht_ico from '../../assets/imgs/wht_ico.png';
import Blk_ico from '../../assets/imgs/blk_ico.png';


const mainNavigation = props => (
  <AuthContext.Consumer>
    {context => {
      return (
        <Navbar className="navbarMaster" variant="dark" expand="lg" fixed="top">
          <Navbar.Brand>
          <Image src={Wht_ico} className="navbarBrandLogo" fluid />

            <NavLink to="/home" className="navBar_link">
              <p className="navbar_brand_text">
              Soulful Joy
              </p>
            </NavLink>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">

              <Nav.Link className="navbar_item">
                <NavLink to="/team" className="navBar_link">Team</NavLink>
              </Nav.Link>
              <Nav.Link className="navbar_item">
                <NavLink to="/path" className="navBar_link">The Path</NavLink>
              </Nav.Link>
              <Nav.Link className="navbar_item">
                <NavLink to="/socialMedia" className="navBar_link">Join the Joy</NavLink>
              </Nav.Link>
              <Nav.Link className="navbar_item">
                <NavLink to="/retreat" className="navBar_link">Retreat</NavLink>
              </Nav.Link>
              <Nav.Link className="navbar_item">
                <NavLink to="/contact" className="navBar_link">Contact</NavLink>
              </Nav.Link>

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
