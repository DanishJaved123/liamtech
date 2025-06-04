import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Webservice = (prop) => {
    return (
        <>
            <section className='webservice'>
                <Container>
                    <div className='aboutweb'>
                        <Row>
                            <Col lg={6}>
                                <img src={prop.img} className='img-fluid' />
                            </Col>
                            <Col lg={6}>
                                <h1>{prop.h1}</h1>
                                <p>{prop.para}</p>
                            </Col>
                        </Row>
                    </div>
                    <div className='webtype'>
                        <div className='type'>
                            <h1>{prop.wd}</h1>
                            <p>{prop.wp}</p>
                        </div>
                        <div className='type'>
                            <h1>{prop.sd}</h1>
                            <p>{prop.sp}</p>
                        </div>
                        <div className='type'>
                            <h1>{prop.cwd}</h1>
                            <p>{prop.cwdp}</p>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Webservice