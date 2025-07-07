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
          <h4>View Products</h4>
          <Link to={"/"} className='text-dark fs-5'>Add Products</Link>
        </div>

        <table className='table table-primary align-middle my-3 text-center'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Type</th>
              <th>Category</th>
              <th>Desc</th>
              <th>Price</th>
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