import React, { createContext, useState } from 'react'

export const MyContext = createContext()

const MyContextProvider = ({children}) => {

  const [showModal, setShowModal] = useState(false)

  const ContextValue = {
    setShowModal
  }

  return (
    <MyContext.Provider value={ContextValue}>
        {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider