import React from 'react'
import { useState } from 'react'

const Day6_Crud = () => {

    var [ input , setInput ] = useState("")
    var [ list , setList ] = useState([])
    var [ viewText , setViewText ] = useState("")
    var [ edit , setEdit ] = useState("")
    var [ editText , setEditText ] = useState("")

    var AddFun = () => {
        setList(list.concat(input))
        setInput("")
    }

    var ViewFun = (value) => {
        setViewText(value)
    }

    var DeleteFun = (index) => {
        if(confirm("Are you sure want to delete?")){
            setList(list.filter((a , i) => index !== i))
        }
    }

    var EditFun = (index) => {
        setEdit(index)
        setEditText(list[index])
    }

    var UpdateFun = () => {
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
                    <p className='text-center my-5'>Your List is Empty!</p>
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
                                                <button className='btn btn-success w-100' data-bs-toggle="modal" data-bs-target="#mymodal" onClick={() => ViewFun(value)}>View</button>

                                                {
                                                    edit === index
                                                    ?
                                                        <button className='btn btn-warning w-100' onClick={UpdateFun}>Update</button>
                                                    :
                                                        <button className='btn btn-warning w-100' onClick={() => EditFun(index)}>Edit</button>
                                                }

                                                <button className='btn btn-danger w-100' onClick={() => DeleteFun(index)}>Delete</button>
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
                            <h4>List Item</h4>
                            <button className='btn-close' data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <h6 className='text-center'>{viewText}</h6>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Day6_Crud