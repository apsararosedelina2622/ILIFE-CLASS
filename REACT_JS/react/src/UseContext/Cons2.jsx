// import React, { useContext } from 'react'
// import { ContextNew } from './UseContext'

// const Cons2 = () => {
//   const {a} = useContext(ContextNew)
//   return (
//     <div>Age : {a.age}, Mobile : {a.mobile}</div>
//   )
// }

// export default Cons2



// import React, { useContext } from 'react'
// import { MyContext } from './UseContext'

// const Cons2 = () => {
//   const { a } = useContext(MyContext)
//   return (
//     <div>
//       Context 2
//       <h1>Age : {a.age}</h1>
//     </div>
//   )
// }

// export default Cons2


// import React, { useContext } from 'react'
// import { MyContext } from './UseContext'

// const Cons2 = () => {
//   const { data } = useContext(MyContext)
//   return (
//     <div>
//       {data.map((a,b) => {
//         return(
//           <div>
//             <p>Name : {a.name}</p>
//             <p>Age : {a.age}</p>
//             <p>Place : {a.place}</p>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default Cons2







// import React, { useContext } from 'react'
// import { MyContext } from './UseContext'

// const Cons2 = () => {

//   const { a } = useContext(MyContext)

//   return (
//     <div>
//       <p>Age : {a.age}</p>
//     </div>
//   )
// }

// export default Cons2




// import React, { useContext } from 'react'
// import { MyContext } from './UseContext'

// const Cons2 = () => {
//   const {data} = useContext(MyContext)
//   return (
//     <div>
//       {data.map((a,b)=>{
//        return(
//         <div key={b}>
//            <p>Name : {a.name} , Age : {a.age}</p>
//         </div>
//        ) 
//       })}
//     </div>
//   )
// }

// export default Cons2



import React, { useContext } from 'react'
import { MyContext } from './UseContext'

const Cons2 = () => {

  const { value, Inc, Dec } = useContext(MyContext)

  return (
    <div>
      <p>{value}</p>
      <button onClick={Inc}>+</button>
      <button onClick={Dec}>-</button>
    </div>
  )
}

export default Cons2

