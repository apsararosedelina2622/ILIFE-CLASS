// import React from 'react'

// const Day2_Css = () => {
//   return (
//     <>
//         <h1 style={{ color : "green" , backgroundColor : "lightgreen" }}>HELLO</h1>
//         <p style={{ "color" : "purple" , "background-color" : "plum"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed ea nesciunt sequi aliquid dolor doloribus a magni quas commodi odio ex omnis quod dolore reiciendis minima nobis, dolores sunt deserunt. Fugit nisi laudantium quod nostrum placeat voluptatum sed, accusantium distinctio sequi cumque a soluta! Minus fugit quibusdam cumque cum eveniet.</p>
//     </>
//   )
// }

// export default Day2_Css


// import React from 'react'

// const Day2_Css = () => {

//     const obj = {
//         color : "green" , 
//         backgroundColor : "lightgreen" , 
//         "text-align" : "center"
//     }

//   return (
//     <>
//         <h1 style={obj}>HELLO</h1>
//     </>
//   )
// }

// export default Day2_Css

// import React from 'react'
// // import "./index.css"

// const Day2_Css = () => {
//   return (
//     <>
//         <h1>Hello</h1>
//     </>
//   )
// }

// export default Day2_Css


// import React from 'react'
// import img1 from "./assets/image/image1.png"
// import img2 from "./assets/image/image2.png"

// const Day2_Css = () => {
//   return (
//     <>
//         <img src={img1} alt="" height={200} />
//         <img src={img2} alt="" height={200} />
//     </>
//   )
// }

// export default Day2_Css


import React from 'react'
import { my_asset } from './assets/asset'

const Day2_Css = () => {
  return (
    <>
        <img src={my_asset.Img1} alt="" height={200} />
        <img src={my_asset.Img2} alt="" height={200} />
    </>
  )
}

export default Day2_Css