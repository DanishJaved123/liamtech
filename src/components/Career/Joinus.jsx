import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from '../.../../../assets/images/img7.png'
const Joinus = () => {
    return (
        <>
            <section className='joinus'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <img src={img1} className='joinimg' />
                        </Col>
                        <Col lg={6}>
                            <div className='joincontent'>
                                <h1>Join Our Dedicated Professionals At</h1>
                                <p>Liam Tech is a dynamic technology company dedicated to empowering businesses and individuals with innovative solutions. We are passionate about leveraging the latest advancements in technology to drive efficiency, productivity, and growth. Our team of skilled professionals is committed to providing exceptional service and support to our clients.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default Joinus