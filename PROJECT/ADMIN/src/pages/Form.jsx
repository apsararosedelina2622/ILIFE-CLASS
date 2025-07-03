import React from 'react'

const Form = () => {
  return (
    <>
        <form className="container">

            <h3>Add Products</h3>
            <input type="text" className='form-control' placeholder='Enter Product Type..' name='productType' />
            <input type="text" className='form-control' placeholder='Enter Product Desc..' name='productDesc' />
            <input type="number" className='form-control' placeholder='Enter Product Price..' name='productPrice' />
            <input type="file" className='form-control' name="image" />

        </form>
    </>
  )
}

export default Form