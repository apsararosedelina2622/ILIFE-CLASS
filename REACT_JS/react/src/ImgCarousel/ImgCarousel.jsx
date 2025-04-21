import React, { useState } from 'react'
import img0 from '../img/tae.png'
import img1 from '../img/tae.png'


function ImgCarousel() {
    var [img,setImg] = useState(img0)
    function Fun1(){
        let val=img[4];
        setImg(img+2)
    }
  return (
    <div>
        
        <div class="container mt-5">
          <button className='btn btn-success m-5' onClick={Fun1}>Previous</button>
          <img src={img1} alt="" height={400} width={400} />
          <button className='btn btn-success m-5'>Next</button>
        </div>

    </div>
  )
}

export default ImgCarousel