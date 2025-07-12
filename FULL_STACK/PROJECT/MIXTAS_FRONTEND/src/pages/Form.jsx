import React, { useContext } from 'react'
import { MyContext } from '../context/MyContextProvider'

const Form = () => {

  const { username , setUsername , password , setPassword , email , setEmail , RegisterSubmitFun , loginUsername , setLoginUsername , loginPassword , setLoginPassword , LoginSubmitFun } = useContext(MyContext)

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                  <form onSubmit={RegisterSubmitFun}>
                    <h4 className='my-4'>Register Form</h4>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} className='form-control my-3' placeholder='Enter your username...' />
                    <input type="text" value={password} onChange={e => setPassword(e.target.value)} className='form-control my-3' placeholder='Enter your password...' />
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} className='form-control my-3' placeholder='Enter your email...' />
                    <input type="submit" className='btn btn-primary w-100' />
                  </form>
                </div>
                <div className="col-lg-6">
                    <form onSubmit={LoginSubmitFun}>
                      <h4 className='my-4'>Login Form</h4>
                      <input type="text" required value={loginUsername} onChange={e => setLoginUsername(e.target.value)} className='form-control my-3' placeholder='Enter your username...' />
                      <input type="text" required value={loginPassword} onChange={e => setLoginPassword(e.target.value)} className='form-control my-3' placeholder='Enter your password...' />
                      <input type="submit" className='btn btn-success w-100' />
                  </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Form