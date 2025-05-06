import React, { useContext } from 'react'
import { Mycontext } from './context'

const Form = () => {

    const {setUsername , setPassword , submitFun} = useContext(Mycontext)

  return (
    <form className='container p-5' onSubmit={submitFun}>
        <input type="text" placeholder='Enter username...' className="form-control" onChange={e => setUsername(e.target.value)} />
        <input type="text" placeholder='Enter password...' className="form-control my-3" onChange={e => setPassword(e.target.value)} />
        <input type="submit" className="btn btn-primary form-control" />
    </form>
  )
}

export default Form