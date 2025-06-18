// import React from 'react'

// const Example2 = ({ username }) => {
//   return (
//     <>
//         <h1>{username}</h1>
//     </>
//   )
// }

// export default Example2


// import React, { useContext } from 'react'
// import { MyContext } from './context/ContextFile'

// const Example2 = () => {

//     const { name } = useContext(MyContext)

//   return (
//     <>
//         <h1>{name}</h1>
//     </>
//   )
// }

// export default Example2


import React, { useContext } from 'react'
import { MyContext } from './context/ContextFile'

const Example2 = () => {

    var { AddFun , RemoveFun } = useContext(MyContext)

  return (
    <>
        <button onClick={AddFun}>Add</button>
        <button onClick={RemoveFun}>Remove</button>
    </>
  )
}

export default Example2