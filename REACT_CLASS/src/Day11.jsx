// import React from 'react'
// import Day11Cons_1 from './Day11Cons_1'

// const Day11 = () => {

//     var name = "user"

//   return (
//     <>
//         <h1>Page 1</h1>
//         <Day11Cons_1 username={name} />
//     </>
//   )
// }

// export default Day11


// import React, { createContext } from 'react'

// export const MyContext = createContext()
// const Day11 = ({children}) => {

//     var user_name = "user"

//   return (
//     <MyContext.Provider value={{user_name}}>
//         {children}
//     </MyContext.Provider>
//   )
// }

// export default Day11


import React, { createContext, useState } from 'react'

export const MyContextData = createContext()
const Day11 = ({children}) => {

    const [num , setNum] = useState(0)

    const Increment = () => {
        setNum(num + 1)
    }

    const Decrement = () => {
        setNum(num - 1)
    }

    const ContextValue = {
        num , 
        Increment , 
        Decrement
    }

  return (
    <MyContextData.Provider value={ContextValue}>
        {children}
    </MyContextData.Provider>
  )
}

export default Day11