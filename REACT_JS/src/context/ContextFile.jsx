// import React, { createContext } from 'react'

// export const MyContext = createContext()
// const ContextFile = ({children}) => {

//     var name = "USER"

//   return (
//     <MyContext.Provider value={{ name }}>
//         {children}
//     </MyContext.Provider>
//   )
// }

// export default ContextFile


import React, { createContext, useState } from 'react'

export const MyContext = createContext()
const ContextFile = ({ children }) => {

    var [ count , setCount ] = useState(1)

    const AddFun = () => {
        setCount(a => a + 1)
    }

    const RemoveFun = () => {
        setCount(a => a - 1)
    }

    const ContextValue = {
        count , 
        AddFun , 
        RemoveFun
    }

  return (
    <MyContext.Provider value={ContextValue}>
        {children}
    </MyContext.Provider>
  )
}

export default ContextFile