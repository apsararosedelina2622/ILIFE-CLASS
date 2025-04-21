// Variables

// import React from 'react'

// const Day2 = () => {

//     var name = "Abi";
//     var message = "Welcome to React"

//   return (
//     <>
//         <h1>Name : {name}</h1>
//         <h1>Message : {message}</h1>
//     </>
//   )
// }

// export default Day2


// import React from 'react'

// const Day2 = () => {

//     var a = 20;
//     var b = 50;

//   return (
//     <>
//         <h1>Value 1 : {a}</h1>
//         <h1>Value 2 : {b}</h1>
//         <h1>Addition : {a + b}</h1>
//     </>
//   )
// }

// export default Day2


// Array

// import React from 'react'

// const Day2 = () => {

//     var arr = ["HTML" , "CSS" , "BOOTSTRAP" , "JAVA SCRIPT" , "REACT"];

//   return (
//     <>
//         <dl>
//             <dt>Course</dt>
//             <dd>{arr[0]}</dd>
//             <dd>{arr[1]}</dd>
//             <dd>{arr[2]}</dd>
//             <dd>{arr[3]}</dd>
//             <dd>{arr[4]}</dd>
//         </dl>
//     </>
//   )
// }

// export default Day2

// Array Map

// import React from 'react'

// const Day2 = () => {

//     var arr = ["HTML" , "CSS" , "BOOTSTRAP" , "JAVA SCRIPT" , "REACT"];

//   return (
//     <>
//         <dl>
//             <dt>Course</dt>
//             {arr.map((value , index , a) => {
//                 console.log(value)
//                 // console.log(index)
//                 // console.log(a)
//                 return(
//                     <dd key={index}>{value}</dd>
//                 )
//             })}
//         </dl>
//     </>
//   )
// }

// export default Day2


// Object

// import React from 'react'

// const Day2 = () => {

//     var obj = {
//         name : "Abi",
//         age : 21,
//         place : "Trichy",
//         address : {
//             doorno : 202,
//             street : "3rd street",
//             city : "Trichy"
//         }
//     }

//   return (
//     <>
//         <h1>Name : {obj.name}</h1>
//         <h1>Age : {obj.age}</h1>
//         <h1>Place : {obj.place}</h1>
//         <h1>Address : {obj.address.doorno} , {obj.address.street} , {obj.address.city}.</h1>
//     </>
//   )
// }

// export default Day2


// JSON

// import React from 'react'

// const Day2 = () => {

//     var data = [
//         {
//             name : "Abi",
//             age : 21 , 
//             place : "Trichy"
//         },
//         {
//             name : "Banu",
//             age : 12,
//             place : "Chennai"
//         },
//         {
//             name : "Begum", 
//             age : 22,
//             place : "Karur"
//         }
//     ]

//   return (
//     <>
//         <h1>Name : {data[0].name}</h1>
//         <h1>Name : {data[2].name}</h1>
//         <h1>Place : {data[1].place}</h1>
//         <p>Total data count : {data.length}</p>
//     </>
//   )
// }

// export default Day2

// JSON Map


// import React from 'react'

// const Day2 = () => {

//     var data = [
//         {
//             name : "Abi",
//             age : 21 , 
//             place : "Trichy"
//         },
//         {
//             name : "Banu",
//             age : 12,
//             place : "Chennai"
//         },
//         {
//             name : "Begum", 
//             age : 22,
//             place : "Karur"
//         }
//     ]

//   return (
//     <>
//         {data.map((value , index) => {
//             return(
//                 <div key={index}>
//                     <h1>Name : {value.name}</h1>
//                     <p>Age : {value.age}</p>
//                     <p>Place : {value.place}</p>
//                 </div>
//             )
//         })}
//     </>
//   )
// }

// export default Day2