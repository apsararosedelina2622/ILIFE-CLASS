// import React from 'react'
// import { Navigate } from 'react-router-dom'

// const Protect = ({children}) => {
//     const username = localStorage.getItem("username")
    
//     if(!username){
//         return <Navigate to='/' />
//     }
//   return children
// }

// export default Protect





import React from 'react'
import { Navigate } from 'react-router-dom'

const Protect = ({children}) => {
    const username = localStorage.getItem("username")
    
    if(!username){
      return <Navigate to={'/'} />
    }
  return children
}

export default Protect