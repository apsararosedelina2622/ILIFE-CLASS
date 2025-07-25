import React, { useContext } from 'react'
import { my_asset } from '../assets/asset'
import { MyContext } from '../context/ContextProvider'

const AddProduct = () => {

    const { category , setCategory , type , setType , desc , setDesc , price , setPrice , ImageFun , previewImg } = useContext(MyContext)

  return (
    <>
        <div className='container'>
            <div className='p-4'>
                <h4>Add Product</h4>
            </div>

            <form>
                <input type="file" id='productImage' hidden onChange={ImageFun} />
                <label htmlFor='productImage'>
                    <img src={previewImg ? previewImg : my_asset.upload_img} height="200" width={200} />
                </label>

                <select className='form-control my-3' value={category} onChange={e => setCategory(e.target.value)}>
                    <option hidden>Choose</option>
                    <option>New Arrival</option>
                    <option>Shop</option>
                </select>
                <input type="text" placeholder='Enter product type' className='form-control my-3' value={type} onChange={e => setType(e.target.value)} />
                <input type="text" placeholder='Enter product desc' className='form-control my-3'value={desc} onChange={e => setDesc(e.target.value)} />
                <input type="number" placeholder='Enter product price' className='form-control my-3' value={price} onChange={e => setPrice(e.target.value)} />
                <input type='submit' className='btn btn-primary w-100' />
            </form>
        </div>
    </>
  )
}

export default AddProduct