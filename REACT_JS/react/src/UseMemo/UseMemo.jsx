// import React, { useMemo, useState } from "react";

// const UseMemo = () => {

//     const [num,setNum] = useState(0)
//     const [theme,setTheme] = useState(false)

//     const themeColor = {
//         color : theme ? 'black' : 'white',
//         background : theme ? 'white' : 'black'
//     }

//     const val = useMemo(()=>{
//         return slow(num)
//     },[num])

//     return(
//         <div style={themeColor}>
//         <h2>{val}</h2>
//         <button onClick={()=>setNum(num+1)}>Click</button>
//         <button onClick={()=>setTheme(!theme)}>Theme</button>
//         </div>
//     )
// }

// function slow(num){
//     console.log('Changed');   
//     for(let i=0; i>10000000000000; i++){}
//     return num
// }

// export default UseMemo





import React, { useEffect, useMemo, useState } from 'react'

const Cls = () => {

  const [num, setNum] = useState(0)

  const [theme, setTheme] = useState(false)

  // const value = Slow(num)

  const value = useMemo(()=>{
    return Slow(num)
  },[num])

  // const [value, setValue] = useState()

  // useEffect(()=>{
  //   setValue(Slow(num))
  // },[num])

  const themeStyle = useMemo(()=>{
    console.log("Theme Changing");
    return {
      color : theme ? 'white' : 'black',
      background : theme ? 'black' : 'white'
    }
  },[theme])

  // condition ? true : false

  return (
    <div style={themeStyle}>
      <h1>{value}</h1>
      <input type="text" value={num} onChange={e => setNum(e.target.value)} />
      <button onClick={()=> setTheme(!theme)}>Change Theme</button>
    </div>
  )
}

export default Cls


function Slow(num){
  console.log('Slow Function Working');
  for(let i = 1; i <= 10000000; i++){}
  return num * 2;
}