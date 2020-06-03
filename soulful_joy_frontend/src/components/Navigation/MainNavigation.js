import React from 'react';
import { NavLink } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

import AuthContext from '../../context/auth-context';
import './MainNavigation.css';
import SplashMainLogo from '../../assets/imgs/logo_splash_pg.png';


const mainNavigation = props => (
  <AuthContext.Consumer>
    {context => {
      return (
        <Navbar className="navbarMaster" variant="dark" expand="lg">
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
              <Nav.Link className="navbar_item">
                <NavLink to="/socialMedia" className="navBar_link">Social</NavLink>
              </Nav.Link>
              <Nav.Link className="navbar_item">
                <NavLink to="/featuredEvent" className="navBar_link">Events</NavLink>
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }}
  </AuthContext.Consumer>
);

export default mainNavigation;
