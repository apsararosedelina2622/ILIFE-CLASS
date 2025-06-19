import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {

    const nav = useNavigate()

  return (
    <>
        <h1>Error Page</h1>
        <button onClick={() => nav("/")}>Go To Home</button>
    </>
  )
}

export default Error