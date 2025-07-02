// import React, { useEffect, useState } from 'react'

// const Day5_Effect_Ref = () => {

//     var [ count , setCount ] = useState(0)

//     const AddFun = () => {
//         setCount(count++)
//     }

//     // console.log("Hello")

//     // useEffect(() => {

//     // } , [])

//     useEffect(() => {
//         console.log("Hello")
//     } , [count])

//   return (
//     <>
//         <button onClick={AddFun}>Add</button>
//         <h1>{count}</h1>
//     </>
//   )
// }

// export default Day5_Effect_Ref


// import React, { useEffect, useState } from 'react'

// const Day5_Effect_Ref = () => {

//     var [ input , setInput ] = useState("")

//     var Fun = () => {
//         console.log("Working!")
//     }

//     // Fun()

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

// export default Day5_Effect_Ref


// import React, { useEffect, useState } from 'react'

// const Day5_Effect_Ref = () => {

//     var [ allData , setAllData ] = useState([])

//     var fetch_data = async () => {
//         var url = await fetch("https://jsonplaceholder.typicode.com/users")
//         var data = await url.json()
//         console.log(data)
//         setAllData(data)
//     }

//     // fetch_data()

//     useEffect(() => {
//         fetch_data()
//     } , [])

//   return (
//     <>
//         <div className="container">
//             <div className="row">
//                 {
//                     allData.map((value , index) => {
//                         return(
//                             <div className="col-3" key={index}>
//                                 <div className="card">
//                                     <div className="card-body">
//                                         <h3>{value.username}</h3>
//                                         <p>{value.name}</p>
//                                         <p>{value.email}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     </>
//   )
// }

// export default Day5_Effect_Ref


// import React, { useRef } from 'react'

// const Day5_Effect_Ref = () => {

//     var reference = useRef()

//     var Fun = () => {
//         reference.current.style.backgroundColor = "green"
//     }

//   return (
//     <>
//         <button onClick={Fun}>Click</button>
//         <h1 ref={reference}>Hello</h1>
//     </>
//   )
// }

// export default Day5_Effect_Ref


// import React, { useRef } from 'react'

// const Day5_Effect_Ref = () => {

//     var reference = useRef()

//     var Fun = () => {
//         reference.current.style.display = "none"
//     }

//   return (
//     <>
//         <button onClick={Fun}>Click</button>
//         <h1 ref={reference}>Lorem ipsum dolor sit amet.</h1>
//     </>
//   )
// }

// export default Day5_Effect_Ref


import React, { useEffect, useRef } from 'react'

const Day5_Effect_Ref = () => {

    var reference = useRef()

    var Fun = () => {
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

export default Day5_Effect_Ref