import React, { useContext } from 'react'
import { MyContext } from '../context/ContextFile'
import { Link } from 'react-router-dom'
import { my_asset } from '../assets/asset'

const Users = () => {

    const { userData , RemoveUser } = useContext(MyContext)

  return (
    <div className="container">
        <div className="d-flex justify-content-between align-items-center my-3">
            <h3>User List</h3>
            <Link to={"/"} className='text-dark fs-5'>Add Products</Link>
        </div>

        <table className="my-3 table table-primary border-1 border-primary text-center align-middle">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    userData.length === 0 
                    ? 
                        <tr>
                            <td colSpan={4} className='text-danger'>No User list</td>
                        </tr>
                    :
                        userData.map((value , index) => {
                            return(
                                <tr key={index}>
                                    <td>{value.username}</td>
                                    <td>{value.password}</td>
                                    <td>{value.email}</td>
                                    <td><span className='fs-5' onClick={() => RemoveUser(value._id)}>&times;</span></td>
                                </tr>
                            )
                        })
                }
            </tbody>
        </table> 

    </div>
  )
}

export default Users