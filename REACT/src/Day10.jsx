// useRef

// Example - 1

// import React, { useState } from 'react'

// const Day10 = () => {

//     const [input , setInput] = useState("")

//     console.log("Component Rerendering")

//   return (
//     <>
//         <input 
//             type="text" 
//             onChange={e=> setInput(e.target.value)}
//         />
//         <h1>{input}</h1>
//     </>
//   )
// }

// export default Day10



// import React, { useRef, useState } from 'react'

// const Day10 = () => {

//     // const [input , setInput] = useState("")
//     const refernce = useRef()

//     const Display = () => {
//         console.log(refernce.current.value)
//     }

//     console.log("Component Rerendering")

//   return (
//     <>
//         <input 
//             type="text" 
//             ref={refernce}
//             // onChange={e=> setInput(e.target.value)}
//         />
//         {/* <h1>{input}</h1> */}
//         <button onClick={Display}>Click</button>
//         <h1>{refernce.current.value}</h1>
//     </>
//   )
// }

// export default Day10


// Example - 2

// import React, { useEffect, useRef, useState } from 'react'

// const Day10 = () => {

//     const [input , setInput] = useState("")
//     const refernce = useRef()

//     const Display = () => {
//         console.log(refernce.current)
//     }

//     useEffect(() => {
//         refernce.current = input;
//     } , [input])

//     console.log("Component Rerendering")

//   return (
//     <>
//         <input 
//             type="text" 
//             ref={refernce}
//             onChange={e=> setInput(e.target.value)}
//         />
//         {/* <h1>{input}</h1> */}
//         <button onClick={Display}>Click</button>
//         {/* <h1>{refernce.current.value}</h1> */}
//         <h1>Current : {input}</h1>
//         <h1>{refernce.current}</h1>
//     </>
//   )
// }

// export default Day10


// Example - 3

import React, { useEffect, useRef } from 'react'

const Day10 = () => {

    const reference = useRef()

    useEffect(() => {
        reference.current.focus()
    } , [])

  return (
    <>
      <input type="text" ref={reference} />
      <input type="text" />
    </>
  )
}

export default Day10