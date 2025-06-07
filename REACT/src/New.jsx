// import React, { useState } from 'react'

// const New = () => {

//   const [ input , setInput ] = useState("")
//   const [ list , setList ] = useState([])
//   const [ viewText , setViewText ] = useState("")
//   const [ edit , setEdit ] = useState("")
//   const [ editText , setEditText ] = useState("")

//   const AddFun = () => {
//     setList(list.concat(input))
//     setInput("")
//   }

//   const ViewFun = (value) => {
//     setViewText(value)
//   }

//   const RemoveFun = (index) => {
//     if(confirm("Are you sure want to delete?")){
//       setList(list.filter((value , i) => index !== i))
//     }
//   }

//   const EditFun = (index) => {
//     setEdit(index)
//     setEditText(list[index])
//   }

//   // 0 , 1 , 2 = i
//   // index = 1

//   // 1 !== 0
//   // 1 !== 1
//   // 1 !== 2

//   const UpdateFun = () => {
//     setList(list.map((value , index) => index === edit ? editText : value))
//     setEdit("")
//   }
  
//   return (
//     <>
//       <div className="container p-5">

//         <h4>To Do List</h4>
//         <div className="input-group">
//           <input type="text" className='form-control' value={input} onChange={e => setInput(e.target.value)} />
//           <button className='btn btn-primary' onClick={AddFun}>Add</button>
//         </div>

//         {
//           list.length === 0
//           ?
//             <p className='text-center text-danger my-5'>Your List is Empty!</p>
//           :
//             <table className='table table-bordered my-5'>
//               <thead>
//                 <tr>
//                   <th>List</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {
//                   list.map((value , index) => {
//                     return(
//                       <tr key={index}>
//                         <td>
//                           {
//                             edit === index 
//                             ?
//                               <input type='text' className='form-control' value={editText} onChange={e => setEditText(e.target.value)} />
//                             :
//                               value
//                           }
//                         </td>
//                         <td className='d-flex gap-5'>
//                           <button className='btn btn-success flex-grow-1' data-bs-toggle="modal" data-bs-target="#mymodal" onClick={()=> ViewFun(value)}>View</button>

//                           {
//                             edit === index 
//                             ?
//                               <button className='btn btn-warning flex-grow-1' onClick={UpdateFun}>Update</button>
//                             :
//                               <button className='btn btn-warning flex-grow-1' onClick={() => EditFun(index)}>Edit</button>
//                           }

//                           <button className='btn btn-danger flex-grow-1' onClick={() => RemoveFun(index)}>Remove</button>
//                         </td>
//                       </tr>
//                     )
//                   })
//                 }
//               </tbody>
//             </table>
//           }

//           <div className="modal fade" id='mymodal'>
//             <div className="modal-dialog">
//               <div className="modal-content">
//                 <div className="modal-header">
//                   <h4>List Item</h4>
//                   <button className='btn-close' data-bs-dismiss="modal"></button>
//                 </div>
//                 <div className="modal-body">
//                   <h5 className='text-center'>{viewText}</h5>
//                 </div>
//               </div>
//             </div>
//           </div>

//       </div>
//     </>
//   )
// }

// export default New





import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const New = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      modules={[Navigation , Pagination]}
      navigation
      pagination={{clickable : true}}
    >
      <SwiperSlide>
        <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" height={300} className='w-100' />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" height={300} className='w-100' />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" height={300} className='w-100' />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" height={300} className='w-100' />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" height={300} className='w-100' />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" height={300} className='w-100' />
      </SwiperSlide>
    </Swiper>
  )
}

export default New