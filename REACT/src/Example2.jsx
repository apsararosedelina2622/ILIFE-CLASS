// import React from 'react'

// const Example2 = ({username}) => {
//   return (
//     <div>Example2

//         <h1>User Name : {username}</h1>
//     </div>
//   )
// }

// export default Example2

// import React, { useContext } from 'react'
// import { MyContext } from './context/ContextFile'

// const Example2 = () => {

//     const {user} = useContext(MyContext)

//   return (
//     <div>
//         <h1>User Name: {user}</h1>
//     </div>
//   )
// }

// export default Example2

import React, { useContext } from 'react'
import { MyContext } from './context/ContextFile'

const Example2 = () => {

    const { AddFun , RemoveFun } = useContext(MyContext)

  return (
    <div>
        <button onClick={AddFun}>Add</button>
        <button onClick={RemoveFun}>Remove</button>
    </div>
  )
}

export default Example2