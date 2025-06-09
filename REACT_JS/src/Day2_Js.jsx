// import React from 'react'

// const Day2_Js = () => {

//     var username = "user"
//     var message = "Welcome to REACT!"

//   return (
//     <>
//         <h1>Username : {username}... {message}</h1>
//     </>
//   )
// }

// export default Day2_Js


// import React from 'react'

// const Day2_Js = () => {

//     var data = [ "HTML" , "CSS" , "BOOSTRAP" , "JS" , "REACT" ]

//   return (
//     <>
//         <ol>
//             <li>{data[0]}</li>
//             <li>{data[1]}</li>
//             <li>{data[2]}</li>
//             <li>{data[3]}</li>
//             <li>{data[4]}</li>
//         </ol>
//     </>
//   )
// }

// export default Day2_Js


// import React from 'react'

// const Day2_Js = () => {

//     var data = [ "HTML" , "CSS" , "BOOSTRAP" , "JS" , "REACT" ]

//   return (
//     <>
//         <ol>
//             {data.map((value , index) => {
//                 return(
//                     <li key={index}>{value}</li>
//                 )
//             })}
//         </ol>
//     </>
//   )
// }

// export default Day2_Js


// import React from 'react'

// const Day2_Js = () => {

//     var obj = {
//         name : "user", 
//         message : "Welcome to REACT!"
//     }

//   return (
//     <>
//         <h1>{obj.message}</h1>
//         <h1>Username : {obj.name}</h1>
//     </>
//   )
// }

// export default Day2_Js


// import React from 'react'

// const Day2_Js = () => {

//     var data = [
//         {
//             name : "Abi" , 
//             age : 21 , 
//             course : "MERN"
//         } , 
//         {
//             name : "Banu" , 
//             age : 23 , 
//             course : "MEAN"
//         } , 
//         {
//             name : "Begum" , 
//             age : 19 , 
//             course : "PYTHON"
//         } , 
//         {
//             name : "Ravi" , 
//             age : 22 , 
//             course : "JAVA"
//         } 
//     ]

//   return (
//     <>
//         <h1>Name : {data[0].name}</h1>
//         <h1>Name : {data[1].name}</h1>
//         <h1>Name : {data[2].name}</h1>
//         <h1>Name : {data[3].name}</h1>
//         <h1>Age : {data[0].age}</h1>
//         <h1>Age : {data[1].age}</h1>
//         <h1>Age : {data[2].age}</h1>
//         <h1>Age : {data[3].age}</h1>
//         <h1>Course : {data[0].course}</h1>
//         <h1>Course : {data[1].course}</h1>
//         <h1>Course : {data[2].course}</h1>
//         <h1>Course : {data[3].course}</h1>
//     </>
//   )
// }

// export default Day2_Js


// import React from 'react'

// const Day2_Js = () => {

//     var data = [
//         {
//             name : "Abi" , 
//             age : 21 , 
//             course : "MERN"
//         } , 
//         {
//             name : "Banu" , 
//             age : 23 , 
//             course : "MEAN"
//         } , 
//         {
//             name : "Begum" , 
//             age : 19 , 
//             course : "PYTHON"
//         } , 
//         {
//             name : "Ravi" , 
//             age : 22 , 
//             course : "JAVA"
//         } 
//     ]

//   return (
//     <>
//         {data.map((value , index) => {
//             return(
//                 <div key={index}>
//                     <h1>Username : {value.name}</h1>
//                     <h1>User age : {value.age}</h1>
//                     <h1>User course : {value.course}</h1>
//                 </div>
//             )
//         })}
//         <h1>{data.length}</h1>
//     </>
//   )
// }

// export default Day2_Js


import React from "react"

class Day2_Js extends React.Component{
    render(){

        var name = "user"

        return(
            <>
                <h1>Hello</h1>
                <h1>Username : {name}</h1>
            </>
        )
    }
}

export default Day2_Js