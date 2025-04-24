// use Reducer

// import React, { useReducer, useState } from 'react'

// const Day9 = () => {

//   const ACTION = {
//     Inc : "Increment",
//     Dec : "Decrement",
//     Mul : "Multiplication"
//   }

//   // const [count , setCount] = useState(0) 

//   const reduceFun = (state , action) => {
//     // return "hello"
//     // return {count : state.count + 1}
//     // console.log(action)
//     switch(action.type){
//       case ACTION.Inc :
//         return {count : state.count + 1}
//       case ACTION.Dec :
//         return {count : state.count - 1}
//       case ACTION.Mul :
//         return {count : state.count * 2}
//       default : 
//         return state
//     }
//   }

//   const [state , dispatch] = useReducer(reduceFun , {count : 1})

//   const addFun = () => {
//     // setCount(count + 1)
//     dispatch({ type : ACTION.Inc})
//   }

//   const subFun = () => {
//     // setCount(count - 1)
//     dispatch({ type : ACTION.Dec})
//   }

//   const mulFun = () => {
//     // setCount(count * 2)
//     dispatch({ type : ACTION.Mul})
//   }

//   console.log(state)

//   return (
//     <>
//         <button onClick={addFun}>Add</button>        
//         <button onClick={subFun}>Sub</button>        
//         <button onClick={mulFun}>Mul</button>  
//         <h1>{state.count}</h1>      
//     </>
//   )
// }

// export default Day9


// import React, { useReducer } from 'react';

// // Step 1: Reducer function
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "SET_NAME":
//       return { ...state, name: action.payload };
//     case "SET_EMAIL":
//       return { ...state, email: action.payload };
//     default:
//       return state;
//   }
// };

// const Day9 = () => {
//   // Step 2: useReducer hook
//   const [state, dispatch] = useReducer(reducer, {
//     name: "",
//     email: ""
//   });

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Name"
//         value={state.name}
//         onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={state.email}
//         onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
//       />
//       <p>Name: {state.name}</p>
//       <p>Email: {state.email}</p>
//     </>
//   );
// };

// export default Day9;


import React from 'react'
import { useReducer } from 'react'

const Day9 = () => {

  const reducerFun = (state , action) => {
    // return "Hello"
    // console.log("Hello")
    return {count : state.count + 1}
  }

  const [state, dispatch] = useReducer(reducerFun , {count : 1})

  const AddFun = () => {
    dispatch()
  }

  return (
    <>
      <button onClick={AddFun}>Add</button>
      <button>Remove</button>
      <h1>{}</h1>
    </>
  )
}

export default Day9