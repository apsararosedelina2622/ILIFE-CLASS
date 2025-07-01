import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const { username } = useParams()

  return (
    <>
        <h1>USER PAGE</h1>
        <p>User Name : {username}</p>
    </>
  )
}

export default User