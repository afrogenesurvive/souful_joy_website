import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

import AuthContext from '../../context/auth-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
// import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import './MainNavigation.css';
import Wht_ico from '../../assets/imgs/wht_ico.png';


const mainNavigation = (props) => (

  <AuthContext.Consumer>
    {context => {

      return (
        <Navbar className="navbarMaster" variant="dark" expand="lg" fixed="top">
          <Navbar.Brand>

          <NavLink to="/parallax">
            <Image src={Wht_ico} className="navbarBrandLogo" fluid />
          </NavLink>

            <NavLink to="/home" className="xlink">
              <p className="navbar_brand_text">
              Soulful Joy
              </p>
            </NavLink>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">



                {props.currentPage !== '/home' && (
                  <NavLink to="/home" className="navBar_link">Home</NavLink>
                )}
                {props.currentPage === '/home' && (
                  <NavLink to="/home" className="navBar_link_selected">Home</NavLink>
                )}

                {props.currentPage !== '/retreat' && (
                  <NavLink to="/retreat" className="navBar_link" onClick={props.resetOverscrollTop}>The Experience</NavLink>
                )}
                {props.currentPage === '/retreat' && (
                  <NavLink to="/retreat" className="navBar_link_selected">The Experience</NavLink>
                )}

                {props.currentPage !== '/team' && (
                  <NavLink to="/team" className="navBar_link">The Team</NavLink>
                )}
                {props.currentPage === '/team' && (
                  <NavLink to="/team" className="navBar_link_selected">The Team</NavLink>
                )}

                {props.currentPage !== '/path' && (
                  <NavLink to="/path" className="navBar_link">The Path</NavLink>
                )}
                {props.currentPage === '/path' && (
                  <NavLink to="/path" className="navBar_link_selected">The Path</NavLink>
                )}


                {props.currentPage !== '/socialMedia' && (
                  <NavLink to="/socialMedia" className="navBar_link">The Joy</NavLink>
                )}
                {props.currentPage === '/socialMedia' && (
                  <NavLink to="/socialMedia" className="navBar_link_selected">The Joy</NavLink>
                )}

                {
                  // props.currentPage !== '/shop' && (
                  // <NavLink to="/shop" className="navBar_link">Shop</NavLink>
                  // )
                }
                {
                  // props.currentPage === '/shop' && (
                  // <NavLink to="/shop" className="navBar_link_selected">Shop</NavLink>
                  // )
                }

                <Nav.Link className="navbar_divider">
                </Nav.Link>
                <Nav.Link className="navbar_item_social" href="https://www.facebook.com/SoulfulJoyJa" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookSquare} className="navbar_socialIcon"/>
                </Nav.Link>
                <Nav.Link className="navbar_item_social" href="https://www.instagram.com/soulfuljoyjamaica" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="navbar_socialIcon"/>
                </Nav.Link>
                <Nav.Link className="navbar_item_social" href="https://www.linkedin.com/company/soulfuljoy/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="navbar_socialIcon"/>
                </Nav.Link>
                <Nav.Link className="navbar_item_social" href="" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} className="navbar_socialIcon"/>
                </Nav.Link>
                <Nav.Link className="navbar_divider">
                </Nav.Link>

                {props.currentPage !== '/contact' && (
                  <NavLink to="/contact" className="navBar_link">Contact</NavLink>
                )}
                {props.currentPage === '/contact' && (
                  <NavLink to="/contact" className="navBar_link_selected">Contact</NavLink>
                )}

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }}
  </AuthContext.Consumer>
);
export default withRouter(mainNavigation);
