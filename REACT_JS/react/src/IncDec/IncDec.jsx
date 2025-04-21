import React, { useState } from 'react'

function Incdec() {
    var [val,setVal] = useState(0)
    var [span,setSpan] = useState("")
  return (
    <div>
        <div class="container">
            <div class="row">
                <div class="col-4 mt-5">
                    <button className='btn btn-danger' onClick={ () => { if(val>0){ setVal(val-1); setSpan("") }else{ setSpan("This is Minimum value") } } } >Decrease</button>
                </div>
                <div class="col-4 mt-5">
                    <h1 className='text-primary'>{val}</h1>
                </div>
                <div class="col-4 mt-5">
                    <button className='btn btn-success' onClick={ () => { if(val<10){ setVal(val+1); setSpan("") }else{ setSpan("This is Maximum value") } } } >Increase</button>
                </div>
                <div class="col-12">
                    <h3 className='text-warning m-5'>{span}</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Incdec