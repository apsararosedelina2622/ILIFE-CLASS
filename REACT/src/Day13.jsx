// import React, { useState } from 'react'

// const Day13 = () => {

//     const [input, setInput] = useState('')
//     const [list, setList] = useState([])
//     const [editText, setEditText] = useState('')
//     const [edit, setEdit] = useState(null)

//     const Add = () => {
//         setList(prev => [...prev, input])
//         setInput('')
//     }

//     const Delete = (index) => {
//         if(window.confirm('Are You Sure Want To Delete?')){
//             setList(list.filter((a,i) => i !== index))
//         }
//     }

//     const Edit = (index) => {
//         setEdit(index)
//         setEditText(list[index])
//     }

//     const Update = () => {
//         const update = list.map((value,i) => (i === edit ? editText : value))
//         setList(update);
//         setEdit(null)
//         setEditText('')
//     }

//   return (
//     <div>
//         <div className="container">
//             <input type="text" className='form-control' value={input} onChange={e => setInput(e.target.value)} />
//             <button onClick={Add}>Add</button>
//         </div>
//         <p>{list.map((value,index) => {
//             return(
//                 <table>
//                     <tr>
//                         {edit === index ? (
//                             <input type='text' value={editText} onChange={e => setEditText(e.target.value)} />
//                         ) : (
//                             <td>{value}</td>
//                         )}
//                         <td>
//                             {edit === index ? (
//                                 <button onClick={Update}>Update</button>
//                             ) : (
//                                 <button onClick={() => Edit(index)}>Edit</button>
//                             )}
//                         </td>
//                         <td><button onClick={() => Delete(index)}>Delete</button></td>
//                     </tr>
//                 </table>
//             )
//         })}</p>

//     </div>
//   )
// }

// export default Day13



import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';

const Day13 = () => {

    const [input , setInput] = useState("")
    const [list , setList] = useState([])

    const AddFun = () => {
        setList(list.concat( input))
        // setList([...list , input])
        setInput("")
    }

    const DeleteFun = (i) => {
        if(window.confirm("Are you sure want to delete this?")){
            setList(list.filter((value , index) => index !== i ))
        }
    }

  return (
    <>
        <div className="container p-5">
            <div className="row mb-5">
                <div className="col-8">
                    <input type="text" className='form-control' value={input} onChange={e => setInput(e.target.value)} />
                </div>
                <div className="col-4">
                    <button onClick={AddFun} className='btn btn-primary w-100'>Add</button>
                </div>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>List</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {list.map((value , index) => {
                    return(
                        <tbody key={index}>
                            <tr>
                                <td>{value}</td>
                                <td><button className='btn btn-warning w-100'>Edit</button></td>
                                <td><button onClick={() => DeleteFun(index)} className='btn btn-danger w-100'>Delete</button></td>
                            </tr>
                        </tbody>
                    )
                })}
            </Table>
        </div>
    </>
  )
}

export default Day13