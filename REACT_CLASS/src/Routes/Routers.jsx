import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"

import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Error from './Pages/Error'
import Navbar from './components/Navbar'
import User from './Pages/User'

const Routers = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/user/:username' element={<User />} />
            <Route path='*' element={<Error />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routers


// src 
// Assets , Componants , Pages , Context , App.jsx , main.jsx , index.css