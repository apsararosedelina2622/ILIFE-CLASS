// import {Table} from 'react-bootstrap';

// function Day9() {
//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Username</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td>@mdo</td>
//         </tr>
//         <tr>
//           <td>2</td>
//           <td>Jacob</td>
//           <td>Thornton</td>
//           <td>@fat</td>
//         </tr>
//         <tr>
//           <td>3</td>
//           <td colSpan={2}>Larry the Bird</td>
//           <td>@twitter</td>
//         </tr>
//       </tbody>
//     </Table>
//   );
// }

// export default Day9;



// use Reducer

import React, { useReducer, useState } from 'react'

const Day9 = () => {

    // const [count , setCount] = useState(0)

    function reducerFun(){
        return "reducer Function"
    }

    const [state , dispatch] = useReducer(reducerFun , {count : 1})

    // console.log(state)
    // console.log(state.count)

    const Inc = () => {
        // setCount(count + 1)
        dispatch()
    }

    const Dec = () => {
        // setCount(count - 1)
    }

  return (
    <>
        <button onClick={Inc}>Add</button>
        <button onClick={Dec}>Remove</button>
        <h1></h1>
    </>
  )
}

export default Day9