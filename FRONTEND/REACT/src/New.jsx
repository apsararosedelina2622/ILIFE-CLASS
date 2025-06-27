import React, { useState } from 'react'

const New = () => {

  var [ input , setInput ] = useState("")
  var [ qr , setQr ] = useState("")

  var Fun = () => {
    setQr(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`)
  }

  return (
    <>
      <input type="text" onChange={e => setInput(e.target.value)} />
      <button onClick={Fun}>Generate</button>
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