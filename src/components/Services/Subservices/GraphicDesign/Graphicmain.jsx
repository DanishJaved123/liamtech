import React from 'react'
import Navbar from '../../../Navbar'
import Web from '../Web/Web'
import Webservice from '../Web/Webservice'
import img1 from '../../../../assets/images/img2.png'
import Testimonial from '../../../AboutUs/Testimonial'
import Footer from '../../../Footer'
const Graphicmain = () => {
    return (
        <>
            <Navbar />
            <Web heading="Graphic Designing" />
            <Webservice h1="Graphic Designing"
                para="Our team of skilled graphic designers specializes in creating visually stunning and impactful designs that effectively communicate your brand&#39;s message. We leverage our expertise in typography, color theory, and layout to develop designs that are both aesthetically pleasing and functional. From logo design and branding to website interfaces and marketing materials, our graphic designers create visuals that resonate with your target audience and drive results."
                wd="Design elements"
                wp="The selection and use of fonts that are appropriate for the message and target audience. Understanding the psychology of colors and using them effectively to convey emotions and messages. Arranging elements on a page in a way that is visually appealing and easy to read."
                sd="Brand guidelines"
                sp="Ensuring that the design is consistent with the brand&#39;s established identity and guidelines. We also take care when incorporating brand elements like logos, colors, and fonts."
                cwd="Design principles"
                cwdp="By Distributing elements evenly or unevenly to create a sense of harmony and using elements that are different from each other to create visual interest. Further Organizing elements in a way that guides the viewer&#39;s eye and emphasizes the most important information."
                img={img1}
            />
            <Testimonial />
            <Footer />
        </>
    )
}

export default Graphicmain