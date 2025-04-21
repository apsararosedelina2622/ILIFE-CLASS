// import React from "react";

// const Error = () => {
//     return(
//         <h1>Error</h1>
//     )
// }

// export default Error



// import React from 'react'

// const Error = () => {
//   return (
//     <div>Error</div>
//   )
// }

// export default Error



import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {

  const hello = useNavigate()

  return (
    <div>
      <h1>Error page</h1>

      <p>Oops! Something went wrong</p>
      <button onClick={() => hello('/')}>Go to Home</button>
    </div>
  )
}

export default Error