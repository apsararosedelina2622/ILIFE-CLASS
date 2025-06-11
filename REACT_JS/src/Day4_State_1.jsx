// import React from 'react'

// const Day4_State_1 = () => {

//     var num = 1

//     const AddFun = () => {
//         num++
//         console.log(num)
//     }

//   return (
//     <>
//         <h1>{num}</h1>
//         <button onClick={AddFun}>Add</button>
//     </>
//   )
// }

// export default Day4_State_1


// import React, { useState } from 'react'

// const Day4_State_1 = () => {

//     const [ num , setNum ] = useState(1)

//     const AddFun = () => {
//         if(num < 5){
//             setNum(num + 1)
//         }
//     }

//     const RemoveFun = () => {
//         if(num > 0){
//             setNum(num - 1)
//         }
//     }

//   return (
//     <>
//         <h1>{num}</h1>
//         <button onClick={AddFun}>Add</button>
//         <button onClick={RemoveFun}>Remove</button>
//     </>
//   )
// }

// export default Day4_State_1


// import React, { useState } from 'react'

// const Day4_State_1 = () => {

//     const [ visible , setVisible ] = useState(true)

//     const ToggleFun = () => {
//         setVisible(!visible)
//     }

//   return (
//     <>
//         <button onClick={ToggleFun}>{visible ? "Hide" : "Show"}</button>
//         { visible && <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae accusamus incidunt ratione laborum, sapiente facilis veniam architecto ex velit fugit dolor sit adipisci saepe, ullam consequatur vitae laboriosam reiciendis dolorem.</h1> }
//     </>
//   )
// }

// export default Day4_State_1


import React, { useState } from 'react'

const Day4_State_1 = () => {

    const [ show , setShow ] = useState(false)

    const ToggleFun = () => {
        setShow(!show)
    }

  return (
    <>
        <input type={show ? "text" : "password"} />
        <button onClick={ToggleFun}>{show ? "hide" : "show"}</button>
    </>
  )
}

export default Day4_State_1