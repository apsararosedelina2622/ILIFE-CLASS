import React, { useContext } from 'react'
import { Mycontext } from './Context'

const Form_submit = () => {

    const {username , password , navigate} = useContext(Mycontext)

  return (
    <>
        <h1>Form submitted Successfully!</h1>
        <p>Username : {username}</p>
        <p>Password : {password}</p>
        <button className='btn btn-primary' onClick={() => navigate("/home")}>Go to Home</button>
    </>
  )
}

export default Form_submit