// import React from 'react'

// const Day11Cons_2 = ({username1}) => {
//   return (
//     <>
//         <h1>Page 3</h1>
//         <h1>{username1}</h1>
//     </>
//   )
// }

// export default Day11Cons_2


// import React, { useContext } from 'react'
// import { MyContext } from './Day11'

// const Day11Cons_2 = () => {

//     var {user_name} = useContext(MyContext)

//   return (
//     <>
//         <h1>{user_name}</h1>
//     </>
//   )
// }

// export default Day11Cons_2


import React, { useContext } from 'react'
import { MyContextData } from './Day11'

const Day11Cons_2 = () => {

    var {num} = useContext(MyContextData)

  return (
    <>
        <h1>{num}</h1>
    </>
  )
}

export default Day11Cons_2