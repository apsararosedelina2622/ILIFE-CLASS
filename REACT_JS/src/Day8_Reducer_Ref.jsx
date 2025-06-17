// import React, { useReducer } from 'react'

// const Day8_Reducer_Ref = () => {

//     const ACTION = {
//         Add : "Inc" ,
//         Remove : "Dec" , 
//         Multiplication : "Mul"
//     }

//     const reducerFun = (state , action) => {
//         if(action.type === ACTION.Add){
//             return { count : state.count + 1 }
//         }
//         else if(action.type === ACTION.Remove){
//             return { count : state.count - 1 }
//         }
//         else if(action.type === ACTION.Multiplication){
//             return { count : state.count * 2 }
//         }
//         else{
//             return state
//         }
//     }

//     const [ state , dispatch ] = useReducer(reducerFun , { count : 1 })

//     const AddFun = () => {
//         dispatch({ type : ACTION.Add })
//     }

//     const RemoveFun = () => {
//         dispatch({ type : ACTION.Remove })
//     }

//     const MulFun = () => {
//         dispatch({ type : ACTION.Multiplication })
//     }

//   return (
//     <>
//         <button onClick={AddFun}>Add</button>
//         <button onClick={RemoveFun}>Remove</button>
//         <button onClick={MulFun}>Multiplication</button>
//         <h1>{state.count}</h1>
//     </>
//   )
// }

// export default Day8_Reducer_Ref



// import React, { useEffect, useRef, useState } from 'react'

// const Day8_Reducer_Ref = () => {

//     const reference = useRef()

//     const Display = () => {
//         console.log(reference.current.value)
//     }
    
//     console.log("Component Rerendering")

//   return (
//     <>
//         <input 
//             type="text" 
//             ref={reference}
//         />
//         <button onClick={Display}>Display</button>
//         {/* <p>{reference.current.value}</p> */}
//     </>
//   )
// }

// export default Day8_Reducer_Ref


// import React, { useRef } from 'react'

// const Day8_Reducer_Ref = () => {

//     const reference = useRef()

//     const Fun = () => {
//         reference.current.style.color = "green"
//     }

//   return (
//     <>
//         <button onClick={Fun}>Click</button>
//         <h1 ref={reference}>HELLO</h1>
//     </>
//   )
// }

// export default Day8_Reducer_Ref


// import React, { useRef } from 'react'

// const Day8_Reducer_Ref = () => {

//     const reference = useRef()

//     const Fun = () => {
//         reference.current.style.display = "none"
//     }

//   return (
//     <>
//         <button onClick={Fun}>Click</button>
//         <h1 ref={reference}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias repudiandae commodi provident. Repellendus fuga vitae voluptatem earum, quasi accusantium et itaque suscipit autem ipsum, architecto tempora, numquam aliquid magnam voluptates!</h1>
//     </>
//   )
// }

// export default Day8_Reducer_Ref


import React, { useEffect, useRef } from 'react'

const Day8_Reducer_Ref = () => {

    const reference = useRef()

    const Fun = () => {
        reference.current.focus()
    }

    useEffect(() => {
        Fun()
    } , [])

  return (
    <>
        <input type="text" ref={reference} />
        <input type="text" />
        <button>Click</button>
    </>
  )
}

export default Day8_Reducer_Ref