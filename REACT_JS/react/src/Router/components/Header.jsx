// import React from "react";
// import { Link } from "react-router-dom";
// import { arr } from "./Value"

// const Header = () => {
//     return(
//         <>
//             {arr.map((e) => {
//                 return <Link to={'/'+e}>{e}</Link>
//             })}
//         </>
//     )
// }

// export default Header


// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// const Header = () => {

//     const navigate = useNavigate()

//   return (
//     <div>
//         <Link to={'/'} >Home</Link>
//         <Link to={'/about'} >About</Link>
//         <Link to={'/contact'} >Contact</Link>


//         <p onClick={() => navigate('/')}>Home Page</p>
//     </div>
//   )
// }

// export default Header





// import React from 'react'
// import { Link } from 'react-router-dom'

// const Header = () => {
//   return (
//     <div>
//       <Link to={"/"}>Home</Link>
//       <br />
//       <Link to={"/about"}>About</Link>
//       <br />
//       <Link to={"/contact"}>Contact</Link>
//     </div>
//   )
// }

// export default Header



import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
    </div>
  )
}

export default Header