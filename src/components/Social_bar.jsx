import React from 'react'
import { Row, Container, Col } from "react-bootstrap";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Social_bar = () => {
     const items = [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />];
  return (
    <div className="social">
      <Container>
        <div className="social-links">
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </Container>
      </div>
  )
}

export default Social_bar