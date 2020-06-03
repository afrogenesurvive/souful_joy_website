import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import MainNavigation from '../components/Navigation/MainNavigation';
import Carousel from 'react-bootstrap/Carousel'

import "./CompanyPage.css"

const CompanyPage = (props) => {

return (
  <div className="companyPage_maindiv">
  <MainNavigation
  />
    <Row className="companyPageRow">
      <Col className='companyPageCol'>

        <Row className="companyPageSubRow1">

          <Col md={7} className="companyPage_topRow">
            x
          </Col>
          <Col md={3} className="companyPage_topRow">
            x
          </Col>

        </Row>


        <Row className="companyPageSubRow2">
          <Col className="companyPage_topRow">
            <Row className="companyPage_section_row_a">
              1
            </Row>
            <Row className="companyPage_section_row_b">
              2
            </Row>
            <Row className="companyPage_section_row_c">
              3
            </Row>
          </Col>
        </Row>

        <Row className="companyPageSubRow2">
          <Col className="companyPage_topRow">
            <Row className="companyPage_section_row_a">
              1
            </Row>
            <Row className="companyPage_section_row_b">
              2
            </Row>
            <Row className="companyPage_section_row_c">
              3
            </Row>
          </Col>
        </Row>

        <Row className="companyPageSubRow2">
          <Col className="companyPage_topRow">
            <Row className="companyPage_section_row_a">
              1
            </Row>
            <Row className="companyPage_section_row_b">
              2
            </Row>
            <Row className="companyPage_section_row_c">
              3
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
)

}


export default CompanyPage;
