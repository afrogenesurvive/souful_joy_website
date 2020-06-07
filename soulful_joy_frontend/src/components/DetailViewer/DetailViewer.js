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
                <h1 className="detailViewer_topHeading"> Detail Viewer </h1>
              </Row>
              <Row className="detailViewer_subRow">

                {props.data.page === 'team' &&
                  props.data.data === 'kwayera' && (
                <p className="detailViewer_text">
                  Kweyera's Bio
                </p>
                )}

                {props.data.page === 'team' &&
                  props.data.data === 'khadijah' && (
                <p className="detailViewer_text">
                  khadijah's Bio
                </p>
                )}
                {props.data.page === 'team' &&
                  props.data.data === 'ade' && (
                <p className="detailViewer_text">
                  Ade's Bio
                </p>
                )}
                {props.data.page === 'team' &&
                  props.data.data === 'kwasa' && (
                <p className="detailViewer_text">
                  Kwasa's Bio
                </p>
                )}
                {props.data.page === 'team' &&
                  props.data.data === 'perdella' && (
                <p className="detailViewer_text">
                  Perdella's Bio
                </p>
                )}


                {props.data.page === 'path' &&
                  props.data.data === 'inspire' && (
                <p className="detailViewer_text">
                  Inspire Info...
                </p>
                )}
                {props.data.page === 'path' &&
                  props.data.data === 'invigorate' && (
                <p className="detailViewer_text">
                  invigorate Info...
                </p>
                )}
                {props.data.page === 'path' &&
                  props.data.data === 'immerse' && (
                <p className="detailViewer_text">
                  immerse Info...
                </p>
                )}
                {props.data.page === 'path' &&
                  props.data.data === 'improve' && (
                <p className="detailViewer_text">
                  improve Info...
                </p>
                )}
                {props.data.page === 'path' &&
                  props.data.data === 'incorporate' && (
                <p className="detailViewer_text">
                  incorporate Info...
                </p>
                )}
              </Row>
              <Row className="detailViewer_bottomRow">
                <Button variant="outline-warning" className="detailViewer_closeBtn" onClick={props.closeDetailViewer}>
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
