// import React, { useEffect, useState } from 'react'

// const Day7_Effect = () => {

//     const [ count , setCount ] = useState(0)

//     const AddFun = () => {
//         setCount(a => a + 1)
//     }

//     // useEffect(() => {

//     // } , [])

//     useEffect(() => {
//         console.log("number changed")
//     } , [count])

//   return (
//     <>
//         <button onClick={AddFun}>Add</button>
//         <h1>{count}</h1>
//     </>
//   )
// }

// export default Day7_Effect


// import React, { useEffect, useState } from 'react'

// const Day7_Effect = () => {

//     const [ input , setInput ] = useState("")

//     const Fun = () => {
//         console.log("Hello")
//     }

//     useEffect(() => {
//         Fun()
//     } , [])

//   return (
//     <>
//         <input type="text" onChange={e => setInput(e.target.value)} />
//         <h1>{input}</h1>
//     </>
//   )
// }

// export default Day7_Effect


import React, { useEffect, useState } from 'react'

const Day7_Effect = () => {

    const [ allData , setAllData ] = useState([])

    const Fetch_Data = async () => {
        const url = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await url.json()
        console.log(data)
        setAllData(data)
    }

    useEffect(() => {
        Fetch_Data()
    } , [])

  return (
    <>
        {
            allData.map((value , index) => {
                return(
                    <div key={index}>
                        <h1>{value.name}</h1>
                    </div>
                )
            })
        }
    </>
  )
}

export default Day7_Effect