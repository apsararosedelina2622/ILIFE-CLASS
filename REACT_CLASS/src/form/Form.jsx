import React, { useContext } from 'react'
import { MyContext } from './Context'

const Form = () => {

    const { setUsername , setPassword , SubmitFun } = useContext(MyContext)

  return (
    <>
        <form className='container m-5' onSubmit={SubmitFun}>
            <input type="text" className='form-control' placeholder='Enter username...' onChange={e => setUsername(e.target.value)} />
            <input type="text" className='form-control my-3' placeholder='Enter password...' onChange={e => setPassword(e.target.value)} />
            <input type="submit" className='btn btn-primary w-100' />
        </form>
    </>
  )
}

export default Form