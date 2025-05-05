// import React, { useState } from 'react'
// import Modal from 'react-bootstrap/Modal';

// const Day13 = () => {

//     const [input , setInput] = useState("")
//     const [list , setList] = useState([])
//     const [showModal , setShowModal] = useState(false)
//     const [viewList , setViewList] = useState("")
//     const [edit , setEdit] = useState("")
//     const [editText , setEditText] = useState("")

//     const AddFun = () => {
//         if(input.length === 0){
//             alert("Add list!")
//         }else{
//             setList(list.concat(input))
//             setInput("")
//         }
//     }

//     const DeleteFun = (index) => {
//         if(window.confirm("Are you sure want to delete?")){
//             setList(list.filter((a , i) => i !== index))
//         }
//     }

//     const handleClose = () => {
//         setShowModal(false)
//     }

//     const ViewFun = (value) => {
//         setShowModal(true)
//         setViewList(value)
//     }

//     const EditFun = (index) => {
//         setEdit(index)
//         setEditText(list[index])
//     }

//     const UpdateFun = () => {
//         const updatedValue = list.map((value , index) => index === edit ? editText : value)
//         setList(updatedValue)
//         setEdit("")
//     }

//   return (
//     <>
//         <div className="container p-5">
//             <div className="row mb-5">
//                 <div className="col-8">
//                     <input type="text" value={input} onChange={e => setInput(e.target.value)} className="form-control" />
//                 </div>
//                 <div className="col-4">
//                     <button className="btn btn-primary w-100" onClick={AddFun}>Add</button>
//                 </div>
//             </div>

//             {list.length === 0 ?
//                 (
//                     <p className='text-center'>Empty List!</p>
//                 ) : (
//                     <table className='table table-bordered'>
//                         <thead>
//                             <tr>
//                                 <th>List</th> 
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {list.map((value , index) => {
//                                 return(
//                                     <tr key={index}>
//                                         <td>
//                                             {edit === index ? (
//                                                 <input type='text' value={editText} onChange={e => setEditText(e.target.value)} className='form-control' />
//                                             ) : (
//                                                 value
//                                             )}
//                                         </td>
//                                         <td className='d-flex gap-3'>
//                                             <button className='btn btn-success w-100' onClick={() => ViewFun(value)}>View</button>
//                                             {edit === index ? (
//                                                 <button className='btn btn-warning w-100' onClick={UpdateFun}>Update</button>
//                                             ) : (
//                                                 <button className='btn btn-warning w-100' onClick={() => EditFun(index)}>Edit</button>
//                                             )}
//                                             <button className='btn btn-danger w-100' onClick={() => DeleteFun(index)}>Delete</button>
//                                         </td>
//                                     </tr>
//                                 )
//                             })}
//                         </tbody>
//                     </table>
//                 )    
//             }

//             <Modal show={showModal}>
//                 <Modal.Header closeButton onHide={handleClose}>
//                     <h4>Your Task</h4>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <h5 className='text-center'>Task : {viewList}</h5>
//                 </Modal.Body>
//             </Modal>
            
//         </div>
//     </>
//   )
// }

// export default Day13



import React, { useState } from 'react'
import {Modal} from "react-bootstrap"

const Day13 = () => {

    const [input , setInput] = useState("")
    const [list , setList] = useState([])
    const [showModal , setShowModal] = useState(false)
    const [viewText , setViewText] = useState("")
    const [edit , setEdit] = useState("")
    const [editText , setEditText] = useState("")

    const AddFun = () => {
        if(input.length === 0){
            alert("Add list!")
        }else{
            setList(list.concat(input))
            setInput("")
        }
    }

    const DeleteFun = (index) => {
        if(window.confirm("Areyou sure want to delete?")){
            setList(list.filter((a , i) => i !== index))
        }
    }

    const ViewFun = (value) => {
        setShowModal(true)
        setViewText(value)
    }

    const EditFun = (index) => {
        setEdit(index)
        setEditText(list[index])
    }

    const UpdateFun= () => {
        const updatedValue = list.map((value , index) => index === edit ? editText : value)
        setList(updatedValue)
        setEdit("")
    }

  return (
    <>
        <div className="container p-5">
            <div className="input-group">
                <input type="text" className="form-control" value={input} onChange={e => setInput(e.target.value)} />
                <button className='btn btn-primary' onClick={AddFun}>Add</button>
            </div>

            {list.length === 0 ? (
                <p className='my-5 text-center'>Empty List!</p>
            ) : (
                <table className="table table-bordered align-middle text-center mt-5">
                    <thead>
                        <tr>
                            <th>List</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((value , index) => {
                            return(
                                <tr key={index}>
                                    <td>
                                        {edit === index ? (
                                            <input type='text' value={editText} className='form-control' onChange={e => setEditText(e.target.value)} />
                                        ) : (
                                            value
                                        )}
                                    </td>
                                    <td className='d-flex gap-3'>
                                        <button className='btn btn-success w-100' onClick={() => ViewFun(value)}>View</button>
                                        {edit === index ? (
                                            <button className='btn btn-warning w-100' onClick={UpdateFun}>Update</button>
                                        ) : (
                                            <button className='btn btn-warning w-100' onClick={() => EditFun(index)}>Edit</button>
                                        )}
                                        <button className='btn btn-danger w-100' onClick={() => DeleteFun(index)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )}

            <Modal show={showModal}>
                <Modal.Header closeButton onHide={() => setShowModal(false)}>
                    <h3>List Item</h3>
                </Modal.Header>
                <Modal.Body>
                    <h5 className='text-center'>List Item : {viewText}</h5>
                </Modal.Body>
            </Modal>

        </div>
    </>
  )
}

export default Day13