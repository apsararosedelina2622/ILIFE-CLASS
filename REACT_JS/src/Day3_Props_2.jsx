// import React from 'react'

// const Day3_Props_2 = (props) => {

//     console.log(props)
//     console.log(props.message)

//   return (
//     <>
//         <h1>{props.message}</h1>
//     </>
//   )
// }

// export default Day3_Props_2


// import React from 'react'

// const Day3_Props_2 = ({ message }) => {
//   return (
//     <>
//         <h1>{message}</h1>
//     </>
//   )
// }

// export default Day3_Props_2


// import React from 'react'

// const Day3_Props_2 = (props) => {

//     console.log(props)

//   return (
//     <>
//         <h1>{props.message}</h1>
//     </>
//   )
// }

// export default Day3_Props_2



// import React from 'react'

// const Day3_Props_2 = ({ message }) => {

//   return (
//     <>
//         <h1>{message}</h1>
//     </>
//   )
// }

// export default Day3_Props_2

// import React from 'react'

// const Day3_Props_2 = (props) => {

//     console.log(props)

//   return (
//     <>
//         <h1>{props.data[0]}</h1>
//         <h1>{props.data[1]}</h1>
//         <h1>{props.data[2]}</h1>
//         <h1>{props.data[3]}</h1>
//     </>
//   )
// }

// export default Day3_Props_2


// import React from 'react'

// const Day3_Props_2 = ({ data }) => {

//   return (
//     <>
//         <h1>{data[0]}</h1>
//         <h1>{data[1]}</h1>
//         <h1>{data[2]}</h1>
//         <h1>{data[3]}</h1>
//     </>
//   )
// }

// export default Day3_Props_2


// import React from 'react'

// const Day3_Props_2 = (props) => {
//   return (
//     <>
//         {props.data.map((value , index) => {
//             return(
//                 <h1 key={index}>{value}</h1>
//             )
//         })}
//     </>
//   )
// }

// export default Day3_Props_2



// import React from 'react'

// const Day3_Props_2 = ({ data }) => {
//   return (
//     <>
//         {data.map((value , index) => {
//             return(
//                 <h1 key={index}>{value}</h1>
//             )
//         })}
//     </>
//   )
// }

// export default Day3_Props_2

// import React from 'react'

// const Day3_Props_2 = (props) => {
//   return (
//     <>
//         <h1>Name : {props.obj.name}</h1>
//         <h1>Age : {props.obj.age}</h1>
//         <h1>Course : {props.obj.course}</h1>
//         <h1>Place : {props.obj.place}</h1>
//     </>
//   )
// }

// export default Day3_Props_2


// import React from 'react'

// const Day3_Props_2 = ({ obj }) => {
//   return (
//     <>
//         <h1>Name : {obj.name}</h1>
//         <h1>Age : {obj.age}</h1>
//         <h1>Course : {obj.course}</h1>
//         <h1>Place : {obj.place}</h1>
//     </>
//   )
// }

// export default Day3_Props_2

// import React from 'react'

// const Day3_Props_2 = (props) => {
//   return (
//     <>
//         <h1>Name : {props.Json[1].name}</h1>
//         <h1>Age : {props.Json[1].age}</h1>
//         <h1>Place : {props.Json[1].place}</h1>
//     </>
//   )
// }

// export default Day3_Props_2



// import React from 'react'

// const Day3_Props_2 = ({ Json }) => {
//   return (
//     <>
//         <h1>Name : {Json[1].name}</h1>
//         <h1>Age : {Json[1].age}</h1>
//         <h1>Place : {Json[1].place}</h1>
//     </>
//   )
// }

// export default Day3_Props_2



// import React from 'react'

// const Day3_Props_2 = (props) => {
//   return (
//     <>
//         {props.Json.map((value , index) => {
//             return(
//                 <div key={index}>
//                     <h1>Name : {value.name}</h1>
//                     <h1>Age : {value.age}</h1>
//                     <h1>Place : {value.place}</h1>
//                 </div>
//             )
//         })}

//         <h1>Total : {props.Json.length}</h1>
//     </>
//   )
// }

// export default Day3_Props_2



import React from 'react'

const Day3_Props_2 = ({ Json }) => {
  return (
    <>
        {Json.map((value , index) => {
            return(
                <div key={index}>
                    <h1>Name : {value.name}</h1>
                    <h1>Age : {value.age}</h1>
                    <h1>Place : {value.place}</h1>
                </div>
            )
        })}

        <h1>Total : {Json.length}</h1>
    </>
  )
}

export default Day3_Props_2