import { useState } from 'react';
import Button from "react-bootstrap/Button";
import { FaArrowRight } from "react-icons/fa";
import { Row, Container, Col } from "react-bootstrap";
import Mainbanner from "./Mainbanner";
const About = () => {
  return (
    <div className="main-about">
    
   
      <Container>
        <Row>
          <Col lg="7">
            <div className="banner-content">
              <h1>Liam tech <span>offers dependable</span> tech assistance.</h1>
              <h2>About</h2>
              <Button className="contact-us">
                About Us
                <FaArrowRight />
              </Button>
            </div>
          </Col>
          
        </Row>
      </Container>
    </div>
  )
}

export default About