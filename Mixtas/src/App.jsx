import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from './Pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product'
import MyContextProvider from './context/MyContextProvider'

const App = () => {
  return (
    <BrowserRouter>
      <MyContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/product/:id' element={<Product />} />
        </Routes>
      </MyContextProvider>
    </BrowserRouter>
  )
}

export default App