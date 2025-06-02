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

//     // console.log('Number Changed');

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
//             <h1>{name}</h1>
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




// // Example - 4

import React, { useEffect, useState } from 'react'

const Day8 = () => {

    const [data , setData] =useState([])

    const fetchData = async () => {
        const url = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const data = await url.json()
        console.log(data)
        setData(data)
    }

    useEffect(() => {
      fetchData()
    } , [])

  return (
    <>
        <div className="container">
            <div className="row">
                {data.map((value , index) => {
                    return(
                        <div className='col-3 my-3' key={index}>
                            <div className="card">
                                <div className="card-body">
                                    <h5>{value.name}</h5>
                                    <p>User Name : {value.username}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default Day8