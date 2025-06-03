// import React from 'react'
// import Example2 from './Example2'

// const Example1 = () => {

//     var user = "Abi"

//   return (
//     <div>
//         <h1>Name : {user}</h1>
//         <Example2 username={user} />
//     </div>
//   )
// }

// export default Example1



// import React, { useContext } from 'react'
// import { MyContext } from './context/ContextFile'

// const Example1 = () => {

//     const {user} = useContext(MyContext)

//   return (
//     <div>
//         <h1>User Name : {user}</h1>
//     </div>
//   )
// }

// export default Example1


import React, { useContext } from 'react'
import { MyContext } from './context/ContextFile'

const Example1 = () => {

    const { count } = useContext(MyContext)

  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

export default Example1