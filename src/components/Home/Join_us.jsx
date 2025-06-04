import React from 'react'
import {Row, Col, Container } from "react-bootstrap";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";

import { FaArrowLeft } from "react-icons/fa";
const Join_us = () => {
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
 
   // Array of service data to be rendered dynamically
   const servicesData = [
     {
       id: 1,
       title: "Front End Developer",
       description:
         "Web development is the process of creating website and web applications. Liam tech uses its team of professionals in designing, building and maintaining websites according to our customer’s demand.",
       linkText: "Learn More",
     },
     {
       id: 2,
       title: "UI/UX Designer",
       description:
         "Our team of skilled graphic designers specializes in creating visually stunning and impactful designs that effectively communicate your brand's message. We leverage our expertise in typography, color theory,",
       linkText: "Learn More",
     },
     {
       id: 3,
       title: "Content Writer",
       description:
         "Our team of digital marketing experts specializes in driving online visibility and generating leads for your business. We offer a comprehensive range of services, including search engine optimization (SEO),",
       linkText: "Learn More",
     },
     {
       id: 4,
       title: "SEO Optimization",
       description:
         "Our team of SEO experts specializes in optimizing your website's visibility in search engine results pages (SERPs). We employ advanced SEO techniques, including keyword research, on-page optimization, link",
       linkText: "Learn More",
     },
     {
       id: 5,
       title: "App Development",
       description:
         "Our team of talented mobile app developers specializes in creating innovative and engaging applications for iOS and Android platforms. We leverage the latest technologies and industry best practices",
       linkText: "Learn More",
     },
     {
       id: 6,
       title: "BPO Service",
       description:
         "Our team of skilled BPO designers specializes in creating efficient and scalable business process outsourcing solutions tailored to your unique needs. We leverage our expertise in process analysis,",
       linkText: "Learn More",
     },
   ];
 
   return (
     <div className="main-services">
       <Container>
         <div className="services-content ">
           <div className="banner-content join">
            <Row>
              <Col md={12}>
              <h3 className='title'>Join Us</h3>
             <h1>
               Want to be a Part of Our Team?
             </h1>
             <p>We welcome skilled and interested individuals who are ready to offer their services to enhance our company’s work. We believe that the success of any organization is built on the collective abilities of its people, and we are committed to fostering an environment where creativity, innovation, and dedication thrive.</p>
             <h2>Join US</h2>
             </Col>
             </Row>
             <div className="slider-container">
               <Slider {...settings}>
                 {servicesData.map((service) => (
                   <div className="service-box" key={service.id}>
                     <h3>{service.id < 10 ? `0${service.id}` : service.id}</h3>
                     <h1>{service.title}</h1>
                     <p>{service.description}</p>
                     <a href="#">
                       {service.linkText} <FaArrowRight />
                     </a>
                   </div>
                 ))}
               </Slider>
             </div>
           </div>
         </div>
       </Container>
       
     </div>
      );
}

export default Join_us