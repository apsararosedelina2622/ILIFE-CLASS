// Use State

// import React, { useState } from 'react'

// const New = () => {

//   var [num, setNum] = useState(1)

//   const addFun = () => {
//     setNum(num+1)
//   }

//   const removeFun = () => {
//     setNum(num-1)
//   }

//   return (
//     <>
//       <h1>{num}</h1>
//       <button onClick={addFun}>Add</button>
//       <button onClick={removeFun}>Remove</button>
//     </>
//   )
// }

// export default New


// import React, { useState } from 'react'

// const New = () => {

//   var [num, setNum] = useState(0);
//   var [error, setError ] = useState('');

//   const addFun = () => {
//     if(num < 10){
//       setNum(num+1)
//       setError('')
//     }
//     else{
//       setError('Maximum Limit')
//     }
//   }

//   const removeFun = () => {
//     if(num > 0){
//       setNum(num-1)
//       setError('')
//     }
//     else{
//       setError('Minimum Limit')
//     }
//   }

//   return (
//     <>
//       <h1>{num}</h1>
//       <button onClick={addFun}>Add</button>
//       <button onClick={removeFun}>Remove</button>
//       <p>{error}</p>
//     </>
//   )
// }

// export default New


// import React, { useState } from 'react';

// const New = () => {
//   const [isVisible, setIsVisible] = useState(true);

//   const toggleVisibility = () => {
//     setIsVisible(!isVisible);
//   };

//   return (
//     <div>
//       <button onClick={toggleVisibility}>
//         {isVisible ? 'Hide' : 'Show'} Text
//       </button>
//       <h1>{isVisible && 'This is some text that can be shown or hidden.'}</h1>
//     </div>
//   );
// };

// export default New;


// import React, { useState } from 'react';

// const New = () => {
//   const [time, setTime] = useState(new Date().toLocaleTimeString());

//   const updateTime = () => {
//     setTime(new Date().toLocaleTimeString());
//   };

//   setInterval(updateTime, 1000); // Update time every second

//   return (
//     <div style={{ fontSize: '50px', textAlign: 'center', marginTop: '20%' }}>
//       {time}
//     </div>
//   );
// };

// export default New;


// USE EFFECT 

// useEffect(() => {

// }, [])

// 1. With Dependency 

// import React, { useEffect, useState } from 'react'

// const New = () => {

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

// export default New

// 2 . Without Dependecy

// import React, { useEffect, useState } from 'react'

// const New = () => {

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

// export default New

// Example - 2

// import React, { useState, useEffect } from 'react'

// const New = () => {
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

// export default New

// Example - 3 

// import React, { useState, useEffect } from 'react'

// const New = () => {

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

// export default New