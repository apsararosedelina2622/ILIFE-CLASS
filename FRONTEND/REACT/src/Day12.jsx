import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"

import Navbar from './pages/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'
import User from './pages/User'

const Day12 = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/user/:username' element={<User />} />
            <Route path='*' element={<Error />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Day12