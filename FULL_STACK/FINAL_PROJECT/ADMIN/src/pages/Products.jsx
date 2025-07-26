import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <>
        <div class="container">
            <div class="d-flex justify-content-between my-3 align-items-center">
                <h3>Product List</h3>
                <Link to="/" className='text-dark'>Add Product</Link>
            </div>

            <table class="table my-3 table-primary text-center align-middle">
                <thead>
                    <tr>
                        <th>Product Image</th>
                        <th>Product Type</th>
                        <th>Product Desc</th>
                        <th>Product Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="" alt="" height={60} /></td>
                        <td></td>
                        <td></td>
                        <td>₹ </td>
                        <td><span className='fs-4 fw-bold text-danger'>&times;</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Products