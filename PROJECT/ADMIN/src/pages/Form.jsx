import React from 'react'
import { Link } from "react-router-dom"
import { my_asset } from '../assets/asset'
import { useContext } from 'react'
import { MyContext } from '../context/ContextFile'

const Form = () => {

  const { category , setCategory , type , setType , desc , setDesc , price , setPrice , previewImg , ImageFun , SubmitFun } = useContext(MyContext)

  return (
    <>
        <form className="container" onSubmit={SubmitFun}>

          <div className="d-flex justify-content-between align-items-center my-3">
            <h4>Add Products</h4>
            <Link to={"/products"} className='text-dark fs-5'>View Products</Link>
          </div>

          <input type="file" hidden id="image" onChange={ImageFun} />
          <label htmlFor="image">
            <img src={previewImg ? previewImg : my_asset.uploadImg} alt="" height={200} />
          </label>

          <select name="category" className='form-control my-3' value={category} onChange={e => setCategory(e.target.value)}>
            <option hidden>choose</option>
            <option>New Arrival</option>
            <option>Shop</option>
          </select>

          <input type="text" name="type" value={type} onChange={e => setType(e.target.value)} placeholder='Enter product type...' className='form-control my-3' />
          <input type="text" name="desc" value={desc} onChange={e => setDesc(e.target.value)} placeholder='Enter product desc...' className='form-control my-3' />
          <input type="number" name="price" value={price} onChange={e => setPrice(e.target.value)} placeholder='Enter product price...' className='form-control my-3' />
          <input type="submit" className='btn btn-primary w-100' />
            
        </form>
    </>
  )
}

export default Form