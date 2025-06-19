import React, { useReducer } from 'react'

const Day3_Reducer = () => {

    const reducerFun = (state , action) => {
        if(action.type === "Add"){
            return { count : state.count + 1 }
        }
        else if(action.type === "Sub"){
            return { count : state.count - 1 }
        }
        else if(action.type === "Mul"){
            return { count : state.count * 2 }
        }
        else{
            return state;
        }
    }

    const [ state , dispatch ] = useReducer(reducerFun , { count : 0 })

    const AddFun = () => {
        dispatch({ type : "Add" })
    }

    const SubFun = () => {
        dispatch({ type : "Sub" })
    }

    const MulFun = () => {
        dispatch({ type : "Mul" })
    }

  return (
    <>
        <button onClick={AddFun}>Add</button>
        <button onClick={SubFun}>Sub</button>
        <button onClick={MulFun}>Mul</button>
        <h1>{state.count}</h1>
    </>
  )
}

export default Day3_Reducer