import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddProduct from './pages/AddProduct'
import ContextProvider from './context/ContextProvider'

const App = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>

          <Route path='/' element={<AddProduct />} />

        </Routes>
      </ContextProvider>
    </BrowserRouter>
  )
}

export default App