import React, { useContext } from 'react'
import { MyContext } from './Context'

const Form_Submit = () => {

    const { navigate , username , password } = useContext(MyContext)

  return (
    <>
        <h1>Form Submitted Successfully!</h1>
        <h1>Username : {username}</h1>
        <h1>Password : {password}</h1>
        <button className='btn btn-primary' onClick={() => navigate("/home")}>Go to Home</button>
    </>
  )
}

export default Form_Submit