import React from 'react'
import { useContext } from 'react'
import { Link } from "react-router-dom"
import { MyContext } from '../context/ContextFile'
import { my_asset } from '../assets/asset'

const Form = () => {

    const { category , setCategory , type , setType , desc , setDesc , price ,  setPrice , previewImg , ImageFun , SubmitFun } = useContext(MyContext)

  return (
    <>
        <div className="container">

            <div className="d-flex justify-content-between align-items-center my-3">
                <h3>Add Products</h3>
                <Link to="/products" className='text-dark fs-5'>view products</Link>
            </div>

            <form onSubmit={SubmitFun}>

                <input type="file" accept='image/*' onChange={ImageFun} id='image' hidden className='form-control' />
                <label htmlFor="image">
                    <img src={previewImg ? previewImg : my_asset.uploadImg} alt="" height={200} />
                </label>

                <select name="category" value={category} onChange={e => setCategory(e.target.value)} className='form-control my-3'>
                    <option hidden>Choose</option>
                    <option>New Arrival</option>
                    <option>Shop</option>
                </select>
                <input type="text" name='type' value={type} onChange={e => setType(e.target.value)} placeholder='Enter type...' className='form-control my-3' />
                <input type="text" name='desc' value={desc} onChange={e => setDesc(e.target.value)} placeholder='Enter desc...' className='form-control my-3' />
                <input type="number" name='price' value={price} onChange={e => setPrice(e.target.value)} placeholder='Enter price...' className='form-control my-3' />
                <input type="submit" className='btn btn-primary my-3 w-100' />

            </form>
        </div>
    </>
  )
}

export default Form