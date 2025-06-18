// import React, { useEffect, useState } from 'react'

// const Day2_UseEffect = () => {

//     const [ num , setNum ] = useState(0)
    
//     const AddFun = () => {
//         setNum(a => a + 1)
//     }

//     // useEffect(() => {

//     // } , [])

//     useEffect(() => {
//         console.log("Hello")
//     } , [])
    
//   return (
//     <>
//         <button onClick={AddFun}>Add</button>
//         <h1>{num}</h1>
//     </>
//   )
// }

// export default Day2_UseEffect


// import React, { useEffect, useState } from 'react'

// const Day2_UseEffect = () => {

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

// export default Day2_UseEffect


import React, { useEffect, useState } from 'react'

const Day2_UseEffect = () => {

    const [ allData , setAllData ] = useState([])

    const FetchData = async () => {
        const url = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await url.json()
        console.log(data)
        setAllData(data)
    }

    useEffect(() => {
        FetchData()
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

export default Day2_UseEffect