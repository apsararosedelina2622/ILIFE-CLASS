// import React from 'react'

// const Day1_Js = () => {

//     const data = "USER"
//     var age = 21

//   return (
//     <>
//         <h1>NAME : {data}</h1>
//         <h1>AGE : {age}</h1>
//     </>
//   )
// }

// export default Day1_Js


// import React from 'react'

// const Day1_Js = () => {

//     var data = [ "html" , "css" , "js" , "react" ]

//   return (
//     <>
//         <h1>{data[0]}</h1>
//         <h1>{data[1]}</h1>
//         <h1>{data[2]}</h1>
//         <h1>{data[3]}</h1>
//     </>
//   )
// }

// export default Day1_Js


// import React from 'react'

// const Day1_Js = () => {

//     var data = [ "html" , "css" , "js" , "react" ]

//   return (
//     <>
//         <h3>ARRAY</h3>
//         {
//             data.map((value , index , array) => {
//                 return(
//                     <div key={index}>
//                         <p>{value}</p>
//                         <p>{index}</p>
//                     </div>
//                 )
//             })
//         }
//     </>
//   )
// }

// export default Day1_Js


// import React from 'react'

// const Day1_Js = () => {

//     var data = {
//         name : "Abi" , 
//         age : 21 , 
//         place : "Trichy"
//     }

//   return (
//     <>
//         <h1>Name : {data.name}</h1>
//         <h1>Age : {data.age}</h1>
//         <h1>Place : {data.place}</h1>
//     </>
//   )
// }

// export default Day1_Js

// import React from 'react'

// const Day1_Js = () => {

//     var data = [
//         {
//             name : "Banu" , 
//             age : 21 , 
//             place : "Trichy"
//         } , 
//         {
//             name : "Begum" , 
//             age : 23 , 
//             place : "Chennai"
//         } , 
//         {
//             name : "Abi" , 
//             age : 24 , 
//             place : "Madurai"
//         }
//     ]

//   return (
//     <>
//         <h1>{data[0].name}</h1>
//         <h1>{data[0].age}</h1>
//         <h1>{data[0].place}</h1>
//         <h1>{data[1].name}</h1>
//         <h1>{data[1].age}</h1>
//         <h1>{data[1].place}</h1>
//         <h1>{data[2].name}</h1>
//         <h1>{data[2].age}</h1>
//         <h1>{data[2].place}</h1>
//     </>
//   )
// }

// export default Day1_Js

// import React from 'react'

// const Day1_Js = () => {

//      var data = [
//         {
//             name : "Banu" , 
//             age : 21 , 
//             place : "Trichy"
//         } , 
//         {
//             name : "Begum" , 
//             age : 23 , 
//             place : "Chennai"
//         } , 
//         {
//             name : "Abi" , 
//             age : 24 , 
//             place : "Madurai"
//         }
//     ]

//   return (
//     <>
//         {
//             data.map((value , index) => {
//                 return(
//                     <div key={index}>
//                         <p>Name : {value.name}</p>
//                         <p>Age : {value.age}</p>
//                         <p>Place : {value.place}</p>
//                     </div>
//                 )
//             })
//         }
//     </>
//   )
// }

// export default Day1_Js


import React from 'react'

const Day1_Js = () => {
  
    var Fun = async () => {
        const url = await fetch("https://jsonplaceholder.typicode.com/users")
        var data = await url.json()
        console.log(data)
    }

    Fun()

}

export default Day1_Js