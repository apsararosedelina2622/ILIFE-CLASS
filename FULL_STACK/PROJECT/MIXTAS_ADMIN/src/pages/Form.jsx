import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../context/ContextFile'

const Form = () => {

    const { setType , setDesc , setPrice , setImg , FormSubmit } = useContext(MyContext)

  return (
    <div className="container">
        <form method="POST" encType='multipart/form-data' onSubmit={FormSubmit}>
            <input type="text" name='type' onChange={e => setType(e.target.value)} placeholder='Enter Product Type...' className='form-control'  />
            <input type="text" name='desc' onChange={e => setDesc(e.target.value)} placeholder='Enter Product Description...' className='form-control my-3'  />
            <input type="number" name='price' onChange={e => setPrice(e.target.value)} placeholder='Enter Product Price...' className='form-control my-3'  />
            <input type='file' name='image' className='form-control my-3' onChange={e => setImg(e.target.files[0])} />
            <input type="submit" className='btn btn-primary w-100' />
        </form>
    </div>
  )
}

export default Form