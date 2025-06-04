import React from 'react'
import Navbar from '../../../Navbar'
import Web from './Web'
import Webservice from './Webservice'
import Testimonial from '../../../AboutUs/Testimonial'
import Footer from '../../../Footer'
import img1 from '../../../../assets/images/img1.png'

const Webmain = () => {
    return (
        <>
            <Navbar />

            <Web heading='Web Development' />

            <Webservice h1="Web Development"
                para="Web development is the process of creating website and web applications. Liam tech uses its team of professionals in designing, building and maintaining websites according to our customer’s demand. Our team of skilled web developers specializes in crafting cutting-edge websites that not only look visually stunning but also provide a seamless user experience. We utilize the latest technologies and industry best practices to build responsive, mobile-friendly websites that effectively engage your target audience and drive conversions."
                wd="WordPress Development"
                wp="Our team of experienced WordPress developers specializes in creating custom, high-performance websites tailored to your unique business needs. We leverage the power of WordPress’s flexibility and extensibility to build dynamic, engaging online platforms that drive results. We make sure our team delivers what our customer wants and we develop our sites accordingly."
                sd="Shopify Development"
                sp="Our team of skilled Shopify developers specializes in crafting custom, high-performance online stores that drive sales and enhance your brand. We leverage the power of Shopify’s robust platform to create visually stunning, user-friendly websites that seamlessly integrate with your business operations. From custom theme development and app integration to advanced API connections and marketing automation, we deliver comprehensive Shopify solutions that help you achieve your e-commerce goals."
                cwd="Custom web development"
                cwdp="Our team of skilled web developers specializes in crafting bespoke, tailored websites that perfectly align with your unique brand and business objectives. We go beyond off-the-shelf solutions to deliver truly exceptional online experiences. By combining cutting-edge technology, innovative design, and in-depth understanding of your industry, we create custom websites that not only look stunning but also drive results."
                img={img1}
            />
            <Testimonial />
            <Footer />

        </>
    )
}

export default Webmain