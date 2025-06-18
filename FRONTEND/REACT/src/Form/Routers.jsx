import React from 'react'
import {Routes, Route} from "react-router-dom"

import Form from './Form'
import Form_Submit from './Form_Submit'
import Home from './Home'
import Protect from './Protect'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/submit" element={<Form_Submit />} />
      <Route path='/home' element={<Protect><Home /></Protect>} />
    </Routes>
  )
}

export default Routers