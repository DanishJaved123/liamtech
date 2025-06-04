import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import aboutimg from '../../assets/images/about-img.png';
import icon1 from '../../assets/images/certified.png';
import icon2 from '../../assets/images/team.png';
const Techassistance = () => {
    return (
        <>
            <section className='techassistance'>
                <Container>
                    <Row>
                        <Col lg={6}>
                        <div className="about-img">
                        <img src={aboutimg} alt="" className='img-fluid' />
                        </div>
                        </Col>
                        
                        <Col lg={6}>
                            <div className='techassistance__content'>
                                <h3 className='title'>About Us</h3>
                                <h1 className='heading'>Liam tech offers dependable tech assistance.</h1>
                                <p className='paragraph'>Liam Tech is a dynamic technology company dedicated to empowering businesses and individuals with innovative solutions. We are passionate about leveraging the latest advancements in technology to drive efficiency, productivity, and growth. Our team of skilled professionals is committed to providing exceptional service and support to our clients.</p>
                                <div className='certified'>
                                    <div className='part'>
                                        <ul>
                                            <li> <img src={icon1} alt="" /></li>
                                            <li> <h4>Certified Company</h4>
                                        <p>Best Provide Skills Services</p></li>
                                        </ul>
                                       
                                       
                                    </div>
                                    <div className='part'>
                                        <ul>
                                            <li> <img src={icon2} alt="" /></li>
                                            <li> <h4>Expart Team</h4>
                                        <p>100% Expert Team</p></li>
                                        </ul>
                                       
                                       
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Techassistance