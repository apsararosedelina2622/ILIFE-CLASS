// import React, { useState, useCallback, useEffect } from 'react'

// function UseCallback() {

//     const [num, setNum] = useState(0);
//     const [theme, setTheme] = useState(false);
//     const [res, setRes] = useState([]);

//     const getFun = useCallback(()=>{
//         console.log('Changed')
//         return [num-1, num, num+1];
//     },[num])

//     useEffect(()=>{
//         setRes(getFun())
//     },[getFun])

//     const styleObj = {
//         background : theme ? 'black' : 'white',
//         color : theme ? 'white' : 'black'
//     }

//     return (
//         <div style={styleObj}>
//             <h1>{res}</h1>
//             <button onClick={()=>setNum(num + 1)}>Increase</button>
//             <button onClick={()=>setTheme(!theme)}>Toggle Theme</button>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quod eos, eum quaerat rem sapiente magnam sed recusandae consequuntur alias debitis quo sint nam, nemo ipsum ullam, beatae repellat facere!
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore sed ullam facere quibusdam? Laudantium porro autem fugit enim voluptatum a quas praesentium et molestiae, ipsam odio consequuntur doloremque ducimus alias?
//         </div>
//     )

// }

// export default UseCallback






import React, { useCallback, useMemo, useState } from 'react'
import Practice from './Practice'

const UseCallback = () => {

  const [num, setNum] = useState(0)

  const [theme, setTheme] = useState(false)

  // const getItems = () => {
  //   return [num + 1, num + 2, num + 3]
  // }

  const getItems = useCallback(() => {
    return [num + 1, num + 2, num + 3]
  },[num])

  // const getItems = useMemo(() => {
  //   return [num + 1, num + 2, num + 3]
  // },[num])

  const Style = {
    color : theme ? 'white' : 'black',
    background : theme ? 'black' : 'white'
  }

  return (
    <div style={Style}>
      <input type="text" value={num} onChange={e => setNum(Number(e.target.value))} />
      <button onClick={() => setTheme(!theme)}>Change Theme</button>
      <Practice getItems={getItems} />
    </div>
  )
}

export default UseCallback




// import React, { useEffect, useState } from 'react'

// const Practice = ({getItems}) => {

//   const [items, setItems] = useState([])

//   useEffect(()=>{
//     setItems(getItems())
//     // setItems(getItems)
//     console.log("Get Items Function Working");
//   },[getItems])

//   return (
//     <div>
//       {items.map((value,index) => {
//         return(
//           <div key={index}>
//             <p>{value}</p>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default Practice