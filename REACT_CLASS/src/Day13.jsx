// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react'

// import "swiper/css"

// const Day13 = () => {
//   return (
//     <Swiper
//         slidesPerView={3}
//     >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//     </Swiper>
//   )
// }

// export default Day13


// import React from 'react'
// import {Swiper, SwiperSlide} from "swiper/react"
// import {Autoplay, Navigation, Pagination} from "swiper/modules"
// import { my_asset } from './assets/assets'

// import "swiper/css"
// import "swiper/css/navigation"
// import "swiper/css/pagination"

// const Day13 = () => {
//   return (
//     <Swiper
//         slidesPerView={3}
//         spaceBetween={20}
//         modules={[Navigation , Pagination , Autoplay]}
//         navigation
//         pagination={{clickable : true}}
//         autoplay={{delay : 2000}}
//         speed={2000}
//         loop={true}
//     >
//         <SwiperSlide>
//             <img src={my_asset.Img1} alt="" height={300} className="w-100" />
//         </SwiperSlide>
//         <SwiperSlide>
//             <img src={my_asset.Img2} alt="" height={300} className="w-100" />
//         </SwiperSlide>
//         <SwiperSlide>
//             <img src={my_asset.Img1} alt="" height={300} className="w-100" />
//         </SwiperSlide>
//         <SwiperSlide>
//             <img src={my_asset.Img2} alt="" height={300} className="w-100" />
//         </SwiperSlide>
//         <SwiperSlide>
//             <img src={my_asset.Img1} alt="" height={300} className="w-100" />
//         </SwiperSlide>
//         <SwiperSlide>
//             <img src={my_asset.Img2} alt="" height={300} className="w-100" />
//         </SwiperSlide>
//     </Swiper>
//   )
// }

// export default Day13


import React from 'react'
import { my_asset } from './assets/assets'

const Day13 = () => {
  return (
    <>
        <h1 className='text-center' data-aos="fade-up">Hello World!</h1>
        <img src={my_asset.Img1} alt="" data-aos="flip-left" data-aos-delay="100" />
    </>
  )
}

export default Day13