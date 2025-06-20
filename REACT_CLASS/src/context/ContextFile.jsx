import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const MyContext = createContext()
const ContextFile = ({children}) => {

    var [ count , setCount ] = useState(3)

    const AddFun = () => {
        setCount(count++)
    }

    const RemoveFun = () => {
        setCount(count--)
    }

    const contextValue = {
        count , 
        AddFun , 
        RemoveFun
    }

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  )
}

export default ContextFile