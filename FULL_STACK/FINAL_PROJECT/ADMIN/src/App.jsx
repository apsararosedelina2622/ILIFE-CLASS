import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddProduct from './pages/AddProduct'
import ContextProvider from './context/ContextProvider'
import Products from './pages/Products'

const App = () => {
  return (
      <>
        <BrowserRouter>
          <ContextProvider>
            <Routes>

              <Route path='/' element={<AddProduct />} />
              <Route path='/products' element={<Products />} />

            </Routes>
          </ContextProvider>
        </BrowserRouter>
      </>
  )
}

export default App