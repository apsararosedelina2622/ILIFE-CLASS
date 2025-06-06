import React from 'react'
import { useContext } from 'react'
import { MyContext } from './Context'

const Form = () => {
    
    var { setUsername , setPassword , SubmitFun } = useContext(MyContext)

  return (
    <form className='container p-5' onSubmit={SubmitFun}>
        <input type="text" placeholder='Enter username...' className='form-control' onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder='Enter password...' className='form-control my-3' onChange={e => setPassword(e.target.value)} />
        <input type="submit" className='btn btn-primary w-100' />
    </form>
  )
}

export default Form