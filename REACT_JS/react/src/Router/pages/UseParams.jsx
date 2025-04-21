// import React from 'react'
// import { useParams } from 'react-router-dom'

// const UseParams = () => {

//     const {user} = useParams()

//   return (
//     <div>
//         <p>User : {user}</p>
//     </div>
//   )
// }

// export default UseParams




// import React from 'react'
// import { useParams } from 'react-router-dom'

// const UseParams = () => {

//   const {username} = useParams()

//   return (
//     <div>
//       <h1>User : {username}</h1>
//     </div>
//   )
// }

// export default UseParams


import React from 'react'
import { useParams } from 'react-router-dom'

const UseParams = () => {

  const {name} = useParams()

  return (
    <div>
      <h1>User Name : {name}</h1>
    </div>
  )
}

export default UseParams