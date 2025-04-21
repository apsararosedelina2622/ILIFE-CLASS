// Direct Props

// import React from 'react'

// const Day3props = (props) => {
//   return (
//     <>
//       <h2>Name : {props.student_name}</h2>  
//       <h4>Message : {props.message}!</h4>
//     </>
//   )
// }

// export default Day3props


// Props using Destructing

// import React from 'react'

// const Day3props = ({student_name , message}) => {
//   return (
//     <>
//         <h2>Name : {student_name}</h2>
//         <h2>Message : {message}</h2>
//     </>
//   )
// }

// export default Day3props

// Varialble Props

// import React from 'react'

// const Day3props = (props) => {
//   return (
//     <>
//         <h3>Name : {props.student_name}</h3>
//         <h3>Age : {props.student_age}</h3>
//         <h3>Place : {props.student_place}</h3>
//     </>
//   )
// }

// export default Day3props

// Using Destructuring

// import React from 'react'

// const Day3props = ({student_age , student_name , student_place}) => {
//   return (
//     <>
//         <h3>Name : {student_name}</h3>
//         <h3>Age : {student_age}</h3>
//         <h3>Place : {student_place}</h3>
//     </>
//   )
// }

// export default Day3props


import React from 'react'

const Day3props = ({json_data}) => {
  return (
    <>
        {/* <h1>{array_value[2]}</h1> */}
        {/* <dl>
            <dt>Course</dt>
            {array_value.map((value , index) => {
            return(
                <dd>{value}</dd>
            )
        })}
        </dl> */}
        {/* <p>{obj_value.name}</p>
        <p>{obj_value.age}</p> */}
        {/* <h1>{json_data[1].name}</h1>
        <p>count : {json_data.length}</p> */}

        {json_data.map((value , index) => (
            <div key={index}>
                <h1>Name : {value.name}</h1>
                <h1>Age : {value.age}</h1>
            </div>
        ))}
    </>
  )
}

export default Day3props