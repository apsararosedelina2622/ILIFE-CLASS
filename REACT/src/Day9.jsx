// use Reducer

import React, { useReducer } from 'react'

const Day9 = () => {

    const reduceFun = () => {
        console.log("Reducer Function")
    }

    const [state , dispatch] = useReducer(reduceFun , {data : 1})

    // console.log(state)
    // console.log(state.data)
    console.log(dispatch)

  return (
    <>
        <button>Add</button>        
        <button>Sub</button>        
        <button>Mul</button>        
        <h1>{state.data}</h1>
    </>
  )
}

export default Day9