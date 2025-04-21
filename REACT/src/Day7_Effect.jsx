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

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Day7_Effect = () => {

  const [count , setCount] = useState(0)

  const Fun = () => {
    setCount(count + 1)
  }

  // console.log("Count Increasing")

  useEffect(() => {
    console.log("Count Increasing")
  } , [count])

  return (
    <>
      <button onClick={Fun}>Add</button>
      <h1>{count}</h1>
    </>
  )
}

export default Day7_Effect