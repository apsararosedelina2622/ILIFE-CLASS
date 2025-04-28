// import React, { useEffect, useRef, useState } from 'react'

// const Day10 = () => {

//     const [input , setInput] = useState("")
//     const reference = useRef()
//     const ref1 = useRef()

//     const Display = () => {
//         console.log(reference.current)
//     }

//     useEffect(() => {
//         // reference.current.focus()
//         ref1.current.focus()
//     } , [])

//     useEffect(() => {
//         reference.current = input
//     } , [input])

//     console.log("Component Rerendering")

//   return (
//     <>
//         <input 
//             ref={reference}
//             type="text" 
//             onChange={e => setInput(e.target.value)}
//         />
//         <input type="text" ref={ref1} />
//         <h1>Current : {input}</h1>
//         <h1>Prev : {reference.current}</h1>

//         <button onClick={Display}>Click</button>
//         {/* <h1>{reference.current.value}</h1> */}
//     </>
//   )
// }

// export default Day10


import React, { useEffect, useRef, useState } from 'react'

const Day10 = () => {

    const [input , setInput] = useState("")
    const refernce  = useRef()

    const Display = () => {
        console.log(refernce.current)
    }

    useEffect(() => {
        refernce.current.focus()
    } , [])

    useEffect(() => {
        refernce.current = input
    } , [input])

    console.log("Hello!")

  return (
    <>
        <input 
            ref={refernce}
            type="text" 
            onChange={e => setInput(e.target.value)}
        />
        <h1>{input}</h1>
        <h1>{refernce.current}</h1>
        <button onClick={Display}>Click</button>
    </>
  )
}

export default Day10