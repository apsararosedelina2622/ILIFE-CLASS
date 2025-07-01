// Example - 1

// import React, { useContext } from 'react'
// import { MyContext } from './Day11'

// const Day11_context = () => {

//     const {name} = useContext(MyContext)

//   return (
//     <>
//         <h1>{name}</h1>
//     </>
//   )
// }

// export default Day11_context


// Example - 2

import React, { useContext } from 'react'
import { MyContext } from './Day11'

const Day11_context = () => {

    const {name , count , Increment , Decreament} = useContext(MyContext)

  return (
    <>
        <h1>{name}</h1>

        <button onClick={Increment}>Add</button>
        <button onClick={Decreament}>Remove</button>
        <h1>{count}</h1>
    </>
  )
}

export default Day11_context