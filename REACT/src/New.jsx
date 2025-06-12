import React, { useState } from 'react'

const New = () => {

  const [ input , setInput ] = useState("")
  const [ qr , setQr ] = useState("")

  const GenerateFun = () => {
    setQr(` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`)
  }

  return (
    <>
      <input type="text" onChange={(e) => { setInput(e.target.value) }} />
      <button onClick={GenerateFun}>Generate</button>
      {/* <img src={qr} alt="" />  */}
      { 
        input.length === 0 
        ?
        ""
        :
        qr && <img src={qr} alt="" />
      }
    </>
  )
}

export default New