// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// // import tae from '../img/tae.png'

// const Form = () => {

//     const nav = useNavigate();

//     const [data,setData] = useState({
//         name : '',
//         age : '',
//         pwd : ''
//     })

//     // const [img,setImg] = useState(tae)

//     // const [res,setres] = useState (false)

//     const Fun = (e) => {
//         const {name,value} = e.target;
//         // console.log(name + '--' + value);
//         setData((e)=>{
//             return{
//                 ...e,[name] :value
//             }
//         })
//     }

//     const submit = (e) => {
//         e.preventDefault();       
//         nav('/submit',{state :{myData : data}}) 
//     }

//   return (
         
//         <div className="container m-5">

//             <form onSubmit={submit}>

//                 <input onChange={Fun} value={data.name} name='name' type="text" /><br /><br />
//                 <input onChange={Fun} value={data.age} name='age' type="number" /><br /><br />
//                 <input onChange={Fun} value={data.pwd} name='pwd' type="password" /><br /><br />

//                 {/* <input name='profile' type="file" id='img' hidden onChange={(e)=>{setImg(URL.createObjectURL(e.target.files[0]))}}/>
//                 <label htmlFor="img">
//                     <img src={tae} alt="" height={200} width={200} />
//                 </label><br /><br /> */}

//                 <input type="submit" />

//             </form>

//         </div>
//   )
// }

// export default Form











// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function FormPage() {
//   const [name, setName] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate("/submit", { state: { userName: name } });
//   };

//   return (
//     <div>
//       <h2>Enter Your Name</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter your name"
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Form = () => {
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password === "12345") { // Correct Password
//       navigate("/welcome", { state: { userPassword: password } });
//     } else {
//       setError("Incorrect Password! Try again.");
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="password"
//           placeholder="Enter Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Submit</button>
//       </form>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default Form;



// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const Form = () => {

//     const [name, setName] = useState('')
//     const [pwd, setPwd] = useState('')
//     const [error, setError] = useState('')
//     const nav = useNavigate()

//     const Submit = (e) => {
//         e.preventDefault()
//         if(name === "User" && pwd === "123"){
//             nav('/welcome' , {state : {username : name, password : pwd}})
//         }else{
//             setError("Error")
//         }
//     }

//     localStorage.setItem("username" , name)

//   return (
//     <div>
//         <form onSubmit={Submit}>
//             <input type="text" value={name} onChange={e => setName(e.target.value)} />
//             <input type="text" value={pwd} onChange={e => setPwd(e.target.value)} />
//             <button type='submit'>Submit</button>
//         </form>
//         <p>{error}</p>
//     </div>
//   )
// }

// export default Form


import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {

    const [name , setName] = useState('')
    const [pwd , setPwd] = useState('')
    const [error , setError] = useState('')

    const nav = useNavigate()

    const Submit = (e) => {
        e.preventDefault()
        if(name === "User" && pwd === "123"){
            nav('/submit' , {state : {username : name , password : pwd } })
        }else{
            setError("Check your Username & Password")
        }
    }

    localStorage.setItem("username" , name)

  return (
    <div className='container'>
        <form action="" onSubmit={Submit}>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Enter Username...' className='form-control' />
            <input type="text" value={pwd} onChange={e => setPwd(e.target.value)} placeholder='Enter Password...' className='form-control' />
            <button type='submit' className='btn btn-primary'>Submit</button>
            {/* <p>{name}</p> */}
            <p className='text-danger'>{error}</p>
        </form>
    </div>
  )
}

export default Form