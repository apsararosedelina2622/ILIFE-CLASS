import React from 'react'
import { useContext } from 'react'
import { MyContext } from './Context'

const Submit = () => {

    var { username , password , navigate } = useContext(MyContext)

  return (
    <div>
        <h1>Form Submitted Successfully!</h1>
        <h1>Username : {username}</h1>
        <h1>Password : {password}</h1>
        <button className='btn btn-primary' onClick={() => navigate("/home")}>Go to Home</button>
        <button className='btn btn-primary' onClick={() => navigate("/about")}>Go to About</button>
    </div>
  )
}

export default Submit