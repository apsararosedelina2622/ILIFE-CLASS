import React from 'react'
import { useContext } from 'react'
import { MyContext } from './context/ContextFile'

const Example1 = () => {

  const { count } = useContext(MyContext)

  return (
    <>
        <h1>{count}</h1>
    </>
  )
}

export default Example1