import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {

    const items = [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />];
    return (
        <>
            <footer className='footer'>
                <Container>
                    <div className='head-content'>
                        <h1>
                            Get in <span>touch</span>
                        </h1>
                        <p>We would be honoured to assist you and make your <br /> experience worth it with us by automating your business.</p>
                    </div>
                    <Row>
                        <Col lg={4}>
                            <div className='contact'>
                                <h3>Contact Details</h3>
                                <p className='para'>Office # 404 4th Floor, Amber Estate ext, Plot # A+32 Block 7/8 KCH Society Main Shahra-e-Faisal Karachi</p>
                                <p>+92 336-0678731</p>
                                <a href='#'>info@liamtech.com</a>
                                
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='links'>
                                <ul>
                                    <li><h3>Our Services</h3></li>
                                    <li><a href='#'>Web Development</a></li>
                                    <li><a href='#'>App Development</a></li>
                                    <li><a href='#'>Dgital Maerketing</a></li>
                                    <li><a href='#'>BPO Service</a></li>
                                    <li><a href='#'>Seo Service</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='links'>
                                <ul>
                                    <li><h3>Quick Links</h3></li>
                                    <li><a href='#'>Home</a></li>
                                    <li><a href='#'>About</a></li>
                                    <li><a href='#'>Services</a></li>
                                    <li><a href='#'>Career</a></li>
                                    <li><a href='#'>Contact</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer