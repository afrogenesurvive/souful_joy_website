import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import MainNavigation from '../components/Navigation/MainNavigation';
import Carousel from 'react-bootstrap/Carousel'

import "./CompanyPage.css"

const GeneralPage = (props) => {

return (
  <div className="companyPage_maindiv">
  <MainNavigation
  />
    <Row className="companyPageRow">
      <Col className='companyPageCol'>

        <Row className="companyPageRow_1">
          <h1 className='companyPageHeading'> GeneralPage </h1>
        </Row>
      </Col>
    </Row>
  </div>
)

}


export default GeneralPage;
