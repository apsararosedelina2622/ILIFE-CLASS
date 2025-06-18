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

// import React, { useEffect, useRef } from 'react'

// const Day10 = () => {

//     const reference = useRef()

//     useEffect(() => {
//         reference.current.focus()
//     } , [])

//   return (
//     <>
//       <input type="text" ref={reference} />
//       <input type="text" />
//     </>
//   )
// }

// export default Day10






// Use Ref

// Example - 1

// import React, { useRef } from "react";

// const Day9_Ref = () => {

//   const reference = useRef("");

//   const refFun = () => {
//     reference.current.style.background = "red"
//   }

//   return (
//     <>
//       <button onClick={refFun}>
//         Change Color
//       </button>

//       <div ref={reference}>Box</div>
//     </>
//   );
// };

// export default Day9_Ref;

// Example - 2

// import React, { useRef } from "react";

// const Day9_Ref = () => {
//   const reference = useRef();

//   const handleHide = () => {
//     reference.current.style.display = "none";
//   };

//   return (
//     <>
//       <p ref={reference}>I am a paragraph!</p>
//       <button onClick={handleHide}>Hide Paragraph</button>
//     </>
//   );
// };

// export default Day9_Ref;

// Example - 3

// import React, { useRef } from 'react'

// const Day9_Ref = () => {

//   const reference = useRef()

//   const refFun = () => {
//     reference.current.style.width = '350px'
//   }

//   return (
//     <>
//       <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="" ref={reference} width='250'/>
//       <br />
//       <button onClick={refFun}>Click</button>
//     </>
//   )
// }

// export default Day9_Ref

// Example - 4 

// import React, { useEffect, useRef } from 'react'

// const Day9_Ref = () => {

//   const reference = useRef()

//   // const refFun = () => {
//   //   reference.current.focus()
//   // }

//   useEffect(() => {
//     reference.current.focus()
//   }, [])

//   return (
//     <>
//       <input type="text" ref={reference} />
//       {/* <button onClick={refFun}>Click</button> */}
//     </>
//   )
// }

// export default Day9_Ref