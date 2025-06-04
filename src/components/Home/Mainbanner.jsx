import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FaArrowRight } from "react-icons/fa";
import video from "../../assets/images/back-video.mp4";

const Mainbanner = ({ title, subtitle, buttonText }) => {
 

  return (
    <>
      <Container>
        <Row>
          <Col lg="7">
            <div className="banner-content">
              <h1 dangerouslySetInnerHTML={{ __html: title }} />
              <h2>{subtitle}</h2>
              <Button className="contact-us">
                {buttonText}
                <FaArrowRight />
              </Button>
            </div>
          </Col>
          <Col lg="5">
          <div className="banner-img">
            <video src={video} autoPlay type="video/mp4" loop  muted/>
              
          </div>
          </Col>
        </Row>
      </Container>
     
    </>
  );
};

export default Mainbanner;
