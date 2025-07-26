import React, { useContext } from 'react'
import { my_asset } from '../assets/asset'
import { MyContext } from '../context/ContextProvider'
import { Link } from 'react-router-dom'

const AddProduct = () => {

    const { type , setType , category , setCategory , desc , setDesc , price , setPrice , ImageFun , previewImg , FormSubmit } = useContext(MyContext)

  return (
    <>
        <div className="container">
            <div className="p-4 d-flex justify-content-between">
                <h3>Add Product</h3>
                <Link to="/products" className='text-dark'>View Products</Link>
            </div>
            <form onSubmit={FormSubmit}>

                <input type="file" id='image' hidden onChange={ImageFun} />
                <label htmlFor="image">
                    <img src={previewImg ? previewImg : my_asset.upload_img} alt="" height={200} width={200} />
                </label>

                <select className='form-control my-3' value={category} onChange={e => setCategory(e.target.value)}>
                    <option hidden>Choose</option>
                    <option>New Arrival</option>
                    <option>Shop</option>
                </select>
                <input type="text" placeholder='Enter product type...' className='form-control my-3' value={type} onChange={e => setType(e.target.value)} />
                <input type="text" placeholder='Enter product desc...' className='form-control my-3' value={desc} onChange={e => setDesc(e.target.value)} />
                <input type="number" placeholder='Enter product price...' className='form-control my-3' value={price} onChange={e => setPrice(e.target.value)} />
                <input type="submit" className='btn btn-primary my-3 w-100' />

            </form>
        </div>
    </>
  )
}

export default AddProduct