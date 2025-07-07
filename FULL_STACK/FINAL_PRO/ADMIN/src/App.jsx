import React from 'react'
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Form from './pages/Form'
import ContextFile from './context/ContextFile'
import Products from './pages/Products'

const App = () => {
  return (
    <BrowserRouter>
      <ContextFile>
        <Routes>

          <Route path="/" element={<Form />} />
          <Route path="/products" element={<Products />} />
          
        </Routes>
      </ContextFile>
    </BrowserRouter>
  )
}

export default App