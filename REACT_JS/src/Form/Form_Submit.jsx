import React, { useContext } from 'react'
import { MyContext } from './ContextFile'

const Form_Submit = () => {

    var { username , password , navigate } = useContext(MyContext)

  return (
    <>
        <h1>Form submitted successfully!</h1>
        <h4>Username : {username}</h4>
        <h4>Password : {password}</h4>
        <button className='btn btn-primary' onClick={() => navigate("/home")}>Go to Home</button>
    </>
  )
}

export default Form_Submit