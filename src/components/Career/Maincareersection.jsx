import React from 'react'
import { Container } from 'react-bootstrap'
import CareerHero from './CareerHero'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Joinus from './Joinus'
import Hire from './Hire'
const Maincareersection = () => {
    return (
        <>
            <Navbar />
            <CareerHero />
            <Joinus />
            <Hire />
            <Footer />
        </>
    )
}

export default Maincareersection