import React from 'react'
import {Route, Routes} from  "react-router-dom"
import Form from './Form'
import Form_submit from './Form_submit'
import Home from './Home'
import Protect from './Protect'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/submit' element={<Protect><Form_submit /></Protect>} />
        <Route path='/home' element={<Protect><Home /></Protect>} />
    </Routes>
  )
}

export default Routers