// import React, { useState } from 'react'

// const Day7 = () => {

//     const [theme , setTheme] = useState(true)

//     const Fun = () => {
//         setTheme(!theme)
//     }

//     var obj = {
//         color : theme ? "black" : "white",
//         backgroundColor : theme ? "white" : "black"
//     }

//   return (
//     <div style={obj}>
//         <button onClick={Fun}>Change theme</button>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse numquam asperiores recusandae quia, quaerat architecto quam voluptatibus corporis itaque. Vitae quos quibusdam nostrum voluptas accusamus eos blanditiis error enim debitis.</p>
//     </div>
//   )
// }

// export default Day7


// import React, { useState } from 'react'

// const Day7 = () => {

//     const [input , setInput] = useState("")

//     const Display = (e) => {
//         // console.log(e.target.value)
//         setInput(input + e.target.value)
//     }

//     const sumFun = () => {
//         try{
//             setInput(eval(input))
//         }catch(error){
//             alert("Invalid")
//             setInput("")
//         }
//     }

//     const clearFun = () => {
//         setInput("")
//     }

//     const deleteFun = () => {
//         setInput(input.slice(0 , -1))
//     }

//   return (
//     <>

//         <form>
//             <input type="text" readOnly value={input} />

//             <div>
//                 <input type="button" onClick={Display} value="1" />
//                 <input type="button" onClick={Display} value="2" />
//                 <input type="button" onClick={Display} value="3" />
//                 <input type="button" onClick={Display} value="4" />
//             </div>

//             <div>
//                 <input type="button" onClick={Display} value="5" />
//                 <input type="button" onClick={Display} value="6" />
//                 <input type="button" onClick={Display} value="7" />
//                 <input type="button" onClick={Display} value="8" />
//             </div>

//             <div>
//                 <input type="button" onClick={Display} value="9" />
//                 <input type="button" onClick={Display} value="0" />
//                 <input type="button" onClick={Display} value="00" />
//                 <input type="button" onClick={Display} value="." />
//             </div>

//             <div>
//                 <input type="button" onClick={Display} value="+" />
//                 <input type="button" onClick={Display} value="-" />
//                 <input type="button" onClick={Display} value="*" />
//                 <input type="button" onClick={Display} value="/" />
//             </div>

//             <div>
//                 <input type="button" onClick={sumFun} value="=" />
//                 <input type="button" onClick={clearFun} value="C" />
//                 <input type="button" onClick={deleteFun} value="DE" />
//             </div>

//         </form>
        
//     </>
//   )
// }

// export default Day7

// Use Effect

import React, { useEffect, useState } from 'react'

const Day7 = () => {

    const [count , setCount] = useState(0)

    const AddFun = () => {
        setCount(count + 1)
    }

    console.log("component rerendering")

    // syntax

    // useEffect(() => {

    // } , [])

    // with dependency

    // useEffect(() => {
    //     console.log("number changing")
    // } , [count])

    // empty dependency

    // useEffect(() => {
    //     console.log("number changing")
    // } , [])

    // no dependency

    // useEffect(() => {
    //     console.log("number changing")
    // })

  return (
    <>
        <button onClick={AddFun}>Add</button>

        <h1>{count}</h1>
    </>
  )
}

export default Day7