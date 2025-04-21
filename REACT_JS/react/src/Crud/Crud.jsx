import React, { useState } from 'react'

const Practice = () => {

    const [input, setInput] = useState('')
    const [list, setList] = useState([])
    const [editText, setEditText] = useState('')
    const [edit, setEdit] = useState(null)

    const Add = () => {
        setList(prev => [...prev, input])
        setInput('')
    }

    const Delete = (index) => {
        if(window.confirm('Are You Sure Want To Delete?')){
            setList(list.filter((a,i) => i !== index))
        }
    }

    const Edit = (index) => {
        setEdit(index)
        setEditText(list[index])
    }

    const Update = () => {
        const update = list.map((value,i) => (i === edit ? editText : value))
        setList(update);
        setEdit(null)
        setEditText('')
    }

  return (
    <div>
        <div className="container">
            <input type="text" className='form-control' value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={Add}>Add</button>
        </div>
        <p>{list.map((value,index) => {
            return(
                <table>
                    <tr>
                        {edit === index ? (
                            <input type='text' value={editText} onChange={e => setEditText(e.target.value)} />
                        ) : (
                            <td>{value}</td>
                        )}
                        <td>
                            {edit === index ? (
                                <button onClick={Update}>Update</button>
                            ) : (
                                <button onClick={() => Edit(index)}>Edit</button>
                            )}
                        </td>
                        <td><button onClick={() => Delete(index)}>Delete</button></td>
                    </tr>
                </table>
            )
        })}</p>

    </div>
  )
}

export default Practice