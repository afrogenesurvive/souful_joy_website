import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AuthContext from '../../context/auth-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faAdobe } from '@fortawesome/free-solid-svg-icons';

import './DetailViewer.css';
import SplashMainLogo from '../../assets/imgs/logo_splash_pg.png';


const detailViewer = props => (
  <AuthContext.Consumer>
    {context => {
      return (
        <div className="detailViewContainer">
          <Row className="detailViewer_topRow">

            <Col className="detailViewer_topCol">
              <Row className="detailViewer_subRow">
                <h3 className="detailViewer_topHeading"> Detail Viewer </h3>
              </Row>
              <Row className="detailViewer_subRow">
                <p className="detailViewer_text">
                  Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
                </p>
              </Row>
              <Row className="detailViewer_subRow">
                <Button variant="outline-danger" onClick={props.closeDetailViewer}>
                  Close
                </Button>
              </Row>

            </Col>
          </Row>
        </div>
      );
    }}
  </AuthContext.Consumer>
);

export default detailViewer;
