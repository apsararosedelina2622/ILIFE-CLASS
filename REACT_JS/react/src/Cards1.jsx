import React from 'react'

function Cards1(props) {
  return (
    <>
        <div className='col-6'>
            <div className='card d-flex mt-5'>
                <div className='d1'>
                    <img src={props.c1.img} alt='' height='200' width='200'/>
                </div>       
                <div className='d2'>
                    <h2>{props.c1.name}</h2>
                    <h4 className='text-primary'>{props.c1.role}</h4>
                    <p>{props.c1.about}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cards1