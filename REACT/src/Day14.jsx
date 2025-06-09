// Swiper 

import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"

import "swiper/css"

const Day14 = () => {
  return (
    <Swiper
      slidesPerView={3}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
    </Swiper>
  )
}

export default Day14


// Swiper with Images

// import React from 'react'
// import {Swiper, SwiperSlide} from "swiper/react"

// import "swiper/css"

// const Day14 = () => {
//   return (
//     <Swiper
//       slidesPerView={3}
//       spaceBetween={20}
//     >
//       <SwiperSlide>
//         <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" height={300} className='w-100' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" height={300} className='w-100' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" height={300} className='w-100' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" height={300} className='w-100' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" height={300} className='w-100' />
//       </SwiperSlide>
//     </Swiper>
//   )
// }

// export default Day14


// Swiper with Navigation

// import React from 'react'
// import {Swiper, SwiperSlide} from "swiper/react"
// import {Navigation} from "swiper/modules"

// import "swiper/css"
// import "swiper/css/navigation"

// const Day14 = () => {
//   return (
//     <Swiper
//       slidesPerView={3}
//       spaceBetween={20}
//       modules={[Navigation]}
//       navigation
//     >
//       <SwiperSlide>
//         <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" height={300} className='w-100' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" height={300} className='w-100' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" height={300} className='w-100' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" height={300} className='w-100' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" height={300} className='w-100' />
//       </SwiperSlide>
//     </Swiper>
//   )
// }

// export default Day14


// Swiper with Navigation , Pagination

// import React from 'react'
// import {Swiper, SwiperSlide} from "swiper/react"
// import {Navigation, Pagination} from "swiper/modules"

// import "swiper/css"
// import "swiper/css/navigation"
// import "swiper/css/pagination"

// const Day14 = () => {
//   return (
//     <Swiper
//       slidesPerView={3}
//       spaceBetween={20}
//       modules={[Navigation , Pagination]}
//       navigation
//       pagination={{clickable: true}}
//     >
//       <SwiperSlide>
//         <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" height={300} className='w-100' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" height={300} className='w-100' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" height={300} className='w-100' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" height={300} className='w-100' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" height={300} className='w-100' />
//       </SwiperSlide>
//     </Swiper>
//   )
// }

// export default Day14


// Swiper with Navigation , Pagination , Autoplay

// import React from 'react'
// import {Swiper, SwiperSlide} from "swiper/react"
// import {Autoplay, Navigation, Pagination} from "swiper/modules"

// import "swiper/css"
// import "swiper/css/navigation"
// import "swiper/css/pagination"

// const Day14 = () => {
//   return (
//     <Swiper
//       slidesPerView={3}
//       spaceBetween={20}
//       modules={[Navigation , Pagination , Autoplay]}
//       navigation
//       pagination={{clickable : true}}
//       autoplay={{delay : 2000}}
//       speed={1000}
//       loop={true}
//     >
//       <SwiperSlide>
//         <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" height={300} className='w-100' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" height={300} className='w-100' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" height={300} className='w-100' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" height={300} className='w-100' />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" height={300} className='w-100' />
//       </SwiperSlide>
//     </Swiper>
//   )
// }

// export default Day14