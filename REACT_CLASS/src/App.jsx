import React from 'react'

// import Day1_Bootstrap from './Day1_Bootstrap'
// import Day2_UseEffect from './Day2_UseEffect'
// import Day3_Reducer from './Day3_Reducer'
// import ContextFile from './context/ContextFile'
// import Example1 from './Example1'
// import Example2 from './Example2'
// import Day5_Router from './Day5_Router'
// import Day6_Crud from './Day6_Crud'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Form from './form/Form'
import Context from './form/Context'
import Form_Submit from './form/Form_Submit'
import Home from './form/Home'
import Protect from './form/Protect'

const App = () => {
  return (
    <>
      {/* <Day1_Bootstrap /> */}
      {/* <Day2_UseEffect /> */}
      {/* <Day3_Reducer /> */}
      {/* <ContextFile>
        <Example1 />
        <Example2 />
      </ContextFile> */}
      {/* <Day5_Router /> */}
      {/* <Day6_Crud /> */}
      <BrowserRouter>
        <Context>
          <Routes>

            <Route path='/' element={<Form />} />
            <Route path='/submit' element={<Protect><Form_Submit /></Protect>} />
            <Route path='/home' element={<Protect><Home /></Protect>} />

          </Routes>
        </Context>
      </BrowserRouter>
    </>
  )
}

export default App