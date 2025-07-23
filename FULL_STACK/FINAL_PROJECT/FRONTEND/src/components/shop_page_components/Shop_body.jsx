import React, { useContext } from 'react'
import { all_products } from '../../assets/asset'
import { MyContext } from '../../context/MyContextProvider'

const shop_body = () => {

  const { navigate } = useContext(MyContext)

  return (
    <div className="container my-5">
    
      <h1 className='text-center display-5 mb-5'>Shop</h1>
    
        <div className="row">
          {all_products.filter(value => value.category === "shop").map((value , index) => {
            return (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="card border-0" onClick={() => navigate(`/product/${value.id}`)}>
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

export default shop_body