// import React from 'react'

// export const ContextNew = React.createContext();

// const UseContext = ({children}) => {
//     const a = {
//       name :"Banu",
//       age : "21",
//       place : "Trichy",
//       mobile : '234567890'
//     };
//   return (
//     <ContextNew.Provider value={{a}}>
//         {children}
//     </ContextNew.Provider>
//   )
// }

// export default UseContext




// import React from 'react'

// export const MyContext = React.createContext();

// const UseContext = ({children}) => {
//   let a = {
//     name : 'Banu',
//     age : 21,
//     city : 'Trichy'
//   }

//   return (
//     <MyContext.Provider value={{a}}>
//       {children}
//     </MyContext.Provider>
//   )
// }

// export default UseContext





// import React, { useState } from 'react'

// export const MyContext = React.createContext();

// const UseContext = ({children}) => {

//     const [name , setName] = useState('Abi')

//     const data = [
//         {
//             name : 'Banu',
//             age : 21,
//             place : 'Trichy'
//         },
//         {
//             name : 'Sheganaz',
//             age : 21,
//             place : 'Chennai'
//         }
//     ]

//     const [num , setNum] = useState(0)

//     const Inc = () =>{
//         setNum(num + 1)
//     }

//     const Dec = () =>{
//         setNum(num - 1)
//     }

//     const contextValue = {
//         name, setName,
//         data,
//         num, Inc, Dec
//     }

//   return (
//     <MyContext.Provider value={contextValue}>
//         {children}
//     </MyContext.Provider>
//   )
// }

// export default UseContext




// import React from 'react'

// export const MyContext = React.createContext()

// const UseContext = ({ children }) => {
//     const a = {
//         name : 'Sheganaz',
//         age : 21,
//         place : 'Trichy'
//     }
//   return (
//     <MyContext.Provider value={{a}}>
//         {children}
//     </MyContext.Provider>
//   )
// }

// export default UseContext



// import React, { useState } from 'react'

// export const MyContext = React.createContext();

// const UseContext = ({children}) => {

//   const [name , setName] = useState("Banu")

//   const ChangeName = () =>{
//     setName('Sheganaz')
//   }

//   const data = [
//     {
//       name : 'Abi',
//       age : 21
//     },
//     {
//       name : 'Bhavi',
//       age : 23
//     }
//   ]

//   const [num, setNum] = useState(0)

//   const Inc = () => {
//     setNum(num + 1)
//   }

//   const Dec = () => {
//     setNum(num - 1)
//   }

//   const ContextValue ={
//     name, ChangeName,
//     data,
//     num, Inc, Dec
//   }

//   return (
//     <MyContext.Provider value={ContextValue}>
//       {children}
//     </MyContext.Provider>
//   )
// }

// export default UseContext



import React, { useState } from 'react'

export const MyContext = React.createContext()

const UseContext = ({children}) => {

  const [name, setName] = useState('Banu')

  // const ChangeName = () =>{
  //   setName("Bhavi")
  // }

  const [value , setValue] = useState(0)

  const Inc = () =>{
    setValue( value + 1 )
  }

  const Dec = () =>{
    setValue( value - 1 )
  }

  const ContextValue = {
    name, setName,
    value, Inc, Dec
  }

  return (
    <MyContext.Provider value={ContextValue}>
      {children}
    </MyContext.Provider>
  )
}

export default UseContext