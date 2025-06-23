import React, { useContext } from 'react'
import { MyContext } from './ContextFile'

const Form = () => {

    var { setUsername , setPassword , Submit_Fun } = useContext(MyContext)

  return (
    <form className='container p-5' onSubmit={Submit_Fun}>
        <input type="text" className='form-control' placeholder='Enter username...' onChange={e => setUsername(e.target.value)} />
        <input type="text" className='form-control my-3' placeholder='Enter password...' onChange={e => setPassword(e.target.value)} />
        <input type="submit" className='btn btn-primary w-100' />
    </form>
  )
}

export default Form