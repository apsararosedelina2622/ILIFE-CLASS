import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from './Pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product'
import MyContextProvider from './context/MyContextProvider'
import Form from './pages/Form'
import Protect from './pages/Protect'

const App = () => {
  return (
    <BrowserRouter>
      <MyContextProvider>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/home' element={<Protect><Home /></Protect>} />
          <Route path='/shop' element={<Protect><Shop /></Protect>} />
          <Route path='/product/:id' element={<Protect><Product /></Protect>} />
        </Routes>
      </MyContextProvider>
    </BrowserRouter>
  )
}

export default App