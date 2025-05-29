// image

// import React from 'react'
// import img from "./assets/img/image.png"
// import img1 from "./assets/img/image1.png"

// const Day4 = () => {
//   return (
//     <div>
//         <img src={img} alt="" height={200} />
//         <img src={img1} alt="" height={200} />
//     </div>  
//   )
// }

// export default Day4

// Image through Assets.js

// import React from 'react'
// import { my_asset } from './assets/assets'

// const Day4 = () => {
//   return (
//     <>
//         <img src={my_asset.Img1} alt="" height={200} />
//         <img src={my_asset.Img2} alt="" height={200} />
//     </>
//   )
// }

// export default Day4


// import React from 'react'

// const Day4 = ({json_data}) => {
//   return (
//     <div>
//         {json_data.map((value , index) => {
//             return(
//                 <p>{value.name}</p>
//             )
//         })}
//     </div>
//   )
// }

// export default Day4


// import React from 'react'
// import { data } from './assets/assets'

// const Day4 = () => {
//   return (
//     <>
//       {data.map((value , index)=> {
//         return(
//             <div>
//                 <img src={value.profile} height={200} width={300} alt="" />
//                 <h1>{value.name}</h1>
//                 <h1>{value.age}</h1>
//             </div>
//         )
//       })}  
//     </>
//   )
// }

// export default Day4


// Hooks

// useState

// import React from 'react'

// const Day4 = () => {

//     var num = 1

//     const Fun = () => {
//         num = num + 1
//         console.log(num)
//     }

//   return (
//     <>
//         <button onClick={Fun}>Click</button>
//         <h1>{num}</h1>
//     </>
//   )
// }

// export default Day4



// import React, { useState } from 'react'

// const Day4 = () => {

//     // var [state , setState] = useState(initial)

//     var [num , setNum] = useState(1)

//     const Add = () => {
//         if(num < 10){
//             setNum(num + 1)
//         }else{
//             alert("This is Maximum Limit")
//         }
//     }

//     const Remove = () => {
//         if(num > 0){
//             setNum(num -1)
//         }else{
//             alert("This is Minimum Limit")
//         }
//     }

//   return (
//     <>
//         <button onClick={Add}>Add</button>
//         <h1>{num}</h1>
//         <button onClick={Remove}>Remove</button>
//     </>
//   )
// }

// export default Day4