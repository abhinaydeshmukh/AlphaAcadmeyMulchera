import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Courses from './pages/Courses';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import KnowBlock from './pages/KnowBlock';


function ReactRoutes () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path='courses' element={<Courses />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="my-block" element={<KnowBlock />} />
      </Routes>
    </BrowserRouter>  )
}

export default ReactRoutes;