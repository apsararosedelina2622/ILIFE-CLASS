// Hide Show

// import React, { useState } from 'react'

// const Day5 = () => {

//     var [visible , setvisible] = useState(true)

//     const Fun = () => {
//         setvisible(!visible)
//     }

//   return (
//     <>
//         <button onClick={Fun}>{visible ? "hide" : "show"}</button>

//         {visible && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae expedita minima vero, sed sit consequatur mollitia ab, tempora cupiditate nesciunt recusandae, animi odit? Tempora non exercitationem quaerat odit natus ab vel est ad itaque optio sed dignissimos magnam, voluptas mollitia error quas vero inventore nemo temporibus adipisci. Soluta, saepe mollitia?</p>}
//     </>
//   )
// }

// export default Day5

// true + true = true
// true + false = false


// Password

// import React, { useState } from 'react'

// const Day5 = () => {

//     var [show , setShow] = useState(true)

//     const Fun = () => {
//       setShow(!show)  
//     }

//   return (
//     <>
//         <input type={show ? "password" : "text"} />
//         <button onClick={Fun}>{show ? "show" : "hide"}</button>
//     </>
//   )
// }

// export default Day5


// Qr generate

// import React, { useState } from 'react'

// const Day5 = () => {

//     var [input, setInput] = useState("")

//     var [qr , setQr] = useState("")

//     const Display = (e) => {
//         setInput(e.target.value)
//     }

//     const QrFun = () => {
//         setQr(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`)
//     }

//   return (
//     <>
//       <input type="text" onChange={Display} />  
//       <button onClick={QrFun}>Generate Qr Code</button>

//       {qr && <img src={qr} alt="" height={200} />}
//     </>
//   )
// }

// export default Day5

// Clock

import React, { useState } from 'react'

const Day5 = () => {

    const [time , setTime] = useState(new Date().toLocaleTimeString())

    setInterval(() => {
        setTime(new Date().toLocaleTimeString())
    } , 1000)

  return (
    <div>
        <h1>{time}</h1>
    </div>
  )
}

export default Day5