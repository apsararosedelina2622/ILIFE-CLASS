import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const { abc } = useParams()

  return (
    <>
        <h1>User Page</h1>
        <h3>Username : {abc}</h3>
    </>
  )
}

export default User