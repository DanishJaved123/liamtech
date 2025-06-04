import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MdOutlineStarBorder } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
const Testimonial = () => {
     const NextArrow = (props) => {
         const { onClick } = props;
         return (
           <div className="next-arrow" onClick={onClick}>
             <FaArrowRight />
           </div>
         );
       };
     
       const PrevArrow = (props) => {
         const { onClick } = props;
         return (
           <div className="prev-arrow" onClick={onClick}>
             <FaArrowLeft />
           </div>
         );
       };
    var settings = {
     dots: false,
     arrows: true,
     infinite: true,
     autoplay: true,
     autoplaySpeed: 5000,
     speed: 500,
     slidesToShow: 3,
     slidesToScroll: 1,
     nextArrow: <NextArrow />,
     prevArrow: <PrevArrow />,
     draggable: true,
   };
    const careersData = [
        {
            id: 1,
            name: 'Rohail',
            icon: <MdOutlineStarBorder />,
            paragraph: `With a focus on our key strengths, Liam Tech offers a comprehensive range of solutions tailored to meet the unique needs of our customers and we have had a list of satisfied customers who have worked with us.`,
            designation: 'UI/UX Designer'
        },
        {
            id: 2,
            name: 'Rohail',
            icon: <MdOutlineStarBorder />,
            paragraph: `With a focus on our key strengths, Liam Tech offers a comprehensive range of solutions tailored to meet the unique needs of our customers and we have had a list of satisfied customers who have worked with us.`,
            designation: 'UI/UX Designer'
        },
        {
            id: 3,
            name: 'Rohail',
            icon: <MdOutlineStarBorder />,
            paragraph: `With a focus on our key strengths, Liam Tech offers a comprehensive range of solutions tailored to meet the unique needs of our customers and we have had a list of satisfied customers who have worked with us.`,
            designation: 'UI/UX Designer'
        }
    ]

    return (
        <>
            <section className='testimonial'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='testimonial_heading'>
                                <h3>Testimonials</h3>
                                <h1>What satisfied clients say about us.</h1>
                                <p> With a focus on our key strengths, Liam Tech offers a comprehensive range of solutions tailored to meet the unique needs of our customers and we have had a list of satisfied customers who have worked with us.</p>
                            </div>
                        </Col>
                    </Row>
                   
                        
                            
                                <Slider {...settings}>
                                    {careersData.map((item) => (
                                    <div className='tcard' key={item.id}>
                                        <div className='rating'>
                                            <span>{item.icon}</span>
                                            <span>{item.icon}</span>
                                            <span>{item.icon}</span>
                                            <span>{item.icon}</span>
                                            <span>{item.icon}</span>
                                        </div>
                                        <div className='paragraph'>
                                            <p>{item.paragraph}</p>
                                        </div>
                                        <div className='name'>
                                            <h3>{item.name}</h3>
                                            <span>{item.designation}</span>
                                        </div>
                                    </div>
                                     ))}
                                </Slider>
                           
                        
                    
                    <div className='viewbtn'>
                        <button className='viewmore'><span>View</span> More  <FaArrowRight /></button>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Testimonial