import React, { createContext } from 'react'

export const MyContext = createContext() 
const ContextFile = ({ children }) => {

    var contextValue = {

    }

  return (
    <MyContext.Provider value={contextValue}>
        { children }
    </MyContext.Provider>
  )
}

export default ContextFile