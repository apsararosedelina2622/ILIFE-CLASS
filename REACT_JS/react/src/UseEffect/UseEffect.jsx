// import React, { useEffect } from 'react'

// function UseEffect() {

//     useEffect(() => {

//       return (() => {
//         async function fetchdata(){
//             const url = await fetch("https://jsonplaceholder.org/posts")
//             console.log(await url.json());
//         }
//         fetchdata();
//       })
//     }, [])

//     return(
//         <>
//           <h1>Hello!</h1>
//           <p>Hii</p>
//         </>
//     )

// }

// export default UseEffect



import React, { useState, useEffect } from 'react';

const UseEffect = () => {
  
  const [num, setNum] = useState(0)

  const Dec = () =>{
    setNum(num - 1)
  }

  const Inc = () =>{
    setNum(num + 1)
  }

  useEffect(() => {
    console.log('Number changed:', num);
  }, [num]); 

  return (
    <div>
      <button onClick={Dec}>-</button>
      <p>{num}</p>
      <button onClick={Inc}>+</button>
      <p>Hello</p>
    </div>
  );
};

export default UseEffect;
