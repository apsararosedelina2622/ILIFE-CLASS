// USE EFFECT 

// useEffect(() => {

// }, [])

// 1. With Dependency 

// import React, { useEffect, useState } from 'react'

// const Day7 = () => {

//     var [ count, setCount ] = useState(1)

//     const countFun = () => {
//         setCount(++count)
//     }

//     useEffect(() => {
//         console.log('Number Changed');
//     }, [count])

//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={countFun}>Click</button>
//         </>
//     )
// }

// export default Day7

// 2 . Without Dependecy

// import React, { useEffect, useState } from 'react'

// const Day7 = () => {

//     var [ count, setCount ] = useState(1)

//     const countFun = () => {
//         setCount(++count)
//     }

//     useEffect(() => {
//         console.log('Number Changed');
//     }, [])

//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={countFun}>Click</button>
//         </>
//     )
// }

// export default Day7

// Example - 2

// import React, { useState, useEffect } from 'react'

// const Day7 = () => {
//     const [name, setName] = useState("");

//     useEffect(() => {
//         console.log("Name updated:", name);
//     }, [name]);

//     return (
//         <>
//             <input type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
//         </>
//     );
// }

// export default Day7

// Example - 3 

// import React, { useState, useEffect } from 'react'

// const Day7 = () => {

//     var [ bgColor, setBgColor ] = useState('white')

//     useEffect(() => {
//         document.body.style.backgroundColor = bgColor;
//         alert('Color Changed');
//     }, [bgColor])

//     return (
//         <>
//             <button onClick={() => {setBgColor('blue')}}>Blue</button>
//             <button onClick={() => {setBgColor('red')}}>Red</button>
//         </>
//     )
// }

// export default Day7