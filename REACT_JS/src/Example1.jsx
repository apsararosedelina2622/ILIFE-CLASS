// import React from 'react'
// import Example2 from './Example2'

// const Example1 = () => {

//     var name = "USER"

//   return (
//     <>
//         <h1>{name}</h1>
//         <Example2 username={name} />
//     </>
//   )
// }

// export default Example1


// import React, { useContext } from 'react'
// import { MyContext } from './context/ContextFile'

// const Example1 = () => {

//     const { name } = useContext(MyContext)

//   return (
//     <>
//         <h1>{name}</h1>
//     </>
//   )
// }

// export default Example1


import React, { useContext } from 'react'
import { MyContext } from './context/ContextFile'

const Example1 = () => {

    var { count } = useContext(MyContext)

  return (
    <>
        <h1>{count}</h1>
    </>
  )
}

export default Example1