import React, { useState, useEffect } from 'react';

import Button from "react-bootstrap/Button";
import { FaArrowRight } from "react-icons/fa";
import { Row, Container, Col } from "react-bootstrap";
import video from "../../assets/images/back-video.mp4";
const Hero = () => {
   const fullText = [
    { text: 'Modernise ', isSpan: false },
    { text: 'your business', isSpan: true },
    { text: ' with our ', isSpan: false },
    { text: 'AI solution', isSpan: true }
  ];

  const [typedText, setTypedText] = useState([]);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (wordIndex >= fullText.length) {
      // Pause before restarting
      const resetTimeout = setTimeout(() => {
        setTypedText([]);
        setWordIndex(0);
        setCharIndex(0);
      }, 1500); // 1.5s pause at the end

      return () => clearTimeout(resetTimeout);
    }

    const { text, isSpan } = fullText[wordIndex];
    const currentChar = text[charIndex];

    const typingSpeed = 80;
    const timeout = setTimeout(() => {
      if (charIndex < text.length) {
        setTypedText((prev) => {
          const updated = [...prev];
          if (!updated[wordIndex]) {
            updated[wordIndex] = { text: '', isSpan };
          }
          updated[wordIndex].text += currentChar;
          return updated;
        });
        setCharIndex((prev) => prev + 1);
      } else {
        setWordIndex((prev) => prev + 1);
        setCharIndex(0);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [wordIndex, charIndex]);


  return (
    
    <div className="main-hero">
  
   <Container>
        <Row>
          <Col lg="7">
            <div className="banner-content">
              <h1 className='text'>   {typedText.map((part, index) =>
        part.isSpan ? <span key={index}>{part.text}</span> : <React.Fragment key={index}>{part.text}</React.Fragment>
      )}</h1>
              <h2>Welcome</h2>
              <Button className="contact-us">
                Contact Us
                <FaArrowRight />
              </Button>
            </div>
          </Col>
          <Col lg="5">
          <div className="banner-img">
            <video src={video} autoPlay="true" loop  type="video/mp4" muted/>
              
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  
  )
}

export default Hero