import React from 'react'
import Navbar from '../../../Navbar'
import Web from '../Web/Web'
import Webservice from '../Web/Webservice'
import img1 from '../../../../assets/images/img3.png'
import Testimonial from '../../../AboutUs/Testimonial'
import Footer from '../../../Footer'
const Marketing = () => {
    return (
        <>
            <Navbar />
            <Web heading='Digital Marketing' />
            <Webservice
                h1="Digital Marketing"
                para="Our team of digital marketing experts specializes in driving online visibility and generating leads for your business. We offer a comprehensive range of services, including search engine optimization (SEO), pay- per-click (PPC) advertising, social media marketing, content marketing, email marketing, and website analytics. By leveraging the latest digital marketing strategies and technologies, we help you reach your target audience, build brand awareness, and achieve your business goals."
                wd="Social media marketing:"
                wp="We promote and market your business on social media platforms such as Facebook, Instagram, Twitter, and LinkedIn. This plays a vital role in improving your market and increasing market share. Liam tech considers this very important and offers all services in this regard."
                sd="Content marketing:"
                sp="Creating and sharing valuable content (like blog posts, articles, videos) to attract and engage an audience."
                cwd="Pay per click and Search engine optimization:"
                cwdp="Our company Creates and manages paid ads on search engines and social media platforms. We further also Improve a website&#39;s visibility in search engine results pages (SERPs) through various techniques. We want our customers to be care free when linked with us."
                img={img1}
            />
            <Testimonial />
            <Footer />
        </>
    )
}

export default Marketing