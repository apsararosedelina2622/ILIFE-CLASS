import React from 'react'
import { useParams } from 'react-router-dom'
import { all_products } from '../../assets/asset'

const Product_body = () => {

  const { id } = useParams()

  const selectedProduct = all_products.find(e => e.id === Number(id))

  return (
    <div className='container'>
      <div className="row my-5">

        <div className="col-lg-6">
          <img src={selectedProduct.img} className='img-fluid' alt="" />
        </div>

        <div className="col-lg-6">
          <p className='display-5'>{selectedProduct.desc}</p>
          <p>{selectedProduct.type}</p>
          <p className='fw-bold fs-4'>Price : ₹{selectedProduct.price}</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi labore sunt, itaque ea aut totam vitae modi harum vero soluta dolore libero, rem nesciunt deleniti, mollitia velit impedit non. Magni excepturi corrupti adipisci explicabo earum eum at facere cupiditate pariatur dignissimos amet laboriosam itaque repudiandae asperiores quia voluptatum, ex aut quos? Optio, veritatis voluptates? Inventore, illum ex, adipisci consectetur voluptas at ut eligendi, quidem aliquid iure ab? Libero quo sapiente tenetur magnam neque! Voluptas inventore, quas accusantium dolorum repellat suscipit impedit, aperiam pariatur iste fuga rerum hic accusamus tempora id placeat earum nam, assumenda adipisci similique quibusdam. Nostrum explicabo rem perferendis magni dicta tempore nulla similique iusto reiciendis? Consequuntur, nostrum in velit vel veritatis optio vitae delectus consectetur est excepturi facilis. Magni ex asperiores nam nemo esse quasi vel, ad eligendi tempore sequi quae culpa qui deleniti illo repellat laudantium? Ex aliquid consectetur doloribus sunt nemo, laborum vitae eveniet nisi sequi architecto tenetur quaerat ad repellat accusantium explicabo, sit, at dicta unde tempora. Temporibus voluptatibus consequuntur dolor? Exercitationem autem, sed distinctio asperiores quibusdam assumenda quae enim odit eaque minus modi veniam officia ab eveniet error expedita. Provident, mollitia velit esse officiis aspernatur fuga quisquam rerum reiciendis libero deserunt maxime. Rerum.</p>
        </div>

      </div>
    </div>
  )
}

export default Product_body