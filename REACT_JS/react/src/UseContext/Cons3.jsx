// import React, { useContext } from 'react'
// import { ContextNew } from './UseContext'

// const Cons3 = () => {
//   const {a} = useContext(ContextNew)
//   return (
//     <div>Place : {a.place}</div>
//   )
// }

// export default Cons3


// import React, { useContext } from 'react'
// import { MyContext } from './UseContext'

// const Cons3 = () => {
//   const {a} = useContext(MyContext)
//   return (
//     <div>
//       Context 3
//       <h1>City : {a.city}</h1>
//     </div>
//   )
// }

// export default Cons3




// import React, { useContext } from 'react'
// import { MyContext } from './UseContext'

// const Cons3 = () => {
//   const {num, Inc, Dec} = useContext(MyContext)
//   return (
//     <div>
//       <button onClick={Dec}>-</button>
//       <span>{num}</span>
//       <button onClick={Inc}>+</button>
//     </div>
//   )
// }

// export default Cons3




// import React, { useContext } from 'react'
// import { MyContext } from './UseContext'

// const Cons3 = () => {
//   const { a } = useContext(MyContext)
//   return (
//     <div>
//       <p>Place : {a.place}</p>
//     </div>
//   )
// }

// export default Cons3


import React, { useContext } from 'react'
import { MyContext } from './UseContext'

const Cons3 = () => {
  const {num , Inc, Dec} = useContext(MyContext)
  return (
    <div>
      <button onClick={Dec}>-</button>
      <span>{num}</span>
      <button onClick={Inc}>+</button>
    </div>
  )
}

export default Cons3