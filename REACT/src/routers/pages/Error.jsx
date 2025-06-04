import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {

    const navigate = useNavigate()

  return (
    <>
        <h1>Error Page</h1>
        <button onClick={() => navigate("/")}>Go To Home</button>
    </>
  )
}

export default Error