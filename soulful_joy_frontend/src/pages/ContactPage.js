import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
// import MainNavigation from '../components/Navigation/MainNavigation';
// import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { ReactSVG } from 'react-svg';

// import SplashMainLogo from '../assets/imgs/logo_splash_pg.png';
// import ContentBgLogo from '../assets/imgs/content_bg.png';
import Wht_ico from '../assets/imgs/wht_ico.png';
// import Blk_ico from '../assets/imgs/blk_ico.png';
// import Wht_ico2 from '../assets/imgs/wht_ico2.svg';
// import Blk_ico2 from '../assets/imgs/blk_ico2.svg';


import "./CompanyPage.css"

const ContactPage = (props) => {

return (
  <div className="companyPage_maindiv mainDiv_contact">

    <Row className="companyPageRow">
      <Col className='companyPageCol'>

        <Row className="companyPageSubRow1 desktop">

          <Col md={9} className="companyPage_topCol">
            <Row>
              <h1 className="companyPage_top_heading contact_text">
                Contact
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

            {
              // <ReactSVG
              // src={Wht_ico2}
              // beforeInjection={svg => {
              //   svg.classList.add('testvg')
              //   svg.setAttribute('style', 'width: 100px')
              //   svg.setAttribute('style', 'color: #D88300')
              // }}/>
            }
          </Col>

        </Row>

        <Row className="companyPageSubRow1 mobile">

          <Col sm={5} className="companyPage_topCol">
            <Row>
              <h1 className="companyPage_top_heading contact_text">
                Social Contact
              </h1>
            </Row>
            <Row>
              <p className="companyPage_top_subtitle">
                Drop us a limb...
              </p>
            </Row>
          </Col>
          <Col sm={5} className="companyPage_topCol topCol2">
            <Image src={Wht_ico} className="CompanyPage_HeadLogo" fluid />
          </Col>

        </Row>


        <Row className="companyPageSubRow2 desktop">
          <Col className="companyPage_sectionCol">
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
                <p className="content_section_grid_text">
                  x
                </p>

              </Col>
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                x
              </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">
                <p className="content_section_grid_text">
                  x
                </p>
              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col md={10} className="content_section_grid_cell desktop_splinterCell">
              <Button variant="outline-light"  className="sub_btn" onClick={props.openContactForm}>
                Subscribe to Newsletter
              </Button>
              {props.contactForm === true && (
                <Form onSubmit={props.submitContactForm}>
                  <Form.Row>

                  <Form.Group as={Col} controlId="formGridAddressType">
                    <Form.Label className="formLabel">Type</Form.Label>
                    <Form.Control as="select">
                    <option>Billing</option>
                    <option>Shipping</option>

                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridAddressNumber">
                    <Form.Label className="formLabel">Street No.</Form.Label>
                    <Form.Control type="number" placeholder="addressNumber"/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridAddressStreet">
                    <Form.Label className="formLabel">Street Name</Form.Label>
                    <Form.Control type="text" placeholder="addressStreet"/>
                  </Form.Group>
                  </Form.Row>

                  <Form.Row>
                  <Form.Group as={Col} controlId="formGridAddressTown">
                    <Form.Label className="formLabel">Town</Form.Label>
                    <Form.Control type="text" placeholder="addressTown"/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridAddressCity">
                    <Form.Label className="formLabel">City</Form.Label>
                    <Form.Control type="text" placeholder="addressCity"/>
                  </Form.Group>
                  </Form.Row>

                  <Form.Row>
                  <Form.Group as={Col} controlId="formGridAddressCountry">
                    <Form.Label className="formLabel">Country</Form.Label>
                    <Form.Control type="text" placeholder="addressCountry"/>
                  </Form.Group>
                  </Form.Row>

                  <Form.Row>
                  <Form.Group as={Col} controlId="formGridAddressPostalCode">
                    <Form.Label className="formLabel">postalCode</Form.Label>
                    <Form.Control type="text" placeholder="addresspostalCode"/>
                  </Form.Group>
                  </Form.Row>

                  <Form.Row>

                    <Button variant="outline-success" className="formButton" onClick={props.cancelContactForm}>
                    Cancel
                    </Button>

                    <Button variant="outline-danger" className="formButton" type="submit">
                    Submit
                    </Button>

                  </Form.Row>

                  </Form>
              )}
              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                .
              </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                .
              </p>
              </Col>
              <Col md={4} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                .
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
                  x
                </p>

              </Col>
            </Row>
            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
                <p className="content_section_grid_text">
                  x
                </p>

              </Col>
              <Col sm={6} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                x
              </p>
              </Col>
            </Row>

            <Row className="companyPage_section_row">
              <Col sm={6} className="content_section_grid_cell">
              <p className="content_section_grid_text">
                x
              </p>
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

              <Button variant="outline-light" onClick={props.openContactForm}>
                Subscribe to Newsletter
              </Button>
              {props.contactForm === true && (
                <Form onSubmit={props.submitContactForm}>
                  <Form.Row>

                  <Form.Group as={Col} controlId="formGridAddressType">
                    <Form.Label className="formLabel">Type</Form.Label>
                    <Form.Control as="select">
                    <option>Billing</option>
                    <option>Shipping</option>

                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridAddressNumber">
                    <Form.Label className="formLabel">Street No.</Form.Label>
                    <Form.Control type="number" placeholder="addressNumber"/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridAddressStreet">
                    <Form.Label className="formLabel">Street Name</Form.Label>
                    <Form.Control type="text" placeholder="addressStreet"/>
                  </Form.Group>
                  </Form.Row>

                  <Form.Row>
                  <Form.Group as={Col} controlId="formGridAddressTown">
                    <Form.Label className="formLabel">Town</Form.Label>
                    <Form.Control type="text" placeholder="addressTown"/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridAddressCity">
                    <Form.Label className="formLabel">City</Form.Label>
                    <Form.Control type="text" placeholder="addressCity"/>
                  </Form.Group>
                  </Form.Row>

                  <Form.Row>
                  <Form.Group as={Col} controlId="formGridAddressCountry">
                    <Form.Label className="formLabel">Country</Form.Label>
                    <Form.Control type="text" placeholder="addressCountry"/>
                  </Form.Group>
                  </Form.Row>

                  <Form.Row>
                  <Form.Group as={Col} controlId="formGridAddressPostalCode">
                    <Form.Label className="formLabel">postalCode</Form.Label>
                    <Form.Control type="text" placeholder="addresspostalCode"/>
                  </Form.Group>
                  </Form.Row>

                  <Form.Row>

                    <Button variant="outline-success" className="formButton" onClick={props.cancelContactForm}>
                    Cancel
                    </Button>

                    <Button variant="outline-danger" className="formButton" type="submit">
                    Submit
                    </Button>

                  </Form.Row>

                  </Form>
              )}
              </Col>
            </Row>

            <Row className="companyPage_section_row">
              <Col sm={12} className="content_section_grid_cell splinterCell">
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


export default ContactPage;
