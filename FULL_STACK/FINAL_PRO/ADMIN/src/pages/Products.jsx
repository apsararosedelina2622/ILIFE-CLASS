import React from 'react'
import { useContext } from 'react'
import { Link } from "react-router-dom"
import { MyContext } from '../context/ContextFile'

const Products = () => {

  const { productData } = useContext(MyContext)

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center my-3">
          <h3>Add Products</h3>
          <Link to="/products" className='text-dark fs-5'>view products</Link>
        </div>

        <table className='table table-bordered table-primary align-middle text-center'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Type</th>
              <th>Category</th>
              <th>Desc</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              productData.map((value , index) => {
                return(
                  <tr key={index}>
                    <td><img src={value.img} alt="" height={80} /></td>
                    <td>{value.type}</td>
                    <td>{value.category}</td>
                    <td>{value.desc}</td>
                    <td>{value.price}</td>
                    <td><span className='fs-4'>&times;</span></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Products