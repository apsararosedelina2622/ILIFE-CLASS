import React from 'react'
import { useState } from 'react'

const New = () => {

  var [ theme , setTheme ] = useState(true)

  var obj = {
    color : theme ? "black" : "white" , 
    "background-color" : theme ? "white" : "black"
  }

  const ToggleTheme = () => {
    setTheme(!theme)
  }

  return (
    <>
      <div style={obj}>
        <button onClick={ToggleTheme}>Theme</button>
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla facilis id minima, praesentium, magni sint repellat quisquam harum tempora vero blanditiis autem obcaecati, hic iure nobis? Velit iusto minima similique?</h1>
      </div>
    </>
  )
}

export default New