// import React, { useEffect, useRef } from 'react'

// const UseRef = () => {
//     const reff = useRef(null)
//     const reff1 = useRef(null)

//     useEffect(()=>{
//         reff.current.focus()
//     },[])

//     function fun(){
//         reff1.current.focus()
//     }

//   return (
//     <>
//         <input type="text" ref={reff} />
//         <input type="text" ref={reff1} />
//         <input type="submit" onClick={fun} />
//     </>
//   )
// }

// export default UseRef




// import React, { useEffect, useRef, useState } from 'react'

// const UseRef = () => {

//     const reff = useRef(null)

//     const [a,setA] = useState("")

//     useEffect(()=>{
//         reff.current = a
//     },[a])

//   return (
//     <>
//         <input type="text" onChange={(e)=>(setA(e.target.value))}/> <br/>
//         <span>current value : {a}</span> <br/>
//         <span>previous value : {reff.current}</span> <br/>
//     </>
//   )
// }

// export default UseRef





// import React, { useRef, useState } from 'react'

// const UseRef = () => {

//   const [value, setValue] = useState('')

//   const reff = useRef()

//   const display = () => {
//     console.log(reff.current.value);
//   }

//   console.log('Hello!');
  
  
//   return (
//     <div>
//       <input
//       ref={reff} 
//       type="text" 
//       // value={value}
//       // onChange={e => setValue(e.target.value)}
//       />
//       <button onClick={display}>Click!</button>
//     </div>
//   )
// }

// export default UseRef



import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {

  const [value, setValue] = useState('')

  const reff = useRef()
  const reff1 = useRef()

  useEffect(()=>{
    reff1.current.focus()
  },[])

  useEffect(() =>{
    reff.current = value
  },[value])

  const display = () => {
    console.log(reff.current);
  }

  console.log('Hello!'); 
  
  return (
    <div>
      <input type="text" ref={reff1} />
      <input
        ref={reff} 
        type="text" 
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={display}>Click!</button>
      <p>Prev : {reff.current}</p>
      <p>Current : {value}</p>
    </div>
  )
}

export default UseRef