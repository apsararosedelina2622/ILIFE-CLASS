// import React from 'react'
// import { useLocation } from 'react-router-dom'

// const FormValue = () => {

//     const res = useLocation();
//     const { name,age,pwd } = res.state.myData;

//   return (
//     <div>
//         <h2> Name : {name}</h2>
//         <h2> Age : {age}</h2>
//         <h2> Password : {pwd}</h2>
//     </div>
//   )
// }

// export default FormValue





// import { useLocation } from "react-router-dom";

// export default function NextPage() {
//   const location = useLocation();
//   const { userName } = location.state;

//   return (
//     <div>
//       <h2>Welcome, {userName ? userName : "Guest"}!</h2>
//     </div>
//   );
// }



// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const FormValue = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
  
//   // If accessed without correct password, redirect to login
//   if (!location.state || location.state.userPassword !== "12345") {
//     navigate("/");
//     return null;
//   }

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Welcome to the Page!</h2>
//       <p>You have successfully logged in.</p>
//     </div>
//   );
// };

// export default FormValue;



// import React from 'react'
// import { useLocation } from 'react-router-dom'

// const FormValue = () => {

//   const location = useLocation()
//   const {username , password} = location.state

//   return (
//     <div>
//       <h1>Welcome! {username} {password}</h1>
//     </div>
//   )
// }

// export default FormValue



import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const FormValue = () => {

  const location = useLocation()
  
  const { username, password } = location.state;

  return (
    <div>Welcome! to this page...
      <p>Username : {username}</p>
      <p>Password : {password}</p>
      <Link to={'/home'}><button className='btn btn-success'>Go to Home</button></Link>
    </div>
  )
}

export default FormValue