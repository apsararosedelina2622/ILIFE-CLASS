import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Form from './pages/Form'
import ContextFile from './context/ContextFile'

const App = () => {
  return (
    <BrowserRouter>
      <ContextFile>
        <Routes>

          <Route path='/' element={<Form />} />

        </Routes>
      </ContextFile>
    </BrowserRouter>
  )
}

export default App