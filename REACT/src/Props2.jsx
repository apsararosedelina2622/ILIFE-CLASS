// import React from 'react'

// const Props2 = ({ username }) => {

//     // console.log(props)

//   return (
//     <>
//         <h1>User name : {username}</h1>
//     </>
//   )
// }

// export default Props2


// import React from 'react'

// const Props2 = ({ data }) => {
    
//     // console.log(props)

//   return (
//     <>
//         {/* <h1>Name : {props.data.name}</h1>
//         <h1>Age : {props.data.age}</h1> */}
//         <h1>Name : {data.name}</h1>
//         <h1>Age : {data.age}</h1>
//     </>
//   )
// }

// export default Props2


// import React from 'react'

// const Props2 = ({ arr_data }) => {

//     // console.log(props)

//   return (
//     <>
//         {/* <h1>{props.arr_data[4]}</h1> */}
//         {/* <h1>{arr_data[4]}</h1> */}
//         <h1>Array</h1>
//         {
//             arr_data.map((value , index) => {
//                 return(
//                     <p key={index}>{value}</p>
//                 )
//             })
//         }
//     </>
//   )
// }

// export default Props2


import React from 'react'

const Props2 = ({ json_data }) => {
  return (
    <>
        {/* <h1>{props.json_data[0].name}</h1>
        <h1>{props.json_data[1].name}</h1>
        <h1>{props.json_data[2].name}</h1> */}

        {/* <h1 className='text-danger'>HELLO</h1> */}

        <h1>Details</h1>
        {
            json_data.map((value , index) => {
                return(
                    <div>
                        <p>Name : {value.name}</p>
                        <p>Age : {value.age}</p>
                        <p>Place : {value.place}</p>
                    </div>
                )
            })
        }
    </>
  )
}

export default Props2