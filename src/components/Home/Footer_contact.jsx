import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Footer_contact = () => {

    const items = [<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />];
    return (
        <>
            <footer className='footer footer-contact'>
                <Container>
                    <div className='head-content'>
                        <h1>
                            Get in <span>touch</span>
                        </h1>
                        <p>We would be honoured to assist you and make your <br /> experience worth it with us by automating your business.</p>
                    </div>
                    <Row>
                        <Col lg={4}>
                            <div className='links'>
                                <h3>Contact Details</h3>
                                <a href='#'>+92 336-0678731</a>
                                <a href='#'>info@liamtech.com</a>
                                <p className='para'>Office # 404 4th Floor, Amber Estate ext, Plot # A+32 Block 7/8 KCH Society Main Shahra-e-Faisal Karachi</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='links'>
                                <h3>Our Services</h3>
                                <ul>
                                
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
                                <h3>Quick Links</h3>
                                <ul>
                                   
                                    <li><a href='#'>Web Development</a></li>
                                    <li><a href='#'>App Development</a></li>
                                    <li><a href='#'>Dgital Maerketing</a></li>
                                    <li><a href='#'>BPO Service</a></li>
                                    <li><a href='#'>Seo Service</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer_contact