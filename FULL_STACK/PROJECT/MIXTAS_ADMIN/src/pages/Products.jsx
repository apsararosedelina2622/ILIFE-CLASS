import React, { useContext } from 'react'
import { MyContext } from '../context/ContextFile'
import { Link } from 'react-router-dom'
import { my_asset } from '../assets/asset'

const Products = () => {

  const { productData , RemoveProduct , UpdateProduct , updateCategory , setUpdateCategory , updateType , setUpdateType , updateDesc , setUpdateDesc , updatePrice , setUpdatePrice , updatePreviewImg , UpdateImageFun , UpdateSubmitFun } = useContext(MyContext)

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
                            <td colSpan={7} className='text-danger'>No Products!</td>
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
                                    <td><button className='btn btn-primary' onClick={() => UpdateProduct(value._id)} data-bs-toggle="modal" data-bs-target="#mymodal">Update</button></td>
                                    <td className='fs-4'><span onClick={() => RemoveProduct(value._id)}>&times;</span></td>
                                </tr>
                            )
                        })
                }
            </tbody>
        </table>    

        <div className="modal fade" id='mymodal'>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4>Update</h4>
                        <button className='btn-close' data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={UpdateSubmitFun}>
                            <input type="file" id='updateImage' hidden onChange={UpdateImageFun} />
                            <label htmlFor="updateImage">
                                <img src={updatePreviewImg} alt="" height={150} />
                            </label>
                            <select value={updateCategory} onChange={e => setUpdateCategory(e.target.value)} className='form-control my-3'>
                                <option hidden>Choose</option>
                                <option>New Arrival</option>
                                <option>Shop</option>
                            </select>
                            <input type="text" value={updateType} onChange={e => setUpdateType(e.target.value)} className='form-control my-3' />
                            <input type="text" value={updateDesc} onChange={e => setUpdateDesc(e.target.value)} className='form-control my-3' />
                            <input type="number" value={updatePrice} onChange={e => setUpdatePrice(e.target.value)} className='form-control my-3' />
                            <input type="submit" className='btn btn-primary w-100 my-3' />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Products
