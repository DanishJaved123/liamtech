import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img1 from '../../assets/images/web.png'
import img2 from '../../assets/images/graphic.png'
import img3 from '../../assets/images/marketing.png'
import img4 from '../../assets/images/bpo.png'
import img5 from '../../assets/images/app.png'
import img6 from '../../assets/images/seo.png'
const Serviceabout = () => {
    const services = [
        {
            id: 1,
            title: "Web Development",
            text: "Web development is the process of creating website and web applications. Liam tech uses its team of professionals in designing, building and maintaining websites according to our customer’s demand.",
            btn: "Learn More",
            link: '/web',
            img: img1

        },
        {
            id: 2,
            title: "Graphic Designing",
            text: "Web development is the process of creating website and web applications. Liam tech uses its team of professionals in designing, building and maintaining websites according to our customer’s demand.",
            btn: "Learn More",
            link: '/graphic',
            img: img2
        },
        {
            id: 3,
            title: "Digital Marketing",
            text: "Web development is the process of creating website and web applications. Liam tech uses its team of professionals in designing, building and maintaining websites according to our customer’s demand.",
            btn: "Learn More",
            link: '/marketing',
            img: img3
        },
        {
            id: 4,
            title: "BPO Service",
            text: "Web development is the process of creating website and web applications. Liam tech uses its team of professionals in designing, building and maintaining websites according to our customer’s demand.",
            btn: "Learn More",
            link: '/bpo',
            img: img4
        },
        {
            id: 5,
            title: "Mobile App Development",
            text: "Web development is the process of creating website and web applications. Liam tech uses its team of professionals in designing, building and maintaining websites according to our customer’s demand.",
            btn: "Learn More",
            link: '/apps',
            img: img5
        },
        {
            id: 6,
            title: "SEO Services",
            text: "Web development is the process of creating website and web applications. Liam tech uses its team of professionals in designing, building and maintaining websites according to our customer’s demand.",
            btn: "Learn More",
            link: '/seo',
            img: img6
        },
    ]
    return (
        <>
            <section className='service_about'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='service_about_heading'>
                                <h3>Services</h3>
                                <h2>Liam tech offers dependable <br /> tech assistance.</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {services.map((item) => {
                            return (
                                <Col lg={4} key={item.id}>
                                    <div className='scard'>
                                        <div className='image'>
                                            <img src={item.img} />
                                        </div>
                                        <h1>{item.title}</h1>
                                        <p>{item.text}</p>
                                        <div className='btn'>
                                            <Link className='links' to={item.link}>{item.btn}</Link>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Serviceabout