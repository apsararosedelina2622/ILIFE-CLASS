// import React, { useState } from 'react'

// const Day5_State_2 = () => {

//     const [ theme , setTheme ] = useState(true)

//     const Styles = {
//         color : theme ? "black" : "white" , 
//         backgroundColor : theme ? "white" : "black"
//     }

//     const ToggleTheme = () => {
//         setTheme(!theme)
//     }

//   return (
//     <>
//         <div style={Styles}>
//             <button onClick={ToggleTheme}>Change Theme</button>
//             <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis natus officia odit exercitationem facere delectus in, aperiam porro. Nostrum necessitatibus eligendi minus, maxime sed eaque possimus dolorum nemo incidunt quasi!</h1>
//         </div>
//     </>
//   )
// }

// export default Day5_State_2



// import React, { useState } from 'react'

// const Day5_State_2 = () => {

//     // console.log(new Date())
//     // console.log(new Date().getDate())
//     // console.log(new Date().toLocaleTimeString())

//     var [ time , setTime ] = useState(new Date().toLocaleTimeString())

//     setInterval(() => {
//         setTime(new Date().toLocaleTimeString())
//     } , 1000)

//   return (
//     <>
//         <h1>{time}</h1>
//     </>
//   )
// }

// export default Day5_State_2



// import React, { useState } from 'react'

// const Day5_State_2 = () => {

//     const [ input , setInput ] = useState("")
//     const [ qr , setQr ] = useState("")

//     const GenerateQR = () => {
//         setQr(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`)
//     }

//     // condition ? true : false

//   return (
//     <>
//         {/* <input type="text" onChange={(e) => console.log(e.target.value)} /> */}
//         <input type="text" onChange={(e) => setInput(e.target.value)} />
//         <button onClick={GenerateQR}>Generate</button>

//         { 
//             input.length === 0 
//             ? ""
//             : qr && <img src={qr} alt="" />
//         }
//     </>
//   )
// }

// export default Day5_State_2



// import React from 'react'
// import Img from "./assets/Images/image.png"

// const Day5_State_2 = () => {
//   return (
//     <>
//         {/* <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg" alt="" height={300} /> */}
//         <img src={Img} alt="" height={300} />
//     </>
//   )
// }

// export default Day5_State_2


import React from 'react'
import { my_asset } from './assets/asset'

const Day5_State_2 = () => {
  return (
    <>
        <img src={my_asset.Img1} alt="" height={300} />
        <img src={my_asset.Img2} alt="" height={300} />
    </>
  )
}

export default Day5_State_2