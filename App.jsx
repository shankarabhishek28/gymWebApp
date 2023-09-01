import React from 'react'
import Home from './src/pages/home/home'
import About from './src/pages/about/about'
import Contact from './src/pages/contact/contact'
import Trainers from './src/pages/trainers/Trainers'
import Plans from './src/pages/plans/plans'
import Gallary from './src/pages/gallary/gallary'
import NotFound from './src/pages/notFount/notFound'
import Navbar from './src/components/Navbar'
import { BrowserRouter,Routes,Route, useLocation } from 'react-router-dom'
import Footer from './src/components/Footer'
import ScrollToTop from './src/components/ScrollToTop'

export default function App(){

  return(
    <BrowserRouter >
    <ScrollToTop />
      <Navbar />
      
      <Routes >
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='gallery' element={<Gallary />} />
        <Route path='plans' element={<Plans />} />
        <Route path='trainers' element={<Trainers />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}