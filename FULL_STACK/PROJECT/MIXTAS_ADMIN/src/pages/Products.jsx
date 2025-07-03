import React, { useContext } from 'react'
import { MyContext } from '../context/ContextFile'

const Products = () => {

    const { productData } = useContext(MyContext)

  return (
    <>
        <div className="container">
            <div className="row">
                {
                    productData.map((value , index) => {
                        return(
                            <div className="col-3" key={index}>
                                <div className="card">
                                    <img src={value.img} alt="" />
                                    <div className="card-body">
                                        <p className='text-secondary'>{value.type}</p>
                                        <p>{value.desc}</p>
                                        <p>${value.price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Products