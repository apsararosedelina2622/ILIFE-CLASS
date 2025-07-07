import React, { useContext } from 'react'
import { MyContext } from '../context/ContextFile'
import { Link } from 'react-router-dom'

const Products = () => {

  const { productData , RemoveProduct } = useContext(MyContext)

  return (
    <div className="container">
        <div className="d-flex justify-content-between align-items-center my-3">
            <h3>Product List</h3>
            <Link to={"/"} className='text-decoration-none text-dark fs-5'>Add Products</Link>
        </div>

        <table className="my-3 table table-primary border-1 border-primary text-center align-middle">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Category</th>
                    <th>Type</th>
                    <th>Desc</th>
                    <th>Price</th>
                    <th>Edit</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    productData.length === 0 
                    ? 
                        <tr>
                            <td colSpan={6} className='text-danger'>No Products!</td>
                        </tr>
                    :
                        productData.map((value , index) => {
                            return(
                                <tr key={index}>
                                    <td><img src={value.img} alt="" height={60} /></td>
                                    <td>{value.category}</td>
                                    <td>{value.type}</td>
                                    <td>{value.desc}</td>
                                    <td>{value.price}</td>
                                    <td><button className='btn btn-primary'>Update</button></td>
                                    <td className='fs-4'><span onClick={() => RemoveProduct(value._id)}>&times;</span></td>
                                </tr>
                            )
                        })
                }
            </tbody>
        </table>    

    </div>
  )
}

export default Products
