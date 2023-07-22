import React from 'react';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import { Routes,Route,Navigate } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='*' element={<Navigate to="/" replace/>}/>
    </Routes>
    <Footer/>
    
    
      
    </>
  )
}

export default App

