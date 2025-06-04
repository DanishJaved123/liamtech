import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MdOutlineStarBorder } from "react-icons/md";
const Choose = () => {
    return (
        <>
            <section className='choose_us'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='choose_us_Content'>
                                <h3 className='title'>WHY CHOOSE US</h3>
                                <h1 className='heading'>Gain a <span>competitive edge </span>with our <br></br> <span>exclusive solutions.</span></h1>
                                <p className='paragraph'>At Liam Tech, we believe in building long-lasting partnerships with our clients. We strive to understand their challenges and provide customized solutions that drive their success. Client satisfaction matters the most to us and that guides our way to our work. Join us on our journey to shape the future of technology.</p>
                                <h2>We Offer</h2>
                                <div className='offer'>
                                    <div className='part'>
                                        <h4><span className='icon'><MdOutlineStarBorder /></span> Innovation</h4>
                                        <h4><span className='icon'><MdOutlineStarBorder /></span> Quality</h4>
                                    </div>
                                    <div className='part'>
                                        <h4><span className='icon'><MdOutlineStarBorder /></span> Innovation</h4>
                                        <h4><span className='icon'><MdOutlineStarBorder /></span> Quality</h4>
                                    </div>
                                    <div className='part'>
                                        <h4><span className='icon'><MdOutlineStarBorder /></span> Innovation</h4>
                                        <h4><span className='icon'><MdOutlineStarBorder /></span> Innovation</h4>
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

export default Choose