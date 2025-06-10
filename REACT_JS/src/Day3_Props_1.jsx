// import React from 'react'
// import Day3_Props_2 from './Day3_Props_2'

// const Day3_Props_1 = () => {

//     var course = "MERN"

//   return (
//     <>
//         <h1>Component 1</h1>
//         {/* <h1>Course : {course}</h1> */}
//         {/* <Day3_Props_2 message="MERN" /> */}
//         <Day3_Props_2 message={course} />
//     </>
//   )
// }

// export default Day3_Props_1


// import React from 'react'
// import Day3_Props_2 from './Day3_Props_2'

// const Day3_Props_1 = () => {

//     var arr = ["HTML" , "CSS" , "JS" , "REACT"]

//   return (
//     <>
//         <Day3_Props_2 data={arr} />
//     </>
//   )
// }

// export default Day3_Props_1


// import React from 'react'
// import Day3_Props_2 from './Day3_Props_2'

// const Day3_Props_1 = () => {

//     var data = {
//         name : "Banu" , 
//         age : 21 , 
//         course : "MERN" , 
//         place : "Trichy"
//     }

//   return (
//     <>
//         <Day3_Props_2 obj={data} />
//     </>
//   )
// }

// export default Day3_Props_1


import React from 'react'
import Day3_Props_2 from './Day3_Props_2'

const Day3_Props_1 = () => {

    const data = [
        {
            name : "Abi" , 
            age : 21 , 
            place : "Trichy"
        },
        {
            name : "Banu" , 
            age : 20 , 
            place : "Karur"
        },
        {
            name : "Begum" , 
            age : 22 , 
            place : "Chennai"
        },
        {
            name : "Kavin" , 
            age : 23 , 
            place : "Madurai"
        }
    ]

  return (
    <>
        <Day3_Props_2 Json={data} />
    </>
  )
}

export default Day3_Props_1