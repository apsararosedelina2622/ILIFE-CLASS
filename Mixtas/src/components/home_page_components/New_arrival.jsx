import React from 'react'
import { all_products } from '../../assets/asset'

const New_arrival = () => {
  return (
    <div className="container my-5">

        <h1 className='text-center display-5 mb-5'>New Arrivals</h1>

        <div className="row">
            {all_products.filter(value => value.category === "new-arrival").map((value , index) => {
                return (
                    <div className="col-lg-3 col-md-6" key={index}>
                        <div className="card">
                            <img src={value.img} alt="" />
                            <div className="card-body">
                                <p className='text-secondary'>{value.type}</p>
                                <p style={{fontSize : "15px"}}>{value.desc}</p>
                                <p>{value.price}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default New_arrival