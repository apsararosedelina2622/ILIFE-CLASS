// Use Context

// Example - 1

// import React from 'react'
// import { createContext } from 'react'

// export const MyContext = createContext()

// const Day11 = ({ children }) => {

//     var name = "User"

//   return (
//     <MyContext.Provider value={{name}}>
//         {children}
//     </MyContext.Provider>
//   )
// }

// export default Day11


// Example - 2

import React, { createContext, useState } from 'react'

export const MyContext = createContext()
const Day11 = ({ children }) => {

    var name = "user"

    const [count , setCount] = useState(0)

    const Increment = () => {
        setCount(count + 1)
    }

    const Decreament = () => {
        setCount(count - 1)
    }

    var contextValue = {
        name ,
        count , Increment , Decreament
    }

  return (
    <MyContext.Provider value={contextValue}>
        {children}
    </MyContext.Provider>
  )
}

export default Day11