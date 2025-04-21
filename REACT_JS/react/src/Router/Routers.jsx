// import React from "react";
// import { BrowserRouter, Routes,Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import { arr } from './components/Value'
// import Error from "./pages/Error";
// import Header from "./components/Header";

// const Routers = () => {
//     return(
//         <>
//             <BrowserRouter>
//                 <Routes>

//                     <Route  path='/'>
//                         <Route index element={<Header />} />
//                         <Route path={arr[0]} element={<Home />} />
//                         <Route path={arr[1]}  element={<About />} />
//                         <Route path={arr[2]} element={<Contact />} />
//                     </Route>

//                     <Route path='*' element={<Error />}></Route>
                    
//                 </Routes>
//             </BrowserRouter>
//         </>
//     )
// }

// export default Routers




// import React from 'react'
// import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Error from './pages/Error'
// import Header from './components/Header'
// import UseParams from './pages/UseParams'

// const Routers = () => {
//   return (
//     <div>
//         <BrowserRouter>
//             <Header />
//             <Routes>
//                 <Route path='/' element={<Home />} />
//                 <Route path='/about' element={<About />} />
//                 <Route path='/contact' element={<Contact />} />
//                 <Route path='/about/:user' element={<UseParams />} />
//                 <Route path='*' element={<Error />} />
//             </Routes>
//         </BrowserRouter>
//     </div>
//   )
// }

// export default Routers





// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Error from './pages/Error'
// import Header from './components/Header'
// import UseParams from './pages/UseParams'

// const Routers = () => {
//   return (
//     <BrowserRouter>
//     <Header />
//       <Routes>

//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/user/:username' element={<UseParams />} />
//         <Route path='*' element={<Error />} />

//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default Routers



import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Header from './components/Header'
import UseParams from './pages/UseParams'

const Routers = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/user/:name' element={<UseParams />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers