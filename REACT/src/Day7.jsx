// Use Effect

// No Dependency =>  Runs when component loads and also Run when changes on the component

// import React from 'react'
// import { useEffect } from 'react'

// const Day7_Effect = () => {

//   useEffect(() => {
//     console.log("Running")
//   })

//   return (
//     <>
//       fghjklfghjkfghj
//     </>
//   )
// }

// export default Day7_Effect


// Empty Dependency =>  Run only once when component loads.

// import React from 'react'
// import { useEffect } from 'react'

// const Day7_Effect = () => {

//   useEffect(() => {
//     console.log("Empty Dependency")
//   } , [])

//   return (
//     <>
//       <p>Hello</p>
//     </>
//   )
// }

// export default Day7_Effect


// With Dependency

// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'

// const Day7_Effect = () => {

//   const [count , setCount] = useState(0)

//   const Fun = () => {
//     setCount(count + 1)
//   }

//   // console.log("Count Increasing")

//   useEffect(() => {
//     console.log("Count Increasing")
//   } , [count])

//   return (
//     <>
//       <button onClick={Fun}>Add</button>
//       <h1>{count}</h1>
//     </>
//   )
// }

// export default Day7_Effect

import React, { useState } from 'react'

const Day7_Effect = () => {

  const [input , setInput] = useState("")

  const display = (e) => {
    setInput(input + e.target.value)
    // console.log(e)
  }

  const sumFun = () => {
    setInput(eval(input))
  }

  const clearFun = () =>{
    setInput("")
  }

  const deleteFun = () => {
    setInput(input.slice(0 , -1))
  }

  return (
    <>
      <form action="">
        <input type="text" value={input} readOnly/>

        <div>
          <input type="button" onClick={display} value="1" />
          <input type="button" onClick={display} value="2" />
          <input type="button" onClick={display} value="3" />
          <input type="button" onClick={display} value="4" />
        </div>
        <div>
          <input type="button" onClick={display} value="5" />
          <input type="button" onClick={display} value="6" />
          <input type="button" onClick={display} value="7" />
          <input type="button" onClick={display} value="8" />
        </div>
        <div>
          <input type="button" onClick={display} value="9" />
          <input type="button" onClick={display} value="0" />
          <input type="button" onClick={display} value="00" />
          <input type="button" onClick={display} value="." />
        </div>
        <div>
          <input type="button" onClick={display} value="+" />
          <input type="button" onClick={display} value="-" />
          <input type="button" onClick={display} value="*" />
          <input type="button" onClick={display} value="/" />
        </div>
        <div>
          <input type="button" onClick={sumFun} value="=" />
          <input type="button" onClick={clearFun} value="C" />
          <input type="button" onClick={deleteFun} value="DE" />
        </div>
      </form>
    </>
  )
}

export default Day7_Effect