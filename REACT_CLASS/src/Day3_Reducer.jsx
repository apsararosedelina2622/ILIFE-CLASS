// import React, { useReducer } from 'react'

// const Day3_Reducer = () => {

//     const reducerFun = (state , action) => {
//         if(action.type === "Add"){
//             return { count : state.count + 1 }
//         }
//         else if(action.type === "Sub"){
//             return { count : state.count - 1 }
//         }
//         else if(action.type === "Mul"){
//             return { count : state.count * 2 }
//         }
//         else{
//             return state;
//         }
//     }

//     const [ state , dispatch ] = useReducer(reducerFun , { count : 0 })

//     const AddFun = () => {
//         dispatch({ type : "Add" })
//     }

//     const SubFun = () => {
//         dispatch({ type : "Sub" })
//     }

//     const MulFun = () => {
//         dispatch({ type : "Mul" })
//     }

//   return (
//     <>
//         <button onClick={AddFun}>Add</button>
//         <button onClick={SubFun}>Sub</button>
//         <button onClick={MulFun}>Mul</button>
//         <h1>{state.count}</h1>
//     </>
//   )
// }

// export default Day3_Reducer


// import React from 'react'
// import { useRef } from 'react'

// const Day3_Reducer = () => {

//     const reference = useRef()

//     const Fun = () => {
//         reference.current.style.backgroundColor = "red"
//     }

//   return (
//     <>
//         <button onClick={Fun}>Click</button>
//         <div ref={reference}>Hello</div>
//     </>
//   )
// }

// export default Day3_Reducer


// import React from 'react'
// import { my_asset } from './assets/asset'
// import { useRef } from 'react'

// const Day3_Reducer = () => {

//     const reference = useRef()

//     const Fun = () => {
//         reference.current.style.width = "250px"
//     }

//   return (
//     <>
//         <button onClick={Fun}>Click</button>
//         <img ref={reference} src={my_asset.Img1} alt="" />
//     </>
//   )
// }

// export default Day3_Reducer


import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const Day3_Reducer = () => {

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
    </>
  )
}

export default Day3_Reducer