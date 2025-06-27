// import React from 'react'

// const Day3_State = () => {

//     var num = 1

//     var Fun = () => {
//         num++
//         console.log(num)
//     }

//   return (
//     <>
//         <button onClick={Fun}>Add</button>
//         <h1>{num}</h1>
//     </>
//   )
// }

// export default Day3_State



// import React from 'react'
// import { useState } from 'react'

// const Day3_State = () => {

//     var [ num , setNum ] = useState(0)
//     var [ err , setErr ] = useState("")

//     // console.log(num)

//     var AddFun = () => {
//         if(num < 5){
//             setNum(num++)
//         }
//         else{
//             setErr("This is Maximum")
//         }
//     }

//     var RemoveFun = () => {
//         setNum(num--)
//     }

//   return (
//     <>
//         <button onClick={AddFun}>Add</button>
//         <span>{num}</span>
//         <button onClick={RemoveFun}>Remove</button>
//         <p>{err}</p>
//     </>
//   )
// }

// export default Day3_State



// import React from 'react'
// import { useState } from 'react'

// const Day3_State = () => {

//     var [ visible , setVisible ] = useState(true)

//     var Fun = () => {
//         setVisible(!visible)
//     }

//   return (
//     <>
//         <button onClick={Fun}>{ visible ? "Hide" : "Show" }</button>
//         { visible && <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto repudiandae iste aliquam dolores, quos sunt, excepturi velit nulla ducimus quidem fugit. Repudiandae nobis quis distinctio soluta sapiente voluptatem, facilis illum ullam enim? Quia nemo in sunt neque tempora? Voluptates similique unde quaerat placeat deleniti eaque optio maiores reiciendis magnam beatae.</h1> }
//     </>
//   )
// }

// export default Day3_State



// import React from 'react'
// import { useState } from 'react'

// const Day3_State = () => {

//     var [ show , setShow ] = useState(true)

//     var Fun = () => {
//         setShow(!show)
//     }

//   return (
//     <>
//         <input type={ show ? "password" : "text" } />
//         <button onClick={Fun}>{ show ? "Show" : "Hide" }</button>
//     </>
//   )
// }

// export default Day3_State



import React from 'react'
import { useState } from 'react'

const Day3_State = () => {

    // var time = new Date().toLocaleTimeString()
    var [ time , setTime ] = useState(new Date().toLocaleTimeString())

    setInterval(() => {
        setTime(new Date().toLocaleTimeString())
    } , 1000)
 
  return (
    <>
        <h1>{time}</h1>
    </>
  )
}

export default Day3_State