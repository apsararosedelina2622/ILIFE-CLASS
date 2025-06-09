// import React from 'react'
// import { Swiper , SwiperSlide } from "swiper/react"

// import "swiper/css"

// const New = () => {
//   return (
//     <Swiper
//       slidesPerView={3}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       <SwiperSlide>Slide 5</SwiperSlide>
//     </Swiper>
//   )
// }

// export default New



import React from 'react'
import { Swiper , SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { my_asset } from './assets/assets'

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const New = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={20}
      modules={[ Navigation , Pagination , Autoplay ]}
      navigation
      pagination={{ clickable : true }}
      autoplay={{ delay : 2000 }}
      loop={ true }
      speed={ 3000 }
    >
      <SwiperSlide><img src={my_asset.Img1} alt="" height={300} className='w-100' /></SwiperSlide>
      <SwiperSlide><img src={my_asset.Img2} alt="" height={300} className='w-100' /></SwiperSlide>
      <SwiperSlide><img src={my_asset.Img1} alt="" height={300} className='w-100' /></SwiperSlide>
      <SwiperSlide><img src={my_asset.Img2} alt="" height={300} className='w-100' /></SwiperSlide>
      <SwiperSlide><img src={my_asset.Img1} alt="" height={300} className='w-100' /></SwiperSlide>
      <SwiperSlide><img src={my_asset.Img2} alt="" height={300} className='w-100' /></SwiperSlide>
    </Swiper>
  )
}

export default New