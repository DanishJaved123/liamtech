import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from '../../assets/images/hire1.png'
import img2 from '../../assets/images/hire2.png'
import img3 from '../../assets/images/hire3.png'
import img4 from '../../assets/images/hire4.png'
const Hire = () => {
    const positions = [
        {
            "id": 1,
            title: "Career Development",
            paragraph: "To abate stagnation and mitigate weaknesses, we provide extensive career development programs.",
            img: img1,
        },
        {
            "id": 2,
            title: "Gender Equality",
            paragraph: "Empowering every gender to achieve the unachievable, we believe in cultivating a fair milieu.",
            img: img2,
        },
        {
            "id": 3,
            title: "Open Door Policy",
            paragraph: "Allowing the opportunity to speak and to be heard, we foster an open-door policy at Liamtech.",
            img: img3,
        },
        {
            "id": 4,
            title: "Career Development",
            paragraph: "To abate stagnation and mitigate weaknesses, we provide extensive career development programs.",
            img: img4,
        }
    ]
    return (
        <>
            <section className='hiresection'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='hireContent'>
                                <h1>We Are Hiring</h1>
                                <p>currently have the following vacancies at our offices. If you think you have all the required qualities, then don’t wait to apply!</p>
                            </div>
                        </Col>
                    </Row>
                    <div className='grow'>
                        <h1><span>Learn</span>Compete & Grow</h1>
                        <p>The Right Career Path Towards Creating Your Own Legend</p>
                    </div>
                    <Row>
                        {positions.map((item => {
                            return (
                                <Col lg={3} key={item.id}>
                                    <div className="growcard">
                                        <div className='image'>
                                            <img src={item.img} />
                                        </div>
                                        <h1>{item.title}</h1>
                                        <p>{item.paragraph}</p>
                                    </div>
                                </Col>
                            )
                        }))}
                        <Col></Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Hire