import React from 'react'
import { useContext } from 'react'
import { Mycontext } from './context'

const Form_Submit = () => {

    const {username , password , navigate} = useContext(Mycontext)

  return (
    <>
        <div className="text-center p-5">
            <h3>Welcome! {username}</h3>
            <p>Your Password : {password}</p>
            <button className='btn btn-primary' onClick={() => navigate("/home")}>Go to Home</button>
        </div>
    </>
  )
}

export default Form_Submit