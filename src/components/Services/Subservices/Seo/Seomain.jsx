import React from 'react'
import Navbar from '../../../Navbar'
import Web from '../Web/Web'
import Webservice from '../Web/Webservice'
import img1 from '../../../../assets/images/img6.png'
import Testimonial from '../../../AboutUs/Testimonial'
import Footer from '../../../Footer'
const Seomain = () => {
    return (
        <>
            <Navbar />
            <Web heading="SEO Services" />
            <Webservice
                h1="Seo Services"
                para="Our team of SEO experts specializes in optimizing your website’s visibility in search engine results pages (SERPs). We employ advanced SEO techniques, including keyword research, on-page optimization, link building, and technical SEO, to improve your website’s ranking and drive organic traffic. By optimizing your website for search engines, we help you attract more qualified leads and increase your online visibility."
                wd="On page optimisation"
                wp="Identifying relevant keywords and phrases that your target audience is searching for and Optimizing these elements to include relevant keywords and a compelling summary of the page’s content. This is done by Creating high-quality, informative, and engaging content that is relevant to the target audience."
                sd="Technical SEO"
                sp="Optimizing the website’s loading speed to improve user experience and search engine rankings. Along with ensuring the website is optimized for mobile devices first."
                cwd="Off page optimization"
                cwdp="This involves acquiring high-quality backlinks from reputable websites. Promoting the website on social media platforms and optimizing the website for local search if applicable."
                img={img1}
            />
            <Testimonial />
            <Footer />
        </>
    )
}

export default Seomain