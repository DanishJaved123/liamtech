import React from 'react'
import ServiceHero from './ServiceHero'
import Navbar from '../Navbar'
import Serviceabout from './Serviceabout'
import Servicetestimonial from './Servicetestimonial'
import Footer from '../Footer'
import Testimonial from '../AboutUs/Testimonial'
const MainserviceSection = () => {
    return (
        <>
            <Navbar />
            <ServiceHero />
            <Serviceabout />
            {/* <Servicetestimonial /> */}
            <Testimonial />
            <Footer />
        </>
    )
}

export default MainserviceSection