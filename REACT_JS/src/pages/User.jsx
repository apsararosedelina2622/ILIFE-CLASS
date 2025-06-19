import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    // const { abc } = useParams()
    const { id } = useParams()

  return (
    <>
        <h1>User Page</h1>
        {/* <h1>User name : {abc}</h1> */}
        <h1>User ID : {id}</h1>
    </>
  )
}

export default User