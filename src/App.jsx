import { useState } from 'react'
import './App.css'
import './Responsive.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import MainaboutSection from './components/AboutUs/MainaboutSection';
import MainserviceSection from './components/Services/MainserviceSection';
import Maincareersection from './components/Career/Maincareersection';
import Contactmain from './components/Contact/Contactmain';
import Webmain from './components/Services/Subservices/Web/Webmain';
import Graphicmain from './components/Services/Subservices/GraphicDesign/Graphicmain';
import Marketing from './components/Services/Subservices/Digital Marketing/Marketing';
import Bpo from './components/Services/Subservices/BpoService/Bpo';
import Apps from './components/Services/Subservices/Apps/Apps';
import Seomain from './components/Services/Subservices/Seo/Seomain';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<MainaboutSection />} />
      <Route path='/service' element={<MainserviceSection />} />
      <Route path='/career' element={<Maincareersection />} />
      <Route path='/contact' element={<Contactmain />} />
      <Route path='/web' element={<Webmain />} />
      <Route path='/graphic' element={<Graphicmain />}></Route>
      <Route path='/marketing' element={<Marketing />}></Route>
      <Route path='/bpo' element={<Bpo />}></Route>
      <Route path="/apps" element={<Apps />} />
      <Route path='/seo' element={<Seomain />} />
    </Routes>
  )
}

export default App
