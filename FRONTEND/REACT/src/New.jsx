import React from 'react'

import { my_asset } from './assets/assets'

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const New = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      modules={[ Navigation , Pagination , Autoplay ]}
      navigation
      pagination={{ clickable : true }}
      autoplay={{ delay : 2000 }}
      speed={1000}
      loop={true}
    >
      <SwiperSlide><img src={my_asset.Img1} height={300} className='w-100' alt="" /></SwiperSlide>
      <SwiperSlide><img src={my_asset.Img1} height={300} className='w-100' alt="" /></SwiperSlide>
      <SwiperSlide><img src={my_asset.Img1} height={300} className='w-100' alt="" /></SwiperSlide>
      <SwiperSlide><img src={my_asset.Img1} height={300} className='w-100' alt="" /></SwiperSlide>
      <SwiperSlide><img src={my_asset.Img1} height={300} className='w-100' alt="" /></SwiperSlide>
    </Swiper>
  )
}

export default New