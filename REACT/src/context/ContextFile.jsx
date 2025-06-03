// import React, { Children, createContext, use } from 'react'

// export const MyContext = createContext()
// const ContextFile = ({children}) => {

//     var user = "Abi"

//   return (
//     <MyContext.Provider value={{user}}>
//         {children}
//     </MyContext.Provider>
//   )
// }

// export default ContextFile



import React, { createContext, useState } from 'react'

export const MyContext = createContext()
const ContextFile = ({children}) => {

    const [ count , setCount ] = useState(0)

    const AddFun = () =>{
        setCount(count + 1)
    }

    const RemoveFun = () => {
        setCount(count - 1)
    }

    const contextValue = {
        count , 
        AddFun , RemoveFun
    }

  return (
    <MyContext.Provider value={contextValue}>
        {children}
    </MyContext.Provider>
  )
}

export default ContextFile