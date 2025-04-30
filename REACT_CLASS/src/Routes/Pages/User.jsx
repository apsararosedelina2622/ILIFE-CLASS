import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const {username} = useParams()

  return (
    <>
        <h1>User Page</h1>
        <p>Username : {username}</p>
    </>
  )
}

export default User