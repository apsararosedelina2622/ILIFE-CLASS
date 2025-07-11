import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ContextFile from './context/ContextFile'

import Form from './pages/Form'
import Products from './pages/Products'
import Users from './pages/Users'

const App = () => {
  return (
    <BrowserRouter>
      <ContextFile>
        <Routes>

          <Route path='/' element={<Form />} />
          <Route path='/products' element={<Products />} />
          <Route path='/users' element={<Users />} />

        </Routes>
      </ContextFile>
    </BrowserRouter>
  )
}

export default App