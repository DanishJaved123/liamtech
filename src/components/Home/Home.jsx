import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import Navbar from "../Navbar";
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Join_us from './Join_us';
import Choose from '../AboutUs/Choose';
import Social_bar from '../Social_bar';
import Footer_contact from './Footer_contact';
import Testimonial from '../AboutUs/Testimonial';
import WhiteLogo from '../../assets/images/logo.png'
import BlackLogo from '../../assets/images/black-logo.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Navbar logo={activeIndex % 2 === 0 ? WhiteLogo : BlackLogo} 
         toggleColor={activeIndex % 2 !== 0}
      />
      <Social_bar />
      <Swiper
        modules={[Mousewheel, Pagination]}
        direction={'vertical'}
        speed={1000}
        pagination={true}
        mousewheel={{ thresholdDelta: 30, sensitivity: 1 }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        <SwiperSlide className='Dark'><Hero/></SwiperSlide>
        <SwiperSlide className='Light'><About/></SwiperSlide>
        <SwiperSlide className='Dark'><Services/></SwiperSlide>
        <SwiperSlide className='Light'><Choose/></SwiperSlide>
        <SwiperSlide className='Dark'><Join_us/></SwiperSlide>
        <SwiperSlide className='Light'><Testimonial/></SwiperSlide>
        <SwiperSlide className='Dark'><Footer_contact /></SwiperSlide>
      </Swiper>
    </>
  );
};

export default Home;

// import { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Mousewheel, Pagination } from 'swiper/modules';
// import Navbar from "../Navbar";
// import Hero from './Hero';
// import About from './About';
// import Services from './Services';
// import Join_us from './Join_us';
// import Choose from '../AboutUs/Choose';
// import Social_bar from '../Social_bar';
// import Footer_contact from './Footer_contact';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import Testimonial from '../AboutUs/Testimonial';
// function Home() {
  
//   return (
//     <>
//     {/* <MegaScroll onChange={setActive}>
      
//       <Hero/>
//       <div style={{ ...styles, background: "#222" }}>Smooth Scrolling</div>
//       <div style={{ ...styles, background: "#333" }}>Keyboard Support</div>
//       <div style={{ ...styles, background: "#222" }}>State Listeners</div>
//       <div style={{ ...styles, background: "#111" }}>Free Forever</div>
//    </MegaScroll> */}
//    <Navbar/>
//    <Social_bar/>
//  <Swiper
//       // install Swiper modules
//       modules={[Mousewheel, Pagination]}
//       direction={'vertical'}
//       speed={1000}
      
//       pagination={
//         true 
//       }
     
//       mousewheel={{
//         thresholdDelta: 30,
//         sensitivity: 1,
//       }}
       
//     >
//       <SwiperSlide className='Dark'><Hero/></SwiperSlide>
//       <SwiperSlide  className='Light'><About/></SwiperSlide>
//       <SwiperSlide  className='Dark'><Services/></SwiperSlide>
//       <SwiperSlide  className='Light'><Choose/></SwiperSlide>
//       <SwiperSlide  className='Dark'><Join_us/></SwiperSlide>
//       <SwiperSlide  className='Light'><Testimonial/></SwiperSlide>
//       <SwiperSlide  className='Dark'><Footer_contact /></SwiperSlide>
//     </Swiper>
     
//     </>
//   );
// };

// export default Home;
