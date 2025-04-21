// import React, { useContext } from 'react'
// import { ContextNew } from './UseContext'

// const Cons1 = () => {
//   const {a}=useContext(ContextNew)
//   return (
//     <div>Name : {a.name}</div>
//   )
// }

// export default Cons1




// import React, { useContext } from 'react'
// import { MyContext } from './UseContext'

// const Cons1 = () => {
//   const { a } = useContext(MyContext)
//   return (
//     <div>
//       Context 1
//       <h1>Name : {a.name}</h1>
//     </div>
//   )
// }

// export default Cons1




// import React, { useContext } from 'react'
// import { MyContext } from './UseContext'

// const Cons1 = () => {
//   const { name, setName } = useContext(MyContext)
//   return (
//     <div>
//       <p>Student Name : {name}</p> 
//       <button onClick={() => setName('Sheganaz')}>Change Name</button>
//     </div>
//   )
// }

// export default Cons1




// import React, { useContext } from 'react'
// import { MyContext } from './UseContext'

// const Cons1 = () => {
//   const { a } = useContext(MyContext)
//   return (
//     <div>
//       <p>Name : {a.name}</p>
//     </div>
//   )
// }

// export default Cons1



// import React, { useContext } from 'react'
// import { MyContext } from './UseContext'

// const Cons1 = () => {
//   const {name, ChangeName} = useContext(MyContext)
//   return (
//     <div>
//       <p>Name : {name}</p>
//       <button onClick={ChangeName}>Change Name</button>
//     </div>
//   )
// }

// export default Cons1



import React, { useContext } from 'react'
import { MyContext } from './UseContext'

const Cons1 = () => {

  const {name, setName} = useContext(MyContext)

  return (
    <div>
      <p>Name : {name}</p>
      <button onClick={()=> setName("Abi")}>Change Name</button>
    </div>
  )
}

export default Cons1
