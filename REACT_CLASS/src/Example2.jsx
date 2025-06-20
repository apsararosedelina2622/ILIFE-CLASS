import React from 'react'
import { useContext } from 'react'
import { MyContext } from './context/ContextFile'

const Example2 = () => {

  const { AddFun , RemoveFun } = useContext(MyContext)

  return (
    <>
        <button onClick={AddFun}>Add</button>
        <button onClick={RemoveFun}>Remove</button>
    </>
  )
}

export default Example2