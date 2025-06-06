import React from 'react'
import { Routes , Route } from "react-router-dom"
import Form from './Form'
import Submit from './Submit'
import Home from './Home'
import Protect from './Protect'
import About from './About'

const Routers = () => {
  return (
        <Routes>
            <Route path='/' element={<Form />} />
            <Route path='/submit' element={<Submit />} />
            <Route path='/home' element={<Protect><Home /></Protect>} />
            <Route path='/about' element={<Protect><About /></Protect>} />
        </Routes>
  )
}

export default Routers