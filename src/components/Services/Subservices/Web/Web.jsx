import React from 'react'
import Navbar from '../../../Navbar'
import { Container } from 'react-bootstrap'

const Web = (prop) => {
    return (
        <>
            <section className='aboutHero'>
                <Container>
                    <div className='aboutHero__content'>
                        <h1>{prop.heading}</h1>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Web