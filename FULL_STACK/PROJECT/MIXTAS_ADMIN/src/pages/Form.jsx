import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../context/ContextFile'
import { my_asset } from '../assets/asset'
import { Link } from 'react-router-dom'

const Form = () => {

    const { category , setCategory , type , setType , desc , setDesc , price , setPrice , img , ImageFun , previewImg , FormSubmit } = useContext(MyContext)

  return (
    <div className="container">
      
      <div className="d-flex justify-content-between align-items-center my-3">
        <h3>Add Products</h3>
        <div>
          <Link to={"/products"} className='text-dark fs-5 mx-2'>View Products</Link>
          <Link to={"/users"} className='text-dark fs-5 mx-2'>View Users</Link>
        </div>
      </div>

        <form method="POST" onSubmit={FormSubmit}>

            <input type="file" id="image" accept="image/*" hidden onChange={ImageFun} />
            <label htmlFor="image">
              <img src={img ? previewImg : my_asset.uploadImg} alt="Upload_Img" className="my-3" height={200}/>
            </label>

            <select name="category"className='form-control my-3' value={category} onChange={e => setCategory(e.target.value)}>
              <option hidden>option</option>
              <option>Shop</option>
              <option>New Arrival</option>
            </select>
            <input type="text" name='type' value={type} onChange={e => setType(e.target.value)} placeholder='Enter Product Type...' className='form-control'  />
            <input type="text" name='desc' value={desc} onChange={e => setDesc(e.target.value)} placeholder='Enter Product Description...' className='form-control my-3'  />
            <input type="number" name='price' value={price} onChange={e => setPrice(e.target.value)} placeholder='Enter Product Price...' className='form-control my-3'  />
            <input type="submit" className='btn btn-primary w-100' />
        </form>
    </div>
  )
}

export default Form