// import React from 'react'
// import Day11Cons_2 from './Day11Cons_2'

// const Day11Cons_1 = ({username}) => {
//   return (
//     <>
//         <h1>Page 2</h1>
//         <h1>{username}</h1>
//         <Day11Cons_2 username1={username} />
//     </>
//   )
// }

// export default Day11Cons_1


// import React, { useContext } from 'react'
// import { MyContext } from './Day11'

// const Day11Cons_1 = () => {

//     var {user_name} = useContext(MyContext)

//   return (
//     <>
//         <h1>{user_name}</h1>
//     </>
//   )
// }

// export default Day11Cons_1


import React, { useContext } from 'react'
import { MyContextData } from './Day11'

const Day11Cons_1 = () => {

    const {Increment , Decrement} = useContext(MyContextData)

  return (
    <>
        <button onClick={Increment}>Add</button>
        <button onClick={Decrement}>Remove</button>
    </>
  )
}

export default Day11Cons_1