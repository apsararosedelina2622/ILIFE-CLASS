// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Form from './Form'
// import FormValue from './FormValue'

// const Routers = () => {
//   return (
//     <BrowserRouter>
//         <Routes>
//             <Route path='/' element={<Form />} />
//             <Route path='/submit' element={<FormValue />} />
//         </Routes>
//     </BrowserRouter>
//   )
// }

// export default Routers



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Form from "./Form";
// import FormValue from "./FormValue";
// import Home from "./Home";
// import Protect from "./Protect";

// const Routers = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Form />} />
//         <Route path="/welcome" element={<FormValue />} />
//         <Route path="/home" element={<Protect><Home /></Protect>} />
//       </Routes>
//     </Router>
//   );
// };

// export default Routers;




import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Form from './Form'
import FormValue from './FormValue'
import Home from './Home'
import Protect from './Protect'

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/submit' element={<FormValue />} />
        <Route path='/home' element={<Protect><Home /></Protect>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers