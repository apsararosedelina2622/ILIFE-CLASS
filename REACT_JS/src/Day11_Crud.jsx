import React, { useState } from 'react'

const Day11_Crud = () => {

    const [ input , setInput ] = useState("")
    const [ list , setList ] = useState([])
    const [ viewText , setViewText ] = useState("")
    const [ edit , setEdit ] = useState("")
    const [ editText , setEditText ] = useState("")

    const AddFun = () => {
        setList(list.concat(input))
        setInput("")
    }

    const RemoveFun = (index) => {
        if(confirm("Are you sure want to delete?")){
            setList(list.filter((a , i) => i !== index))
        }
    }

    const ViewFun = (value) => {
        setViewText(value)
    }

    const EditFun = (index) => {
        setEdit(index)
        setEditText(list[index])
    }

    const UpdateFun = () => {
        setList(list.map((a , i) => edit === i ? editText : a))
        setEdit("")
    }

  return (
    <>
        <div className="container my-5">
            <h4>To do List</h4>

            <div className="input-group">
                <input type="text" className='form-control' value={input} onChange={e => setInput(e.target.value)} />
                <button className='btn btn-primary' onClick={AddFun}>Add</button>
            </div>

            {
                list.length === 0
                ?
                    <p className='my-5 text-center'>Your list is Empty!</p>
                :
                    <table className='table table-bordered my-5'>
                        <thead>
                            <tr>
                                <th>List</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list.map((value , index) => {
                                    return(
                                        <tr key={index}>
                                            <td>
                                                {
                                                    edit === index 
                                                    ?
                                                        <input type='text' value={editText} className='form-control' onChange={e => setEditText(e.target.value)} />
                                                    :
                                                        value
                                                }
                                            </td>
                                            <td className='d-flex gap-5'>
                                                <button className='btn btn-success flex-grow-1' onClick={() => ViewFun(value)} data-bs-toggle="modal" data-bs-target="#mymodal">View</button>

                                                {
                                                    edit === index 
                                                    ?
                                                        <button className='btn btn-warning flex-grow-1' onClick={UpdateFun}>Update</button>
                                                    :
                                                        <button className='btn btn-warning flex-grow-1' onClick={() => EditFun(index)}>Edit</button>
                                                }

                                                <button className='btn btn-danger flex-grow-1' onClick={() => RemoveFun(index)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
            }

            <div className="modal fade" id='mymodal'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4>Your List Item</h4>
                            <button className='btn-close' data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <h5 className='text-center'>{viewText}</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Day11_Crud