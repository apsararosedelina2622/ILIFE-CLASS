import React from 'react'
import Props2 from './Props2'

const Props1 = () => {

  // var name = "USER"

  // var obj = {
  //   name : "Abi" , 
  //   age : 21
  // }

  // var arr = [ "HTML" , "CSS" , "BOOTSTRAP" , "JS" , "REACT" ]

  var data = [
    {
      name : "Banu" , 
      age : 21 , 
      place : "Trichy"
    } , 
    {
      name : "Begum" , 
      age : 22 , 
      place : "Chennai"
    } , 
    {
      name : "Abi" , 
      age : 23 , 
      place : "Madurai"
    } 
  ]

  return (
    <>
      {/* <h1>User name : {name}</h1> */}
      {/* <Props2 username="USER" /> */}
      {/* <Props2 username={name} /> */}
      {/* <Props2 data={obj} /> */}
      {/* <Props2 arr_data={arr} /> */}
      <Props2 json_data={data} />
    </>
  )
}

export default Props1