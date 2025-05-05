import React, { useState } from 'react'

const Day12 = () => {

    const [input , setInput] = useState("")
    const [list , setList] = useState([])

    const AddFun = () => {
        setList(list.concat(input))
    }

  return (
    <>
        <div className="container p-5">
            <h2>To do List</h2>
            <div className="input-group">
                <input type="text" className='form-control' onChange={e => setInput(e.target.value)} />
                <button className='btn btn-primary'onClick={AddFun}>Add</button>
            </div>

            {/* <h1>{input}</h1> */}

            <table className="table table-bordered">
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
                                <td>{value}</td>
                                <td>
                                    <button className='btn btn-success'>View</button>
                                    <button className='btn btn-warning'>Edit</button>
                                    <button className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    </>
  )
}

export default Day12